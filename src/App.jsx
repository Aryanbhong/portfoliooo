// // import Header from "./components/Header.";
// // import ProfileSidebar from "./components/ProfileSidebar";
// // import ContributionGraph from "./components/ContributionGraph";
// // import RepositoryCard from "./components/RepositoryCard";
// // import { repositories } from "./data/portfolio";
// // import ScrollSeen from "./components/ScrollSeen";

// // export default function App() {

// //   return (
// //     <>

// //       <Header />

// //       <main className="page">

// //         <ProfileSidebar />

// //         <section className="content">

// //           <div className="tabs">

// //             <button className="active">
// //               Overview
// //             </button>

// //             <button>
// //               Repositories
// //               <span> {repositories.length}</span>
// //             </button>

// //             <button>
// //               Projects
// //             </button>

// //             <button>
// //               Packages
// //             </button>

// //           </div>

// //           <ContributionGraph />

// //           <section
// //             className="repositories"
// //             id="repositories"
// //           >

// //             <div className="section-heading">

// //               <h2>
// //                 Popular repositories
// //               </h2>

// //               <button>
// //                 Customize pins
// //               </button>

// //             </div>

// //             <div className="repository-grid">

// //               {repositories.map((repo) => (

// //                 <RepositoryCard
// //                   key={repo.id}
// //                   repo={repo}
// //                 />

// //               ))}

// //             </div>

// //           </section>

// //           <section className="activity-section">

// //             <h2>
// //               Contribution activity
// //             </h2>

// //             <div className="activity-card">

// //               <div className="activity-line">
// //                 <span />
// //                 <div>
// //                   <strong>
// //                     Pushed commits
// //                   </strong>

// //                   <p>
// //                     Worked on github-portfolio
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="activity-line">
// //                 <span />
// //                 <div>
// //                   <strong>
// //                     Created repository
// //                   </strong>

// //                   <p>
// //                     3d-experiments
// //                   </p>
// //                 </div>
// //               </div>

// //             </div>

// //           </section>

// //         </section>

// //       </main>

// //     </>
// //   );
// // }


// // import Header from "./components/Header.";
// // import ProfileSidebar from "./components/ProfileSidebar";
// // import ContributionGraph from "./components/ContributionGraph";
// // import RepositoryCard from "./components/RepositoryCard";
// // import ScrollSeen from "./components/ScrollSeen";
// // import AmbientBackground from "./components/AmbientBackground";

// // import { repositories } from "./data/portfolio";

// // export default function App() {
// //   return (
// //     <>
// //       {/* Animated background */}
// //       <AmbientBackground />

// //       {/* GitHub-style header */}
// //       <Header />

// //       <main className="page">

// //         {/* Profile sidebar */}
// //         <ProfileSidebar />

// //         <section className="content">

// //           {/* Profile tabs */}
// //           <ScrollSeen>
// //             <div className="tabs">

// //               <button className="active">
// //                 Overview
// //               </button>

// //               <button>
// //                 Repositories
// //                 <span> {repositories.length}</span>
// //               </button>

// //               <button>
// //                 Projects
// //               </button>

// //               <button>
// //                 Packages
// //               </button>

// //             </div>
// //           </ScrollSeen>


// //           {/* Contribution graph */}
// //           <ScrollSeen>
// //             <ContributionGraph />
// //           </ScrollSeen>


// //           {/* Popular repositories */}
// //           <ScrollSeen>
// //             <section
// //               className="repositories"
// //               id="repositories"
// //             >

// //               <div className="section-heading">

// //                 <h2>
// //                   Popular repositories
// //                 </h2>

// //                 <button>
// //                   Customize pins
// //                 </button>

// //               </div>


// //               <div className="repository-grid">

// //                 {repositories.map((repo) => (
// //                   <RepositoryCard
// //                     key={repo.id}
// //                     repo={repo}
// //                   />
// //                 ))}

// //               </div>

// //             </section>
// //           </ScrollSeen>


// //           {/* Contribution activity */}
// //           <ScrollSeen>
// //             <section className="activity-section">

// //               <h2>
// //                 Contribution activity
// //               </h2>


// //               <div className="activity-card">

// //                 <div className="activity-line">

// //                   <span />

// //                   <div>

// //                     <strong>
// //                       Pushed commits
// //                     </strong>

// //                     <p>
// //                       Worked on github-portfolio
// //                     </p>

// //                   </div>

// //                 </div>


// //                 <div className="activity-line">

// //                   <span />

// //                   <div>

// //                     <strong>
// //                       Created repository
// //                     </strong>

// //                     <p>
// //                       3d-experiments
// //                     </p>

// //                   </div>

// //                 </div>

// //               </div>

// //             </section>
// //           </ScrollSeen>

// //         </section>

// //       </main>
// //     </>
// //   );
// // }


// import Header from "./components/Header.";
// import ProfileSidebar from "./components/ProfileSidebar";
// import ProfileTabs from "./components/ProfileTabs";
// import ContributionGraph from "./components/ContributionGraph";
// import RepositoryCard from "./components/RepositoryCard";
// import ScrollSeen from "./components/ScrollSeen";
// import AmbientBackground from "./components/AmbientBackground";

// import { repositories } from "./data/portfolio";

// export default function App() {
//   return (
//     <>
//       Animated background
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


// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// import Profile from "./pages/Profile";
// import Repository from "./pages/Repository";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route
//           path="/"
//           element={<Profile />}
//         />

//         <Route
//           path="/repo/:repoId"
//           element={<Repository />}
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }


// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// import Profile from "./pages/Profile";
// import Repository from "./pages/Repository";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Profile />} />

//         <Route
//           path="/repositories"
//           element={<Profile />}
//         />

//         <Route
//           path="/projects"
//           element={<Profile />}
//         />

//         <Route
//           path="/packages"
//           element={<Profile />}
//         />

//         <Route
//           path="/repo/:repoId"
//           element={<Repository />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header.";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Repository from "./pages/Repository";
import Experience from "./pages/Experience";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Profile />} />

        <Route
          path="/repositories"
          element={<Profile />}
        />

        <Route
          path="/projects"
          element={<Profile />}
        />

        <Route
          path="/packages"
          element={<Profile />}
        />

        <Route
          path="/experience"
          element={<Experience />}
        />

        <Route
          path="/repo/:repoId"
          element={<Repository />}
        />
        <Route
          path="/about"
          element={<About/>}
        />
      </Routes>
    </BrowserRouter>
  );
}