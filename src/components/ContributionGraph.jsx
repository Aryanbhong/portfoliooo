// import { useMemo } from "react";

// export default function ContributionGraph() {

//   const contributions = useMemo(() => {

//     return Array.from(
//       { length: 365 },
//       () => Math.floor(Math.random() * 5)
//     );

//   }, []);

//   return (
//     <section className="contribution-section">

//       <div className="contribution-header">

//         <span>
//           1,284 contributions in the last year
//         </span>

//         <button>
//           Learn how we count contributions
//         </button>

//       </div>

//       <div className="contribution-graph">

//         {contributions.map((value, index) => (

//           <div
//             key={index}
//             className={`contribution level-${value}`}
//           />

//         ))}

//       </div>

//       <div className="contribution-legend">

//         <span>Less</span>

//         <div className="contribution level-0" />
//         <div className="contribution level-1" />
//         <div className="contribution level-2" />
//         <div className="contribution level-3" />
//         <div className="contribution level-4" />

//         <span>More</span>

//       </div>

//     </section>
//   );
// }

// import { motion } from "motion/react";
// import { useMemo } from "react";

// function generateContributions() {
//   return Array.from({ length: 364 }, (_, index) => {
//     const random = Math.random();

//     let level = 0;

//     if (random > 0.75) level = 1;
//     if (random > 0.88) level = 2;
//     if (random > 0.95) level = 3;
//     if (random > 0.985) level = 4;

//     return {
//       id: index,
//       level,
//       count:
//         level === 0
//           ? 0
//           : Math.floor(Math.random() * 12) + level * 3,
//     };
//   });
// }

// export default function ContributionGraph() {
//   const contributions = useMemo(
//     () => generateContributions(),
//     []
//   );

//   return (
//     <section className="contribution-section">

//       <div className="contribution-header">

//         <div>
//           <h2>
//             1,247 contributions
//           </h2>

//           <p>
//             Contribution activity over the last year
//           </p>
//         </div>

//       </div>


//       <div className="contribution-container">

//         <div className="contribution-graph">

//           {contributions.map((item, index) => (
//             <motion.div
//               key={item.id}
//               className={`contribution level-${item.level}`}
//               initial={{
//                 opacity: 0,
//                 scale: 0,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 scale: 1,
//               }}
//               viewport={{
//                 once: true,
//                 amount: 0.1,
//               }}
//               transition={{
//                 duration: 0.25,
//                 delay: index * 0.002,
//               }}
//             >

//               <span className="contribution-tooltip">
//                 {item.count}{" "}
//                 {item.count === 1
//                   ? "contribution"
//                   : "contributions"}
//               </span>

//             </motion.div>
//           ))}

//         </div>

//       </div>


//       <div className="contribution-legend">

//         <span>
//           Less
//         </span>

//         <span className="legend-box level-0" />
//         <span className="legend-box level-1" />
//         <span className="legend-box level-2" />
//         <span className="legend-box level-3" />
//         <span className="legend-box level-4" />

//         <span>
//           More
//         </span>

//       </div>

//     </section>
//   );
// }


import { motion } from "motion/react";
import { useMemo } from "react";

function generateContributions() {
  return Array.from({ length: 364 }, (_, index) => {
    const random = Math.random();

    let level = 0;

    if (random > 0.75) level = 1;
    if (random > 0.88) level = 2;
    if (random > 0.95) level = 3;
    if (random > 0.985) level = 4;

    return {
      id: index,
      level,
      count:
        level === 0
          ? 0
          : Math.floor(Math.random() * 12) + level * 3,
    };
  });
}

const levelClasses = {
  0: "bg-[#161b22]",
  1: "bg-[#0e4429]",
  2: "bg-[#006d32]",
  3: "bg-[#26a641]",
  4: "bg-[#39d353]",
};

export default function ContributionGraph() {
  const contributions = useMemo(
    () => generateContributions(),
    []
  );

  return (
    <section className="w-full text-[#f0f6fc]">
      <div className="mb-5">
        <h2 className="text-base font-semibold tracking-[-0.2px]">
          1,247 contributions
        </h2>

        <p className="mt-1 text-sm text-[#8b949e]">
          Contribution activity over the last year
        </p>
      </div>

      <div
        className="
          w-full
          overflow-x-auto
          rounded-xl
          border
          border-[#30363d]
          bg-[#161b22]/80
          p-5
          shadow-[0_12px_40px_rgba(0,0,0,0.18)]
          backdrop-blur-xl
          scrollbar-thin
          scrollbar-track-[#0d1117]
          scrollbar-thumb-[#30363d]
        "
      >
        <div
          className="
            grid
            min-w-[760px]
            grid-cols-[repeat(52,11px)]
            gap-[3px]
          "
        >
          {contributions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.25,
                delay: index * 0.002,
              }}
              className={`
                group
                relative
                h-[11px]
                w-[11px]
                rounded-[2px]
                ${levelClasses[item.level]}
                transition-[filter]
                duration-150
                hover:brightness-125
              `}
            >
              <span
                className="
                  pointer-events-none
                  absolute
                  bottom-full
                  left-1/2
                  z-50
                  mb-2
                  w-max
                  -translate-x-1/2
                  scale-95
                  rounded-md
                  border
                  border-[#484f58]
                  bg-[#0d1117]
                  px-2
                  py-1
                  text-[11px]
                  font-medium
                  text-[#f0f6fc]
                  opacity-0
                  shadow-[0_8px_20px_rgba(0,0,0,0.4)]
                  transition-all
                  duration-150
                  group-hover:scale-100
                  group-hover:opacity-100
                "
              >
                {item.count}{" "}
                {item.count === 1
                  ? "contribution"
                  : "contributions"}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="
          mt-3
          flex
          items-center
          justify-end
          gap-1.5
          text-[11px]
          text-[#8b949e]
        "
      >
        <span className="mr-1">
          Less
        </span>

        {[0, 1, 2, 3, 4].map((level) => (
          <span
            key={level}
            className={`
              h-[11px]
              w-[11px]
              rounded-[2px]
              ${levelClasses[level]}
            `}
          />
        ))}

        <span className="ml-1">
          More
        </span>
      </div>
    </section>
  );
}