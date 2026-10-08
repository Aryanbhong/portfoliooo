// import {
//   motion,
//   useInView,
// } from "motion/react";

// import { useRef } from "react";

// export default function ScrollSeen({
//   children,
//   className = "",
// }) {
//   const ref = useRef(null);

//   const isInView = useInView(ref, {
//     once: true,
//     margin: "-100px",
//   });

//   return (
//     <motion.div
//       ref={ref}
//       className={className}
//       initial={{
//         opacity: 0,
//         y: 50,
//         scale: 0.97,
//       }}
//       animate={
//         isInView
//           ? {
//               opacity: 1,
//               y: 0,
//               scale: 1,
//             }
//           : {}
//       }
//       transition={{
//         duration: 0.7,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

import {
  motion,
  useInView,
} from "motion/react";

import { useRef } from "react";

export default function ScrollSeen({
  children,
  className = "",
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.97,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}