import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber/native";
import { Link, router } from "expo-router";
import Home from "./components/home/home";
import Roaring from "./components/roaring/roar";

function Box(props) {
  const meshRef = useRef(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default function App() {
  return (
    // <>
    //   {/* <Button
    //     title="logins"
    //     onClick={() => router.push("(auth)/sign-in")}
    //   /> */}

    //   <Link style={styles.link} href="(auth)/sign-in">
    //     login
    //   </Link>
    //   <Link style={styles.link} href="testParticles">
    //     particles
    //   </Link>
    //   <Link style={styles.link} href="(auth)/sign-up">
    //     register
    //   </Link>
    //   <Link style={styles.link} href="testPushNotif">
    //     notif
    //   </Link>
    //   <Link style={styles.link} href="chat">
    //     chat
    //   </Link>
    // </>
    <Roaring />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    backgroundColor: "#000",
    color: "#efefef",
    margin: 5,
  },
});

// const Carousel = () => {
//   const carouselRef = useRef();

//   useFrame(() => {
//     if (carouselRef.current) {
//       carouselRef.current.rotation.y += 0.01;
//     }
//   });

//   return (
//     <Canvas
//       style={{ flex: 1 }}
//       camera={{ position: [0, 0, 10] }}
//       onCreated={({ gl }) => {
//         gl.setClearColor('white');
//       }}
//     >
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       {/* <OrbitControls /> */}
//       <group ref={carouselRef}>
//         {[...Array(6)].map((_, index) => (
//           <Box key={index} position={[index * 2, 0, 0]} args={[1, 1, 1]}>
//             <meshStandardMaterial color={0xff0000} />
//           </Box>
//         ))}
//       </group>
//     </Canvas>
//   );
// };

// export default Carousel;
