// import Header from "../components/Header.";
// import ProfileSidebar from "../components/ProfileSidebar";
// import ProfileTabs from "../components/ProfileTabs";
// import ContributionGraph from "../components/ContributionGraph";
// import RepositoryCard from "../components/RepositoryCard";
// import ScrollSeen from "../components/ScrollSeen";
// import AmbientBackground from "../components/AmbientBackground";

// import { repositories } from "../data/portfolio";

// export default function Profile() {
//   return (
//     <>
//       {/* Animated background */}
//       <AmbientBackground />

//       {/* GitHub-style header */}
//       <Header />

//       <main className="page">

//         {/* Profile sidebar */}
//         <ProfileSidebar />

//         <section className="content">

//           {/* Profile tabs */}
//           <ScrollSeen>
//             <ProfileTabs />
//           </ScrollSeen>


//           {/* Contribution graph */}
//           <ScrollSeen>
//             <ContributionGraph />
//           </ScrollSeen>


//           {/* Popular repositories */}
//           <ScrollSeen>
//             <section
//               className="repositories"
//               id="repositories"
//             >

//               <div className="section-heading">

//                 <h2>
//                   Popular repositories
//                 </h2>

//                 <button>
//                   Customize pins
//                 </button>

//               </div>


//               <div className="repository-grid">

//                 {repositories.map((repo) => (
//                   <RepositoryCard
//                     key={repo.id}
//                     repo={repo}
//                   />
//                 ))}

//               </div>

//             </section>
//           </ScrollSeen>


//           {/* Contribution activity */}
//           <ScrollSeen>
//             <section className="activity-section">

//               <h2>
//                 Contribution activity
//               </h2>


//               <div className="activity-card">

//                 <div className="activity-line">

//                   <span />

//                   <div>

//                     <strong>
//                       Pushed commits
//                     </strong>

//                     <p>
//                       Worked on github-portfolio
//                     </p>

//                   </div>

//                 </div>


//                 <div className="activity-line">

//                   <span />

//                   <div>

//                     <strong>
//                       Created repository
//                     </strong>

//                     <p>
//                       3d-experiments
//                     </p>

//                   </div>

//                 </div>

//               </div>

//             </section>
//           </ScrollSeen>

//         </section>

//       </main>
//     </>
//   );
// }


// import Header from "../components/Header.";
// import ProfileSidebar from "../components/ProfileSidebar";
// import ProfileTabs from "../components/ProfileTabs";
// import ContributionGraph from "../components/ContributionGraph";
// import RepositoryCard from "../components/RepositoryCard";
// import ScrollSeen from "../components/ScrollSeen";
// import AmbientBackground from "../components/AmbientBackground";

// import {
//   motion,
//   AnimatePresence,
// } from "motion/react";

// import {
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import {
//   Code2,
//   Rocket,
//   Package,
//   ExternalLink,
// } from "lucide-react";

// import { repositories } from "../data/portfolio";

// const projects = [
//   {
//     id: "github-portfolio",
//     name: "GitHub Portfolio",
//     description:
//       "An interactive developer portfolio inspired by GitHub with 3D interactions and animated UI.",
//     technologies: [
//       "React",
//       "JavaScript",
//       "Motion",
//       "CSS",
//     ],
//   },
//   {
//     id: "cloud-dashboard",
//     name: "Cloud Dashboard",
//     description:
//       "A modern dashboard interface for monitoring cloud infrastructure and application metrics.",
//     technologies: [
//       "React",
//       "Node.js",
//       "PostgreSQL",
//       "Cloud",
//     ],
//   },
//   {
//     id: "security-lab",
//     name: "Security Lab",
//     description:
//       "A collection of experiments exploring application security and defensive engineering.",
//     technologies: [
//       "JavaScript",
//       "Cybersecurity",
//       "APIs",
//     ],
//   },
// ];

// const packages = [
//   {
//     name: "motion-ui-kit",
//     description:
//       "Reusable animated React interface components.",
//     version: "1.2.0",
//     downloads: "12.4k",
//   },
//   {
//     name: "portfolio-utils",
//     description:
//       "Small utilities used across my portfolio projects.",
//     version: "0.8.4",
//     downloads: "4.7k",
//   },
// ];

// export default function Profile() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const activePath = location.pathname;

//   return (
//     <>
//       <AmbientBackground />

//       <Header />

//       <main className="page">
//         <ProfileSidebar />

//         <section className="content">

//           <ScrollSeen>
//             <ProfileTabs />
//           </ScrollSeen>


//           <AnimatePresence mode="wait">

//             {/* =========================
//                 OVERVIEW
//             ========================= */}

//             {activePath === "/" && (
//               <motion.div
//                 key="overview"
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -20,
//                 }}
//                 transition={{
//                   duration: 0.35,
//                 }}
//               >
//                 <ScrollSeen>
//                   <ContributionGraph />
//                 </ScrollSeen>

//                 <ScrollSeen>
//                   <section
//                     className="repositories"
//                     id="repositories"
//                   >
//                     <div className="section-heading">
//                       <h2>
//                         Popular repositories
//                       </h2>

//                       <button
//                          onClick={() => navigate("/repositories")}
//                       >
//                        View all
//                      </button>
//                     </div>

//                     <div className="repository-grid">
//                       {repositories
//                         .slice(0, 4)
//                         .map((repo) => (
//                           <RepositoryCard
//                             key={repo.id}
//                             repo={repo}
//                           />
//                         ))}
//                     </div>
//                   </section>
//                 </ScrollSeen>


//                 <ScrollSeen>
//                   <section className="activity-section">
//                     <h2>
//                       Contribution activity
//                     </h2>

//                     <div className="activity-card">

//                       <div className="activity-line">
//                         <span />

//                         <div>
//                           <strong>
//                             Pushed commits
//                           </strong>

//                           <p>
//                             Worked on github-portfolio
//                           </p>
//                         </div>
//                       </div>

//                       <div className="activity-line">
//                         <span />

//                         <div>
//                           <strong>
//                             Created repository
//                           </strong>

//                           <p>
//                             3d-experiments
//                           </p>
//                         </div>
//                       </div>

//                     </div>
//                   </section>
//                 </ScrollSeen>
//               </motion.div>
//             )}


//             {/* =========================
//                 REPOSITORIES
//             ========================= */}

//             {activePath === "/repositories" && (
//               <motion.section
//                 key="repositories"
//                 className="tab-page"
//                 initial={{
//                   opacity: 0,
//                   y: 25,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -25,
//                 }}
//                 transition={{
//                   duration: 0.4,
//                 }}
//               >
//                 <div className="tab-page-header">
//                   <div>
//                     <h1>
//                       Repositories
//                     </h1>

//                     <p>
//                       {repositories.length} public
//                       repositories
//                     </p>
//                   </div>
//                 </div>

//                 <div className="repository-grid">
//                   {repositories.map((repo) => (
//                     <RepositoryCard
//                       key={repo.id}
//                       repo={repo}
//                     />
//                   ))}
//                 </div>
//               </motion.section>
//             )}


//             {/* =========================
//                 PROJECTS
//             ========================= */}

//             {activePath === "/projects" && (
//               <motion.section
//                 key="projects"
//                 className="tab-page"
//                 initial={{
//                   opacity: 0,
//                   y: 25,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -25,
//                 }}
//                 transition={{
//                   duration: 0.4,
//                 }}
//               >
//                 <div className="tab-page-header">
//                   <div>
//                     <h1>
//                       Projects
//                     </h1>

//                     <p>
//                       Things I'm building and
//                       experimenting with.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="project-grid">
//                   {projects.map((project) => (
//                     <motion.article
//                       key={project.id}
//                       className="project-card"
//                       whileHover={{
//                         y: -6,
//                       }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 300,
//                         damping: 22,
//                       }}
//                     >
//                       <div className="project-icon">
//                         <Rocket size={20} />
//                       </div>

//                       <h2>
//                         {project.name}
//                       </h2>

//                       <p>
//                         {project.description}
//                       </p>

//                       <div className="project-technologies">
//                         {project.technologies.map(
//                           (technology) => (
//                             <span
//                               key={technology}
//                             >
//                               {technology}
//                             </span>
//                           )
//                         )}
//                       </div>

//                       <button className="project-link">
//                         <ExternalLink
//                           size={15}
//                         />
//                         View project
//                       </button>
//                     </motion.article>
//                   ))}
//                 </div>
//               </motion.section>
//             )}


//             {/* =========================
//                 PACKAGES
//             ========================= */}

//             {activePath === "/packages" && (
//               <motion.section
//                 key="packages"
//                 className="tab-page"
//                 initial={{
//                   opacity: 0,
//                   y: 25,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -25,
//                 }}
//                 transition={{
//                   duration: 0.4,
//                 }}
//               >
//                 <div className="tab-page-header">
//                   <div>
//                     <h1>
//                       Packages
//                     </h1>

//                     <p>
//                       Reusable tools and components.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="package-list">
//                   {packages.map((pkg) => (
//                     <motion.article
//                       key={pkg.name}
//                       className="package-card"
//                       whileHover={{
//                         x: 5,
//                       }}
//                     >
//                       <div className="package-icon">
//                         <Package size={20} />
//                       </div>

//                       <div className="package-main">
//                         <div className="package-title">
//                           <h2>
//                             {pkg.name}
//                           </h2>

//                           <span>
//                             v{pkg.version}
//                           </span>
//                         </div>

//                         <p>
//                           {pkg.description}
//                         </p>

//                         <small>
//                           {pkg.downloads} downloads
//                         </small>
//                       </div>

//                       <Code2 size={20} />
//                     </motion.article>
//                   ))}
//                 </div>
//               </motion.section>
//             )}

//           </AnimatePresence>

//         </section>
//       </main>
//     </>
//   );
// }



// import Header from "../components/Header.";
// import ProfileSidebar from "../components/ProfileSidebar";
// import ProfileTabs from "../components/ProfileTabs";
// import ContributionGraph from "../components/ContributionGraph";
// import RepositoryCard from "../components/RepositoryCard";
// import ScrollSeen from "../components/ScrollSeen";
// import AmbientBackground from "../components/AmbientBackground";

// import {
//   motion,
//   AnimatePresence,
// } from "motion/react";

// import {
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import {
//   Code2,
//   Rocket,
//   Package,
//   ExternalLink,
// } from "lucide-react";

// import { repositories } from "../data/portfolio";

// const projects = [
//   {
//     id: "github-portfolio",
//     name: "GitHub Portfolio",
//     description:
//       "An interactive developer portfolio inspired by GitHub with 3D interactions and animated UI.",
//     technologies: [
//       "React",
//       "JavaScript",
//       "Motion",
//       "CSS",
//     ],
//   },
//   {
//     id: "cloud-dashboard",
//     name: "Cloud Dashboard",
//     description:
//       "A modern dashboard interface for monitoring cloud infrastructure and application metrics.",
//     technologies: [
//       "React",
//       "Node.js",
//       "PostgreSQL",
//       "Cloud",
//     ],
//   },
//   {
//     id: "security-lab",
//     name: "Security Lab",
//     description:
//       "A collection of experiments exploring application security and defensive engineering.",
//     technologies: [
//       "JavaScript",
//       "Cybersecurity",
//       "APIs",
//     ],
//   },
// ];

// const packages = [
//   {
//     name: "motion-ui-kit",
//     description:
//       "Reusable animated React interface components.",
//     version: "1.2.0",
//     downloads: "12.4k",
//   },
//   {
//     name: "portfolio-utils",
//     description:
//       "Small utilities used across my portfolio projects.",
//     version: "0.8.4",
//     downloads: "4.7k",
//   },
// ];

// export default function Profile() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const activePath = location.pathname;

//   return (
//     <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc]">
//       <AmbientBackground />


//       <main
//         className="
//           relative
//           mx-auto
//           flex
//           w-full
//           max-w-[1280px]
//           gap-8
//           px-6
//           py-8

//           max-[1000px]:gap-6
//           max-[900px]:flex-col
//           max-[600px]:px-4
//           max-[600px]:py-5
//         "
//       >
//         {/* =====================================================
//             SIDEBAR
//         ===================================================== */}

//         <ProfileSidebar />

//         {/* =====================================================
//             MAIN CONTENT
//         ===================================================== */}

//         <section
//           className="
//             min-w-0
//             flex-1
//           "
//         >
//           {/* Tabs */}

//           <ScrollSeen>
//             <ProfileTabs />
//           </ScrollSeen>

//           {/* ===================================================
//               PAGE CONTENT
//           =================================================== */}

//           <AnimatePresence mode="wait">
//             {/* =================================================
//                 OVERVIEW
//             ================================================= */}

//             {activePath === "/" && (
//               <motion.div
//                 key="overview"
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -20,
//                 }}
//                 transition={{
//                   duration: 0.35,
//                 }}
//                 className="space-y-8 pt-6"
//               >
//                 {/* Contributions */}

//                 <ScrollSeen>
//                   <ContributionGraph />
//                 </ScrollSeen>

//                 {/* Popular repositories */}

//                 <ScrollSeen>
//                   <section
//                     id="repositories"
//                     className="w-full"
//                   >
//                     <div
//                       className="
//                         mb-4
//                         flex
//                         items-center
//                         justify-between
//                         gap-4
//                       "
//                     >
//                       <h2
//                         className="
//                           text-base
//                           font-semibold
//                           tracking-[-0.2px]
//                         "
//                       >
//                         Popular repositories
//                       </h2>

//                       <button
//                         onClick={() =>
//                           navigate("/repositories")
//                         }
//                         className="
//                           rounded-md
//                           px-2.5
//                           py-1.5
//                           text-xs
//                           font-medium
//                           text-[#58a6ff]
//                           transition-colors
//                           hover:bg-[#161b22]
//                           hover:text-[#79c0ff]
//                         "
//                       >
//                         View all
//                       </button>
//                     </div>

//                     <div
//                       className="
//                         grid
//                         grid-cols-2
//                         gap-4

//                         max-[700px]:grid-cols-1
//                       "
//                     >
//                       {repositories
//                         .slice(0, 4)
//                         .map((repo) => (
//                           <RepositoryCard
//                             key={repo.id}
//                             repo={repo}
//                           />
//                         ))}
//                     </div>
//                   </section>
//                 </ScrollSeen>

//                 {/* Activity */}

//                 <ScrollSeen>
//                   <section className="w-full">
//                     <h2
//                       className="
//                         mb-4
//                         text-base
//                         font-semibold
//                         tracking-[-0.2px]
//                       "
//                     >
//                       Contribution activity
//                     </h2>

//                     <div
//                       className="
//                         overflow-hidden
//                         rounded-xl
//                         border
//                         border-[#30363d]
//                         bg-[#161b22]/80
//                         shadow-[0_10px_35px_rgba(0,0,0,0.15)]
//                         backdrop-blur-xl
//                       "
//                     >
//                       <div
//                         className="
//                           flex
//                           items-start
//                           gap-4
//                           border-b
//                           border-[#30363d]
//                           p-5
//                           last:border-b-0
//                         "
//                       >
//                         <span
//                           className="
//                             mt-1.5
//                             h-2.5
//                             w-2.5
//                             shrink-0
//                             rounded-full
//                             bg-[#3fb950]
//                             shadow-[0_0_10px_rgba(63,185,80,0.6)]
//                           "
//                         />

//                         <div>
//                           <strong
//                             className="
//                               block
//                               text-sm
//                               font-medium
//                             "
//                           >
//                             Pushed commits
//                           </strong>

//                           <p
//                             className="
//                               mt-1
//                               text-sm
//                               text-[#8b949e]
//                             "
//                           >
//                             Worked on github-portfolio
//                           </p>
//                         </div>
//                       </div>

//                       <div
//                         className="
//                           flex
//                           items-start
//                           gap-4
//                           p-5
//                         "
//                       >
//                         <span
//                           className="
//                             mt-1.5
//                             h-2.5
//                             w-2.5
//                             shrink-0
//                             rounded-full
//                             bg-[#58a6ff]
//                             shadow-[0_0_10px_rgba(88,166,255,0.6)]
//                           "
//                         />

//                         <div>
//                           <strong
//                             className="
//                               block
//                               text-sm
//                               font-medium
//                             "
//                           >
//                             Created repository
//                           </strong>

//                           <p
//                             className="
//                               mt-1
//                               text-sm
//                               text-[#8b949e]
//                             "
//                           >
//                             3d-experiments
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                 </ScrollSeen>
//               </motion.div>
//             )}

//             {/* =================================================
//                 REPOSITORIES
//             ================================================= */}

//             {activePath === "/repositories" && (
//               <motion.section
//                 key="repositories"
//                 initial={{
//                   opacity: 0,
//                   y: 25,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -25,
//                 }}
//                 transition={{
//                   duration: 0.4,
//                 }}
//                 className="pt-6"
//               >
//                 <div
//                   className="
//                     mb-6
//                     flex
//                     items-end
//                     justify-between
//                     gap-4
//                   "
//                 >
//                   <div>
//                     <h1
//                       className="
//                         text-2xl
//                         font-semibold
//                         tracking-[-0.5px]
//                       "
//                     >
//                       Repositories
//                     </h1>

//                     <p
//                       className="
//                         mt-1
//                         text-sm
//                         text-[#8b949e]
//                       "
//                     >
//                       {repositories.length} public
//                       repositories
//                     </p>
//                   </div>
//                 </div>

//                 <div
//                   className="
//                     grid
//                     grid-cols-2
//                     gap-4

//                     max-[700px]:grid-cols-1
//                   "
//                 >
//                   {repositories.map((repo) => (
//                     <RepositoryCard
//                       key={repo.id}
//                       repo={repo}
//                     />
//                   ))}
//                 </div>
//               </motion.section>
//             )}

//             {/* =================================================
//                 PROJECTS
//             ================================================= */}

//             {activePath === "/projects" && (
//               <motion.section
//                 key="projects"
//                 initial={{
//                   opacity: 0,
//                   y: 25,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -25,
//                 }}
//                 transition={{
//                   duration: 0.4,
//                 }}
//                 className="pt-6"
//               >
//                 <div className="mb-6">
//                   <h1
//                     className="
//                       text-2xl
//                       font-semibold
//                       tracking-[-0.5px]
//                     "
//                   >
//                     Projects
//                   </h1>

//                   <p
//                     className="
//                       mt-1
//                       text-sm
//                       text-[#8b949e]
//                     "
//                   >
//                     Things I'm building and
//                     experimenting with.
//                   </p>
//                 </div>

//                 <div
//                   className="
//                     grid
//                     grid-cols-2
//                     gap-5

//                     max-[800px]:grid-cols-1
//                   "
//                 >
//                   {projects.map((project) => (
//                     <motion.article
//                       key={project.id}
//                       whileHover={{
//                         y: -6,
//                       }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 300,
//                         damping: 22,
//                       }}
//                       className="
//                         group
//                         relative
//                         overflow-hidden
//                         rounded-xl
//                         border
//                         border-[#30363d]
//                         bg-[#161b22]
//                         p-5
//                         shadow-[0_10px_35px_rgba(0,0,0,0.16)]
//                         transition-all
//                         duration-300
//                         hover:border-[#484f58]
//                         hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
//                       "
//                     >
//                       {/* Card glow */}

//                       <div
//                         className="
//                           pointer-events-none
//                           absolute
//                           -right-16
//                           -top-16
//                           h-32
//                           w-32
//                           rounded-full
//                           bg-[#58a6ff]/10
//                           blur-3xl
//                           transition-opacity
//                           group-hover:opacity-100
//                         "
//                       />

//                       <div
//                         className="
//                           relative
//                           mb-4
//                           flex
//                           h-10
//                           w-10
//                           items-center
//                           justify-center
//                           rounded-lg
//                           border
//                           border-[#30363d]
//                           bg-[#21262d]
//                           text-[#58a6ff]
//                           transition-colors
//                           group-hover:border-[#58a6ff]/40
//                         "
//                       >
//                         <Rocket size={20} />
//                       </div>

//                       <h2
//                         className="
//                           relative
//                           text-base
//                           font-semibold
//                         "
//                       >
//                         {project.name}
//                       </h2>

//                       <p
//                         className="
//                           relative
//                           mt-2
//                           min-h-[72px]
//                           text-sm
//                           leading-6
//                           text-[#8b949e]
//                         "
//                       >
//                         {project.description}
//                       </p>

//                       <div
//                         className="
//                           relative
//                           mt-4
//                           flex
//                           flex-wrap
//                           gap-1.5
//                         "
//                       >
//                         {project.technologies.map(
//                           (technology) => (
//                             <span
//                               key={technology}
//                               className="
//                                 rounded-full
//                                 border
//                                 border-[#30363d]
//                                 bg-[#21262d]
//                                 px-2
//                                 py-1
//                                 text-[11px]
//                                 font-medium
//                                 text-[#8b949e]
//                               "
//                             >
//                               {technology}
//                             </span>
//                           )
//                         )}
//                       </div>

//                       <button
//                         className="
//                           relative
//                           mt-5
//                           flex
//                           items-center
//                           gap-1.5
//                           text-xs
//                           font-medium
//                           text-[#58a6ff]
//                           transition-colors
//                           hover:text-[#79c0ff]
//                         "
//                       >
//                         <ExternalLink size={15} />
//                         View project
//                       </button>
//                     </motion.article>
//                   ))}
//                 </div>
//               </motion.section>
//             )}

//             {/* =================================================
//                 PACKAGES
//             ================================================= */}

//             {activePath === "/packages" && (
//               <motion.section
//                 key="packages"
//                 initial={{
//                   opacity: 0,
//                   y: 25,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -25,
//                 }}
//                 transition={{
//                   duration: 0.4,
//                 }}
//                 className="pt-6"
//               >
//                 <div className="mb-6">
//                   <h1
//                     className="
//                       text-2xl
//                       font-semibold
//                       tracking-[-0.5px]
//                     "
//                   >
//                     Packages
//                   </h1>

//                   <p
//                     className="
//                       mt-1
//                       text-sm
//                       text-[#8b949e]
//                     "
//                   >
//                     Reusable tools and components.
//                   </p>
//                 </div>

//                 <div className="space-y-3">
//                   {packages.map((pkg) => (
//                     <motion.article
//                       key={pkg.name}
//                       whileHover={{
//                         x: 5,
//                       }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 300,
//                         damping: 22,
//                       }}
//                       className="
//                         group
//                         flex
//                         items-center
//                         gap-4
//                         rounded-xl
//                         border
//                         border-[#30363d]
//                         bg-[#161b22]
//                         p-5
//                         shadow-[0_8px_30px_rgba(0,0,0,0.14)]
//                         transition-colors
//                         hover:border-[#484f58]
//                         hover:bg-[#1b222c]

//                         max-[600px]:items-start
//                       "
//                     >
//                       <div
//                         className="
//                           flex
//                           h-10
//                           w-10
//                           shrink-0
//                           items-center
//                           justify-center
//                           rounded-lg
//                           border
//                           border-[#30363d]
//                           bg-[#21262d]
//                           text-[#a371f7]
//                         "
//                       >
//                         <Package size={20} />
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <div
//                           className="
//                             flex
//                             flex-wrap
//                             items-center
//                             gap-2
//                           "
//                         >
//                           <h2
//                             className="
//                               text-base
//                               font-semibold
//                             "
//                           >
//                             {pkg.name}
//                           </h2>

//                           <span
//                             className="
//                               rounded-full
//                               border
//                               border-[#30363d]
//                               bg-[#21262d]
//                               px-2
//                               py-0.5
//                               text-[11px]
//                               text-[#8b949e]
//                             "
//                           >
//                             v{pkg.version}
//                           </span>
//                         </div>

//                         <p
//                           className="
//                             mt-1
//                             text-sm
//                             leading-6
//                             text-[#8b949e]
//                           "
//                         >
//                           {pkg.description}
//                         </p>

//                         <small
//                           className="
//                             mt-2
//                             block
//                             text-xs
//                             text-[#6e7681]
//                           "
//                         >
//                           {pkg.downloads} downloads
//                         </small>
//                       </div>

//                       <Code2
//                         size={20}
//                         className="
//                           shrink-0
//                           text-[#6e7681]
//                           transition-colors
//                           group-hover:text-[#58a6ff]
//                         "
//                       />
//                     </motion.article>
//                   ))}
//                 </div>
//               </motion.section>
//             )}
//           </AnimatePresence>
//         </section>
//       </main>
//     </div>
//   );
// }


// import ProfileSidebar from "../components/ProfileSidebar";
// import ProfileTabs from "../components/ProfileTabs";
// import ContributionGraph from "../components/ContributionGraph";
// import RepositoryCard from "../components/RepositoryCard";
// import ScrollSeen from "../components/ScrollSeen";
// import AmbientBackground from "../components/AmbientBackground";

// import {
//   motion,
//   AnimatePresence,
// } from "motion/react";

// import {
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import {
//   Code2,
//   Rocket,
//   Package,
//   ExternalLink,
// } from "lucide-react";

// import { repositories } from "../data/portfolio";
// import Experience from "./Experience";

// const projects = [
//   {
//     id: "github-portfolio",
//     name: "GitHub Portfolio",
//     description:
//       "An interactive developer portfolio inspired by GitHub with 3D interactions and animated UI.",
//     technologies: ["React", "JavaScript", "Motion", "CSS"],
//   },
//   {
//     id: "cloud-dashboard",
//     name: "Cloud Dashboard",
//     description:
//       "A modern dashboard interface for monitoring cloud infrastructure and application metrics.",
//     technologies: ["React", "Node.js", "PostgreSQL", "Cloud"],
//   },
//   {
//     id: "security-lab",
//     name: "Security Lab",
//     description:
//       "A collection of experiments exploring application security and defensive engineering.",
//     technologies: ["JavaScript", "Cybersecurity", "APIs"],
//   },
// ];

// const packages = [
//   {
//     name: "motion-ui-kit",
//     description: "Reusable animated React interface components.",
//     version: "1.2.0",
//     downloads: "12.4k",
//   },
//   {
//     name: "portfolio-utils",
//     description: "Small utilities used across my portfolio projects.",
//     version: "0.8.4",
//     downloads: "4.7k",
//   },
// ];

// export default function Profile() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const activePath = location.pathname;

//   return (
//     <div className="relative min-h-screen bg-[#0d1117] text-[#f0f6fc]">
//       <AmbientBackground />

//       <main
//         className="
//           relative z-10 mx-auto flex w-full max-w-[1280px]
//           gap-8 px-6 py-8
//           max-[1000px]:gap-6
//           max-[900px]:flex-col
//           max-[600px]:px-4
//           max-[600px]:py-5
//         "
//       >
//         {/* PROFILE SIDEBAR */}
//         <ProfileSidebar />

//         {/* MAIN CONTENT */}
//         <section className="min-w-0 flex-1">
//           <ScrollSeen>
//             <ProfileTabs />
//           </ScrollSeen>

//           <AnimatePresence mode="wait">
//             {/* OVERVIEW */}
//             {activePath === "/" && (
//               <motion.div
//                 key="overview"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.35 }}
//                 className="space-y-8 pt-6"
//               >
//                 <ScrollSeen>
//                   <ContributionGraph />
//                 </ScrollSeen>

//                 {/* POPULAR REPOSITORIES */}
//                 <ScrollSeen>
//                   <section id="repositories" className="w-full">
//                     <div className="mb-4 flex items-center justify-between gap-4">
//                       <h2 className="text-base font-semibold tracking-[-0.2px]">
//                         Popular repositories
//                       </h2>

//                       <button
//                         onClick={() => navigate("/repositories")}
//                         className="
//                           rounded-md px-2.5 py-1.5 text-xs font-medium
//                           text-[#58a6ff] transition-colors
//                           hover:bg-[#161b22] hover:text-[#79c0ff]
//                         "
//                       >
//                         View all
//                       </button>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4 max-[700px]:grid-cols-1">
//                       {repositories.slice(0, 4).map((repo) => (
//                         <RepositoryCard key={repo.id} repo={repo} />
//                       ))}
//                     </div>
//                   </section>
//                 </ScrollSeen>

//                 {/* CONTRIBUTION ACTIVITY */}
//                 <ScrollSeen>
//                   <section className="w-full">
//                     <h2 className="mb-4 text-base font-semibold tracking-[-0.2px]">
//                       Contribution activity
//                     </h2>

//                     <div className="overflow-hidden rounded-xl border border-[#30363d] bg-[#161b22]/70 shadow-[0_10px_35px_rgba(0,0,0,0.15)] backdrop-blur-xl">
//                       <ActivityItem
//                         color="bg-[#3fb950]"
//                         title="Pushed commits"
//                         description="Worked on github-portfolio"
//                       />

//                       <ActivityItem
//                         color="bg-[#58a6ff]"
//                         title="Created repository"
//                         description="3d-experiments"
//                         last
//                       />
//                     </div>
//                   </section>
//                 </ScrollSeen>
//               </motion.div>
//             )}

//             {/* REPOSITORIES */}
//             {activePath === "/repositories" && (
//               <motion.section
//                 key="repositories"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.35 }}
//                 className="pt-6"
//               >
//                 <div className="mb-6">
//                   <h1 className="text-2xl font-semibold tracking-[-0.5px]">
//                     Repositories
//                   </h1>
//                   <p className="mt-1 text-sm text-[#8b949e]">
//                     {repositories.length} public repositories
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4 max-[700px]:grid-cols-1">
//                   {repositories.map((repo) => (
//                     <RepositoryCard key={repo.id} repo={repo} />
//                   ))}
//                 </div>
//               </motion.section>
//             )}

//             {/* PROJECTS */}
//             {activePath === "/projects" && (
//               <motion.section
//                 key="projects"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.35 }}
//                 className="pt-6"
//               >
//                 <div className="mb-6">
//                   <h1 className="text-2xl font-semibold tracking-[-0.5px]">
//                     Projects
//                   </h1>
//                   <p className="mt-1 text-sm text-[#8b949e]">
//                     Things I'm building and experimenting with.
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-2 gap-5 max-[800px]:grid-cols-1">
//                   {projects.map((project) => (
//                     <motion.article
//                       key={project.id}
//                       whileHover={{ y: -4 }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 300,
//                         damping: 24,
//                       }}
//                       className="
//                         group relative overflow-hidden rounded-xl
//                         border border-[#30363d] bg-[#161b22]/75 p-5
//                         shadow-[0_10px_35px_rgba(0,0,0,0.14)]
//                         backdrop-blur-xl transition-colors duration-200
//                         hover:border-[#484f58]
//                       "
//                     >
//                       <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#30363d] bg-[#21262d] text-[#58a6ff]">
//                         <Rocket size={20} />
//                       </div>

//                       <h2 className="text-base font-semibold">
//                         {project.name}
//                       </h2>

//                       <p className="mt-2 min-h-[72px] text-sm leading-6 text-[#8b949e]">
//                         {project.description}
//                       </p>

//                       <div className="mt-4 flex flex-wrap gap-1.5">
//                         {project.technologies.map((technology) => (
//                           <span
//                             key={technology}
//                             className="rounded-full border border-[#30363d] bg-[#21262d]/80 px-2 py-1 text-[11px] font-medium text-[#8b949e]"
//                           >
//                             {technology}
//                           </span>
//                         ))}
//                       </div>

//                       <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-[#58a6ff]">
//                         <ExternalLink size={15} />
//                         View project
//                       </div>
//                     </motion.article>
//                   ))}
//                 </div>
//               </motion.section>
//             )}

//             {/* PACKAGES */}
//             {activePath === "/packages" && (
//               <motion.section
//                 key="packages"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.35 }}
//                 className="pt-6"
//               >
//                 <div className="mb-6">
//                   <h1 className="text-2xl font-semibold tracking-[-0.5px]">
//                     Packages
//                   </h1>
//                   <p className="mt-1 text-sm text-[#8b949e]">
//                     Reusable tools and components.
//                   </p>
//                 </div>

//                 <div className="space-y-3">
//                   {packages.map((pkg) => (
//                     <motion.article
//                       key={pkg.name}
//                       whileHover={{ x: 3 }}
//                       transition={{ type: "spring", stiffness: 300, damping: 24 }}
//                       className="
//                         flex items-center gap-4 rounded-xl
//                         border border-[#30363d] bg-[#161b22]/75 p-5
//                         backdrop-blur-xl transition-colors
//                         hover:border-[#484f58]
//                         max-[600px]:items-start
//                       "
//                     >
//                       <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#30363d] bg-[#21262d] text-[#8b949e]">
//                         <Package size={20} />
//                       </div>

//                       <div className="min-w-0 flex-1">
//                         <div className="flex flex-wrap items-center gap-2">
//                           <h2 className="text-base font-semibold">
//                             {pkg.name}
//                           </h2>
//                           <span className="rounded-full border border-[#30363d] bg-[#21262d] px-2 py-0.5 text-[11px] text-[#8b949e]">
//                             v{pkg.version}
//                           </span>
//                         </div>

//                         <p className="mt-1 text-sm leading-6 text-[#8b949e]">
//                           {pkg.description}
//                         </p>

//                         <small className="mt-2 block text-xs text-[#6e7681]">
//                           {pkg.downloads} downloads
//                         </small>
//                       </div>

//                       <Code2 size={20} className="shrink-0 text-[#6e7681]" />
//                     </motion.article>
//                   ))}
//                 </div>
//               </motion.section>
//             )}

//             {/* EXPERIENCE — SAME PROFILE LAYOUT */}
//             {activePath === "/experience" && (
//               <motion.section
//                 key="experience"
//                 initial={{ opacity: 0, y: 16 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -16 }}
//                 transition={{ duration: 0.3 }}
//                 className="pt-6"
//               >
//                 <Experience />
//               </motion.section>
//             )}
//           </AnimatePresence>
//         </section>
//       </main>
//     </div>
//   );
// }

// function ActivityItem({ color, title, description, last = false }) {
//   return (
//     <div
//       className={`flex items-start gap-4 p-5 ${
//         last ? "" : "border-b border-[#30363d]"
//       }`}
//     >
//       <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${color}`} />

//       <div>
//         <strong className="block text-sm font-medium">{title}</strong>
//         <p className="mt-1 text-sm text-[#8b949e]">{description}</p>
//       </div>
//     </div>
//   );
// }



import ProfileSidebar from "../components/ProfileSidebar";
import ProfileTabs from "../components/ProfileTabs";
import ContributionGraph from "../components/ContributionGraph";
import RepositoryCard from "../components/RepositoryCard";
import ScrollSeen from "../components/ScrollSeen";
import AmbientBackground from "../components/AmbientBackground";

import { motion, AnimatePresence } from "motion/react";

import { useLocation, useNavigate } from "react-router-dom";

import {
  Code2,
  Rocket,
  Package,
  ExternalLink,
} from "lucide-react";

import { repositories } from "../data/portfolio";
import Experience from "./Experience";

const projects = [
  {
    id: "edutrail",
    name: "EduTrail",
    description:
      "Your education-focused project. Explore its features and functionality.",
    technologies: ["React", "JavaScript","Node","MongoDb"],
    liveUrl: "https://edutrail-2.onrender.com/",
  },
  {
    id: "miles-closer",
    name: "Miles Closer",
    description:
      "A project built to deliver a useful and engaging user experience.",
    technologies: ["React", "JavaScript","Node","MongoDb"],
    liveUrl: "https://milescloser-14.onrender.com/",
  },
  {
    id: "smartnotes",
    name: "SmartNotes",
    description:
      "A smart note-taking application for organizing and managing notes.",
    technologies: ["React", "JavaScript","Node","PostgreSQL"],
    liveUrl: "https://smartnotes-r3ac.onrender.com/",
  },
];

const packages = [
  {
    name: "motion-ui-kit",
    description: "Reusable animated React interface components.",
    version: "1.2.0",
    downloads: "12.4k",
  },
  {
    name: "portfolio-utils",
    description: "Small utilities used across my portfolio projects.",
    version: "0.8.4",
    downloads: "4.7k",
  },
];

export default function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const activePath = location.pathname;

  return (
    <div className="relative min-h-screen bg-[#0d1117] text-[#f0f6fc]">
      <AmbientBackground />

      <main
        className="
          relative z-10 mx-auto flex w-full max-w-[1280px]
          gap-8 px-6 py-8
          max-[1000px]:gap-6
          max-[900px]:flex-col
          max-[600px]:px-4
          max-[600px]:py-5
        "
      >
        {/* PROFILE SIDEBAR */}
        <ProfileSidebar />

        {/* MAIN CONTENT */}
        <section className="min-w-0 flex-1">
          <ScrollSeen>
            <ProfileTabs />
          </ScrollSeen>

          <AnimatePresence mode="wait">
            {/* OVERVIEW */}
            {activePath === "/" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-8 pt-6"
              >
                <ScrollSeen>
                  <ContributionGraph />
                </ScrollSeen>

                {/* POPULAR REPOSITORIES */}
                <ScrollSeen>
                  <section id="repositories" className="w-full">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <h2 className="text-base font-semibold tracking-[-0.2px]">
                        Popular repositories
                      </h2>

                      <button
                        onClick={() => navigate("/repositories")}
                        className="
                          rounded-md px-2.5 py-1.5 text-xs font-medium
                          text-[#58a6ff] transition-colors
                          hover:bg-[#161b22] hover:text-[#79c0ff]
                        "
                      >
                        View all
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 max-[700px]:grid-cols-1">
                      {repositories.slice(0, 4).map((repo) => (
                        <RepositoryCard key={repo.id} repo={repo} />
                      ))}
                    </div>
                  </section>
                </ScrollSeen>

                {/* FEATURED PROJECTS */}
                <ScrollSeen>
                  <section className="w-full">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <h2 className="text-base font-semibold tracking-[-0.2px]">
                        Featured projects
                      </h2>

                      <button
                        onClick={() => navigate("/projects")}
                        className="
                          rounded-md px-2.5 py-1.5 text-xs font-medium
                          text-[#58a6ff] transition-colors
                          hover:bg-[#161b22] hover:text-[#79c0ff]
                        "
                      >
                        View all
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-5 max-[800px]:grid-cols-1">
                      {projects.map((project) => (
                        <motion.a
                          key={project.id}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.name} live project in a new tab`}
                          whileHover={{ y: -4 }}
                          whileTap={{ scale: 0.99 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 24,
                          }}
                          className="
                            group relative block overflow-hidden rounded-xl
                            border border-[#30363d] bg-[#161b22]/75 p-5
                            shadow-[0_10px_35px_rgba(0,0,0,0.14)]
                            backdrop-blur-xl transition-colors duration-200
                            hover:border-[#484f58] hover:bg-[#1c2128]/90
                            focus-visible:outline-none
                            focus-visible:ring-2 focus-visible:ring-[#58a6ff]
                          "
                        >
                          <div
                            className="
                              relative mb-4 flex h-10 w-10
                              items-center justify-center rounded-lg
                              border border-[#30363d] bg-[#21262d]
                              text-[#58a6ff]
                            "
                          >
                            <Rocket size={20} />
                          </div>

                          <div className="flex items-center justify-between gap-3">
                            <h3 className="text-base font-semibold">
                              {project.name}
                            </h3>

                            <ExternalLink
                              size={16}
                              className="
                                shrink-0 text-[#6e7681]
                                transition-colors
                                group-hover:text-[#58a6ff]
                              "
                            />
                          </div>

                          <p className="mt-2 min-h-[72px] text-sm leading-6 text-[#8b949e]">
                            {project.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {project.technologies.map((technology) => (
                              <span
                                key={technology}
                                className="
                                  rounded-full border border-[#30363d]
                                  bg-[#21262d]/80 px-2 py-1
                                  text-[11px] font-medium text-[#8b949e]
                                "
                              >
                                {technology}
                              </span>
                            ))}
                          </div>

                          <div
                            className="
                              mt-5 flex items-center gap-1.5
                              text-xs font-medium text-[#58a6ff]
                            "
                          >
                            <ExternalLink size={14} />
                            Visit live project
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </section>
                </ScrollSeen>

                {/* CONTRIBUTION ACTIVITY */}
                <ScrollSeen>
                  <section className="w-full">
                    <h2 className="mb-4 text-base font-semibold tracking-[-0.2px]">
                      Contribution activity
                    </h2>

                    <div
                      className="
                        overflow-hidden rounded-xl border border-[#30363d]
                        bg-[#161b22]/70
                        shadow-[0_10px_35px_rgba(0,0,0,0.15)]
                        backdrop-blur-xl
                      "
                    >
                      <ActivityItem
                        color="bg-[#3fb950]"
                        title="Pushed commits"
                        description="Worked on github-portfolio"
                      />

                      <ActivityItem
                        color="bg-[#58a6ff]"
                        title="Created repository"
                        description="3d-experiments"
                        last
                      />
                    </div>
                  </section>
                </ScrollSeen>
              </motion.div>
            )}

            {/* REPOSITORIES */}
            {activePath === "/repositories" && (
              <motion.section
                key="repositories"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="pt-6"
              >
                <div className="mb-6">
                  <h1 className="text-2xl font-semibold tracking-[-0.5px]">
                    Repositories
                  </h1>

                  <p className="mt-1 text-sm text-[#8b949e]">
                    {repositories.length} public repositories
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 max-[700px]:grid-cols-1">
                  {repositories.map((repo) => (
                    <RepositoryCard key={repo.id} repo={repo} />
                  ))}
                </div>
              </motion.section>
            )}

            {/* PROJECTS */}
            {activePath === "/projects" && (
              <motion.section
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="pt-6"
              >
                <div className="mb-6">
                  <h1 className="text-2xl font-semibold tracking-[-0.5px]">
                    Projects
                  </h1>

                  <p className="mt-1 text-sm text-[#8b949e]">
                    Things I'm building and experimenting with.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-5 max-[800px]:grid-cols-1">
                  {projects.map((project) => (
                    <motion.a
                      key={project.id}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.name} live project in a new tab`}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      }}
                      className="
                        group relative block overflow-hidden rounded-xl
                        border border-[#30363d] bg-[#161b22]/75 p-5
                        shadow-[0_10px_35px_rgba(0,0,0,0.14)]
                        backdrop-blur-xl transition-colors duration-200
                        hover:border-[#484f58] hover:bg-[#1c2128]/90
                        focus-visible:outline-none
                        focus-visible:ring-2 focus-visible:ring-[#58a6ff]
                      "
                    >
                      <div
                        className="
                          relative mb-4 flex h-10 w-10 items-center
                          justify-center rounded-lg border border-[#30363d]
                          bg-[#21262d] text-[#58a6ff]
                        "
                      >
                        <Rocket size={20} />
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <h2 className="text-base font-semibold">
                          {project.name}
                        </h2>

                        <ExternalLink
                          size={16}
                          className="
                            shrink-0 text-[#6e7681]
                            transition-colors
                            group-hover:text-[#58a6ff]
                          "
                        />
                      </div>

                      <p className="mt-2 min-h-[72px] text-sm leading-6 text-[#8b949e]">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="
                              rounded-full border border-[#30363d]
                              bg-[#21262d]/80 px-2 py-1
                              text-[11px] font-medium text-[#8b949e]
                            "
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      <div
                        className="
                          mt-5 flex items-center gap-1.5
                          text-xs font-medium text-[#58a6ff]
                        "
                      >
                        <ExternalLink size={14} />
                        Visit live project
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.section>
            )}

            {/* PACKAGES */}
            {activePath === "/packages" && (
              <motion.section
                key="packages"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="pt-6"
              >
                <div className="mb-6">
                  <h1 className="text-2xl font-semibold tracking-[-0.5px]">
                    Packages
                  </h1>

                  <p className="mt-1 text-sm text-[#8b949e]">
                    Reusable tools and components.
                  </p>
                </div>

                <div className="space-y-3">
                  {packages.map((pkg) => (
                    <motion.article
                      key={pkg.name}
                      whileHover={{ x: 3 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      }}
                      className="
                        flex items-center gap-4 rounded-xl
                        border border-[#30363d] bg-[#161b22]/75 p-5
                        backdrop-blur-xl transition-colors
                        hover:border-[#484f58]
                        max-[600px]:items-start
                      "
                    >
                      <div
                        className="
                          flex h-10 w-10 shrink-0 items-center
                          justify-center rounded-lg border
                          border-[#30363d] bg-[#21262d] text-[#8b949e]
                        "
                      >
                        <Package size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="text-base font-semibold">
                            {pkg.name}
                          </h2>

                          <span
                            className="
                              rounded-full border border-[#30363d]
                              bg-[#21262d] px-2 py-0.5
                              text-[11px] text-[#8b949e]
                            "
                          >
                            v{pkg.version}
                          </span>
                        </div>

                        <p className="mt-1 text-sm leading-6 text-[#8b949e]">
                          {pkg.description}
                        </p>

                        <small className="mt-2 block text-xs text-[#6e7681]">
                          {pkg.downloads} downloads
                        </small>
                      </div>

                      <Code2
                        size={20}
                        className="shrink-0 text-[#6e7681]"
                      />
                    </motion.article>
                  ))}
                </div>
              </motion.section>
            )}

            {/* EXPERIENCE */}
            {activePath === "/experience" && (
              <motion.section
                key="experience"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="pt-6"
              >
                <Experience />
              </motion.section>
            )}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}

function ActivityItem({ color, title, description, last = false }) {
  return (
    <div
      className={`flex items-start gap-4 p-5 ${
        last ? "" : "border-b border-[#30363d]"
      }`}
    >
      <span
        className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${color}`}
      />

      <div>
        <strong className="block text-sm font-medium">{title}</strong>
        <p className="mt-1 text-sm text-[#8b949e]">{description}</p>
      </div>
    </div>
  );
}
