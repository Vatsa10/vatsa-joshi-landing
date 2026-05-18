const LAYERS = [4, 6, 7, 6, 4];
const COL_X = [110, 350, 600, 850, 1090];
const VB_W = 1200;
const VB_H = 240;
const PAD_Y = 26;

const yFor = (n: number, i: number) =>
  n === 1 ? VB_H / 2 : PAD_Y + ((VB_H - PAD_Y * 2) / (n - 1)) * i;

type Neuron = { x: number; y: number; li: number; i: number; key: string };
type Synapse = { x1: number; y1: number; x2: number; y2: number; key: string };

const NEURONS: Neuron[] = LAYERS.flatMap((n, li) =>
  Array.from({ length: n }, (_, i) => ({
    x: COL_X[li],
    y: yFor(n, i),
    li,
    i,
    key: `${li}-${i}`,
  }))
);

const SYNAPSES: Synapse[] = [];
for (let l = 0; l < LAYERS.length - 1; l++) {
  for (let i = 0; i < LAYERS[l]; i++) {
    for (let j = 0; j < LAYERS[l + 1]; j++) {
      SYNAPSES.push({
        x1: COL_X[l],
        y1: yFor(LAYERS[l], i),
        x2: COL_X[l + 1],
        y2: yFor(LAYERS[l + 1], j),
        key: `${l}-${i}-${j}`,
      });
    }
  }
}

const DRIFT_TOKENS = [
  "tok:[CLS]",
  "embed → 4096",
  "Q·Kᵀ / √d",
  "softmax",
  "head.7",
  "attn → 0.91",
  "ReLU",
  "layer.4 / 32",
  "logits",
  "▸ next-token",
  "kv-cache · hit",
  "▲ gradient",
];

const RAIN_COLS = 14;
const RAIN_TOKENS = [
  "the", "agent", "0x4f", "tok", "▸", "ctx", "qkv", "→",
  "λ", "∇", "softmax", "0.91", "head", "embed", "Σ",
  "▲", "rope", "kv", "layer", "0xff", "logit", "•",
  "norm", "ffn", "attn", "drop", "0.0", "1.0", "▽",
  "scale", "mask", "pos", "id:42", "0b1", "η", "μ",
];

function seed(i: number, j: number) {
  const n = (i * 9301 + j * 49297) % 233280;
  return n / 233280;
}

export default function HeroNeural() {
  return (
    <div className="hero-canvas neural" aria-hidden="true">
      <svg className="hc-grid" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <pattern id="hcDots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" opacity=".25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hcDots)" />
      </svg>

      <div className="nn-rain">
        {Array.from({ length: RAIN_COLS }, (_, c) => {
          const left = (c / RAIN_COLS) * 100 + (seed(c, 1) * 4 - 2);
          const dur = 6 + seed(c, 2) * 9;
          const delay = -seed(c, 3) * dur;
          return (
            <div
              key={c}
              className="rain-col"
              style={{
                left: `${left}%`,
                animationDuration: `${dur}s`,
                animationDelay: `${delay}s`,
              }}
            >
              {Array.from({ length: 14 }, (_, r) => {
                const tok = RAIN_TOKENS[Math.floor(seed(c, r + 10) * RAIN_TOKENS.length)];
                return (
                  <span
                    key={r}
                    className="rain-tok"
                    style={{ opacity: 0.15 + seed(c, r + 30) * 0.55 }}
                  >
                    {tok}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>

      <svg
        className="nn-net"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="nnGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {SYNAPSES.map((s, idx) => (
          <line
            key={s.key}
            className="syn"
            x1={s.x1}
            y1={s.y1}
            x2={s.x2}
            y2={s.y2}
            style={{ animationDelay: `${(idx * 137) % 5400}ms` }}
          />
        ))}

        {NEURONS.map((n, idx) => (
          <g key={n.key} className={`neu-g ${n.li === 0 ? "is-in" : n.li === LAYERS.length - 1 ? "is-out" : ""}`}>
            <circle
              className="neu-aura"
              cx={n.x}
              cy={n.y}
              r="14"
              style={{ animationDelay: `${(idx * 211) % 4200}ms` }}
            />
            <circle
              className="neu"
              cx={n.x}
              cy={n.y}
              r="6"
              style={{ animationDelay: `${(idx * 173) % 5000}ms` }}
            />
            <circle className="neu-core" cx={n.x} cy={n.y} r="2.2" />
          </g>
        ))}

        <g className="layer-labels">
          {["EMBED", "ATTN.1", "FFN", "ATTN.2", "OUT"].map((lbl, li) => (
            <text key={lbl} x={COL_X[li]} y={VB_H - 6} textAnchor="middle" className="layer-lbl">
              {lbl}
            </text>
          ))}
        </g>
      </svg>

      <div className="nn-chips">
        {DRIFT_TOKENS.map((t, i) => (
          <span
            key={t}
            className="nn-chip"
            style={{
              top: `${10 + seed(i, 7) * 78}%`,
              animationDuration: `${10 + seed(i, 8) * 12}s`,
              animationDelay: `${-seed(i, 9) * 18}s`,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="nn-attn" aria-hidden="true">
        <span className="nn-attn-lbl">attn · head.7</span>
        <div className="nn-attn-grid">
          {Array.from({ length: 36 }, (_, i) => (
            <span
              key={i}
              className="cell"
              style={{
                opacity: 0.12 + seed(i, 17) * 0.85,
                animationDelay: `${(i * 91) % 2800}ms`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="hc-corner tl">
        <span className="rec-dot" />NEURAL · STREAMING
      </div>
      <div className="hc-corner tr">vatsa-llm · forward-pass</div>
    </div>
  );
}
