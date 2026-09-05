import React from 'react'

// Simplified, cheap lighting setup — the original had 3 spotlights, a
// RectAreaLight, and 2 point lights driving a bloom post-process pass,
// which was the main cause of jank. This is enough to light the scene
// without the extra render passes.
const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 4]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-4, -1, -3]} intensity={12} color="#7209b7" />
      <pointLight position={[3, 2, 2]} intensity={8} color="#4cc9f0" />
    </>
  )
}

export default Lights
