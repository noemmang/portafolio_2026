import "./AmbientFX.css";

// Luciérnagas + plataformas flotantes, fijas respecto al viewport.
// Puramente decorativo (aria-hidden), no interactúa con el contenido.
const FIREFLIES = [
  { top: "8%", left: "88%", delay: "0s" },
  { top: "16%", left: "6%", delay: "1.4s" },
  { top: "34%", left: "94%", delay: "2.2s" },
  { top: "48%", left: "4%", delay: "0.6s" },
  { top: "62%", left: "90%", delay: "1.8s" },
  { top: "78%", left: "8%", delay: "2.6s" },
  { top: "90%", left: "72%", delay: "0.9s" },
];

const DIAMONDS = [
  { top: "12%", left: "10%", size: 20 },
  { top: "42%", left: "5%", size: 14, delay: "1s" },
  { top: "70%", left: "92%", size: 22, delay: "0.5s" },
  { top: "86%", left: "16%", size: 16, delay: "1.6s" },
];

export default function AmbientFX() {
  return (
    <div className="ambient-fx" aria-hidden="true">
      {FIREFLIES.map((f, i) => (
        <span
          key={`f-${i}`}
          className="ambient-fx__firefly"
          style={{ top: f.top, left: f.left, animationDelay: f.delay }}
        />
      ))}
      {DIAMONDS.map((d, i) => (
        <span
          key={`d-${i}`}
          className="ambient-fx__diamond"
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            animationDelay: d.delay || "0s",
          }}
        />
      ))}
    </div>
  );
}