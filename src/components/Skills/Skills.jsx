import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { skillNodes } from "../../data/portfolio";
import "./Skills.css";

const CATEGORY_COLORS = {
  frontend: "#FF6B6B",
  backend:  "#4ECDC4",
  tools:    "#FFD93D",
  root:     "#00e5ff",
};

const CATEGORY_BG = {
  frontend: "rgba(255,107,107,0.15)",
  backend:  "rgba(78,205,196,0.15)",
  tools:    "rgba(255,217,61,0.15)",
  root:     "rgba(0,229,255,0.18)",
};

const R      = 32;
const ROOT_R = 40;

// ── Single source of truth for node positions ─────────────────────────────
const POSITIONS = {
  root:       { x: 50, y: 88 },
  html:       { x: 35, y: 80 },
  css:        { x: 25, y: 70 },
  javascript: { x: 20, y: 55 },
  typescript: { x: 10,  y: 45 },
  angular:    { x: 0,  y: 25 },
  react:      { x: 15, y: 25 },
  nextjs:     { x: 25, y: 25 },
  nodejs:     { x: 30, y: 45 },
  express:    { x: 40, y: 25 },

  java:       { x: 65, y: 80 },
  php:        { x: 65, y: 65 },
  python:     { x: 55, y: 65 },
  laravel:    { x: 75, y: 50 },
  django:     { x: 60, y: 50 },
  springboot: { x: 75, y: 70 },

  git:        { x: 45, y: 110 },
  github:     { x: 35, y: 105 },
  docker:     { x: 40, y: 125 },
  aws:        { x: 35, y: 140 },
  mysql:      { x: 60, y: 110 },
  postgresql: { x: 65, y: 125 },
  mongodb:    { x: 70, y: 140 },
};

export default function Skills() {
  const sectionRef = useRef(null);
  const canvasRef  = useRef(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-80px" });

  const [tooltip, setTooltip] = useState(null);
  const [stats, setStats]     = useState({ frontend: 0, backend: 0, tools: 0 });

  // Pan / zoom
  const transform  = useRef({ x: 0, y: 0, scale: 1 });
  const dragging   = useRef(false);
  const dragStart  = useRef({ x: 0, y: 0 });

  // Hover state for breathing effect
  const hoveredId  = useRef(null);
  const breathTime = useRef(0);
  const animFrame  = useRef(null);

  // Image cache & draw fn ref
  const imgCache      = useRef({});
  const drawRef       = useRef(null);
  const posRef        = useRef({});
  const zoomStateRef  = useRef({ active: false });

  // ── Stats ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const counts = { frontend: 0, backend: 0, tools: 0 };
    skillNodes.forEach((n) => {
      if (n.done && counts[n.category] !== undefined) counts[n.category]++;
    });
    setStats(counts);
  }, []);

  // ── Main canvas effect ────────────────────────────────────────────────────
  useEffect(() => {
    if (!inView || !canvasRef.current) return;

    const canvas  = canvasRef.current;
    const ctx     = canvas.getContext("2d");
    const wrapper = canvas.parentElement;

    const FA_UNICODE = {
      "fa-brands fa-html5":        "\uf13b",
      "fa-brands fa-css3-alt":     "\uf38b",
      "fa-brands fa-js":           "\uf3b8",
      "fa-brands fa-angular":      "\uf420",
      "fa-brands fa-react":        "\uf41b",
      "fa-solid fa-wind":          "\uf72e",
      "fa-solid fa-t":             "TS",
      "fa-solid fa-n":             "NX",
      "fa-brands fa-java":         "\uf4e4",
      "fa-brands fa-php":          "\uf457",
      "fa-brands fa-python":       "\uf3e2",
      "fa-solid fa-l":             "L",
      "fa-brands fa-node-js":      "\uf3d3",
      "fa-solid fa-e":             "EX",
      "fa-solid fa-database":      "\uf1c0",
      "fa-solid fa-leaf":          "\uf06c",
      "fa-brands fa-git-alt":      "\uf841",
      "fa-brands fa-github":       "\uf09b",
      "fa-brands fa-docker":       "\uf395",
      "fa-brands fa-aws":          "\uf375",
      "fa-solid fa-arrows-rotate": "\uf2f1",
      "fa-solid fa-user":          "\uf007",
      "fa-solid fa-d":             "DJ",
    };

    const DEVICON_URL = {
      "devicon-css3-plain":             "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "devicon-tailwindcss-plain":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      "devicon-typescript-plain":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "devicon-nextjs-plain":           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "devicon-java-plain":             "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      "devicon-python-plain":           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "devicon-laravel-plain":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      "devicon-nodejs-plain":           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "devicon-mysql-plain":            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      "devicon-postgresql-plain":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      "devicon-mongodb-plain":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      "devicon-git-plain":              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      "devicon-github-original":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      "devicon-docker-plain":           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      "devicon-amazonwebservices-plain":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    };

    const loadImage = (url) => new Promise((res) => {
      if (imgCache.current[url]) return res(imgCache.current[url]);
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload  = () => { imgCache.current[url] = img; res(img); };
      img.onerror = () => res(null);
      img.src = url;
    });

    const FA_FONT  = "900 18px 'Font Awesome 6 Free'";
    const FAB_FONT = "400 18px 'Font Awesome 6 Brands'";

    // ── toPos uses raw canvas dimensions (before transform) ───────────────
    const toPos = (id) => {
      const p = POSITIONS[id];
      return {
        x: (p.x / 100) * canvas.width,
        y: (p.y / 100) * canvas.height,
      };
    };

    // ── Fit all nodes into view (auto-frame) ──────────────────────────────
    const fitToScreen = () => {
      const W = canvas.width;
      const H = canvas.height;
      const PAD = 64;

      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      skillNodes.forEach((n) => {
        const { x, y } = toPos(n.id);
        const r = n.id === "root" ? ROOT_R : R;
        minX = Math.min(minX, x - r);
        maxX = Math.max(maxX, x + r);
        minY = Math.min(minY, y - r);
        maxY = Math.max(maxY, y + r);
      });

      const treeW = maxX - minX;
      const treeH = maxY - minY;
      const scale = Math.min(
        (W - PAD * 2) / treeW,
        (H - PAD * 2) / treeH,
        1.2
      );

      const cx = (minX + maxX) / 2;
      const cy = (minY + maxY) / 2;

      transform.current = {
        x: W / 2 - cx * scale,
        y: H / 2 - cy * scale,
        scale,
      };
    };

    // ── Zoom easing state — shared via ref so handleReset can use it ─────
    const zoomState = zoomStateRef.current;

    // ── Draw ──────────────────────────────────────────────────────────────
    const draw = (timestamp = 0) => {
      // Advance zoom animation if active
      if (zoomState.active) {
        const p = Math.min((timestamp - zoomState.t0) / zoomState.duration, 1);
        const e = 1 - Math.pow(1 - p, 3);
        transform.current.scale = zoomState.startScale + (zoomState.endScale - zoomState.startScale) * e;
        transform.current.x     = zoomState.startX     + (zoomState.endX     - zoomState.startX)     * e;
        transform.current.y     = zoomState.startY     + (zoomState.endY     - zoomState.startY)     * e;
        if (p >= 1) zoomState.active = false;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(transform.current.x, transform.current.y);
      ctx.scale(transform.current.scale, transform.current.scale);

      breathTime.current = timestamp;

      // Store positions for hit-testing
      skillNodes.forEach((n) => {
        posRef.current[n.id] = toPos(n.id);
      });

      // ── 1. Draw connections FIRST (below nodes) ───────────────────────
      skillNodes.forEach((n) => {
        if (!n.parent) return;
        const from = toPos(n.id);
        const to   = toPos(n.parent);

        const color = n.done ? CATEGORY_COLORS[n.category] : "#1e2a3a";

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);

        const dx = to.x - from.x;
        const dy = to.y - from.y;
        ctx.bezierCurveTo(
          from.x + dx * 0.25, from.y + dy * 0.6,
          from.x + dx * 0.75, from.y + dy * 0.4,
          to.x, to.y
        );

        ctx.strokeStyle  = color;
        ctx.lineWidth    = 2.5;
        ctx.globalAlpha  = n.done ? 0.7 : 0.3;
        ctx.shadowColor  = n.done ? color : "transparent";
        ctx.shadowBlur   = n.done ? 8 : 0;
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.shadowBlur  = 0;
      });

      // ── 2. Draw nodes ON TOP of connections ──────────────────────────
      skillNodes.forEach((n) => {
        const { x, y } = toPos(n.id);
        const baseR  = n.id === "root" ? ROOT_R : R;
        const color  = CATEGORY_COLORS[n.category] || "#2a3050";
        const bg     = CATEGORY_BG[n.category]     || "rgba(26,31,58,0.9)";
        const isHov  = hoveredId.current === n.id;

        // ── Breathing / pulse animation ───────────────────────────────
        let breathScale = 1;
        let glowBlur    = 0;
        let glowAlpha   = 0;

        if (n.done) {
          const t = timestamp / 1000;
          if (isHov) {
            breathScale = 1 + Math.sin(t * 5) * 0.06;
            glowBlur    = 20 + Math.sin(t * 5) * 8;
            glowAlpha   = 0.6 + Math.sin(t * 5) * 0.15;
          } else {
            const offset = n.id.charCodeAt(0) * 0.4;
            breathScale = 1 + Math.sin(t * 1.4 + offset) * 0.025;
            glowBlur    = 12 + Math.sin(t * 1.4 + offset) * 6;
            glowAlpha   = 0.35 + Math.sin(t * 1.4 + offset) * 0.1;
          }
        }

        const r = baseR * breathScale;

        // Outer glow ring (breathing)
        if (n.done) {
          ctx.beginPath();
          ctx.arc(x, y, r + 4, 0, Math.PI * 2);
          ctx.strokeStyle = color;
          ctx.lineWidth   = isHov ? 2 : 1;
          ctx.globalAlpha = glowAlpha;
          ctx.shadowColor = color;
          ctx.shadowBlur  = glowBlur;
          ctx.stroke();
          ctx.globalAlpha = 1;
          ctx.shadowBlur  = 0;
        }

        // Circle fill — clear background first so branches don't show through
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.clip();
        ctx.clearRect(x - r - 2, y - r - 2, r * 2 + 4, r * 2 + 4);
        ctx.restore();

        // Circle fill
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = bg;
        if (n.done) {
          ctx.shadowColor = color;
          ctx.shadowBlur  = isHov ? 24 : 14;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Circle stroke
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.strokeStyle = n.done ? color : "#1e2a3a";
        ctx.lineWidth   = n.done ? (isHov ? 3 : 2.5) : 1.5;
        ctx.globalAlpha = n.done ? 1 : 0.35;
        ctx.stroke();
        ctx.globalAlpha = 1;

        // ── Icon (clipped inside circle so it never overflows) ────────
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, r - 2, 0, Math.PI * 2);
        ctx.clip();

        const deviconUrl = DEVICON_URL[n.icon];
        if (deviconUrl && imgCache.current[deviconUrl]) {
          const img  = imgCache.current[deviconUrl];
          const size = (r - 2) * 1.35;
          ctx.globalAlpha = n.done ? (isHov ? 1 : 0.9) : 0.3;
          ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
          ctx.globalAlpha = 1;
        } else if (!deviconUrl) {
          const isBrand = n.icon.startsWith("fa-brands");
          ctx.font         = isBrand ? FAB_FONT : FA_FONT;
          ctx.fillStyle    = n.done ? color : "#3d5a70";
          ctx.textAlign    = "center";
          ctx.textBaseline = "middle";
          ctx.globalAlpha  = n.done ? (isHov ? 1 : 0.9) : 0.35;
          const glyph = FA_UNICODE[n.icon];
          if (glyph && glyph.length === 1) {
            ctx.fillText(glyph, x, y);
          } else if (glyph) {
            ctx.font = `bold 11px 'Space Mono', monospace`;
            ctx.fillText(glyph, x, y);
          }
          ctx.globalAlpha = 1;
        }
        ctx.restore();

        // Label below node
        if (n.id !== "root") {
          ctx.font         = "10px 'Space Mono', monospace";
          ctx.fillStyle    = n.done ? (isHov ? color : "#7a9bb5") : "#2d3f50";
          ctx.textAlign    = "center";
          ctx.textBaseline = "top";
          ctx.globalAlpha  = n.done ? 1 : 0.5;
          ctx.fillText(n.label, x, y + r + 5);
          ctx.globalAlpha = 1;
        }
      });

      ctx.restore();
    };

    drawRef.current = draw;

    // ── Animation loop ────────────────────────────────────────────────────
    const loop = (ts) => {
      draw(ts);
      animFrame.current = requestAnimationFrame(loop);
    };

    // ── Resize ────────────────────────────────────────────────────────────
    const resize = (fit = false) => {
      canvas.width  = wrapper.clientWidth;
      canvas.height = wrapper.clientHeight;
      if (fit) fitToScreen();
      if (!animFrame.current) {
        animFrame.current = requestAnimationFrame(loop);
      }
    };

    // ── Smooth zoom ───────────────────────────────────────────────────────
    const smoothZoom = (targetScale, originX, originY) => {
      const startScale = transform.current.scale;
      const startX     = transform.current.x;
      const startY     = transform.current.y;
      const endScale   = Math.min(Math.max(targetScale, 0.3), 3);
      const wx = (originX - startX) / startScale;
      const wy = (originY - startY) / startScale;
      const endX = originX - wx * endScale;
      const endY = originY - wy * endScale;
      Object.assign(zoomState, {
        active: true,
        startScale, endScale,
        startX, endX,
        startY, endY,
        t0: performance.now(),
        duration: 180,
      });
    };

    // ── Events ────────────────────────────────────────────────────────────
    const getCanvasPoint = (e) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: (e.clientX - rect.left - transform.current.x) / transform.current.scale,
        y: (e.clientY - rect.top  - transform.current.y) / transform.current.scale,
        screenX: e.clientX - rect.left,
        screenY: e.clientY - rect.top,
      };
    };

    const onWheel = (e) => {
      e.preventDefault();
      const rect  = canvas.getBoundingClientRect();
      const ox    = e.clientX - rect.left;
      const oy    = e.clientY - rect.top;
      const delta = e.deltaY > 0 ? -0.12 : 0.12;
      smoothZoom(transform.current.scale + delta, ox, oy);
    };

    const onMouseDown = (e) => {
      dragging.current  = true;
      dragStart.current = { x: e.clientX - transform.current.x, y: e.clientY - transform.current.y };
      canvas.style.cursor = "grabbing";
    };

    const onMouseMove = (e) => {
      if (dragging.current) {
        transform.current.x = e.clientX - dragStart.current.x;
        transform.current.y = e.clientY - dragStart.current.y;
        return;
      }

      const pt = getCanvasPoint(e);
      let hovered = null;
      skillNodes.forEach((n) => {
        const pos = toPos(n.id);
        const r   = n.id === "root" ? ROOT_R : R;
        const dx  = pt.x - pos.x;
        const dy  = pt.y - pos.y;
        if (Math.sqrt(dx * dx + dy * dy) < r) hovered = n;
      });

      const prevHov = hoveredId.current;
      hoveredId.current = hovered ? hovered.id : null;

      canvas.style.cursor = hovered ? "pointer" : "grab";

      if (hovered) {
        const rect = canvas.getBoundingClientRect();
        setTooltip({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          name: hovered.label,
          category: hovered.category,
          done: hovered.done,
        });
      } else if (prevHov !== null) {
        setTooltip(null);
      }
    };

    const onMouseUp = () => {
      dragging.current    = false;
      canvas.style.cursor = "grab";
    };

    const onMouseLeave = () => {
      hoveredId.current = null;
      setTooltip(null);
    };

    canvas.addEventListener("wheel",      onWheel,      { passive: false });
    canvas.addEventListener("mousedown",  onMouseDown);
    canvas.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mousemove",  onMouseMove);
    window.addEventListener("mouseup",    onMouseUp);

    // ── Preload images → first draw with fit ──────────────────────────────
    const deviconUrls = [...new Set(
      skillNodes.map((n) => DEVICON_URL[n.icon]).filter(Boolean)
    )];

    Promise.all(deviconUrls.map(loadImage)).then(() => {
      resize(true);
    });

    const ro = new ResizeObserver(() => resize(false));
    ro.observe(wrapper);

    return () => {
      canvas.removeEventListener("wheel",      onWheel);
      canvas.removeEventListener("mousedown",  onMouseDown);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mousemove",  onMouseMove);
      window.removeEventListener("mouseup",    onMouseUp);
      ro.disconnect();
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [inView]);

  // ── Reset: fit to screen ─────────────────────────────────────────────────
  const handleReset = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const W = canvas.width;
    const H = canvas.height;
    const PAD = 64;

    const toPos = (id) => ({
      x: (POSITIONS[id].x / 100) * W,
      y: (POSITIONS[id].y / 100) * H,
    });

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    skillNodes.forEach((n) => {
      const { x, y } = toPos(n.id);
      const r = n.id === "root" ? ROOT_R : R;
      minX = Math.min(minX, x - r);
      maxX = Math.max(maxX, x + r);
      minY = Math.min(minY, y - r);
      maxY = Math.max(maxY, y + r);
    });

    const treeW = maxX - minX;
    const treeH = maxY - minY;
    const scale = Math.min(
      (W - PAD * 2) / treeW,
      (H - PAD * 2) / treeH,
      1.2
    );

    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;

    const endT = { x: W / 2 - cx * scale, y: H / 2 - cy * scale, scale };
    Object.assign(zoomStateRef.current, {
      active:     true,
      startScale: transform.current.scale,
      endScale:   endT.scale,
      startX:     transform.current.x,
      endX:       endT.x,
      startY:     transform.current.y,
      endY:       endT.y,
      t0:         performance.now(),
      duration:   400,
    });
  }, []);

  return (
    <section id="habilidades" className="skills section-pad">
      <div className="section-container" ref={sectionRef}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">// tech stack</p>
          <h2 className="section-title">
            <span className="neon-text">Habilidades</span>
          </h2>
        </motion.div>

        <motion.div
          className="skills__meta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="skills__stats">
            {Object.entries(stats).map(([cat, count]) => (
              <div className="stat-pill" key={cat} style={{ borderColor: CATEGORY_COLORS[cat] }}>
                <span className="stat-pill__cat">{cat}</span>
                <span className="stat-pill__val" style={{ color: CATEGORY_COLORS[cat] }}>{count}</span>
              </div>
            ))}
          </div>

          <div className="skills__legend">
            {Object.entries(CATEGORY_COLORS).filter(([k]) => k !== "root").map(([cat, color]) => (
              <div className="legend-pill" key={cat}>
                <span className="legend-dot" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
                <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
              </div>
            ))}
            <div className="legend-pill">
              <span className="legend-dot" style={{ background: "#1e2a3a", border: "1px solid #2a3050" }} />
              <span>Pendiente</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="skills__tree-wrap"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <canvas ref={canvasRef} className="skills__canvas" />

          {tooltip && (
            <div
              className="skills__tooltip"
              style={{
                left: tooltip.x,
                top: tooltip.y,
                borderColor: CATEGORY_COLORS[tooltip.category] || "#2a3050",
              }}
            >
              <strong style={{ color: CATEGORY_COLORS[tooltip.category] }}>
                {tooltip.name}
              </strong>
              <span>
                {tooltip.category} — {tooltip.done ? "✅ Aprendido" : "⏳ Pendiente"}
              </span>
            </div>
          )}

          <button className="skills__reset" onClick={handleReset}>
            <i className="fa-solid fa-arrows-to-dot" /> Reiniciar vista
          </button>
        </motion.div>

        <p className="skills__hint">
          <i className="fa-solid fa-hand-pointer" /> Arrastra y usa la rueda del ratón para navegar
        </p>
      </div>
    </section>
  );
}