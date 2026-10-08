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


import {
  motion,
  AnimatePresence,
} from "motion/react";

import { useEffect, useState } from "react";

export default function AmbientBackground() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });

  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    let lastTime = 0;

    function handleMouseMove(event) {
      setCursor({
        x: event.clientX,
        y: event.clientY,
      });

      const now = Date.now();

      // Don't create too many designs
      if (now - lastTime < 100) return;

      lastTime = now;

      const design = {
        id: now + Math.random(),
        x: event.clientX,
        y: event.clientY,
      };

      setDesigns((current) => [
        ...current.slice(-5),
        design,
      ]);
    }

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        overflow-hidden
      "
      aria-hidden="true"
    >
      {/* Floating background glow */}

      <motion.div
        animate={{
          x: [0, 80, -30, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-120px]
          top-[12%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#58a6ff]/10
          blur-[110px]
        "
      />

      <motion.div
        animate={{
          x: [0, -70, 30, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-140px]
          right-[-100px]
          h-[460px]
          w-[460px]
          rounded-full
          bg-[#a371f7]/10
          blur-[120px]
        "
      />

      {/* Cursor designs */}

      <AnimatePresence>
        {designs.map((design) => (
          <motion.div
            key={design.id}
            style={{
              left: design.x,
              top: design.y,
            }}
            initial={{
              opacity: 0,
              scale: 0.2,
              rotate: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.2, 1, 1.5],
              rotate: 90,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              absolute
              h-7
              w-7
              -translate-x-1/2
              -translate-y-1/2
              will-change-transform
            "
          >
            <span
              className="
                absolute
                left-1/2
                top-0
                h-full
                w-px
                -translate-x-1/2
                bg-gradient-to-b
                from-transparent
                via-[#58a6ff]
                to-transparent
              "
            />

            <span
              className="
                absolute
                left-1/2
                top-0
                h-full
                w-px
                -translate-x-1/2
                rotate-90
                bg-gradient-to-b
                from-transparent
                via-[#58a6ff]
                to-transparent
              "
            />

            <span
              className="
                absolute
                left-1/2
                top-0
                h-full
                w-px
                -translate-x-1/2
                rotate-45
                bg-gradient-to-b
                from-transparent
                via-[#a371f7]
                to-transparent
              "
            />

            <span
              className="
                absolute
                left-1/2
                top-0
                h-full
                w-px
                -translate-x-1/2
                -rotate-45
                bg-gradient-to-b
                from-transparent
                via-[#a371f7]
                to-transparent
              "
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Cursor glow */}

      <motion.div
        animate={{
          x: cursor.x,
          y: cursor.y,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 35,
          mass: 0.2,
        }}
        className="
          absolute
          left-0
          top-0
          h-32
          w-32
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#58a6ff]/[0.07]
          blur-2xl
        "
      />
    </div>
  );
}