import { Suspense, type ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';

interface ThreeCanvasProps {
  className?: string;
  children: ReactNode;
}

export const ThreeCanvas = ({ className = '', children }: ThreeCanvasProps) => {
  return (
    <div className={`relative h-full w-full ${className}`}>
      <Canvas
        className="h-full w-full"
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]} // Responsive optimization
        shadows
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
      <Loader
        containerStyles={{
          background: 'transparent',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        innerStyles={{
          backgroundColor: 'rgba(22, 22, 22, 0.7)',
          width: '100px',
          borderRadius: '8px',
        }}
        barStyles={{
          backgroundColor: 'var(--primary)',
        }}
        dataStyles={{
          color: 'white',
          fontSize: '0.8rem',
          fontFamily: 'Poppins, sans-serif',
        }}
        dataInterpolation={(p) => `Loading ${Math.round(p)}%`}
      />
    </div>
  );
};

export default ThreeCanvas;
