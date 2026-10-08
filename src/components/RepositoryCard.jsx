// // // import {
// // //   Star,
// // //   GitFork,
// // // } from "lucide-react";

// // // import { motion } from "motion/react";

// // // export default function RepositoryCard({ repo }) {

// // //   return (
// // //     <motion.article
// // //       className="repository-card"

// // //       whileHover={{
// // //         y: -6,
// // //         rotateX: 2,
// // //         rotateY: -2,
// // //         scale: 1.01,
// // //       }}

// // //       transition={{
// // //         type: "spring",
// // //         stiffness: 300,
// // //         damping: 20,
// // //       }}

// // //       style={{
// // //         transformPerspective: 1000,
// // //       }}
// // //     >

// // //       <div className="repo-header">

// // //         <a className="repo-name">
// // //           {repo.name}
// // //         </a>

// // //         <span className="public-badge">
// // //           Public
// // //         </span>

// // //       </div>

// // //       <p className="repo-description">
// // //         {repo.description}
// // //       </p>

// // //       <div className="repo-topics">

// // //         {repo.topics.map((topic) => (
// // //           <span
// // //             className="topic"
// // //             key={topic}
// // //           >
// // //             {topic}
// // //           </span>
// // //         ))}

// // //       </div>

// // //       <div className="repo-footer">

// // //         <span className="language">

// // //           <span
// // //             className="language-dot"
// // //             style={{
// // //               background: repo.languageColor,
// // //             }}
// // //           />

// // //           {repo.language}

// // //         </span>

// // //         <span className="repo-stat">
// // //           <Star size={15} />
// // //           {repo.stars}
// // //         </span>

// // //         <span className="repo-stat">
// // //           <GitFork size={15} />
// // //           {repo.forks}
// // //         </span>

// // //         <span className="updated">
// // //           Updated {repo.updated}
// // //         </span>

// // //       </div>

// // //     </motion.article>
// // //   );
// // // }


// // import {
// //   Star,
// //   GitFork,
// // } from "lucide-react";

// // import {
// //   motion,
// //   useMotionValue,
// //   useSpring,
// //   useTransform,
// // } from "motion/react";

// // import { useRef } from "react";

// // export default function RepositoryCard({ repo }) {

// //   const cardRef = useRef(null);

// //   const mouseX = useMotionValue(0);
// //   const mouseY = useMotionValue(0);

// //   const rotateX = useSpring(
// //     useTransform(mouseY, [-0.5, 0.5], [8, -8]),
// //     {
// //       stiffness: 300,
// //       damping: 25,
// //     }
// //   );

// //   const rotateY = useSpring(
// //     useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
// //     {
// //       stiffness: 300,
// //       damping: 25,
// //     }
// //   );

// //   function handleMouseMove(event) {

// //     if (!cardRef.current) return;

// //     const rect =
// //       cardRef.current.getBoundingClientRect();

// //     const x =
// //       (event.clientX - rect.left) / rect.width;

// //     const y =
// //       (event.clientY - rect.top) / rect.height;

// //     mouseX.set(x - 0.5);
// //     mouseY.set(y - 0.5);
// //   }

// //   function handleMouseLeave() {
// //     mouseX.set(0);
// //     mouseY.set(0);
// //   }

// //   return (
// //     <motion.article
// //       ref={cardRef}

// //       className="repository-card"

// //       onMouseMove={handleMouseMove}
// //       onMouseLeave={handleMouseLeave}

// //       style={{
// //         rotateX,
// //         rotateY,
// //         transformPerspective: 1000,
// //       }}

// //       whileHover={{
// //         scale: 1.02,
// //       }}

// //       transition={{
// //         type: "spring",
// //         stiffness: 300,
// //         damping: 20,
// //       }}
// //     >

// //       <div className="repo-header">

// //         <a className="repo-name">
// //           {repo.name}
// //         </a>

// //         <span className="public-badge">
// //           Public
// //         </span>

// //       </div>

// //       <p className="repo-description">
// //         {repo.description}
// //       </p>

// //       <div className="repo-topics">

// //         {repo.topics.map((topic) => (
// //           <span
// //             className="topic"
// //             key={topic}
// //           >
// //             {topic}
// //           </span>
// //         ))}

// //       </div>

// //       <div className="repo-footer">

// //         <span className="language">

// //           <span
// //             className="language-dot"
// //             style={{
// //               background: repo.languageColor,
// //             }}
// //           />

// //           {repo.language}

// //         </span>

// //         <span className="repo-stat">
// //           <Star size={15} />
// //           {repo.stars}
// //         </span>

// //         <span className="repo-stat">
// //           <GitFork size={15} />
// //           {repo.forks}
// //         </span>

// //         <span className="updated">
// //           Updated {repo.updated}
// //         </span>

// //       </div>

// //     </motion.article>
// //   );
// // }


// import {
//   Star,
//   GitFork,
// } from "lucide-react";

// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from "motion/react";

// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";

// export default function RepositoryCard({ repo }) {
//   const cardRef = useRef(null);
//   const navigate = useNavigate();

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const rotateX = useSpring(
//     useTransform(mouseY, [-0.5, 0.5], [8, -8]),
//     {
//       stiffness: 300,
//       damping: 25,
//     }
//   );

//   const rotateY = useSpring(
//     useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
//     {
//       stiffness: 300,
//       damping: 25,
//     }
//   );

//   function handleMouseMove(event) {
//     if (!cardRef.current) return;

//     const rect =
//       cardRef.current.getBoundingClientRect();

//     const x =
//       (event.clientX - rect.left) / rect.width;

//     const y =
//       (event.clientY - rect.top) / rect.height;

//     mouseX.set(x - 0.5);
//     mouseY.set(y - 0.5);
//   }

//   function handleMouseLeave() {
//     mouseX.set(0);
//     mouseY.set(0);
//   }

//   function openRepository() {
//     navigate(`/repo/${repo.id}`);
//   }

//   return (
//     <motion.article
//       ref={cardRef}
//       className="repository-card"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       onClick={openRepository}
//       style={{
//         rotateX,
//         rotateY,
//         transformPerspective: 1000,
//       }}
//       whileHover={{
//         scale: 1.025,
//       }}
//       whileTap={{
//         scale: 0.98,
//       }}
//     >

//       <div className="repo-header">

//         <span className="repo-name">
//           {repo.name}
//         </span>

//         <span className="public-badge">
//           Public
//         </span>

//       </div>


//       <p className="repo-description">
//         {repo.description}
//       </p>


//       <div className="repo-topics">

//         {repo.topics.map((topic) => (
//           <span
//             className="topic"
//             key={topic}
//           >
//             {topic}
//           </span>
//         ))}

//       </div>


//       <div className="repo-footer">

//         <span className="language">

//           <span
//             className="language-dot"
//             style={{
//               background:
//                 repo.languageColor,
//             }}
//           />

//           {repo.language}

//         </span>


//         <span className="repo-stat">
//           <Star size={15} />
//           {repo.stars}
//         </span>


//         <span className="repo-stat">
//           <GitFork size={15} />
//           {repo.forks}
//         </span>


//         <span className="updated">
//           Updated {repo.updated}
//         </span>

//       </div>

//     </motion.article>
//   );
// }



// import {
//   Star,
//   GitFork,
// } from "lucide-react";

// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from "motion/react";

// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";

// export default function RepositoryCard({ repo }) {
//   const cardRef = useRef(null);
//   const navigate = useNavigate();

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const rotateX = useSpring(
//     useTransform(mouseY, [-0.5, 0.5], [8, -8]),
//     {
//       stiffness: 300,
//       damping: 25,
//     }
//   );

//   const rotateY = useSpring(
//     useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
//     {
//       stiffness: 300,
//       damping: 25,
//     }
//   );

//   function handleMouseMove(event) {
//     if (!cardRef.current) return;

//     const rect =
//       cardRef.current.getBoundingClientRect();

//     const x =
//       (event.clientX - rect.left) / rect.width;

//     const y =
//       (event.clientY - rect.top) / rect.height;

//     mouseX.set(x - 0.5);
//     mouseY.set(y - 0.5);
//   }

//   function handleMouseLeave() {
//     mouseX.set(0);
//     mouseY.set(0);
//   }

//   function openRepository() {
//     navigate(`/repo/${repo.id}`);
//   }

//   return (
//     <motion.article
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       onClick={openRepository}
//       style={{
//         rotateX,
//         rotateY,
//         transformPerspective: 1000,
//       }}
//       whileHover={{
//         scale: 1.025,
//       }}
//       whileTap={{
//         scale: 0.98,
//       }}
//       className="
//         group
//         relative
//         min-w-0
//         cursor-pointer
//         overflow-hidden
//         rounded-xl
//         border
//         border-[#30363d]
//         bg-[#161b22]/90
//         p-5
//         text-[#f0f6fc]
//         shadow-[0_12px_35px_rgba(0,0,0,0.18)]
//         backdrop-blur-xl
//         transition-[border-color,box-shadow]
//         duration-200
//         hover:border-[#484f58]
//         hover:shadow-[0_20px_45px_rgba(0,0,0,0.28)]
//         [transform-style:preserve-3d]
//       "
//     >
//       {/* Subtle hover glow */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           rounded-xl
//           bg-[radial-gradient(circle_at_20%_0%,rgba(88,166,255,0.08),transparent_45%)]
//           opacity-0
//           transition-opacity
//           duration-300
//           group-hover:opacity-100
//         "
//       />

//       <div className="relative z-10">
//         <div className="flex items-center gap-2.5">
//           <span
//             className="
//               min-w-0
//               flex-1
//               truncate
//               text-base
//               font-semibold
//               text-[#58a6ff]
//               transition-colors
//               group-hover:text-[#79c0ff]
//             "
//           >
//             {repo.name}
//           </span>

//           <span
//             className="
//               shrink-0
//               rounded-full
//               border
//               border-[#30363d]
//               bg-[#21262d]
//               px-2
//               py-0.5
//               text-[11px]
//               font-medium
//               text-[#8b949e]
//             "
//           >
//             Public
//           </span>
//         </div>

//         <p
//           className="
//             mt-3
//             min-h-[48px]
//             text-sm
//             leading-6
//             text-[#8b949e]
//           "
//         >
//           {repo.description}
//         </p>

//         <div className="mt-4 flex flex-wrap gap-1.5">
//           {repo.topics.map((topic) => (
//             <span
//               key={topic}
//               className="
//                 rounded-full
//                 border
//                 border-[#30363d]
//                 bg-[#21262d]
//                 px-2
//                 py-1
//                 text-[11px]
//                 font-medium
//                 text-[#8b949e]
//                 transition-colors
//                 group-hover:border-[#3d444d]
//               "
//             >
//               {topic}
//             </span>
//           ))}
//         </div>

//         <div
//           className="
//             mt-5
//             flex
//             flex-wrap
//             items-center
//             gap-x-4
//             gap-y-2
//             border-t
//             border-[#30363d]
//             pt-4
//             text-xs
//             text-[#8b949e]
//           "
//         >
//           <span className="flex items-center gap-1.5">
//             <span
//               className="
//                 h-3
//                 w-3
//                 shrink-0
//                 rounded-full
//                 border
//                 border-[#0d1117]
//                 shadow-[0_0_6px_rgba(255,255,255,0.08)]
//               "
//               style={{
//                 background: repo.languageColor,
//               }}
//             />

//             {repo.language}
//           </span>

//           <span className="flex items-center gap-1.5">
//             <Star
//               size={15}
//               className="text-[#8b949e]"
//             />
//             {repo.stars}
//           </span>

//           <span className="flex items-center gap-1.5">
//             <GitFork
//               size={15}
//               className="text-[#8b949e]"
//             />
//             {repo.forks}
//           </span>

//           <span className="ml-auto text-[#6e7681] max-[500px]:ml-0">
//             Updated {repo.updated}
//           </span>
//         </div>
//       </div>
//     </motion.article>
//   );
// }



import {
  Star,
  GitFork,
} from "lucide-react";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function RepositoryCard({ repo }) {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    {
      stiffness: 300,
      damping: 25,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    {
      stiffness: 300,
      damping: 25,
    }
  );

  function handleMouseMove(event) {
    if (!cardRef.current) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width;

    const y =
      (event.clientY - rect.top) / rect.height;

    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  function openRepository() {
    navigate(`/repo/${repo.id}`);
  }

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={openRepository}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
        group
        relative
        min-h-[250px]
        min-w-0
        cursor-pointer
        overflow-hidden
        rounded-xl
        border
        border-[#30363d]
        bg-[#161b22]
        text-[#f0f6fc]
        shadow-[0_12px_35px_rgba(0,0,0,0.25)]
        transition-[border-color,box-shadow]
        duration-300
        hover:border-[#484f58]
        hover:shadow-[0_25px_55px_rgba(0,0,0,0.4)]
        [transform-style:preserve-3d]
      "
    >
      {/* Project image */}

      {repo.image && (
        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
          style={{
            backgroundImage: `url(${repo.image})`,
          }}
        />
      )}

      {/* Dark overlay */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-[#0d1117]/55
          via-[#0d1117]/75
          to-[#0d1117]/98
        "
      />

      {/* Extra hover glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_20%_0%,rgba(88,166,255,0.14),transparent_45%)]
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[250px]
          flex-col
          justify-end
          p-5
        "
      >
        <div className="flex items-center gap-2.5">
          <span
            className="
              min-w-0
              flex-1
              truncate
              text-base
              font-semibold
              text-[#58a6ff]
              transition-colors
              group-hover:text-[#79c0ff]
            "
          >
            {repo.name}
          </span>

          <span
            className="
              shrink-0
              rounded-full
              border
              border-[#484f58]
              bg-[#0d1117]/70
              px-2
              py-0.5
              text-[11px]
              font-medium
              text-[#f0f6fc]
              backdrop-blur-md
            "
          >
            Public
          </span>
        </div>

        <p
          className="
            mt-3
            line-clamp-2
            min-h-[48px]
            text-sm
            leading-6
            text-[#c9d1d9]
          "
        >
          {repo.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {repo.topics.map((topic) => (
            <span
              key={topic}
              className="
                rounded-full
                border
                border-[#484f58]
                bg-[#0d1117]/65
                px-2
                py-1
                text-[11px]
                font-medium
                text-[#c9d1d9]
                backdrop-blur-md
                transition-colors
                group-hover:border-[#58a6ff]/40
                group-hover:text-[#f0f6fc]
              "
            >
              {topic}
            </span>
          ))}
        </div>

        <div
          className="
            mt-5
            flex
            flex-wrap
            items-center
            gap-x-4
            gap-y-2
            border-t
            border-white/10
            pt-4
            text-xs
            text-[#c9d1d9]
          "
        >
          <span className="flex items-center gap-1.5">
            <span
              className="
                h-3
                w-3
                shrink-0
                rounded-full
                border
                border-[#0d1117]
                shadow-[0_0_6px_rgba(255,255,255,0.15)]
              "
              style={{
                background: repo.languageColor,
              }}
            />

            {repo.language}
          </span>

          <span className="flex items-center gap-1.5">
            <Star
              size={15}
              className="text-[#e3b341]"
            />
            {repo.stars}
          </span>

          <span className="flex items-center gap-1.5">
            <GitFork
              size={15}
              className="text-[#58a6ff]"
            />
            {repo.forks}
          </span>

          <span className="ml-auto text-[#8b949e] max-[500px]:ml-0">
            Updated {repo.updated}
          </span>
        </div>
      </div>
    </motion.article>
  );
}