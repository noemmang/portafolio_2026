import { Component, Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Bounds, ContactShadows } from "@react-three/drei";
import "./3dScene.css";

// El .glb viene comprimido con Draco (KHR_draco_mesh_compression).
// Apuntamos al decoder oficial de Google para que three.js sepa descomprimirlo.
useGLTF.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");

// Añade aquí el nombre de cada modelo que quieras que pueda salir.
// Todos deben vivir en /public/models/. En cada carga/recarga de la página
// se elige uno al azar de esta lista.
const MODEL_URLS = [
  "/models/hero_3d_model_1.glb",
  "/models/hero_3d_model_2.glb",
  "/models/hero_3d_model_3.glb",
];

// Precargamos TODOS los modelos posibles (no solo el elegido), así si el
// usuario recarga y le toca otro distinto, ya está cacheado y no hay salto.
MODEL_URLS.forEach((url) => useGLTF.preload(url));

// Velocidad de giro continuo, en radianes/segundo.
// 0.4 ≈ una vuelta completa cada ~15s. Súbelo para que gire más rápido.
const SPIN_SPEED = 0.4;

// Si el .glb elegido falla al cargar (404, ruta mal escrita, export corrupto,
// etc.), useGLTF lanza un error dentro del Suspense. Sin un ErrorBoundary
// aquí, ese error se propaga hacia arriba y React puede desmontar toda la
// sección -> la pantalla en negro que estás viendo. Con el boundary, el
// fallo se queda contenido: no rompe el resto de la página y queda
// registrado en consola con la URL exacta que falló, para poder diagnosticar
// qué archivo está mal en vez de adivinar.
class ModelErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error(`[GamingScene] No se pudo cargar el modelo "${this.props.url}":`, error);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function SceneModel({ url, ...props }) {
  const { scene } = useGLTF(url);
  const group = useRef(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * SPIN_SPEED;
    }
  });

  return (
    <group ref={group} {...props}>
      <primitive object={scene} />
    </group>
  );
}

export default function GamingScene({ className = "" }) {
  // useMemo con [] como dependencias: el sorteo se hace una única vez por
  // montaje del componente (o sea, una vez por carga/recarga de página),
  // nunca en cada re-render.
  const modelUrl = useMemo(
    () => MODEL_URLS[Math.floor(Math.random() * MODEL_URLS.length)],
    []
  );

  return (
    <div className={`gaming-scene ${className}`}>
      <div className="gaming-scene__skeleton" aria-hidden="true" />
      <Canvas
        className="gaming-scene__canvas"
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.75]}
        camera={{ fov: 32, position: [4, 2.4, 5] }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.6} color="#ff6f91" />
        <pointLight position={[-4, 2.5, -3]} intensity={0.9} color="#ffd23f" />
        <ModelErrorBoundary url={modelUrl}>
          <Suspense fallback={null}>
            <Bounds fit clip observe margin={1.15}>
              <SceneModel url={modelUrl} />
            </Bounds>
            <ContactShadows
              position={[0, 0, 0]}
              opacity={0.45}
              scale={12}
              blur={2.4}
              far={4}
              color="#000000"
            />
          </Suspense>
        </ModelErrorBoundary>
      </Canvas>
    </div>
  );
}