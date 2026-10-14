// import {
//   BookOpen,
//   GitPullRequest,
//   Box,
//   FolderKanban,
// } from "lucide-react";

// import {
//   motion,
//   AnimatePresence,
// } from "motion/react";

// const tabs = [
//   {
//     id: "overview",
//     label: "Overview",
//     icon: BookOpen,
//   },
//   {
//     id: "repositories",
//     label: "Repositories",
//     count: 6,
//     icon: GitPullRequest,
//   },
//   {
//     id: "projects",
//     label: "Projects",
//     icon: FolderKanban,
//   },
//   {
//     id: "packages",
//     label: "Packages",
//     icon: Box,
//   },
// ];

// export default function ProfileTabs({
//   activeTab = "overview",
//   onTabChange,
// }) {
//   return (
//     <nav className="profile-tabs">

//       {tabs.map((tab) => {
//         const Icon = tab.icon;
//         const isActive = activeTab === tab.id;

//         return (
//           <button
//             key={tab.id}
//             className={`profile-tab ${
//               isActive ? "active" : ""
//             }`}
//             onClick={() => onTabChange?.(tab.id)}
//           >

//             <motion.span
//               className="profile-tab-content"
//               whileHover={{
//                 y: -1,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 400,
//                 damping: 20,
//               }}
//             >

//               <Icon size={16} />

//               <span>
//                 {tab.label}
//               </span>

//               {tab.count && (
//                 <span className="tab-count">
//                   {tab.count}
//                 </span>
//               )}

//             </motion.span>


//             <AnimatePresence>
//               {isActive && (
//                 <motion.span
//                   className="tab-active-line"
//                   layoutId="active-profile-tab"
//                   initial={{
//                     opacity: 0,
//                     scaleX: 0,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     scaleX: 1,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     scaleX: 0,
//                   }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 500,
//                     damping: 35,
//                   }}
//                 />
//               )}
//             </AnimatePresence>

//           </button>
//         );
//       })}

//     </nav>
//   );
// }



// import {
//   BookOpen,
//   GitPullRequest,
//   Box,
//   FolderKanban,
// } from "lucide-react";

// import {
//   motion,
//   AnimatePresence,
// } from "motion/react";

// import {
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// const tabs = [
//   {
//     id: "overview",
//     label: "Overview",
//     path: "/",
//     icon: BookOpen,
//   },
//   {
//     id: "repositories",
//     label: "Repositories",
//     count: 6,
//     path: "/repositories",
//     icon: GitPullRequest,
//   },
//   {
//     id: "projects",
//     label: "Projects",
//     path: "/projects",
//     icon: FolderKanban,
//   },
//   {
//     id: "packages",
//     label: "Packages",
//     path: "/packages",
//     icon: Box,
//   },
// ];

// export default function ProfileTabs() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const activeTab =
//     tabs.find(
//       (tab) => tab.path === location.pathname
//     )?.id || "overview";

//   function handleTabChange(tab) {
//     navigate(tab.path);
//   }

//   return (
//     <nav className="profile-tabs">
//       {tabs.map((tab) => {
//         const Icon = tab.icon;
//         const isActive = activeTab === tab.id;

//         return (
//           <button
//             key={tab.id}
//             className={`profile-tab ${
//               isActive ? "active" : ""
//             }`}
//             onClick={() => handleTabChange(tab)}
//           >
//             <motion.span
//               className="profile-tab-content"
//               whileHover={{ y: -1 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 400,
//                 damping: 20,
//               }}
//             >
//               <Icon size={16} />

//               <span>{tab.label}</span>

//               {tab.count && (
//                 <span className="tab-count">
//                   {tab.count}
//                 </span>
//               )}
//             </motion.span>

//             <AnimatePresence>
//               {isActive && (
//                 <motion.span
//                   className="tab-active-line"
//                   layoutId="active-profile-tab"
//                   initial={{
//                     opacity: 0,
//                     scaleX: 0,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     scaleX: 1,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     scaleX: 0,
//                   }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 500,
//                     damping: 35,
//                   }}
//                 />
//               )}
//             </AnimatePresence>
//           </button>
//         );
//       })}
//     </nav>
//   );
// }



import {
  BookOpen,
  GitPullRequest,
  Box,
  FolderKanban,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "motion/react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    path: "/",
    icon: BookOpen,
  },
  {
    id: "repositories",
    label: "Repositories",
    count: 6,
    path: "/repositories",
    icon: GitPullRequest,
  },
  {
    id: "projects",
    label: "Projects",
    path: "/projects",
    icon: FolderKanban,
  },
  {
    id: "experience",
    label: "experience",
    path: "/experience",
    icon: Box,
  },
];

export default function ProfileTabs() {
  const location = useLocation();
  const navigate = useNavigate();

  const activeTab =
    tabs.find(
      (tab) => tab.path === location.pathname
    )?.id || "overview";

  function handleTabChange(tab) {
    navigate(tab.path);
  }

  return (
    <nav
      className="
        flex
        min-h-[62px]
        w-full
        items-end
        gap-1
        overflow-x-auto
        border-b
        border-[#30363d]
        px-1
        scrollbar-none
        max-[600px]:gap-0
      "
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab)}
            className={`
              relative
              flex
              h-[62px]
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-t-md
              px-4
              text-sm
              font-medium
              transition-colors
              duration-200
              outline-none

              max-[600px]:px-3
              max-[450px]:gap-1.5
              max-[450px]:text-xs

              ${
                isActive
                  ? "text-[#f0f6fc]"
                  : "text-[#8b949e] hover:bg-[#161b22] hover:text-[#f0f6fc]"
              }

              focus-visible:ring-2
              focus-visible:ring-[#58a6ff]/50
              focus-visible:ring-inset
            `}
          >
            <motion.span
              whileHover={{
                y: -1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              className="flex items-center gap-2"
            >
              <Icon
                size={16}
                className={`
                  shrink-0
                  ${
                    isActive
                      ? "text-[#f0f6fc]"
                      : "text-[#8b949e]"
                  }
                `}
              />

              <span>{tab.label}</span>

              {tab.count && (
                <span
                  className="
                    rounded-full
                    bg-[#21262d]
                    px-1.5
                    py-0.5
                    text-[11px]
                    font-medium
                    leading-none
                    text-[#8b949e]
                  "
                >
                  {tab.count}
                </span>
              )}
            </motion.span>

            <AnimatePresence>
              {isActive && (
                <motion.span
                  layoutId="active-profile-tab"
                  initial={{
                    opacity: 0,
                    scaleX: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scaleX: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scaleX: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                  className="
                    absolute
                    bottom-[-1px]
                    left-2
                    right-2
                    h-0.5
                    origin-center
                    rounded-full
                    bg-[#f78166]
                    shadow-[0_0_10px_rgba(247,129,102,0.35)]
                  "
                />
              )}
            </AnimatePresence>
          </button>
        );
      })}
    </nav>
  );
}