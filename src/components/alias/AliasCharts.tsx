import { aliasResearch } from "../../data/alias";

const VIZ = {
  green: "#DCEAD5",
  blue: "#D2E1F1",
  tan: "#E4D5BB",
  pink: "#E6D2DB",
  ink: "#1A1A1A",
  soft: "#4A4A4A",
};

const STYLES = aliasResearch.test2.styles;
const SCENARIOS = aliasResearch.test2.scenarios;

/**
 * Qualitative pattern from the written findings — not exact scores.
 * Emoji/pictogram reads clearest (and is most stimulating).
 * Traffic-sign convention wins for intention. Faces win for emotion.
 */
function cellLevel(
  kind: "clarity" | "stim",
  style: (typeof STYLES)[number],
  scenario: string,
): 1 | 2 | 3 | 4 {
  const emotion = scenario === "Frustration" || scenario === "Apology" || scenario === "Thanks";
  const intention =
    scenario === "Pay attention" || scenario === "Going now" || scenario === "Yielding";

  if (kind === "clarity") {
    if (style === "Emoji") return emotion ? 4 : 3;
    if (style === "Traffic sign") return intention ? 4 : 2;
    if (style === "Text") return 3;
    return 2;
  }

  if (style === "Emoji") return 4;
  if (style === "Abstract") return 3;
  if (style === "Traffic sign") return 2;
  return 1;
}

const CLARITY_FILL: Record<1 | 2 | 3 | 4, string> = {
  1: "#F3F1EC",
  2: VIZ.tan,
  3: VIZ.blue,
  4: VIZ.green,
};

const STIM_FILL: Record<1 | 2 | 3 | 4, string> = {
  1: "#F3F1EC",
  2: VIZ.tan,
  3: VIZ.pink,
  4: "#D4A5B3",
};

export function Test1Chart() {
  const rows = aliasResearch.test1.bars;

  return (
    <figure>
      <p className="alias-sr-only">{aliasResearch.test1.summary}</p>
      <div className="space-y-3">
        {rows.map((row) => (
          <div
            key={row.scenario}
            className="grid grid-cols-[minmax(0,9.5rem)_1fr] items-center gap-3"
          >
            <p className="alias-mono text-[11px] text-[var(--ink-soft)]">{row.scenario}</p>
            <div className="h-7 bg-[#f3f1ec]">
              <div
                className="h-full"
                style={{
                  width: row.highlight ? "86%" : "38%",
                  background: row.highlight ? VIZ.green : VIZ.tan,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <figcaption className="alias-caption mt-4">
        Relative need from Test 1 interviews — urban cross-vehicle moments stood out. Exact vote
        counts [PLACEHOLDER].
      </figcaption>
    </figure>
  );
}

function Heatmap({
  kind,
  title,
}: {
  kind: "clarity" | "stim";
  title: string;
}) {
  const fills = kind === "clarity" ? CLARITY_FILL : STIM_FILL;

  return (
    <figure>
      <p className="alias-mono mb-3 text-[11px] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
        {title}
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[320px] border-collapse text-left">
          <thead>
            <tr>
              <th className="alias-mono w-[7rem] pb-2 pr-2 text-[10px] font-medium text-[var(--ink-soft)]">
                {" "}
              </th>
              {STYLES.map((style) => (
                <th
                  key={style}
                  className="alias-mono pb-2 text-center text-[10px] font-medium text-[var(--ink-soft)]"
                >
                  {style}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SCENARIOS.map((scenario) => (
              <tr key={scenario}>
                <th className="alias-mono py-1 pr-2 text-[10px] font-normal text-[var(--ink-soft)]">
                  {scenario}
                </th>
                {STYLES.map((style) => {
                  const level = cellLevel(kind, style, scenario);
                  return (
                    <td key={style} className="p-0.5">
                      <div
                        className="h-8"
                        style={{ background: fills[level] }}
                        title={`${scenario} / ${style}: ${kind} pattern level ${level}`}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

export function Test2Heatmaps() {
  return (
    <div>
      <p className="alias-sr-only">{aliasResearch.test2.summary}</p>
      <div className="grid gap-8 md:grid-cols-2">
        <Heatmap kind="clarity" title="Clarity" />
        <Heatmap kind="stim" title="Visual stimulation" />
      </div>
      <p className="alias-caption mt-4">
        Pattern from the written findings, not exact cell scores. Darker = higher. [PLACEHOLDER:
        drop in deck numbers.]
      </p>
    </div>
  );
}

function DirectionMark({
  direction,
  invert = false,
}: {
  direction: "up" | "down" | "flat" | "unknown";
  invert?: boolean;
}) {
  if (direction === "unknown") {
    return <span className="alias-mono text-[10px] text-[var(--ink-soft)]">—</span>;
  }
  if (direction === "flat") {
    return <span className="alias-mono text-[10px] text-[var(--ink-soft)]">flat</span>;
  }
  const improved = invert ? direction === "down" : direction === "up";
  return (
    <span className="alias-mono text-[11px]" style={{ color: improved ? "#3F6B4A" : "#8A3B4A" }}>
      {direction === "up" ? "▲" : "▼"}
    </span>
  );
}

function MetricCell({
  label,
  cell,
  invert,
  fill,
  max,
}: {
  label: string;
  cell: { value: number | null; direction: "up" | "down" | "flat" | "unknown" };
  invert: boolean;
  fill: string;
  max: number;
}) {
  return (
    <div>
      <p className="alias-mono mb-1 text-[10px] uppercase text-[var(--ink-soft)] md:hidden">
        {label}
      </p>
      <div className="relative h-8 w-full bg-[#f3f1ec]">
        {cell.value != null && cell.value > 0 ? (
          <div
            className="absolute inset-y-0 left-0"
            style={{ width: `${(cell.value / max) * 100}%`, background: fill }}
          />
        ) : cell.value === 0 ? (
          <div className="absolute inset-y-1 left-1/2 w-px bg-[var(--ink-soft)]" />
        ) : (
          <div className="absolute inset-1 border border-dashed border-black/15" aria-hidden />
        )}
        <span className="absolute inset-0 z-[1] flex items-center justify-center alias-mono text-[10px] text-[var(--ink)]">
          {cell.value != null && cell.value !== 0 ? (
            cell.value > 0 ? `+${cell.value}` : cell.value
          ) : (
            <DirectionMark direction={cell.direction} invert={invert} />
          )}
        </span>
      </div>
    </div>
  );
}

export function Test3Chart() {
  const rows = aliasResearch.test3.rows;
  const max = 2.6;

  return (
    <figure>
      <p className="alias-sr-only">{aliasResearch.test3.summary}</p>
      <div className="mb-4 hidden grid-cols-[minmax(0,8.5rem)_1fr_1fr_1fr] gap-3 md:grid">
        <span />
        {["Clarity ▲", "Empathy ▲", "Aggression ▼"].map((label) => (
          <p
            key={label}
            className="alias-mono text-center text-[10px] uppercase tracking-[0.14em] text-[var(--ink-soft)]"
          >
            {label}
          </p>
        ))}
      </div>
      <div className="space-y-4">
        {rows.map((row) => (
          <div
            key={row.scenario}
            className="grid items-center gap-3 border-t border-black/5 pt-3 md:grid-cols-[minmax(0,8.5rem)_1fr_1fr_1fr]"
          >
            <p className="alias-mono text-[11px] text-[var(--ink)]">{row.scenario}</p>
            <MetricCell label="clarity" cell={row.clarity} invert={false} fill={VIZ.green} max={max} />
            <MetricCell label="empathy" cell={row.empathy} invert={false} fill={VIZ.blue} max={max} />
            <MetricCell
              label="aggression"
              cell={row.aggression}
              invert
              fill={VIZ.pink}
              max={max}
            />
          </div>
        ))}
      </div>
      <figcaption className="alias-caption mt-5">
        Green / blue = improved. Pink = worsened. Dashed cells are directions from the write-up, not
        exact scores. {aliasResearch.test3.scoresPlaceholder}
      </figcaption>
    </figure>
  );
}

export function SystemsMap() {
  return (
    <figure className="w-full">
      <p className="alias-sr-only">{aliasResearch.systems.summary}</p>
      <svg
        viewBox="0 0 720 280"
        className="h-auto w-full"
        role="img"
        aria-label="Clarity and empathy build safety; aggression erodes it."
      >
        <line
          className="alias-map-edge"
          x1="150"
          y1="70"
          x2="360"
          y2="140"
          stroke="#9BB89A"
          strokeWidth="2"
        />
        <line
          className="alias-map-edge"
          x1="570"
          y1="70"
          x2="360"
          y2="140"
          stroke="#9BB89A"
          strokeWidth="2"
        />
        <line
          className="alias-map-edge alias-map-edge-delay"
          x1="360"
          y1="230"
          x2="360"
          y2="168"
          stroke="#C49AA8"
          strokeWidth="2"
          strokeDasharray="6 6"
        />

        {[
          { x: 150, y: 52, label: "Clarity", delay: "0s" },
          { x: 570, y: 52, label: "Empathy", delay: "0.12s" },
          { x: 360, y: 140, label: "Safety", delay: "0.28s" },
          { x: 360, y: 248, label: "Aggression", delay: "0.4s" },
        ].map((node) => (
          <g key={node.label} className="alias-map-node" style={{ animationDelay: node.delay }}>
            <circle
              cx={node.x}
              cy={node.y}
              r="28"
              fill={
                node.label === "Safety"
                  ? VIZ.green
                  : node.label === "Aggression"
                    ? VIZ.pink
                    : VIZ.blue
              }
            />
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="11"
              fill={VIZ.ink}
            >
              {node.label}
            </text>
          </g>
        ))}

        <text x="255" y="95" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill={VIZ.soft}>
          build
        </text>
        <text x="430" y="95" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill={VIZ.soft}>
          build
        </text>
        <text x="378" y="210" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill={VIZ.soft}>
          erodes
        </text>
      </svg>
    </figure>
  );
}
