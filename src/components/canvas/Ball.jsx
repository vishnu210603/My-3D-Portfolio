// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
// import CanvasLoader from '../Loader';

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[1, 1, 0.1]} />

//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color="#ba55d3"
//           shadow= "#fff"
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           map={decal}
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
//       <Suspense fallback={<CanvasLoader />}></Suspense>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
     
//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;




// "use strict"
// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
// import CanvasLoader from '../Loader';

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[1, 1, 0.1]} />

//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color="#ba55d3"
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           map={decal}
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   const handleContextLost = (event) => {
//     event.preventDefault();
//     // Logic to handle context loss
//   };

//   return (
//     <Canvas
//       frameloop='demand'
//       gl={{ preserveDrawingBuffer: true, antialias: true }}
//       pixelRatio={Math.min(window.devicePixelRatio, 2)}
//       onCreated={({ gl }) => {
//         gl.domElement.addEventListener('webglcontextlost', handleContextLost, false);
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;






import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal, decalError] = useTexture([props.imgUrl]);

  if (decalError) {
    console.error(`Failed to load texture: ${props.imgUrl}`);
  }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[1, 1, 0.1]} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#ba55d3"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {decal && (
          <Decal
            map={decal}
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const handleContextLost = (event) => {
    event.preventDefault();
    // Logic to handle context loss
  };

  const handleContextRestored = (event) => {
    // Logic to handle context restoration
  };

  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      pixelRatio={Math.min(window.devicePixelRatio, 2)}
      style={{ width: '100%', height: '100%' }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener('webglcontextlost', handleContextLost, false);
        gl.domElement.addEventListener('webglcontextrestored', handleContextRestored, false);
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
