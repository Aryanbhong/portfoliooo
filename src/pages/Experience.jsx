// import {
//   BriefcaseBusiness,
//   CalendarDays,
//   MapPin,
//   GitBranch,
// } from "lucide-react";

// import {
//   motion,
// } from "motion/react";

// import { experiences } from "../data/portfolio";
// import Header from "../components/Header.";

// export default function Experience() {
//   return (
//     <main className="relative min-h-screen overflow-hidden text-[#f0f6fc]">
//       {/* Ambient background */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-[8%]
//           top-[12%]
//           h-72
//           w-72
//           rounded-full
//           bg-[#58a6ff]/[0.06]
//           blur-3xl
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           right-[8%]
//           top-[45%]
//           h-80
//           w-80
//           rounded-full
//           bg-[#a371f7]/[0.05]
//           blur-3xl
//         "
//       />

//       {/* Header */}

//       <section className="relative z-10 mb-12">
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.6,
//           }}
//         >
//           <div className="mb-3 flex items-center gap-2 text-sm font-medium text-[#58a6ff]">
//             <BriefcaseBusiness size={16} />

//             <span>Professional Journey</span>
//           </div>

//           <h1
//             className="
//               text-3xl
//               font-semibold
//               tracking-[-0.8px]
//               sm:text-4xl
//             "
//           >
//             Experience
//           </h1>

//           <p
//             className="
//               mt-3
//               max-w-2xl
//               text-sm
//               leading-6
//               text-[#8b949e]
//               sm:text-base
//             "
//           >
//             A timeline of the experiences, responsibilities,
//             and environments that have shaped my development
//             journey.
//           </p>
//         </motion.div>
//       </section>

//       {/* Timeline */}

//       <section className="relative z-10">
//         {/* Main vertical line */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             bottom-0
//             left-[20px]
//             top-0
//             w-px
//             bg-gradient-to-b
//             from-[#58a6ff]/0
//             via-[#58a6ff]/35
//             to-[#a371f7]/0
//             sm:left-[28px]
//           "
//         />

//         <div className="flex flex-col gap-14">
//           {experiences.map((experience, index) => (
//             <ExperienceItem
//               key={experience.id}
//               experience={experience}
//               index={index}
//             />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// function ExperienceItem({
//   experience,
//   index,
// }) {
//   return (
//     <motion.article
//       initial={{
//         opacity: 0,
//         y: 50,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//         amount: 0.2,
//       }}
//       transition={{
//         duration: 0.7,
//         delay: index * 0.1,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="
//         relative
//         pl-12
//         sm:pl-16
//       "
//     >
//       {/* Timeline node */}

//       <div
//         className="
//           absolute
//           left-[20px]
//           top-8
//           z-20
//           -translate-x-1/2
//           sm:left-[28px]
//         "
//       >
//         {/* Outer pulse */}

//         <motion.div
//           animate={{
//             scale: [1, 1.5, 1],
//             opacity: [0.35, 0, 0.35],
//           }}
//           transition={{
//             duration: 2.5,
//             repeat: Infinity,
//             ease: "easeOut",
//           }}
//           className="
//             absolute
//             inset-[-9px]
//             rounded-full
//             border
//             border-[#58a6ff]/40
//           "
//         />

//         {/* Glow */}

//         <div
//           className="
//             absolute
//             inset-[-5px]
//             rounded-full
//             bg-[#58a6ff]/20
//             blur-md
//           "
//         />

//         {/* Circle */}

//         <div
//           className="
//             relative
//             flex
//             h-4
//             w-4
//             items-center
//             justify-center
//             rounded-full
//             border
//             border-[#58a6ff]/70
//             bg-[#0d1117]
//             shadow-[0_0_18px_rgba(88,166,255,0.5)]
//           "
//         >
//           <div
//             className="
//               h-1.5
//               w-1.5
//               rounded-full
//               bg-[#58a6ff]
//             "
//           />
//         </div>
//       </div>

//       {/* Glass card */}

//       <div
//         className="
//           group
//           relative
//           overflow-hidden
//           rounded-2xl
//           border
//           border-white/[0.09]
//           bg-[#161b22]/55
//           p-6
//           shadow-[0_25px_70px_rgba(0,0,0,0.32)]
//           backdrop-blur-2xl
//           backdrop-saturate-150
//           transition-all
//           duration-500
//           hover:border-[#58a6ff]/25
//           hover:shadow-[0_30px_85px_rgba(0,0,0,0.42)]
//           sm:p-8
//         "
//       >
//         {/* Glass reflection */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-x-0
//             top-0
//             h-32
//             bg-gradient-to-b
//             from-white/[0.045]
//             to-transparent
//           "
//         />

//         {/* Blue ambient light */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             -right-20
//             -top-20
//             h-52
//             w-52
//             rounded-full
//             bg-[#58a6ff]/[0.06]
//             blur-3xl
//             transition-opacity
//             duration-500
//             group-hover:bg-[#58a6ff]/[0.10]
//           "
//         />

//         {/* Purple ambient light */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             -bottom-24
//             -left-16
//             h-48
//             w-48
//             rounded-full
//             bg-[#a371f7]/[0.045]
//             blur-3xl
//           "
//         />

//         <div className="relative z-10">
//           {/* Top row */}

//           <div
//             className="
//               flex
//               flex-col
//               gap-5
//               lg:flex-row
//               lg:items-start
//               lg:justify-between
//             "
//           >
//             <div>
//               <div className="flex flex-wrap items-center gap-2">
//                 <h2
//                   className="
//                     text-xl
//                     font-semibold
//                     tracking-[-0.35px]
//                     sm:text-2xl
//                   "
//                 >
//                   {experience.company}
//                 </h2>

//                 <span
//                   className="
//                     rounded-full
//                     border
//                     border-[#3fb950]/25
//                     bg-[#3fb950]/[0.08]
//                     px-2.5
//                     py-1
//                     text-[11px]
//                     font-medium
//                     text-[#3fb950]
//                   "
//                 >
//                   {experience.type}
//                 </span>
//               </div>

//               <p
//                 className="
//                   mt-2
//                   text-sm
//                   font-medium
//                   text-[#58a6ff]
//                 "
//               >
//                 {experience.role}
//               </p>
//             </div>

//             {/* Date */}

//             <div
//               className="
//                 flex
//                 shrink-0
//                 items-center
//                 gap-2
//                 text-sm
//                 text-[#8b949e]
//               "
//             >
//               <CalendarDays
//                 size={15}
//                 className="text-[#6e7681]"
//               />

//               <span>{experience.period}</span>
//             </div>
//           </div>

//           {/* Location */}

//           <div
//             className="
//               mt-5
//               flex
//               items-center
//               gap-2
//               text-sm
//               text-[#8b949e]
//             "
//           >
//             <MapPin
//               size={15}
//               className="text-[#6e7681]"
//             />

//             <span>{experience.location}</span>
//           </div>

//           {/* Description */}

//           <p
//             className="
//               mt-6
//               max-w-4xl
//               text-sm
//               leading-7
//               text-[#c9d1d9]
//             "
//           >
//             {experience.description}
//           </p>

//           {/* Responsibilities */}

//           <div className="mt-7">
//             <h3
//               className="
//                 mb-4
//                 text-sm
//                 font-semibold
//                 text-[#f0f6fc]
//               "
//             >
//               Responsibilities
//             </h3>

//             <div className="space-y-3">
//               {experience.responsibilities.map(
//                 (responsibility) => (
//                   <div
//                     key={responsibility}
//                     className="
//                       flex
//                       gap-3
//                       text-sm
//                       leading-6
//                       text-[#8b949e]
//                     "
//                   >
//                     <span
//                       className="
//                         mt-[9px]
//                         h-1.5
//                         w-1.5
//                         shrink-0
//                         rounded-full
//                         bg-[#58a6ff]
//                         shadow-[0_0_8px_rgba(88,166,255,0.6)]
//                       "
//                     />

//                     <span>{responsibility}</span>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>

//           {/* Technologies */}

//           <div
//             className="
//               mt-7
//               flex
//               flex-wrap
//               items-center
//               gap-2
//               border-t
//               border-white/[0.07]
//               pt-5
//             "
//           >
//             <GitBranch
//               size={15}
//               className="mr-1 text-[#6e7681]"
//             />

//             {experience.technologies.map(
//               (technology) => (
//                 <span
//                   key={technology}
//                   className="
//                     rounded-full
//                     border
//                     border-[#30363d]
//                     bg-[#0d1117]/55
//                     px-2.5
//                     py-1
//                     text-[11px]
//                     font-medium
//                     text-[#8b949e]
//                     backdrop-blur-md
//                     transition-colors
//                     hover:border-[#58a6ff]/30
//                     hover:text-[#c9d1d9]
//                   "
//                 >
//                   {technology}
//                 </span>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.article>
//   );
// }

import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  GitBranch,
} from "lucide-react";

import { motion } from "motion/react";

import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-16 pt-24 text-[#f0f6fc] sm:px-6 lg:px-8">
      {/* Ambient background */}

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[12%]
          h-72
          w-72
          rounded-full
          bg-[#58a6ff]/[0.06]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[45%]
          h-80
          w-80
          rounded-full
          bg-[#a371f7]/[0.05]
          blur-3xl
        "
      />

      {/* Main content container */}

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Page heading */}

        <section className="mb-12">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-[#58a6ff]">
              <BriefcaseBusiness size={16} />

              <span>Professional Journey</span>
            </div>

            <h1
              className="
                text-3xl
                font-semibold
                tracking-[-0.8px]
                sm:text-4xl
              "
            >
              Experience
            </h1>

            <p
              className="
                mt-3
                max-w-2xl
                text-sm
                leading-6
                text-[#8b949e]
                sm:text-base
              "
            >
              A timeline of the experiences, responsibilities,
              and environments that have shaped my development
              journey.
            </p>
          </motion.div>
        </section>

        {/* Timeline */}

        <section className="relative">
          {/* Main vertical line */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[20px]
              top-0
              w-px
              bg-gradient-to-b
              from-[#58a6ff]/0
              via-[#58a6ff]/35
              to-[#a371f7]/0
              sm:left-[28px]
            "
          />

          <div className="flex flex-col gap-14">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function ExperienceItem({
  experience,
  index,
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        pl-12
        sm:pl-16
      "
    >
      {/* Timeline node */}

      <div
        className="
          absolute
          left-[20px]
          top-8
          z-20
          -translate-x-1/2
          sm:left-[28px]
        "
      >
        {/* Outer pulse */}

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.35, 0, 0.35],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="
            absolute
            inset-[-9px]
            rounded-full
            border
            border-[#58a6ff]/40
          "
        />

        {/* Glow */}

        <div
          className="
            absolute
            inset-[-5px]
            rounded-full
            bg-[#58a6ff]/20
            blur-md
          "
        />

        {/* Circle */}

        <div
          className="
            relative
            flex
            h-4
            w-4
            items-center
            justify-center
            rounded-full
            border
            border-[#58a6ff]/70
            bg-[#0d1117]
            shadow-[0_0_18px_rgba(88,166,255,0.5)]
          "
        >
          <div
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#58a6ff]
            "
          />
        </div>
      </div>

      {/* Glass card */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.09]
          bg-[#161b22]/55
          p-6
          shadow-[0_25px_70px_rgba(0,0,0,0.32)]
          backdrop-blur-2xl
          backdrop-saturate-150
          transition-all
          duration-500
          hover:border-[#58a6ff]/25
          hover:shadow-[0_30px_85px_rgba(0,0,0,0.42)]
          sm:p-8
        "
      >
        {/* Glass reflection */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-32
            bg-gradient-to-b
            from-white/[0.045]
            to-transparent
          "
        />

        {/* Blue ambient light */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-52
            w-52
            rounded-full
            bg-[#58a6ff]/[0.06]
            blur-3xl
            transition-opacity
            duration-500
            group-hover:bg-[#58a6ff]/[0.10]
          "
        />

        {/* Purple ambient light */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-24
            -left-16
            h-48
            w-48
            rounded-full
            bg-[#a371f7]/[0.045]
            blur-3xl
          "
        />

        <div className="relative z-10">
          {/* Top row */}

          <div
            className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-start
              lg:justify-between
            "
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2
                  className="
                    text-xl
                    font-semibold
                    tracking-[-0.35px]
                    sm:text-2xl
                  "
                >
                  {experience.company}
                </h2>

                <span
                  className="
                    rounded-full
                    border
                    border-[#3fb950]/25
                    bg-[#3fb950]/[0.08]
                    px-2.5
                    py-1
                    text-[11px]
                    font-medium
                    text-[#3fb950]
                  "
                >
                  {experience.type}
                </span>
              </div>

              <p
                className="
                  mt-2
                  text-sm
                  font-medium
                  text-[#58a6ff]
                "
              >
                {experience.role}
              </p>
            </div>

            {/* Date */}

            <div
              className="
                flex
                shrink-0
                items-center
                gap-2
                text-sm
                text-[#8b949e]
              "
            >
              <CalendarDays
                size={15}
                className="text-[#6e7681]"
              />

              <span>{experience.period}</span>
            </div>
          </div>

          {/* Location */}

          <div
            className="
              mt-5
              flex
              items-center
              gap-2
              text-sm
              text-[#8b949e]
            "
          >
            <MapPin
              size={15}
              className="text-[#6e7681]"
            />

            <span>{experience.location}</span>
          </div>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-4xl
              text-sm
              leading-7
              text-[#c9d1d9]
            "
          >
            {experience.description}
          </p>

          {/* Responsibilities */}

          <div className="mt-7">
            <h3
              className="
                mb-4
                text-sm
                font-semibold
                text-[#f0f6fc]
              "
            >
              Responsibilities
            </h3>

            <div className="space-y-3">
              {experience.responsibilities.map(
                (responsibility) => (
                  <div
                    key={responsibility}
                    className="
                      flex
                      gap-3
                      text-sm
                      leading-6
                      text-[#8b949e]
                    "
                  >
                    <span
                      className="
                        mt-[9px]
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-[#58a6ff]
                        shadow-[0_0_8px_rgba(88,166,255,0.6)]
                      "
                    />

                    <span>{responsibility}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Technologies */}

          <div
            className="
              mt-7
              flex
              flex-wrap
              items-center
              gap-2
              border-t
              border-white/[0.07]
              pt-5
            "
          >
            <GitBranch
              size={15}
              className="mr-1 text-[#6e7681]"
            />

            {experience.technologies.map(
              (technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-[#30363d]
                    bg-[#0d1117]/55
                    px-2.5
                    py-1
                    text-[11px]
                    font-medium
                    text-[#8b949e]
                    backdrop-blur-md
                    transition-colors
                    hover:border-[#58a6ff]/30
                    hover:text-[#c9d1d9]
                  "
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}