/**
 * Fixed backdrop for the whole page: a faint blueprint grid that fades out
 * towards the bottom of the viewport, two slow blue glows and a fine grain.
 * Pure CSS (see globals.css), so it costs nothing on the main thread.
 */
export function SiteBackground() {
  return (
    <div className="site-bg" aria-hidden="true">
      <div className="site-bg-glow site-bg-glow--a" />
      <div className="site-bg-glow site-bg-glow--b" />
      <div className="site-bg-grid" />
      <div className="site-bg-grain" />
    </div>
  );
}
