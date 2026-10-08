// import {
//   UserRound,
//   GraduationCap,
//   Code2,
//   BrainCircuit,
//   Target,
//   Sparkles,
//   MapPin,
//   CalendarDays,
//   GitBranch,
//   Layers3,
// } from "lucide-react";

// import { motion } from "motion/react";

// export default function About() {
//   return (
//     <main className="relative min-h-screen overflow-hidden px-4 pb-20 pt-24 text-[#f0f6fc] sm:px-6 lg:px-8">
//       {/* =========================================================
//           AMBIENT BACKGROUND
//       ========================================================= */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-[5%]
//           top-[8%]
//           h-80
//           w-80
//           rounded-full
//           bg-[#58a6ff]/[0.055]
//           blur-3xl
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           right-[3%]
//           top-[38%]
//           h-96
//           w-96
//           rounded-full
//           bg-[#a371f7]/[0.05]
//           blur-3xl
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-[5%]
//           left-[30%]
//           h-80
//           w-80
//           rounded-full
//           bg-[#58a6ff]/[0.035]
//           blur-3xl
//         "
//       />

//       {/* =========================================================
//           MAIN CONTAINER
//       ========================================================= */}

//       <div className="relative z-10 mx-auto w-full max-w-6xl">
//         {/* =======================================================
//             PAGE HEADER
//         ======================================================= */}

//         <motion.section
//           initial={{
//             opacity: 0,
//             y: 25,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mb-16"
//         >
//           <div className="mb-3 flex items-center gap-2 text-sm font-medium text-[#58a6ff]">
//             <UserRound size={16} />

//             <span>README / About</span>
//           </div>

//           <h1
//             className="
//               text-4xl
//               font-semibold
//               tracking-[-1.2px]
//               sm:text-5xl
//             "
//           >
//             The person behind the commits.
//           </h1>

//           <p
//             className="
//               mt-4
//               max-w-2xl
//               text-sm
//               leading-7
//               text-[#8b949e]
//               sm:text-base
//             "
//           >
//             A little more about my background, what I build,
//             what I am learning, and where I want to go next.
//           </p>
//         </motion.section>

//         {/* =======================================================
//             JOURNEY
//         ======================================================= */}

//         <section className="relative">
//           {/* Main glowing journey line */}

//           <div
//             className="
//               pointer-events-none
//               absolute
//               bottom-0
//               left-[22px]
//               top-0
//               w-px
//               bg-gradient-to-b
//               from-transparent
//               via-[#58a6ff]/40
//               to-transparent
//               sm:left-[30px]
//             "
//           />

//           {/* Secondary glow around line */}

//           <div
//             className="
//               pointer-events-none
//               absolute
//               bottom-0
//               left-[22px]
//               top-0
//               w-8
//               -translate-x-1/2
//               bg-[#58a6ff]/[0.025]
//               blur-xl
//               sm:left-[30px]
//             "
//           />

//           <div className="flex flex-col gap-16">
//             {/* ===================================================
//                 INTRO
//             =================================================== */}

//             <JourneyItem icon={Sparkles}>
//               <GlassCard>
//                 <SectionHeading
//                   icon={Sparkles}
//                   label="Hello"
//                   title="Hi, I'm Aryan."
//                 />

//                 <p className="mt-6 max-w-4xl text-sm leading-7 text-[#c9d1d9] sm:text-base">
//                   I'm a full-stack developer who enjoys turning
//                   ideas into functional web applications. I like
//                   working across the stack — from building
//                   interfaces and APIs to designing databases and
//                   connecting the pieces together.
//                 </p>

//                 <p className="mt-4 max-w-4xl text-sm leading-7 text-[#8b949e] sm:text-base">
//                   I'm especially interested in building software
//                   that is practical, scalable, and enjoyable to
//                   use while continuously improving how I design
//                   and structure applications.
//                 </p>

//                 <div className="mt-7 flex flex-wrap gap-2">
//                   <InfoPill icon={Code2} text="Full Stack Development" />
//                   <InfoPill icon={Layers3} text="Backend & APIs" />
//                   <InfoPill icon={BrainCircuit} text="AI & Cybersecurity" />
//                 </div>
//               </GlassCard>
//             </JourneyItem>

//             {/* ===================================================
//                 EDUCATION
//             =================================================== */}

//             <JourneyItem icon={GraduationCap}>
//               <GlassCard>
//                 <SectionHeading
//                   icon={GraduationCap}
//                   label="Education"
//                   title="Academic Journey"
//                 />

//                 <div className="mt-7 space-y-5">
//                   <EducationCard
//                     degree="Master of Computer Application"
//                     institution="SIES College of Management Studies"
//                     period="Sept 2026 — May 2028"
//                     location="Navi Mumbai, Maharashtra"
//                     current
//                   />

//                   <EducationCard
//                     degree="Bachelor of Computer Application"
//                     institution="Sri Balaji University"
//                     period="Aug 2023 — May 2026"
//                     location="Pune, Maharashtra"
//                   />
//                 </div>
//               </GlassCard>
//             </JourneyItem>

//             {/* ===================================================
//                 EXPERTISE
//             =================================================== */}

//             <JourneyItem icon={Code2}>
//               <GlassCard>
//                 <SectionHeading
//                   icon={Code2}
//                   label="Expertise"
//                   title="What I Like Building"
//                 />

//                 <div className="mt-7 grid gap-4 md:grid-cols-3">
//                   <ExpertiseCard
//                     icon={Code2}
//                     title="Full Stack"
//                     description="Building complete web applications across frontend, backend, APIs, and databases."
//                   />

//                   <ExpertiseCard
//                     icon={GitBranch}
//                     title="Backend"
//                     description="Designing APIs, authentication, data flows, and maintainable server-side systems."
//                   />

//                   <ExpertiseCard
//                     icon={Layers3}
//                     title="Product Thinking"
//                     description="Turning an idea into a usable application instead of focusing only on isolated features."
//                   />
//                 </div>
//               </GlassCard>
//             </JourneyItem>

//             {/* ===================================================
//                 TECHNICAL SKILLS
//             =================================================== */}

//             <JourneyItem icon={Layers3}>
//               <GlassCard>
//                 <SectionHeading
//                   icon={Layers3}
//                   label="Technical Skills"
//                   title="Tools I Work With"
//                 />

//                 <div className="mt-8 space-y-6">
//                   <SkillGroup
//                     title="Languages"
//                     skills={[
//                       "JavaScript",
//                       "Python",
//                       "C++",
//                       "HTML",
//                       "CSS",
//                     ]}
//                   />

//                   <SkillGroup
//                     title="Frontend & Backend"
//                     skills={[
//                       "React.js",
//                       "Node.js",
//                       "Express.js",
//                     ]}
//                   />

//                   <SkillGroup
//                     title="Databases"
//                     skills={[
//                       "MongoDB",
//                       "PostgreSQL",
//                       "Prisma",
//                     ]}
//                   />

//                   <SkillGroup
//                     title="Tools & Platforms"
//                     skills={[
//                       "Git",
//                       "GitHub",
//                       "Linux",
//                       "Windows",
//                     ]}
//                   />
//                 </div>
//               </GlassCard>
//             </JourneyItem>

//             {/* ===================================================
//                 CURRENTLY
//             =================================================== */}

//             <JourneyItem icon={BrainCircuit}>
//               <GlassCard>
//                 <SectionHeading
//                   icon={BrainCircuit}
//                   label="Currently"
//                   title="What I'm Focused On"
//                 />

//                 <div className="mt-7 grid gap-4 md:grid-cols-2">
//                   <FocusCard
//                     title="Building"
//                     description="Creating full-stack applications and experimenting with better architecture and user experiences."
//                   />

//                   <FocusCard
//                     title="Learning"
//                     description="Deepening my understanding of backend systems, databases, cloud technologies, AI, and cybersecurity."
//                   />

//                   <FocusCard
//                     title="Improving"
//                     description="Writing cleaner code, designing better APIs, and becoming more intentional about software architecture."
//                   />

//                   <FocusCard
//                     title="Exploring"
//                     description="Finding interesting problems where technology can turn an idea into something useful."
//                   />
//                 </div>
//               </GlassCard>
//             </JourneyItem>

//             {/* ===================================================
//                 GOALS
//             =================================================== */}

//             <JourneyItem icon={Target} last>
//               <GlassCard>
//                 <SectionHeading
//                   icon={Target}
//                   label="Looking Ahead"
//                   title="Where I'm Going"
//                 />

//                 <p className="mt-6 max-w-4xl text-sm leading-7 text-[#c9d1d9] sm:text-base">
//                   My goal is to keep growing as a software
//                   engineer by building increasingly meaningful
//                   and technically challenging products.
//                 </p>

//                 <div className="mt-7 grid gap-3 sm:grid-cols-3">
//                   <GoalCard text="Build meaningful software" />
//                   <GoalCard text="Keep learning" />
//                   <GoalCard text="Become a stronger engineer" />
//                 </div>
//               </GlassCard>
//             </JourneyItem>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* ===============================================================
//    JOURNEY ITEM
// =============================================================== */

// function JourneyItem({
//   children,
//   icon: Icon,
//   last = false,
// }) {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 55,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//         amount: 0.15,
//       }}
//       transition={{
//         duration: 0.75,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="relative pl-12 sm:pl-16"
//     >
//       {/* Glowing timeline node */}

//       <div
//         className="
//           absolute
//           left-[22px]
//           top-8
//           z-30
//           -translate-x-1/2
//           sm:left-[30px]
//         "
//       >
//         {/* Pulse */}

//         <motion.div
//           animate={{
//             scale: [1, 1.65, 1],
//             opacity: [0.4, 0, 0.4],
//           }}
//           transition={{
//             duration: 2.8,
//             repeat: Infinity,
//             ease: "easeOut",
//           }}
//           className="
//             absolute
//             inset-[-10px]
//             rounded-full
//             border
//             border-[#58a6ff]/40
//           "
//         />

//         {/* Glow */}

//         <div
//           className="
//             absolute
//             inset-[-7px]
//             rounded-full
//             bg-[#58a6ff]/20
//             blur-lg
//           "
//         />

//         {/* Circle */}

//         <div
//           className="
//             relative
//             flex
//             h-6
//             w-6
//             items-center
//             justify-center
//             rounded-full
//             border
//             border-[#58a6ff]/60
//             bg-[#0d1117]
//             shadow-[0_0_25px_rgba(88,166,255,0.45)]
//           "
//         >
//           <Icon
//             size={11}
//             className="text-[#58a6ff]"
//           />
//         </div>
//       </div>

//       {/* Card */}

//       <div className="relative">
//         {children}
//       </div>
//     </motion.div>
//   );
// }

// /* ===============================================================
//    GLASS CARD
// =============================================================== */

// function GlassCard({ children }) {
//   return (
//     <div
//       className="
//         group
//         relative
//         overflow-hidden
//         rounded-2xl
//         border
//         border-white/[0.09]
//         bg-[#161b22]/55
//         p-6
//         shadow-[0_25px_70px_rgba(0,0,0,0.32)]
//         backdrop-blur-2xl
//         backdrop-saturate-150
//         transition-all
//         duration-500
//         hover:border-[#58a6ff]/25
//         hover:shadow-[0_30px_85px_rgba(0,0,0,0.42)]
//         sm:p-8
//       "
//     >
//       {/* Top glass reflection */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-x-0
//           top-0
//           h-32
//           bg-gradient-to-b
//           from-white/[0.045]
//           to-transparent
//         "
//       />

//       {/* Blue glow */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-24
//           -top-24
//           h-56
//           w-56
//           rounded-full
//           bg-[#58a6ff]/[0.055]
//           blur-3xl
//           transition-all
//           duration-700
//           group-hover:bg-[#58a6ff]/[0.10]
//         "
//       />

//       {/* Purple glow */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -bottom-24
//           -left-20
//           h-52
//           w-52
//           rounded-full
//           bg-[#a371f7]/[0.045]
//           blur-3xl
//         "
//       />

//       <div className="relative z-10">
//         {children}
//       </div>
//     </div>
//   );
// }

// /* ===============================================================
//    SECTION HEADING
// =============================================================== */

// function SectionHeading({
//   icon: Icon,
//   label,
//   title,
// }) {
//   return (
//     <div>
//       <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#58a6ff]">
//         <Icon size={14} />

//         <span>{label}</span>
//       </div>

//       <h2
//         className="
//           mt-2
//           text-2xl
//           font-semibold
//           tracking-[-0.6px]
//           text-[#f0f6fc]
//           sm:text-3xl
//         "
//       >
//         {title}
//       </h2>
//     </div>
//   );
// }

// /* ===============================================================
//    EDUCATION CARD
// =============================================================== */

// function EducationCard({
//   degree,
//   institution,
//   period,
//   location,
//   current = false,
// }) {
//   return (
//     <div
//       className="
//         rounded-xl
//         border
//         border-white/[0.07]
//         bg-[#0d1117]/40
//         p-5
//         transition-all
//         duration-300
//         hover:border-[#58a6ff]/20
//         hover:bg-[#0d1117]/55
//       "
//     >
//       <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
//         <div>
//           <div className="flex flex-wrap items-center gap-2">
//             <h3 className="font-semibold text-[#f0f6fc]">
//               {degree}
//             </h3>

//             {current && (
//               <span
//                 className="
//                   rounded-full
//                   border
//                   border-[#3fb950]/25
//                   bg-[#3fb950]/[0.08]
//                   px-2
//                   py-0.5
//                   text-[10px]
//                   font-medium
//                   text-[#3fb950]
//                 "
//               >
//                 Current
//               </span>
//             )}
//           </div>

//           <p className="mt-2 text-sm text-[#58a6ff]">
//             {institution}
//           </p>
//         </div>

//         <div className="flex shrink-0 items-center gap-2 text-xs text-[#8b949e]">
//           <CalendarDays size={14} />

//           <span>{period}</span>
//         </div>
//       </div>

//       <div className="mt-4 flex items-center gap-2 text-xs text-[#6e7681]">
//         <MapPin size={14} />

//         <span>{location}</span>
//       </div>
//     </div>
//   );
// }

// /* ===============================================================
//    EXPERTISE CARD
// =============================================================== */

// function ExpertiseCard({
//   icon: Icon,
//   title,
//   description,
// }) {
//   return (
//     <div
//       className="
//         rounded-xl
//         border
//         border-white/[0.07]
//         bg-[#0d1117]/35
//         p-5
//         transition-all
//         duration-300
//         hover:-translate-y-1
//         hover:border-[#58a6ff]/25
//         hover:bg-[#0d1117]/50
//       "
//     >
//       <div
//         className="
//           mb-5
//           flex
//           h-10
//           w-10
//           items-center
//           justify-center
//           rounded-lg
//           border
//           border-[#58a6ff]/20
//           bg-[#58a6ff]/[0.07]
//           text-[#58a6ff]
//         "
//       >
//         <Icon size={18} />
//       </div>

//       <h3 className="font-semibold text-[#f0f6fc]">
//         {title}
//       </h3>

//       <p className="mt-2 text-sm leading-6 text-[#8b949e]">
//         {description}
//       </p>
//     </div>
//   );
// }

// /* ===============================================================
//    SKILLS
// =============================================================== */

// function SkillGroup({
//   title,
//   skills,
// }) {
//   return (
//     <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
//       <div className="w-full shrink-0 text-sm font-medium text-[#c9d1d9] sm:w-40">
//         {title}
//       </div>

//       <div className="flex flex-wrap gap-2">
//         {skills.map((skill) => (
//           <span
//             key={skill}
//             className="
//               rounded-full
//               border
//               border-[#30363d]
//               bg-[#0d1117]/55
//               px-3
//               py-1.5
//               text-xs
//               font-medium
//               text-[#8b949e]
//               backdrop-blur-md
//               transition-all
//               duration-200
//               hover:border-[#58a6ff]/30
//               hover:text-[#c9d1d9]
//             "
//           >
//             {skill}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ===============================================================
//    FOCUS CARD
// =============================================================== */

// function FocusCard({
//   title,
//   description,
// }) {
//   return (
//     <div
//       className="
//         rounded-xl
//         border
//         border-white/[0.07]
//         bg-[#0d1117]/35
//         p-5
//         transition-all
//         duration-300
//         hover:border-[#58a6ff]/20
//       "
//     >
//       <h3 className="font-medium text-[#f0f6fc]">
//         {title}
//       </h3>

//       <p className="mt-2 text-sm leading-6 text-[#8b949e]">
//         {description}
//       </p>
//     </div>
//   );
// }

// /* ===============================================================
//    INFO PILL
// =============================================================== */

// function InfoPill({
//   icon: Icon,
//   text,
// }) {
//   return (
//     <div
//       className="
//         inline-flex
//         items-center
//         gap-2
//         rounded-full
//         border
//         border-white/[0.08]
//         bg-[#0d1117]/45
//         px-3
//         py-1.5
//         text-xs
//         text-[#8b949e]
//       "
//     >
//       <Icon
//         size={13}
//         className="text-[#58a6ff]"
//       />

//       <span>{text}</span>
//     </div>
//   );
// }

// /* ===============================================================
//    GOAL CARD
// =============================================================== */

// function GoalCard({ text }) {
//   return (
//     <div
//       className="
//         rounded-xl
//         border
//         border-[#58a6ff]/10
//         bg-[#58a6ff]/[0.035]
//         px-4
//         py-4
//         text-sm
//         text-[#c9d1d9]
//       "
//     >
//       <div className="mb-2 h-1.5 w-1.5 rounded-full bg-[#58a6ff] shadow-[0_0_8px_rgba(88,166,255,0.7)]" />

//       {text}
//     </div>
//   );
// }


import {
  UserRound,
  GraduationCap,
  Code2,
  BrainCircuit,
  Target,
  Sparkles,
  MapPin,
  CalendarDays,
  GitBranch,
  Layers3,
  Cpu,
  Braces,
  Lightbulb,
} from "lucide-react";

import { motion } from "motion/react";

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-20 pt-24 text-[#f0f6fc] sm:px-6 lg:px-8">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[5%]
          top-[8%]
          h-80
          w-80
          rounded-full
          bg-[#58a6ff]/[0.055]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[3%]
          top-[38%]
          h-96
          w-96
          rounded-full
          bg-[#a371f7]/[0.05]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[5%]
          left-[30%]
          h-80
          w-80
          rounded-full
          bg-[#58a6ff]/[0.035]
          blur-3xl
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* =======================================================
            PAGE HEADER
        ======================================================= */}

        <motion.section
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16"
        >
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-[#58a6ff]">
            <UserRound size={16} />

            <span>README / About</span>
          </div>

          <h1
            className="
              text-4xl
              font-semibold
              tracking-[-1.2px]
              sm:text-5xl
            "
          >
            The person behind the commits.
          </h1>

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-[#8b949e]
              sm:text-base
            "
          >
            A little more about my background, what I build,
            what I am learning, and where I want to go next.
          </p>
        </motion.section>

        {/* =======================================================
            JOURNEY
        ======================================================= */}

        <section className="relative">
          {/* Main glowing journey line */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[22px]
              top-0
              w-px
              bg-gradient-to-b
              from-transparent
              via-[#58a6ff]/40
              to-transparent
              sm:left-[30px]
            "
          />

          {/* Line glow */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[22px]
              top-0
              w-8
              -translate-x-1/2
              bg-[#58a6ff]/[0.025]
              blur-xl
              sm:left-[30px]
            "
          />

          <div className="flex flex-col gap-16">
            {/* ===================================================
                INTRO
            =================================================== */}

            <JourneyItem icon={Sparkles}>
              <GlassCard>
                <SectionHeading
                  icon={Sparkles}
                  label="Hello"
                  title="Hi, I'm Aryan."
                />

                <p className="mt-6 max-w-4xl text-sm leading-7 text-[#c9d1d9] sm:text-base">
                  I'm a full-stack developer who enjoys turning
                  ideas into functional web applications. I like
                  working across the stack — from building
                  interfaces and APIs to designing databases and
                  connecting the pieces together.
                </p>

                <p className="mt-4 max-w-4xl text-sm leading-7 text-[#8b949e] sm:text-base">
                  Alongside development, I'm strengthening my
                  problem-solving skills through DSA and
                  programming practice while exploring Generative
                  AI and modern AI-powered applications.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  <InfoPill
                    icon={Code2}
                    text="Full Stack Development"
                  />

                  <InfoPill
                    icon={BrainCircuit}
                    text="Generative AI"
                  />

                  <InfoPill
                    icon={GitBranch}
                    text="DSA & Problem Solving"
                  />

                  <InfoPill
                    icon={Braces}
                    text="Java"
                  />
                </div>
              </GlassCard>
            </JourneyItem>

            {/* ===================================================
                EDUCATION
            =================================================== */}

            <JourneyItem icon={GraduationCap}>
              <GlassCard>
                <SectionHeading
                  icon={GraduationCap}
                  label="Education"
                  title="Academic Journey"
                />

                <div className="mt-7 space-y-5">
                  <EducationCard
                    degree="Master of Computer Application"
                    institution="SIES College of Management Studies"
                    period="Sept 2026 — May 2028"
                    location="Navi Mumbai, Maharashtra"
                    current
                  />

                  <EducationCard
                    degree="Bachelor of Computer Application"
                    institution="Sri Balaji University"
                    period="Aug 2023 — May 2026"
                    location="Pune, Maharashtra"
                  />
                </div>
              </GlassCard>
            </JourneyItem>

            {/* ===================================================
                EXPERTISE
            =================================================== */}

            <JourneyItem icon={Code2}>
              <GlassCard>
                <SectionHeading
                  icon={Code2}
                  label="Expertise"
                  title="What I Like Building"
                />

                <div className="mt-7 grid gap-4 md:grid-cols-3">
                  <ExpertiseCard
                    icon={Code2}
                    title="Full Stack"
                    description="Building complete web applications across frontend, backend, APIs, and databases."
                  />

                  <ExpertiseCard
                    icon={GitBranch}
                    title="Backend & APIs"
                    description="Designing APIs, authentication, data flows, and maintainable server-side systems."
                  />

                  <ExpertiseCard
                    icon={BrainCircuit}
                    title="Generative AI"
                    description="Exploring how generative AI can be integrated into applications and developer workflows."
                  />

                  <ExpertiseCard
                    icon={Cpu}
                    title="Problem Solving"
                    description="Practicing data structures and algorithms to improve logical thinking and programming fundamentals."
                  />

                  <ExpertiseCard
                    icon={Braces}
                    title="Java"
                    description="Strengthening Java programming and object-oriented programming fundamentals."
                  />

                  <ExpertiseCard
                    icon={Layers3}
                    title="Product Thinking"
                    description="Turning ideas into usable applications instead of focusing only on isolated technical features."
                  />
                </div>
              </GlassCard>
            </JourneyItem>

            {/* ===================================================
                TECHNICAL SKILLS
            =================================================== */}

            <JourneyItem icon={Layers3}>
              <GlassCard>
                <SectionHeading
                  icon={Layers3}
                  label="Technical Skills"
                  title="Tools I Work With"
                />

                <div className="mt-8 space-y-6">
                  <SkillGroup
                    title="Languages"
                    skills={[
                      "JavaScript",
                      "Java",
                      "Python",
                      "C++",
                      "HTML",
                      "CSS",
                    ]}
                  />

                  <SkillGroup
                    title="Frontend"
                    skills={[
                      "React.js",
                      "Tailwind CSS",
                    ]}
                  />

                  <SkillGroup
                    title="Backend"
                    skills={[
                      "Node.js",
                      "Express.js",
                      "REST APIs",
                    ]}
                  />

                  <SkillGroup
                    title="Databases"
                    skills={[
                      "MongoDB",
                      "PostgreSQL",
                      "Prisma",
                    ]}
                  />

                  <SkillGroup
                    title="DSA"
                    skills={[
                      "Data Structures",
                      "Algorithms",
                      "Problem Solving",
                    ]}
                  />

                  <SkillGroup
                    title="Generative AI"
                    skills={[
                      "Generative AI",
                      "AI Applications",
                      "AI-assisted Development",
                    ]}
                  />

                  <SkillGroup
                    title="Tools"
                    skills={[
                      "Git",
                      "GitHub",
                      "Linux",
                      "Windows",
                    ]}
                  />
                </div>
              </GlassCard>
            </JourneyItem>

            {/* ===================================================
                CURRENTLY LEARNING
            =================================================== */}

            <JourneyItem icon={BrainCircuit}>
              <GlassCard>
                <SectionHeading
                  icon={BrainCircuit}
                  label="Currently Learning"
                  title="What I'm Focused On"
                />

                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  <FocusCard
                    icon={BrainCircuit}
                    title="Generative AI"
                    description="Exploring generative AI concepts, AI-powered applications, and how modern AI systems can be integrated into software products."
                  />

                  <FocusCard
                    icon={GitBranch}
                    title="DSA & Problem Solving"
                    description="Regularly practicing data structures and algorithms to strengthen logical thinking, coding fundamentals, and problem-solving ability."
                  />

                  <FocusCard
                    icon={Braces}
                    title="Java"
                    description="Building stronger Java fundamentals alongside object-oriented programming, data structures, algorithms, and problem-solving."
                  />

                  <FocusCard
                    icon={Code2}
                    title="Full Stack Architecture"
                    description="Continuing to improve backend architecture, APIs, databases, scalability, and overall application design."
                  />
                </div>
              </GlassCard>
            </JourneyItem>

            {/* ===================================================
                MINDSET
            =================================================== */}

            <JourneyItem icon={Lightbulb}>
              <GlassCard>
                <SectionHeading
                  icon={Lightbulb}
                  label="Developer Mindset"
                  title="How I Like to Learn"
                />

                <div className="mt-7 grid gap-4 md:grid-cols-3">
                  <FocusCard
                    title="Build"
                    description="I learn best by turning concepts into working applications and experimenting with real projects."
                  />

                  <FocusCard
                    title="Solve"
                    description="DSA and programming problems help me develop stronger logical thinking and approach problems from different angles."
                  />

                  <FocusCard
                    title="Explore"
                    description="I enjoy exploring new technologies such as Generative AI and understanding where they can create useful solutions."
                  />
                </div>
              </GlassCard>
            </JourneyItem>

            {/* ===================================================
                GOALS
            =================================================== */}

            <JourneyItem icon={Target}>
              <GlassCard>
                <SectionHeading
                  icon={Target}
                  label="Looking Ahead"
                  title="Where I'm Going"
                />

                <p className="mt-6 max-w-4xl text-sm leading-7 text-[#c9d1d9] sm:text-base">
                  My goal is to keep growing as a software
                  engineer by building increasingly meaningful
                  and technically challenging products.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <GoalCard text="Build meaningful software" />
                  <GoalCard text="Keep solving harder problems" />
                  <GoalCard text="Become a stronger engineer" />
                </div>
              </GlassCard>
            </JourneyItem>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ===============================================================
   JOURNEY ITEM
=============================================================== */

function JourneyItem({
  children,
  icon: Icon,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 55,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative pl-12 sm:pl-16"
    >
      {/* Timeline node */}

      <div
        className="
          absolute
          left-[22px]
          top-8
          z-30
          -translate-x-1/2
          sm:left-[30px]
        "
      >
        {/* Pulse */}

        <motion.div
          animate={{
            scale: [1, 1.65, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="
            absolute
            inset-[-10px]
            rounded-full
            border
            border-[#58a6ff]/40
          "
        />

        {/* Glow */}

        <div
          className="
            absolute
            inset-[-7px]
            rounded-full
            bg-[#58a6ff]/20
            blur-lg
          "
        />

        {/* Circle */}

        <div
          className="
            relative
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            border
            border-[#58a6ff]/60
            bg-[#0d1117]
            shadow-[0_0_25px_rgba(88,166,255,0.45)]
          "
        >
          <Icon
            size={11}
            className="text-[#58a6ff]"
          />
        </div>
      </div>

      {children}
    </motion.div>
  );
}

/* ===============================================================
   GLASS CARD
=============================================================== */

function GlassCard({ children }) {
  return (
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

      {/* Blue ambient glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-56
          w-56
          rounded-full
          bg-[#58a6ff]/[0.055]
          blur-3xl
          transition-all
          duration-700
          group-hover:bg-[#58a6ff]/[0.10]
        "
      />

      {/* Purple ambient glow */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-20
          h-52
          w-52
          rounded-full
          bg-[#a371f7]/[0.045]
          blur-3xl
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

/* ===============================================================
   SECTION HEADING
=============================================================== */

function SectionHeading({
  icon: Icon,
  label,
  title,
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#58a6ff]">
        <Icon size={14} />

        <span>{label}</span>
      </div>

      <h2
        className="
          mt-2
          text-2xl
          font-semibold
          tracking-[-0.6px]
          text-[#f0f6fc]
          sm:text-3xl
        "
      >
        {title}
      </h2>
    </div>
  );
}

/* ===============================================================
   EDUCATION CARD
=============================================================== */

function EducationCard({
  degree,
  institution,
  period,
  location,
  current = false,
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-white/[0.07]
        bg-[#0d1117]/40
        p-5
        transition-all
        duration-300
        hover:border-[#58a6ff]/20
        hover:bg-[#0d1117]/55
      "
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-[#f0f6fc]">
              {degree}
            </h3>

            {current && (
              <span
                className="
                  rounded-full
                  border
                  border-[#3fb950]/25
                  bg-[#3fb950]/[0.08]
                  px-2
                  py-0.5
                  text-[10px]
                  font-medium
                  text-[#3fb950]
                "
              >
                Current
              </span>
            )}
          </div>

          <p className="mt-2 text-sm text-[#58a6ff]">
            {institution}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2 text-xs text-[#8b949e]">
          <CalendarDays size={14} />

          <span>{period}</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-[#6e7681]">
        <MapPin size={14} />

        <span>{location}</span>
      </div>
    </div>
  );
}

/* ===============================================================
   EXPERTISE CARD
=============================================================== */

function ExpertiseCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-white/[0.07]
        bg-[#0d1117]/35
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#58a6ff]/25
        hover:bg-[#0d1117]/50
      "
    >
      <div
        className="
          mb-5
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-lg
          border
          border-[#58a6ff]/20
          bg-[#58a6ff]/[0.07]
          text-[#58a6ff]
        "
      >
        <Icon size={18} />
      </div>

      <h3 className="font-semibold text-[#f0f6fc]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#8b949e]">
        {description}
      </p>
    </div>
  );
}

/* ===============================================================
   SKILL GROUP
=============================================================== */

function SkillGroup({
  title,
  skills,
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
      <div className="w-full shrink-0 text-sm font-medium text-[#c9d1d9] sm:w-40">
        {title}
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              rounded-full
              border
              border-[#30363d]
              bg-[#0d1117]/55
              px-3
              py-1.5
              text-xs
              font-medium
              text-[#8b949e]
              backdrop-blur-md
              transition-all
              duration-200
              hover:border-[#58a6ff]/30
              hover:text-[#c9d1d9]
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ===============================================================
   FOCUS CARD
=============================================================== */

function FocusCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-white/[0.07]
        bg-[#0d1117]/35
        p-5
        transition-all
        duration-300
        hover:border-[#58a6ff]/20
        hover:bg-[#0d1117]/50
      "
    >
      {Icon && (
        <div
          className="
            mb-4
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            border
            border-[#58a6ff]/15
            bg-[#58a6ff]/[0.05]
            text-[#58a6ff]
          "
        >
          <Icon size={16} />
        </div>
      )}

      <h3 className="font-medium text-[#f0f6fc]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#8b949e]">
        {description}
      </p>
    </div>
  );
}

/* ===============================================================
   INFO PILL
=============================================================== */

function InfoPill({
  icon: Icon,
  text,
}) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-white/[0.08]
        bg-[#0d1117]/45
        px-3
        py-1.5
        text-xs
        text-[#8b949e]
      "
    >
      <Icon
        size={13}
        className="text-[#58a6ff]"
      />

      <span>{text}</span>
    </div>
  );
}

/* ===============================================================
   GOAL CARD
=============================================================== */

function GoalCard({ text }) {
  return (
    <div
      className="
        rounded-xl
        border
        border-[#58a6ff]/10
        bg-[#58a6ff]/[0.035]
        px-4
        py-4
        text-sm
        text-[#c9d1d9]
      "
    >
      <div
        className="
          mb-2
          h-1.5
          w-1.5
          rounded-full
          bg-[#58a6ff]
          shadow-[0_0_8px_rgba(88,166,255,0.7)]
        "
      />

      {text}
    </div>
  );
}