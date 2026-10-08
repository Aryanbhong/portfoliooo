// import {
//   Github,
//   Search,
//   Bell,
//   Plus,
//   Menu,
// } from "lucide-react";

// export default function Header() {
//   return (
//     <header className="github-header">

//       <div className="header-left">

//         <button className="mobile-menu">
//           <Menu size={20} />
//         </button>

//         <div className="github-logo">
//           <Github size={32} strokeWidth={1.8} />
//         </div>

//         <span className="github-title">
//           mayan
//         </span>

//       </div>

//       <div className="header-search">

//         <Search size={17} />

//         <input
//           placeholder="Type / to search"
//         />

//         <kbd>/</kbd>

//       </div>

//       <nav className="header-nav">

//         <a href="#repositories">
//           Repositories
//         </a>

//         <a href="#projects">
//           Projects
//         </a>

//         <a href="#about">
//           About
//         </a>

//       </nav>

//       <div className="header-actions">

//         <button>
//           <Bell size={18} />
//         </button>

//         <button>
//           <Plus size={18} />
//         </button>

//         <div className="mini-avatar">
//           M
//         </div>

//       </div>

//     </header>
//   );
// }

// import {
//   Search,
//   Bell,
//   Plus,
//   Menu,
// } from "lucide-react";

// export default function Header() {
//   return (
//     <header className="github-header">

//       <div className="header-left">

//         <button className="mobile-menu">
//           <Menu size={20} />
//         </button>

//         {/* GitHub Logo */}
//         <div className="github-logo">
//           <svg
//             height="32"
//             width="32"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             aria-hidden="true"
//           >
//             <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
//           </svg>
//         </div>

//         <span className="github-title">
//           Aryan Bhong
//         </span>

//       </div>

//       <div className="header-search">

//         <Search size={17} />

//         <input
//           placeholder="Type / to search"
//         />

//         <kbd>/</kbd>

//       </div>

//       <nav className="header-nav">

//         <a href="#repositories">
//           Repositories
//         </a>

//         <a href="#projects">
//           Projects
//         </a>

//         <a href="#about">
//           About
//         </a>

//       </nav>

//       <div className="header-actions">

//         <button>
//           <Bell size={18} />
//         </button>

//         <button>
//           <Plus size={18} />
//         </button>

//         <div className="mini-avatar">
//         A
//         </div>

//       </div>

//     </header>
//   );
// }



// import {
//   Search,
//   Bell,
//   Plus,
//   Menu,
//   ChevronDown,
// } from "lucide-react";

// import {
//   motion,
// } from "motion/react";

// import {
//   Link,
// } from "react-router-dom";

// export default function Header() {
//   return (
//     <motion.header
//       className="github-header"
//       initial={{
//         opacity: 0,
//         y: -20,
//       }}
//       animate={{
//         opacity: 1,
//         y: 0,
//       }}
//       transition={{
//         duration: 0.5,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//     >
//       <div className="header-left">

//         {/* Mobile menu */}
//         <motion.button
//           className="mobile-menu"
//           whileHover={{
//             scale: 1.08,
//           }}
//           whileTap={{
//             scale: 0.92,
//           }}
//           aria-label="Open menu"
//         >
//           <Menu size={20} />
//         </motion.button>

//         {/* GitHub logo */}
//         <motion.div
//           className="github-logo"
//           whileHover={{
//             scale: 1.08,
//             rotate: -4,
//           }}
//           whileTap={{
//             scale: 0.94,
//           }}
//         >
//           <svg
//             height="32"
//             width="32"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             aria-hidden="true"
//           >
//             <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
//           </svg>
//         </motion.div>

//         <Link
//           to="/"
//           className="github-title"
//         >
//           Aryan Bhong
//         </Link>

//       </div>


//       {/* Search */}
//       <motion.div
//         className="header-search"
//         whileFocus={{
//           scale: 1.01,
//         }}
//       >
//         <Search size={17} />

//         <input
//           placeholder="Type / to search"
//           aria-label="Search"
//         />

//         <kbd>/</kbd>
//       </motion.div>


//       {/* Navigation */}
//       <nav className="header-nav">

//         <Link to="/repositories">
//           Repositories
//         </Link>

//         <Link to="/projects">
//           Projects
//         </Link>

//         <Link to="/packages">
//           Packages
//         </Link>

//       </nav>


//       {/* Actions */}
//       <div className="header-actions">

//         <motion.button
//           whileHover={{
//             y: -2,
//             scale: 1.05,
//           }}
//           whileTap={{
//             scale: 0.9,
//           }}
//           aria-label="Notifications"
//         >
//           <Bell size={18} />
//           <span className="notification-dot" />
//         </motion.button>


//         <motion.button
//           className="create-button"
//           whileHover={{
//             y: -2,
//             scale: 1.03,
//           }}
//           whileTap={{
//             scale: 0.95,
//           }}
//           aria-label="Create"
//         >
//           <Plus size={18} />
//           <ChevronDown size={13} />
//         </motion.button>


//         <motion.div
//           className="mini-avatar"
//           whileHover={{
//             scale: 1.08,
//           }}
//         >
//           A

//           <span className="mini-online-dot" />
//         </motion.div>

//       </div>

//     </motion.header>
//   );
// }


import {
  Search,
  Bell,
  Plus,
  Menu,
  ChevronDown,
} from "lucide-react";

import { motion } from "motion/react";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        sticky top-0 z-[1000]
        flex h-16 w-full items-center
        gap-4
        border-b border-[#30363d]
        bg-[#0d1117]/95
        px-6
        text-[#f0f6fc]
        shadow-[0_8px_30px_rgba(0,0,0,0.18)]
        backdrop-blur-xl
      "
    >
      {/* =====================================================
          LEFT
      ====================================================== */}

      <div className="flex shrink-0 items-center gap-2.5">

        {/* Mobile menu */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Open menu"
          className="
            hidden
            h-[34px] w-[34px]
            items-center justify-center
            rounded-md
            border border-transparent
            bg-transparent
            text-[#8b949e]
            transition-colors
            hover:border-[#30363d]
            hover:bg-[#21262d]
            hover:text-[#f0f6fc]
            max-[760px]:flex
          "
        >
          <Menu size={20} />
        </motion.button>

        {/* GitHub logo */}
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: -4,
          }}
          whileTap={{
            scale: 0.94,
          }}
          className="
            flex h-[34px] w-[34px]
            cursor-pointer
            items-center justify-center
            text-[#f0f6fc]
            transition-colors
            hover:text-white
          "
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </motion.div>

        {/* Name */}
        <Link
          to="/"
          className="
            whitespace-nowrap
            text-[15px]
            font-semibold
            tracking-[-0.2px]
            text-[#f0f6fc]
            transition-colors
            hover:text-white
            max-[760px]:hidden
          "
        >
          Aryan Bhong
        </Link>
      </div>


      {/* =====================================================
          SEARCH
      ====================================================== */}

      <motion.div
        whileFocus={{ scale: 1.01 }}
        className="
          flex h-[34px]
          min-w-0
          max-w-[340px]
          flex-1
          items-center
          gap-2
          rounded-md
          border border-[#30363d]
          bg-[#161b22]
          px-2.5
          text-[#8b949e]
          transition-all
          focus-within:border-[#58a6ff]
          focus-within:shadow-[0_0_0_3px_rgba(88,166,255,0.1)]
          hover:border-[#484f58]
          max-[760px]:max-w-none
        "
      >
        <Search
          size={17}
          className="shrink-0"
        />

        <input
          placeholder="Type / to search"
          aria-label="Search"
          className="
            min-w-0
            flex-1
            bg-transparent
            text-[13px]
            text-[#f0f6fc]
            outline-none
            placeholder:text-[#6e7681]
          "
        />

        <kbd
          className="
            flex h-[22px] w-[22px]
            shrink-0
            items-center justify-center
            rounded
            border border-[#30363d]
            bg-[#21262d]
            text-[11px]
            text-[#6e7681]
            max-[450px]:hidden
          "
        >
          /
        </kbd>
      </motion.div>


      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <nav
        className="
          ml-auto
          flex
          items-center
          gap-1
          max-[760px]:hidden
        "
      >
        <HeaderLink to="/repositories">
          Repositories
        </HeaderLink>

        <HeaderLink to="/projects">
          Projects
        </HeaderLink>

        <HeaderLink to="/experience">
          Experience 
        </HeaderLink>

        <HeaderLink to="/about">
         About
        </HeaderLink>
      </nav>


      {/* =====================================================
          ACTIONS
      ====================================================== */}

      <div className="flex shrink-0 items-center gap-1">

        {/* Notifications */}
        <motion.button
          whileHover={{
            y: -2,
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.9,
          }}
          aria-label="Notifications"
          className="
            relative
            flex h-[34px] w-[34px]
            items-center justify-center
            rounded-md
            border border-transparent
            bg-transparent
            text-[#8b949e]
            transition-colors
            hover:border-[#30363d]
            hover:bg-[#21262d]
            hover:text-[#f0f6fc]
          "
        >
          <Bell size={18} />

          <span
            className="
              absolute
              right-[5px]
              top-[5px]
              h-1.5 w-1.5
              rounded-full
              bg-[#58a6ff]
              shadow-[0_0_8px_rgba(88,166,255,0.7)]
            "
          />
        </motion.button>


        {/* Create */}
        <motion.button
          whileHover={{
            y: -2,
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.95,
          }}
          aria-label="Create"
          className="
            flex h-[34px]
            items-center
            gap-1
            rounded-md
            border border-transparent
            bg-transparent
            px-2
            text-[#8b949e]
            transition-colors
            hover:border-[#30363d]
            hover:bg-[#21262d]
            hover:text-[#f0f6fc]
            max-[760px]:hidden
          "
        >
          <Plus size={18} />
          <ChevronDown size={13} />
        </motion.button>


        {/* Avatar */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="
            relative
            flex h-8 w-8
            shrink-0
            cursor-pointer
            items-center justify-center
            rounded-full
            border border-[#30363d]
            bg-[radial-gradient(circle_at_35%_25%,#30363d,#161b22_70%)]
            text-sm
            font-bold
            text-[#f0f6fc]
            transition-all
            hover:border-[#58a6ff]
            hover:shadow-[0_0_0_3px_rgba(88,166,255,0.08)]
          "
        >
          A

          <span
            className="
              absolute
              bottom-[-1px]
              right-[-1px]
              h-2.5 w-2.5
              rounded-full
              border-2 border-[#0d1117]
              bg-[#3fb950]
              shadow-[0_0_8px_rgba(63,185,80,0.7)]
            "
          />
        </motion.div>

      </div>
    </motion.header>
  );
}


/* =========================================================
   HEADER LINK
========================================================= */

function HeaderLink({ to, children }) {
  return (
    <Link
      to={to}
      className="
        relative
        flex h-[34px]
        items-center
        rounded-md
        px-2.5
        text-[13px]
        font-medium
        whitespace-nowrap
        text-[#8b949e]
        transition-colors
        hover:bg-[#21262d]
        hover:text-[#f0f6fc]

        after:absolute
        after:bottom-[3px]
        after:left-2.5
        after:right-2.5
        after:h-0.5
        after:scale-x-0
        after:rounded-full
        after:bg-[#58a6ff]
        after:transition-transform

        hover:after:scale-x-100
      "
    >
      {children}
    </Link>
  );
}