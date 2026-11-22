import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/site";

/** A real, dated result we measured on our own work. */
export function ProofNote({ proof }: { proof: NonNullable<Service["proof"]> }) {
  return (
    <div className="mt-6 flex flex-col gap-3 rounded-lg border border-line bg-bg p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-3">
        <span className="mt-1.5 size-2 shrink-0 rounded-full bg-signal" aria-hidden />
        <p className="text-sm leading-relaxed">
          {proof.text}{" "}
          <span className="font-mono text-xs text-faint">{proof.date}</span>
        </p>
      </div>
      <a
        href={proof.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-1 rounded text-sm font-medium text-signal-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-ink"
      >
        {proof.cta} <ArrowUpRight className="size-4" aria-hidden />
      </a>
    </div>
  );
}
