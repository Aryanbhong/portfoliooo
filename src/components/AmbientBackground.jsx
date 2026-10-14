// import {
//   motion,
// } from "motion/react";

// export default function AmbientBackground() {
//   return (
//     <div className="ambient-background">
//       <motion.div
//         className="ambient-orb orb-one"
//         animate={{
//           x: [0, 80, -30, 0],
//           y: [0, -50, 40, 0],
//           scale: [1, 1.2, 0.9, 1],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       <motion.div
//         className="ambient-orb orb-two"
//         animate={{
//           x: [0, -70, 30, 0],
//           y: [0, 60, -40, 0],
//           scale: [1, 0.85, 1.15, 1],
//         }}
//         transition={{
//           duration: 22,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//     </div>
//   );
// }

// import { motion, AnimatePresence } from "motion/react";
// import { useEffect, useState } from "react";

// export default function AmbientBackground() {
//   const [cursor, setCursor] = useState({
//     x: 0,
//     y: 0,
//   });

//   const [designs, setDesigns] = useState([]);

//   useEffect(() => {
//     let lastTime = 0;

//     function handleMouseMove(event) {
//       setCursor({
//         x: event.clientX,
//         y: event.clientY,
//       });

//       const now = Date.now();

//       // Don't create too many designs
//       if (now - lastTime < 100) return;

//       lastTime = now;

//       const design = {
//         id: now + Math.random(),
//         x: event.clientX,
//         y: event.clientY,
//       };

//       setDesigns((current) => [
//         ...current.slice(-5),
//         design,
//       ]);
//     }

//     window.addEventListener(
//       "mousemove",
//       handleMouseMove
//     );

//     return () => {
//       window.removeEventListener(
//         "mousemove",
//         handleMouseMove
//       );
//     };
//   }, []);

//   return (
//     <div className="ambient-background">

//       {/* Floating background glow */}

//       <motion.div
//         className="ambient-orb orb-one"
//         animate={{
//           x: [0, 80, -30, 0],
//           y: [0, -50, 40, 0],
//           scale: [1, 1.2, 0.9, 1],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       <motion.div
//         className="ambient-orb orb-two"
//         animate={{
//           x: [0, -70, 30, 0],
//           y: [0, 60, -40, 0],
//           scale: [1, 0.85, 1.15, 1],
//         }}
//         transition={{
//           duration: 22,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Cursor designs */}

//       <AnimatePresence>
//         {designs.map((design) => (
//           <motion.div
//             key={design.id}
//             className="cursor-design"
//             style={{
//               left: design.x,
//               top: design.y,
//             }}
//             initial={{
//               opacity: 0,
//               scale: 0.2,
//               rotate: 0,
//             }}
//             animate={{
//               opacity: [0, 1, 0],
//               scale: [0.2, 1, 1.5],
//               rotate: 90,
//             }}
//             exit={{
//               opacity: 0,
//             }}
//             transition={{
//               duration: 0.8,
//               ease: "easeOut",
//             }}
//           >
//             <span />
//             <span />
//             <span />
//             <span />
//           </motion.div>
//         ))}
//       </AnimatePresence>

//       {/* Cursor glow */}

//       <motion.div
//         className="cursor-glow"
//         animate={{
//           x: cursor.x,
//           y: cursor.y,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 500,
//           damping: 35,
//           mass: 0.2,
//         }}
//       />

//     </div>
//   );
// }


// import {
//   motion,
//   AnimatePresence,
// } from "motion/react";

// import { useEffect, useState } from "react";

// export default function AmbientBackground() {
//   const [cursor, setCursor] = useState({
//     x: 0,
//     y: 0,
//   });

//   const [designs, setDesigns] = useState([]);

//   useEffect(() => {
//     let lastTime = 0;

//     function handleMouseMove(event) {
//       setCursor({
//         x: event.clientX,
//         y: event.clientY,
//       });

//       const now = Date.now();

//       // Don't create too many designs
//       if (now - lastTime < 100) return;

//       lastTime = now;

//       const design = {
//         id: now + Math.random(),
//         x: event.clientX,
//         y: event.clientY,
//       };

//       setDesigns((current) => [
//         ...current.slice(-5),
//         design,
//       ]);
//     }

//     window.addEventListener(
//       "mousemove",
//       handleMouseMove
//     );

//     return () => {
//       window.removeEventListener(
//         "mousemove",
//         handleMouseMove
//       );
//     };
//   }, []);

//   return (
//     <div
//       className="
//         pointer-events-none
//         fixed
//         inset-0
//         z-0
//         overflow-hidden
//       "
//       aria-hidden="true"
//     >
//       {/* Floating background glow */}

//       <motion.div
//         animate={{
//           x: [0, 80, -30, 0],
//           y: [0, -50, 40, 0],
//           scale: [1, 1.2, 0.9, 1],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           left-[-120px]
//           top-[12%]
//           h-[420px]
//           w-[420px]
//           rounded-full
//           bg-[#58a6ff]/10
//           blur-[110px]
//         "
//       />

//       <motion.div
//         animate={{
//           x: [0, -70, 30, 0],
//           y: [0, 60, -40, 0],
//           scale: [1, 0.85, 1.15, 1],
//         }}
//         transition={{
//           duration: 22,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           bottom-[-140px]
//           right-[-100px]
//           h-[460px]
//           w-[460px]
//           rounded-full
//           bg-[#a371f7]/10
//           blur-[120px]
//         "
//       />

//       {/* Cursor designs */}

//       <AnimatePresence>
//         {designs.map((design) => (
//           <motion.div
//             key={design.id}
//             style={{
//               left: design.x,
//               top: design.y,
//             }}
//             initial={{
//               opacity: 0,
//               scale: 0.2,
//               rotate: 0,
//             }}
//             animate={{
//               opacity: [0, 1, 0],
//               scale: [0.2, 1, 1.5],
//               rotate: 90,
//             }}
//             exit={{
//               opacity: 0,
//             }}
//             transition={{
//               duration: 0.8,
//               ease: "easeOut",
//             }}
//             className="
//               absolute
//               h-7
//               w-7
//               -translate-x-1/2
//               -translate-y-1/2
//               will-change-transform
//             "
//           >
//             <span
//               className="
//                 absolute
//                 left-1/2
//                 top-0
//                 h-full
//                 w-px
//                 -translate-x-1/2
//                 bg-gradient-to-b
//                 from-transparent
//                 via-[#58a6ff]
//                 to-transparent
//               "
//             />

//             <span
//               className="
//                 absolute
//                 left-1/2
//                 top-0
//                 h-full
//                 w-px
//                 -translate-x-1/2
//                 rotate-90
//                 bg-gradient-to-b
//                 from-transparent
//                 via-[#58a6ff]
//                 to-transparent
//               "
//             />

//             <span
//               className="
//                 absolute
//                 left-1/2
//                 top-0
//                 h-full
//                 w-px
//                 -translate-x-1/2
//                 rotate-45
//                 bg-gradient-to-b
//                 from-transparent
//                 via-[#a371f7]
//                 to-transparent
//               "
//             />

//             <span
//               className="
//                 absolute
//                 left-1/2
//                 top-0
//                 h-full
//                 w-px
//                 -translate-x-1/2
//                 -rotate-45
//                 bg-gradient-to-b
//                 from-transparent
//                 via-[#a371f7]
//                 to-transparent
//               "
//             />
//           </motion.div>
//         ))}
//       </AnimatePresence>

//       {/* Cursor glow */}

//       <motion.div
//         animate={{
//           x: cursor.x,
//           y: cursor.y,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 500,
//           damping: 35,
//           mass: 0.2,
//         }}
//         className="
//           absolute
//           left-0
//           top-0
//           h-32
//           w-32
//           -translate-x-1/2
//           -translate-y-1/2
//           rounded-full
//           bg-[#58a6ff]/[0.07]
//           blur-2xl
//         "
//       />
//     </div>
//   );
// }

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const COLORS = [
  { main: "#65f5ff", glow: "#00bfff" },
  { main: "#a78bfa", glow: "#8b5cf6" },
  { main: "#ff8bd8", glow: "#ff3eb5" },
  { main: "#8bffcf", glow: "#00e5a0" },
  { main: "#ffd18b", glow: "#ff9f43" },
  { main: "#8bb8ff", glow: "#477dff" },
];

function Jellyfish({ design }) {
  const color = COLORS[design.colorIndex];

  return (
    <motion.div
      className="absolute"
      style={{
        left: design.x,
        top: design.y,
        width: 64,
        height: 92,
        color: color.main,
      }}
      initial={{ opacity: 0, scale: 0.25, rotate: -15 }}
      animate={{
        opacity: [0, 0.9, 0.75, 0],
        scale: [0.25, 1, 1.08, 0.8],
        rotate: [-15, 5, -8, 12],
        y: [0, -22, -40, -65],
      }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 3.2, ease: "easeInOut" }}
    >
      {/* Translucent glass bell */}
      <motion.div
        className="absolute left-1/2 top-0 h-9 w-12 -translate-x-1/2 rounded-t-[50%] rounded-b-[45%] border border-white/40"
        style={{
          background: `radial-gradient(ellipse at 35% 20%, rgba(255,255,255,0.75), ${color.main}55 35%, ${color.glow}20 75%, transparent)`,
          boxShadow: `0 0 14px ${color.glow}80, inset 0 0 12px rgba(255,255,255,0.25)`,
          backdropFilter: "blur(5px)",
        }}
        animate={{ scaleY: [1, 0.82, 1.08, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rainbow shimmer */}
      <div
        className="absolute left-1/2 top-2 h-1 w-7 -translate-x-1/2 rounded-full opacity-80 blur-[2px]"
        style={{
          background: `linear-gradient(90deg, ${color.glow}, white, ${color.main})`,
        }}
      />

      {/* Flowing tentacles */}
      {Array.from({ length: 7 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-7 w-px origin-top rounded-full"
          style={{
            left: `${25 + i * 8}%`,
            height: `${25 + (i % 3) * 10}px`,
            background: `linear-gradient(to bottom, ${color.main}, ${color.glow}80, transparent)`,
            boxShadow: `0 0 4px ${color.glow}90`,
          }}
          animate={{
            scaleY: [0.8, 1.1, 0.65, 1],
            rotate: [i % 2 ? -12 : 12, i % 2 ? 15 : -15, 0],
            x: [0, i % 2 ? 5 : -5, 0],
          }}
          transition={{
            duration: 1.5 + (i % 3) * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.08,
          }}
        />
      ))}
    </motion.div>
  );
}

export default function AmbientBackground() {
  const [cursor, setCursor] = useState({ x: -200, y: -200 });
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    let lastTime = 0;
    let counter = 0;

    function handleMouseMove(event) {
      setCursor({ x: event.clientX, y: event.clientY });

      const now = Date.now();
      if (now - lastTime < 260) return;

      lastTime = now;
      const colorIndex = counter % COLORS.length;
      counter += 1;

      setDesigns((current) => [
        ...current.slice(-3),
        {
          id: now + Math.random(),
          x: event.clientX,
          y: event.clientY,
          colorIndex,
        },
      ]);
    }

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Deep underwater ambient light */}
      <motion.div
        className="absolute -left-40 top-[12%] h-[420px] w-[420px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #2563eb22, #8b5cf611 45%, transparent 70%)",
        }}
        animate={{
          x: [0, 70, -20, 0],
          y: [0, -35, 45, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -right-32 h-[460px] w-[460px] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, #db277711, #06b6d411 45%, transparent 70%)",
        }}
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 30, -40, 0],
          scale: [1, 0.9, 1.12, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Jellyfish appear along the cursor path */}
      <AnimatePresence>
        {designs.map((design) => (
          <Jellyfish key={design.id} design={design} />
        ))}
      </AnimatePresence>

      {/* Smooth, iridescent cursor glow */}
      <motion.div
        className="absolute left-0 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        animate={{
          x: cursor.x,
          y: cursor.y,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          mass: 0.3,
        }}
        style={{
          background:
            "radial-gradient(circle, #67e8f933 0%, #a78bfa22 30%, #f472b611 55%, transparent 72%)",
        }}
      />
    </div>
  );
}