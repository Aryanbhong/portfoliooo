// import {
//   ArrowLeft,
//   Star,
//   GitFork,
//   Code2,
//   ExternalLink,
//   GitBranch,
// } from "lucide-react";

// import {
//   motion,
// } from "motion/react";

// import {
//   Link,
//   useParams,
// } from "react-router-dom";

// import { repositories } from "../data/portfolio";

// export default function Repository() {
//   const { repoId } = useParams();

//   const repo = repositories.find(
//     (item) => String(item.id) === String(repoId)
//   );

//   if (!repo) {
//     return (
//       <main className="repository-not-found">

//         <h1>
//           Repository not found
//         </h1>

//         <Link to="/">
//           ← Back to profile
//         </Link>

//       </main>
//     );
//   }

//   return (
//     <main className="repository-page">

//       {/* Background decoration */}

//       <div className="repository-bg">
//         <div className="repo-glow repo-glow-one" />
//         <div className="repo-glow repo-glow-two" />
//       </div>


//       {/* Header */}

//       <motion.header
//         className="repository-header"
//         initial={{
//           opacity: 0,
//           y: -30,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 0.6,
//         }}
//       >

//         <Link
//           to="/"
//           className="back-button"
//         >
//           <ArrowLeft size={18} />
//           Back to profile
//         </Link>

//       </motion.header>


//       {/* Hero */}

//       <motion.section
//         className="repository-hero"
//         initial={{
//           opacity: 0,
//           y: 60,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 0.8,
//           delay: 0.1,
//         }}
//       >

//         <div className="repository-title-row">

//           <div>

//             <div className="repository-name-row">

//               <Code2 size={28} />

//               <h1>
//                 {repo.name}
//               </h1>

//               <span className="public-badge">
//                 Public
//               </span>

//             </div>

//             <p className="repository-description">
//               {repo.description}
//             </p>

//           </div>

//         </div>


//         {/* Stats */}

//         <div className="repository-stats">

//           <span>
//             <Star size={17} />
//             {repo.stars} stars
//           </span>

//           <span>
//             <GitFork size={17} />
//             {repo.forks} forks
//           </span>

//           <span>
//             <GitBranch size={17} />
//             {repo.language}
//           </span>

//         </div>


//         {/* Topics */}

//         <div className="repository-topics">

//           {repo.topics.map((topic) => (
//             <span
//               key={topic}
//               className="topic"
//             >
//               {topic}
//             </span>
//           ))}

//         </div>

//       </motion.section>


//       {/* Main content */}

//       <section className="repository-content">

//         <motion.article
//           className="readme-card"
//           initial={{
//             opacity: 0,
//             y: 50,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.7,
//             delay: 0.25,
//           }}
//         >

//           <div className="readme-header">

//             <span>
//               README.md
//             </span>

//           </div>


//           <div className="readme-body">

//             <h2>
//               {repo.name}
//             </h2>

//             <p>
//               {repo.description}
//             </p>


//             <h3>
//               About this project
//             </h3>

//             <p>
//               This project is part of my developer
//               portfolio. It demonstrates my approach
//               to building modern interfaces, solving
//               problems, and experimenting with
//               interactive web experiences.
//             </p>


//             <h3>
//               Tech stack
//             </h3>

//             <div className="tech-stack">

//               {repo.topics.map((topic) => (
//                 <span
//                   key={topic}
//                   className="tech-item"
//                 >
//                   {topic}
//                 </span>
//               ))}

//             </div>


//             <h3>
//               What I learned
//             </h3>

//             <ul>
//               <li>
//                 Building reusable React components
//               </li>

//               <li>
//                 Creating interactive animations
//               </li>

//               <li>
//                 Designing responsive interfaces
//               </li>

//               <li>
//                 Structuring a scalable project
//               </li>
//             </ul>

//           </div>

//         </motion.article>


//         {/* Sidebar */}

//         <motion.aside
//           className="repository-sidebar"
//           initial={{
//             opacity: 0,
//             x: 40,
//           }}
//           animate={{
//             opacity: 1,
//             x: 0,
//           }}
//           transition={{
//             duration: 0.7,
//             delay: 0.4,
//           }}
//         >

//           <h3>
//             About
//           </h3>

//           <p>
//             {repo.description}
//           </p>


//           <div className="repo-sidebar-stat">

//             <Star size={16} />

//             <span>
//               {repo.stars} stars
//             </span>

//           </div>


//           <div className="repo-sidebar-stat">

//             <GitFork size={16} />

//             <span>
//               {repo.forks} forks
//             </span>

//           </div>


//           <div className="repo-sidebar-stat">

//             <Code2 size={16} />

//             <span>
//               {repo.language}
//             </span>

//           </div>


//           <a
//             href="#"
//             className="live-demo"
//           >
//             <ExternalLink size={16} />
//             View project
//           </a>

//         </motion.aside>

//       </section>

//     </main>
//   );
// }


// import {
//   ArrowLeft,
//   Star,
//   GitFork,
//   Code2,
//   ExternalLink,
//   GitBranch,
// } from "lucide-react";

// import { motion } from "motion/react";

// import {
//   Link,
//   useParams,
// } from "react-router-dom";

// import { repositories } from "../data/portfolio";

// export default function Repository() {
//   const { repoId } = useParams();

//   const repo = repositories.find(
//     (item) => String(item.id) === String(repoId)
//   );

//   if (!repo) {
//     return (
//       <main
//         className="
//           flex
//           min-h-screen
//           items-center
//           justify-center
//           bg-[#0d1117]
//           px-6
//           text-[#f0f6fc]
//         "
//       >
//         <div className="text-center">
//           <h1 className="text-2xl font-semibold">
//             Repository not found
//           </h1>

//           <Link
//             to="/"
//             className="
//               mt-4
//               inline-flex
//               rounded-md
//               px-3
//               py-2
//               text-sm
//               text-[#58a6ff]
//               transition-colors
//               hover:bg-[#161b22]
//               hover:text-[#79c0ff]
//             "
//           >
//             ← Back to profile
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main
//       className="
//         relative
//         min-h-screen
//         overflow-hidden
//         bg-[#0d1117]
//         text-[#f0f6fc]
//       "
//     >
//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           fixed
//           inset-0
//           overflow-hidden
//         "
//       >
//         <div
//           className="
//             absolute
//             left-[-180px]
//             top-[100px]
//             h-[500px]
//             w-[500px]
//             rounded-full
//             bg-[#58a6ff]/10
//             blur-[120px]
//           "
//         />

//         <div
//           className="
//             absolute
//             bottom-[-180px]
//             right-[-100px]
//             h-[500px]
//             w-[500px]
//             rounded-full
//             bg-[#a371f7]/10
//             blur-[120px]
//           "
//         />

//         <div
//           className="
//             absolute
//             inset-0
//             bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,17,23,0.35)_70%)]
//           "
//         />
//       </div>

//       {/* =====================================================
//           HEADER
//       ===================================================== */}

//       <motion.header
//         initial={{
//           opacity: 0,
//           y: -30,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 0.6,
//         }}
//         className="
//           relative
//           z-10
//           mx-auto
//           flex
//           w-full
//           max-w-[1200px]
//           items-center
//           px-6
//           py-6

//           max-[600px]:px-4
//         "
//       >
//         <Link
//           to="/"
//           className="
//             group
//             inline-flex
//             items-center
//             gap-2
//             rounded-lg
//             border
//             border-[#30363d]
//             bg-[#161b22]/80
//             px-3
//             py-2
//             text-sm
//             font-medium
//             text-[#8b949e]
//             backdrop-blur-xl
//             transition-all
//             hover:border-[#484f58]
//             hover:bg-[#21262d]
//             hover:text-[#f0f6fc]
//           "
//         >
//           <ArrowLeft
//             size={18}
//             className="
//               transition-transform
//               group-hover:-translate-x-1
//             "
//           />

//           Back to profile
//         </Link>
//       </motion.header>

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <motion.section
//         initial={{
//           opacity: 0,
//           y: 60,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 0.8,
//           delay: 0.1,
//         }}
//         className="
//           relative
//           z-10
//           mx-auto
//           w-full
//           max-w-[1200px]
//           px-6
//           pb-8

//           max-[600px]:px-4
//         "
//       >
//         {/* Repository title */}

//         <div>
//           <div
//             className="
//               flex
//               flex-wrap
//               items-center
//               gap-3
//             "
//           >
//             <div
//               className="
//                 flex
//                 h-11
//                 w-11
//                 shrink-0
//                 items-center
//                 justify-center
//                 rounded-xl
//                 border
//                 border-[#30363d]
//                 bg-[#161b22]
//                 text-[#58a6ff]
//                 shadow-[0_8px_30px_rgba(0,0,0,0.2)]
//               "
//             >
//               <Code2 size={28} />
//             </div>

//             <h1
//               className="
//                 text-3xl
//                 font-semibold
//                 tracking-[-0.8px]

//                 max-[600px]:text-2xl
//               "
//             >
//               {repo.name}
//             </h1>

//             <span
//               className="
//                 rounded-full
//                 border
//                 border-[#30363d]
//                 bg-[#161b22]
//                 px-2.5
//                 py-1
//                 text-xs
//                 font-medium
//                 text-[#8b949e]
//               "
//             >
//               Public
//             </span>
//           </div>

//           <p
//             className="
//               mt-4
//               max-w-2xl
//               text-base
//               leading-7
//               text-[#8b949e]
//             "
//           >
//             {repo.description}
//           </p>
//         </div>

//         {/* Stats */}

//         <div
//           className="
//             mt-6
//             flex
//             flex-wrap
//             items-center
//             gap-5
//             text-sm
//             text-[#8b949e]
//           "
//         >
//           <span className="flex items-center gap-1.5">
//             <Star
//               size={17}
//               className="text-[#e3b341]"
//             />

//             {repo.stars} stars
//           </span>

//           <span className="flex items-center gap-1.5">
//             <GitFork
//               size={17}
//               className="text-[#58a6ff]"
//             />

//             {repo.forks} forks
//           </span>

//           <span className="flex items-center gap-1.5">
//             <GitBranch
//               size={17}
//               className="text-[#3fb950]"
//             />

//             {repo.language}
//           </span>
//         </div>

//         {/* Topics */}

//         <div
//           className="
//             mt-5
//             flex
//             flex-wrap
//             gap-2
//           "
//         >
//           {repo.topics.map((topic) => (
//             <span
//               key={topic}
//               className="
//                 rounded-full
//                 border
//                 border-[#30363d]
//                 bg-[#161b22]
//                 px-2.5
//                 py-1
//                 text-xs
//                 font-medium
//                 text-[#58a6ff]
//                 transition-colors
//                 hover:border-[#58a6ff]/40
//                 hover:bg-[#58a6ff]/10
//               "
//             >
//               {topic}
//             </span>
//           ))}
//         </div>
//       </motion.section>

//       {/* =====================================================
//           MAIN CONTENT
//       ===================================================== */}

//       <section
//         className="
//           relative
//           z-10
//           mx-auto
//           grid
//           w-full
//           max-w-[1200px]
//           grid-cols-[minmax(0,1fr)_280px]
//           gap-6
//           px-6
//           pb-16

//           max-[850px]:grid-cols-1
//           max-[600px]:px-4
//         "
//       >
//         {/* ===================================================
//             README
//         =================================================== */}

//         <motion.article
//           initial={{
//             opacity: 0,
//             y: 50,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.7,
//             delay: 0.25,
//           }}
//           className="
//             min-w-0
//             overflow-hidden
//             rounded-xl
//             border
//             border-[#30363d]
//             bg-[#161b22]/90
//             shadow-[0_20px_60px_rgba(0,0,0,0.22)]
//             backdrop-blur-xl
//           "
//         >
//           {/* README header */}

//           <div
//             className="
//               border-b
//               border-[#30363d]
//               bg-[#161b22]
//               px-5
//               py-3
//               text-sm
//               font-medium
//               text-[#8b949e]
//             "
//           >
//             README.md
//           </div>

//           {/* README body */}

//           <div
//             className="
//               px-7
//               py-8

//               max-[600px]:px-5
//               max-[600px]:py-6
//             "
//           >
//             <h2
//               className="
//                 text-2xl
//                 font-semibold
//                 tracking-[-0.4px]
//               "
//             >
//               {repo.name}
//             </h2>

//             <p
//               className="
//                 mt-3
//                 text-sm
//                 leading-7
//                 text-[#8b949e]
//               "
//             >
//               {repo.description}
//             </p>

//             <h3
//               className="
//                 mt-9
//                 text-lg
//                 font-semibold
//               "
//             >
//               About this project
//             </h3>

//             <p
//               className="
//                 mt-3
//                 text-sm
//                 leading-7
//                 text-[#8b949e]
//               "
//             >
//               This project is part of my developer
//               portfolio. It demonstrates my approach
//               to building modern interfaces, solving
//               problems, and experimenting with
//               interactive web experiences.
//             </p>

//             <h3
//               className="
//                 mt-9
//                 text-lg
//                 font-semibold
//               "
//             >
//               Tech stack
//             </h3>

//             <div
//               className="
//                 mt-4
//                 flex
//                 flex-wrap
//                 gap-2
//               "
//             >
//               {repo.topics.map((topic) => (
//                 <span
//                   key={topic}
//                   className="
//                     rounded-lg
//                     border
//                     border-[#30363d]
//                     bg-[#21262d]
//                     px-3
//                     py-1.5
//                     text-xs
//                     font-medium
//                     text-[#8b949e]
//                   "
//                 >
//                   {topic}
//                 </span>
//               ))}
//             </div>

//             <h3
//               className="
//                 mt-9
//                 text-lg
//                 font-semibold
//               "
//             >
//               What I learned
//             </h3>

//             <ul
//               className="
//                 mt-4
//                 space-y-3
//                 text-sm
//                 leading-6
//                 text-[#8b949e]
//               "
//             >
//               <li className="flex gap-2.5">
//                 <span className="text-[#3fb950]">
//                   •
//                 </span>
//                 Building reusable React components
//               </li>

//               <li className="flex gap-2.5">
//                 <span className="text-[#3fb950]">
//                   •
//                 </span>
//                 Creating interactive animations
//               </li>

//               <li className="flex gap-2.5">
//                 <span className="text-[#3fb950]">
//                   •
//                 </span>
//                 Designing responsive interfaces
//               </li>

//               <li className="flex gap-2.5">
//                 <span className="text-[#3fb950]">
//                   •
//                 </span>
//                 Structuring a scalable project
//               </li>
//             </ul>
//           </div>
//         </motion.article>

//         {/* ===================================================
//             SIDEBAR
//         =================================================== */}

//         <motion.aside
//           initial={{
//             opacity: 0,
//             x: 40,
//           }}
//           animate={{
//             opacity: 1,
//             x: 0,
//           }}
//           transition={{
//             duration: 0.7,
//             delay: 0.4,
//           }}
//           className="
//             h-fit
//             rounded-xl
//             border
//             border-[#30363d]
//             bg-[#161b22]/90
//             p-5
//             shadow-[0_20px_50px_rgba(0,0,0,0.2)]
//             backdrop-blur-xl
//           "
//         >
//           <h3
//             className="
//               text-sm
//               font-semibold
//             "
//           >
//             About
//           </h3>

//           <p
//             className="
//               mt-3
//               text-sm
//               leading-6
//               text-[#8b949e]
//             "
//           >
//             {repo.description}
//           </p>

//           <div
//             className="
//               mt-5
//               space-y-4
//               border-t
//               border-[#30363d]
//               pt-5
//             "
//           >
//             <div
//               className="
//                 flex
//                 items-center
//                 gap-2.5
//                 text-sm
//                 text-[#8b949e]
//               "
//             >
//               <Star
//                 size={16}
//                 className="text-[#e3b341]"
//               />

//               <span>
//                 {repo.stars} stars
//               </span>
//             </div>

//             <div
//               className="
//                 flex
//                 items-center
//                 gap-2.5
//                 text-sm
//                 text-[#8b949e]
//               "
//             >
//               <GitFork
//                 size={16}
//                 className="text-[#58a6ff]"
//               />

//               <span>
//                 {repo.forks} forks
//               </span>
//             </div>

//             <div
//               className="
//                 flex
//                 items-center
//                 gap-2.5
//                 text-sm
//                 text-[#8b949e]
//               "
//             >
//               <Code2
//                 size={16}
//                 className="text-[#3fb950]"
//               />

//               <span>
//                 {repo.language}
//               </span>
//             </div>
//           </div>

//           <a
//             href="#"
//             className="
//               mt-6
//               flex
//               h-9
//               items-center
//               justify-center
//               gap-2
//               rounded-md
//               border
//               border-[#30363d]
//               bg-[#21262d]
//               text-sm
//               font-medium
//               text-[#f0f6fc]
//               transition-all
//               hover:border-[#484f58]
//               hover:bg-[#30363d]
//             "
//           >
//             <ExternalLink size={16} />
//             <link rel="stylesheet" href="https://smartnotes-r3ac.onrender.com/" />
//             view Project
//           </a>
//         </motion.aside>
//       </section>
//     </main>
//   );
// }



import {
  ArrowLeft,
  Star,
  GitFork,
  Code2,
  ExternalLink,
  GitBranch,
} from "lucide-react";

import { motion } from "motion/react";

import { Link, useParams } from "react-router-dom";

import { repositories } from "../data/portfolio";

const SMARTNOTES_URL = "https://smartnotes-r3ac.onrender.com/";

export default function Repository() {
  const { repoId } = useParams();

  const repo = repositories.find(
    (item) => String(item.id) === String(repoId)
  );

  if (!repo) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0d1117] px-6 text-[#f0f6fc]">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">
            Repository not found
          </h1>

          <Link
            to="/"
            className="mt-4 inline-flex rounded-md px-3 py-2 text-sm text-[#58a6ff] transition-colors hover:bg-[#161b22]"
          >
           <ArrowLeft
  size={18}
  className="text-[#8b949e] transition-transform group-hover:-translate-x-1 group-hover:text-[#f0f6fc]"
/>
            Back to profile
          </Link>
        </div>
      </main>
    );
  }

  // Use a project-specific live URL when available.
  // SmartNotes is the fallback for this repository page.
  const liveUrl = repo.liveUrl || SMARTNOTES_URL;
  const githubUrl = repo.githubUrl;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0d1117] text-[#f0f6fc]">
      {/* Subtle background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-180px] top-[100px] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[120px]" />

        <div className="absolute bottom-[-180px] right-[-100px] h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      {/* Back navigation */}
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 mx-auto flex w-full max-w-[1200px] items-center px-6 py-6 max-[600px]:px-4"
      >
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-lg border border-[#30363d] bg-white/[0.035] px-3 py-2 text-sm font-medium text-[#8b949e] backdrop-blur-xl transition hover:border-[#484f58] hover:bg-white/[0.06] hover:text-[#f0f6fc]"
        >
         <ArrowLeft
  size={18}
  className="text-[#8b949e] transition-transform group-hover:-translate-x-1 group-hover:text-[#f0f6fc]"
/>
          Back to profile
        </Link>
      </motion.header>

      {/* Repository details */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pb-8 max-[600px]:px-4"
      >
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#30363d] bg-white/[0.04] text-[#c9d1d9]">
            <Code2 size={25}  className="text-[#7793b4]"/>
          </div>

          <h1 className="text-3xl font-semibold tracking-[-0.8px] max-[600px]:text-2xl">
            {repo.name}
          </h1>

          <span className="rounded-full border border-[#30363d] bg-white/[0.035] px-2.5 py-1 text-xs text-[#8b949e]">
            Public
          </span>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#8b949e]">
          {repo.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[#8b949e]">
          <span className="flex items-center gap-1.5">
            <Star size={16} className="text-[#e3b341]" />
            {repo.stars ?? 0} stars
          </span>

          <span className="flex items-center gap-1.5">
            <GitFork size={16}  className="text-[#6281a4]"/>
            {repo.forks ?? 0} forks
          </span>

          <span className="flex items-center gap-1.5">
            <GitBranch size={16} className="text-[#3fb950]" />
            {repo.language || "Multiple"}
          </span>
        </div>

        {repo.topics?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {repo.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-[#30363d] bg-white/[0.035] px-2.5 py-1 text-xs text-[#8b949e] transition hover:bg-white/[0.07]"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </motion.section>

      {/* Main content */}
      <section className="relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-[minmax(0,1fr)_280px] gap-6 px-6 pb-16 max-[850px]:grid-cols-1 max-[600px]:px-4">
        {/* README */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="min-w-0 overflow-hidden rounded-xl border border-[#30363d]/90 bg-[#161b22]/65 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-2xl"
        >
          <div className="border-b border-[#30363d] bg-white/[0.025] px-5 py-3 text-sm font-medium text-[#8b949e]">
            README.md
          </div>

          <div className="px-7 py-8 max-[600px]:px-5 max-[600px]:py-6">
            <h2 className="text-2xl font-semibold tracking-[-0.4px]">
              {repo.name}
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#8b949e]">
              {repo.description}
            </p>

            <h3 className="mt-9 text-lg font-semibold">
              About this project
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#8b949e]">
              This project is part of my developer portfolio.
              It demonstrates my approach to building applications,
              solving problems, and creating useful user experiences.
            </p>

            {repo.topics?.length > 0 && (
              <>
                <h3 className="mt-9 text-lg font-semibold">
                  Tech stack
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-lg border border-[#30363d] bg-white/[0.035] px-3 py-1.5 text-xs text-[#8b949e]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </>
            )}

            <h3 className="mt-9 text-lg font-semibold">
              What I learned
            </h3>

            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#8b949e]">
              {[
                "Building reusable components",
                "Connecting application features",
                "Designing responsive interfaces",
                "Structuring a maintainable project",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="text-[#8b949e]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>

        {/* Project sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="h-fit rounded-xl border border-[#30363d]/90 bg-[#161b22]/65 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
        >
          <h3 className="text-sm font-semibold">About</h3>

          <p className="mt-3 text-sm leading-6 text-[#8b949e]">
            {repo.description}
          </p>

          <div className="mt-5 space-y-4 border-t border-[#30363d] pt-5">
            <div className="flex items-center gap-2.5 text-sm text-[#8b949e]">
              <Star size={16} className="text-[#e3b341]" />
              {repo.stars ?? 0} stars
            </div>

            <div className="flex items-center gap-2.5 text-sm text-[#8b949e]">
              <GitFork size={16} className="text-[#859ab2]"/>
              {repo.forks ?? 0} forks
            </div>

            <div className="flex items-center gap-2.5 text-sm text-[#8b949e]">
              <Code2 size={16} className="text-[#718aa5]"/>
              {repo.language || "Multiple"}
            </div>
          </div>

          {/* Live project button */}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex h-10 items-center justify-center gap-2 rounded-md border border-[#484f58] bg-white/[0.08] text-sm font-medium text-[#f0f6fc] backdrop-blur-xl transition hover:border-[#6e7681] hover:bg-white/[0.13]"
            >
              <ExternalLink size={16} className="text-[#58a6ff]" />
              View live project
            </a>
          )}

          {/* Source code button */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex h-10 items-center justify-center gap-2 rounded-md border border-[#30363d] bg-transparent text-sm font-medium text-[#8b949e] transition hover:bg-white/[0.05] hover:text-[#f0f6fc]"
            >
              <Code2 size={16} className="text-[#8b949e]"/>
              View source code
            </a>
          )}
        </motion.aside>
      </section>
    </main>
  );
}
