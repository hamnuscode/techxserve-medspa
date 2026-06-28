/**
 * Animated, on-brand hero backdrop. Soft sage/rose/champagne orbs drift and
 * breathe over a clean cream field, with a thin "topographic" line motif across
 * the middle and a few floating accent dots. Everything blurs out softly so there
 * is NO hard edge at the section boundary (the old bg-wash gradient caused that
 * seam — this replaces it). Purely decorative (aria-hidden); all motion is
 * disabled under prefers-reduced-motion. (brief §5: whitespace, thin rules, calm.)
 */
export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* drifting + breathing orbs */}
      <div className="absolute -left-28 top-4 size-80 rounded-full bg-sage-soft/30 blur-3xl animate-float-slow" />
      <div className="absolute -right-24 top-12 size-96 rounded-full bg-rose/30 blur-3xl animate-float-slower" />
      <div className="absolute left-1/2 top-[42%] size-72 -translate-x-1/2 rounded-full bg-champagne/15 blur-3xl animate-breathe" />
      <div className="absolute -left-10 top-[55%] size-64 rounded-full bg-sage-soft/20 blur-3xl animate-float-slower" />

      {/* thin flowing line motif spanning the hero */}
      <svg
        className="absolute inset-x-0 top-1/2 h-[120%] w-full -translate-y-1/2"
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-50 360 C 320 180, 560 180, 720 300 S 1140 460, 1490 240"
          stroke="rgb(var(--color-sage-soft) / 0.4)"
          strokeWidth="1"
        />
        <path
          d="M-50 420 C 300 300, 600 300, 760 380 S 1180 500, 1490 320"
          stroke="rgb(var(--color-champagne) / 0.35)"
          strokeWidth="1"
        />
      </svg>

      {/* floating accent dots */}
      <span className="absolute left-[15%] top-[28%] size-1.5 rounded-full bg-champagne/70 animate-float-slower" />
      <span className="absolute right-[17%] top-[24%] size-1.5 rounded-full bg-sage-deep/40 animate-float-slow" />
      <span className="absolute left-[30%] top-[60%] size-1 rounded-full bg-rose/70 animate-float-slow" />
      <span className="absolute right-[28%] top-[58%] size-1.5 rounded-full bg-champagne/60 animate-float-slower" />
    </div>
  );
}
