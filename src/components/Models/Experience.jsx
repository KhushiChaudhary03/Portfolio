import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { useMediaQuery } from 'react-responsive';
import { TechCore } from './TechCore';
import Lights from './Lights';

const Experience = () => {
    const isTablet = useMediaQuery({ query: '(max-width:1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width:768px)' });

    return (
        <Canvas
            camera={{ position: [0, 0, 11], fov: 45 }}
            dpr={isMobile ? 1 : [1, 1.5]}
            gl={{ antialias: !isMobile, powerPreference: 'high-performance' }}
        >
            <Lights />
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.6}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.8}
            />

            <group scale={isMobile ? 0.65 : isTablet ? 0.85 : 1}>
                <Suspense fallback={null}>
                    <TechCore />
                </Suspense>
            </group>
        </Canvas>
    )
}

export default Experience
