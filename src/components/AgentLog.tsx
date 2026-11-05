"use client";

import { useEffect, useState } from "react";

type Line = { who: "trigger" | "agent" | "you" | "done"; text: string; wait?: number };

const LINES: Line[] = [
  { who: "trigger", text: "New enquiry via website form" },
  { who: "agent", text: "Read enquiry → intent: quote request" },
  { who: "agent", text: "Checked calendar → 3 open slots" },
  { who: "agent", text: "Drafted reply with price + times" },
  { who: "you", text: "Approve draft?", wait: 2200 },
  { who: "done", text: "Sent · CRM updated · follow-up set" },
];

const STEP_MS = 900;
const HOLD_MS = 3500;

const label: Record<Line["who"], string> = {
  trigger: "TRIGGER",
  agent: "AGENT",
  you: "YOU",
  done: "DONE",
};

export function AgentLog() {
  // step = number of lines fully completed; the line at index `step` is in progress.
  const [step, setStep] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const t = setTimeout(() => setReduced(mq.matches), 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const current = LINES[step];
    const delay = step >= LINES.length ? HOLD_MS : (current.wait ?? STEP_MS);
    const t = setTimeout(() => setStep((s) => (s >= LINES.length ? 0 : s + 1)), delay);
    return () => clearTimeout(t);
  }, [step, reduced]);

  const shown = reduced ? LINES.length : step;

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[2rem] bg-signal/10 blur-3xl"
      />
      <figure
        className="relative overflow-hidden rounded-xl border border-line bg-surface"
        aria-label="Example: an AI agent handles a website enquiry, waits for a person to approve the reply, then sends it"
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-line" />
            <span className="size-2.5 rounded-full bg-line" />
            <span className="size-2.5 rounded-full bg-line" />
          </div>
          <span className="font-mono text-xs text-faint">enquiry-to-booking.agent</span>
          <span className="flex items-center gap-1.5 font-mono text-xs text-signal">
            <span className="size-1.5 rounded-full bg-signal" aria-hidden />
            live
          </span>
        </div>
        <ol className="space-y-1 p-4 font-mono text-[13px] sm:p-5" aria-live="off">
          {LINES.map((l, i) => {
            const done = i < shown;
            const active = i === shown;
            const hidden = i > shown;
            const waiting = l.who === "you" && active;
            const approved = l.who === "you" && done;
            return (
              <li
                key={i}
                className={`flex items-center gap-3 rounded-md px-2 py-2 transition-colors ${
                  hidden ? "opacity-0" : "opacity-100"
                } ${waiting ? "bg-amber/10" : ""}`}
              >
                <span
                  className={`w-[4.5rem] shrink-0 text-[11px] tracking-wider ${
                    l.who === "you" ? "text-amber" : l.who === "done" ? "text-signal" : "text-faint"
                  }`}
                >
                  {label[l.who]}
                </span>
                <span className={`flex-1 ${done ? "text-text" : "text-muted"}`}>
                  {approved ? "Approved by you ✓" : l.text}
                  {active && !waiting && <span className="cursor-blink ml-0.5 text-signal">▍</span>}
                </span>
                {waiting && (
                  <span className="hidden shrink-0 rounded border border-amber/40 px-2 py-0.5 text-[11px] text-amber sm:inline">
                    waiting for you
                  </span>
                )}
                {done && !approved && l.who !== "trigger" && (
                  <span className="shrink-0 text-signal" aria-hidden>
                    ✓
                  </span>
                )}
              </li>
            );
          })}
        </ol>
        <figcaption className="border-t border-line px-4 py-3 text-xs text-faint sm:px-5">
          Example of a typical first build. The agent does the busywork; a person approves.
        </figcaption>
      </figure>
    </div>
  );
}
