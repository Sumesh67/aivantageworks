"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { CONTACT_EMAIL, type Service } from "@/lib/site";
import { ProofNote } from "./ProofNote";

const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-ink";

const WHO_LABEL = { trigger: "TRIGGER", agent: "AGENT", you: "YOU", done: "DONE" } as const;

function askHref(s: Service) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Question about: ${s.title}`)}&body=${encodeURIComponent(
    "Hi,\n\nOur business: \nWhat we'd like help with: \n",
  )}`;
}

/**
 * Home-page services: a numbered list (tabs) beside one large panel.
 * Every panel is server-rendered (inactive ones use `hidden`), so all
 * service copy stays in the HTML for search engines and no-JS visitors.
 */
export function ServiceExplorer({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  // Deep links like /#service-website-security open that service.
  useEffect(() => {
    const sync = () => {
      const i = services.findIndex((s) => window.location.hash === `#service-${s.slug}`);
      if (i >= 0) setActive(i);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [services]);

  function onKeyDown(e: React.KeyboardEvent, i: number) {
    const last = services.length - 1;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? (i === last ? 0 : i + 1)
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? (i === 0 ? last : i - 1)
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)] lg:gap-8">
      {/* Service list */}
      <div
        role="tablist"
        aria-label="Our services"
        aria-orientation="vertical"
        className="-mx-5 flex snap-x lg:self-start gap-2 overflow-x-auto px-5 pb-1 sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-y lg:border-line lg:px-0 lg:pb-0"
      >
        {services.map((s, i) => {
          const on = i === active;
          return (
            <button
              key={s.slug}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`service-${s.slug}`}
              aria-selected={on}
              aria-controls={`svc-panel-${s.slug}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`group relative flex min-h-11 shrink-0 scroll-mt-28 snap-start items-center gap-3 rounded-full border px-4 text-left transition-colors lg:rounded-none lg:border-0 lg:border-b lg:border-line lg:px-5 lg:py-5 lg:last:border-b-0 ${
                on
                  ? "border-text bg-text text-bg lg:bg-surface lg:text-text"
                  : "border-line text-muted hover:border-faint hover:text-text lg:hover:bg-surface/60"
              } ${focus}`}
            >
              {/* lime rail on the active row (desktop) */}
              <span
                aria-hidden
                className={`absolute inset-y-0 left-0 hidden w-1 lg:block ${on ? "bg-signal" : "bg-transparent"}`}
              />
              <span className={`font-mono text-xs ${on ? "lg:text-signal-ink" : "text-faint"}`}>0{i + 1}</span>
              <span className="min-w-0">
                <span className="block whitespace-nowrap text-sm font-medium lg:whitespace-normal lg:font-display lg:text-xl lg:font-semibold lg:tracking-[-0.02em]">
                  {s.title}
                </span>
                <span className="mt-1 hidden text-sm leading-snug text-muted lg:block">{s.summary}</span>
              </span>
              <ArrowRight
                aria-hidden
                className={`ml-auto hidden size-4 shrink-0 transition-all lg:block ${
                  on ? "text-signal-ink" : "text-faint opacity-0 group-hover:opacity-100"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Panels */}
      {services.map((s, i) => (
        <section
          key={s.slug}
          role="tabpanel"
          id={`svc-panel-${s.slug}`}
          aria-labelledby={`service-${s.slug}`}
          hidden={i !== active}
          className="rounded-xl border border-line bg-surface p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-xs uppercase tracking-[0.08em] text-signal-ink">
              {s.tag}
            </span>
            <span className="text-sm text-faint">{s.forWho}</span>
          </div>
          <h3 className="mt-5 font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05] font-semibold tracking-[-0.03em]">
            {s.title}
          </h3>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{s.body}</p>
          {s.proof && <ProofNote proof={s.proof} />}

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-faint">You get</p>
              <ul className="mt-4 space-y-3">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 size-4 shrink-0 text-signal-ink" aria-hidden />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <figure className="overflow-hidden rounded-lg border border-line bg-bg" aria-label={`Example run: ${s.title}`}>
              <figcaption className="border-b border-line px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
                Example run
              </figcaption>
              <ol className="space-y-0.5 p-3 font-mono text-[12.5px]">
                {s.example.map(([who, text]) => (
                  <li
                    key={text}
                    className={`flex gap-3 rounded px-2 py-1.5 ${who === "you" ? "bg-amber/10" : ""}`}
                  >
                    <span
                      className={`w-14 shrink-0 text-[10.5px] leading-[1.6] tracking-wider ${
                        who === "you" ? "text-amber-ink" : who === "done" ? "text-signal-ink" : "text-faint"
                      }`}
                    >
                      {WHO_LABEL[who]}
                    </span>
                    <span className={who === "trigger" ? "text-muted" : "text-text"}>{text}</span>
                  </li>
                ))}
              </ol>
            </figure>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
            <Link
              href={`/services#${s.slug}`}
              className={`inline-flex items-center gap-1 rounded text-sm font-medium text-signal-ink hover:underline ${focus}`}
            >
              Full details <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a href={askHref(s)} className={`rounded text-sm font-medium text-muted hover:text-text hover:underline ${focus}`}>
              Ask us about this
            </a>
          </div>
        </section>
      ))}
    </div>
  );
}
