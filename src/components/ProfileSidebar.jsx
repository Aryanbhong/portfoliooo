// // // import {
// // //   MapPin,
// // //   Link as LinkIcon,
// // //   Users,
// // //   Mail,
// // // } from "lucide-react";

// // // import { profile } from "../data/portfolio";

// // // export default function ProfileSidebar() {
// // //   return (
// // //     <aside className="profile-sidebar">

// // //       <div className="avatar-container">

// // //         <div className="profile-avatar">
// // //           A
// // //         </div>

// // //         <span className="online-dot"></span>

// // //       </div>

// // //       <h1>{profile.name}</h1>

// // //       <h2>@{profile.username}</h2>

// // //       <p className="bio">
// // //         {profile.bio}
// // //       </p>

// // //       <button className="edit-profile">
// // //         Edit profile
// // //       </button>

// // //       <div className="followers">

// // //         <Users size={16} />

// // //         <strong>{profile.followers}</strong>
// // //         <span>followers</span>

// // //         <span>·</span>

// // //         <strong>{profile.following}</strong>
// // //         <span>following</span>

// // //       </div>

// // //       <div className="profile-info">

// // //         <div>
// // //           <MapPin size={16} />
// // //           <span>{profile.location}</span>
// // //         </div>

// // //         <div>
// // //           <LinkIcon size={16} />

// // //           <a href={profile.website}>
// // //             portfolio.dev
// // //           </a>
// // //         </div>

// // //         <div>
// // //           <Mail size={16} />

// // //           <span>
// // //             available for opportunities
// // //           </span>
// // //         </div>

// // //       </div>

// // //     </aside>
// // //   );
// // // }


// // import {
// //   MapPin,
// //   Link as LinkIcon,
// //   Users,
// //   Mail,
// // } from "lucide-react";

// // import {
// //   motion,
// //   useMotionValue,
// //   useSpring,
// //   useTransform,
// // } from "motion/react";

// // import { useRef } from "react";

// // import { profile } from "../data/portfolio";

// // export default function ProfileSidebar() {
// //   const cardRef = useRef(null);

// //   const mouseX = useMotionValue(0);
// //   const mouseY = useMotionValue(0);

// //   const rotateX = useSpring(
// //     useTransform(mouseY, [-0.5, 0.5], [7, -7]),
// //     {
// //       stiffness: 300,
// //       damping: 25,
// //     }
// //   );

// //   const rotateY = useSpring(
// //     useTransform(mouseX, [-0.5, 0.5], [-7, 7]),
// //     {
// //       stiffness: 300,
// //       damping: 25,
// //     }
// //   );

// //   const avatarX = useSpring(
// //     useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
// //     {
// //       stiffness: 250,
// //       damping: 20,
// //     }
// //   );

// //   const avatarY = useSpring(
// //     useTransform(mouseY, [-0.5, 0.5], [-10, 10]),
// //     {
// //       stiffness: 250,
// //       damping: 20,
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
// //     <motion.aside
// //       ref={cardRef}
// //       className="profile-sidebar"
// //       onMouseMove={handleMouseMove}
// //       onMouseLeave={handleMouseLeave}
// //       style={{
// //         rotateX,
// //         rotateY,
// //         transformPerspective: 1200,
// //       }}
// //     >
// //       {/* Cursor-following light */}

// //       <motion.div
// //         className="profile-card-glow"
// //         style={{
// //           x: useTransform(
// //             mouseX,
// //             [-0.5, 0.5],
// //             ["0%", "100%"]
// //           ),
// //           y: useTransform(
// //             mouseY,
// //             [-0.5, 0.5],
// //             ["0%", "100%"]
// //           ),
// //         }}
// //       />

// //       {/* Avatar */}

// //       <motion.div
// //         className="avatar-container"
// //         style={{
// //           x: avatarX,
// //           y: avatarY,
// //           translateZ: 40,
// //         }}
// //       >
// //         <motion.div
// //           className="avatar-ring"
// //           animate={{
// //             rotate: 360,
// //           }}
// //           transition={{
// //             duration: 12,
// //             repeat: Infinity,
// //             ease: "linear",
// //           }}
// //         />

// //         <motion.div
// //           className="profile-avatar"
// //           whileHover={{
// //             scale: 1.05,
// //           }}
// //         >
// //           A
// //         </motion.div>

// //         <motion.span
// //           className="online-dot"
// //           animate={{
// //             scale: [1, 1.2, 1],
// //             opacity: [1, 0.7, 1],
// //           }}
// //           transition={{
// //             duration: 2,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //           }}
// //         />
// //       </motion.div>


// //       {/* Identity */}

// //       <motion.h1
// //         style={{
// //           translateZ: 25,
// //         }}
// //       >
// //         {profile.name}
// //       </motion.h1>

// //       <motion.h2
// //         style={{
// //           translateZ: 20,
// //         }}
// //       >
// //         @{profile.username}
// //       </motion.h2>


// //       {/* Bio */}

// //       <motion.p
// //         className="bio"
// //         style={{
// //           translateZ: 15,
// //         }}
// //       >
// //         {profile.bio}
// //       </motion.p>


// //       {/* Edit profile */}

// //       <motion.button
// //         className="edit-profile"
// //         whileHover={{
// //           y: -2,
// //         }}
// //         whileTap={{
// //           scale: 0.98,
// //         }}
// //       >
// //         Edit profile
// //       </motion.button>


// //       {/* Followers */}

// //       <motion.div
// //         className="followers"
// //         style={{
// //           translateZ: 15,
// //         }}
// //       >
// //         <Users size={16} />

// //         <strong>
// //           {profile.followers}
// //         </strong>

// //         <span>followers</span>

// //         <span>·</span>

// //         <strong>
// //           {profile.following}
// //         </strong>

// //         <span>following</span>
// //       </motion.div>


// //       {/* Profile information */}

// //       <motion.div
// //         className="profile-info"
// //         style={{
// //           translateZ: 15,
// //         }}
// //       >
// //         <div>
// //           <MapPin size={16} />
// //           <span>{profile.location}</span>
// //         </div>

// //         <div>
// //           <LinkIcon size={16} />

// //           <a
// //             href={profile.website}
// //             target="_blank"
// //             rel="noreferrer"
// //           >
// //             portfolio.dev
// //           </a>
// //         </div>

// //         <div>
// //           <Mail size={16} />

// //           <span>
// //             available for opportunities
// //           </span>
// //         </div>
// //       </motion.div>


// //       {/* Decorative depth layers */}

// //       <div className="profile-card-line line-one" />
// //       <div className="profile-card-line line-two" />

// //     </motion.aside>
// //   );
// // }


// // import {
// //   MapPin,
// //   Link as LinkIcon,
// //   Users,
// //   Mail,
// // } from "lucide-react";

// // import {
// //   motion,
// //   useMotionValue,
// //   useSpring,
// //   useTransform,
// // } from "motion/react";

// // import { useRef } from "react";

// // import { profile } from "../data/portfolio";

// // export default function ProfileSidebar() {
// //   const cardRef = useRef(null);

// //   const mouseX = useMotionValue(0);
// //   const mouseY = useMotionValue(0);

// //   const rotateX = useSpring(
// //     useTransform(mouseY, [-0.5, 0.5], [7, -7]),
// //     {
// //       stiffness: 300,
// //       damping: 25,
// //     }
// //   );

// //   const rotateY = useSpring(
// //     useTransform(mouseX, [-0.5, 0.5], [-7, 7]),
// //     {
// //       stiffness: 300,
// //       damping: 25,
// //     }
// //   );

// //   const avatarX = useSpring(
// //     useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
// //     {
// //       stiffness: 250,
// //       damping: 20,
// //     }
// //   );

// //   const avatarY = useSpring(
// //     useTransform(mouseY, [-0.5, 0.5], [-10, 10]),
// //     {
// //       stiffness: 250,
// //       damping: 20,
// //     }
// //   );

// //   const glowX = useTransform(
// //     mouseX,
// //     [-0.5, 0.5],
// //     ["0%", "100%"]
// //   );

// //   const glowY = useTransform(
// //     mouseY,
// //     [-0.5, 0.5],
// //     ["0%", "100%"]
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
// //     <motion.aside
// //       ref={cardRef}
// //       onMouseMove={handleMouseMove}
// //       onMouseLeave={handleMouseLeave}
// //       style={{
// //         rotateX,
// //         rotateY,
// //         transformPerspective: 1200,
// //       }}
// //       className="
// //         relative
// //         w-full
// //         max-w-[296px]
// //         shrink-0
// //         overflow-hidden
// //         rounded-xl
// //         border
// //         border-[#30363d]
// //         bg-[#161b22]/90
// //         p-5
// //         text-[#f0f6fc]
// //         shadow-[0_20px_60px_rgba(0,0,0,0.28)]
// //         backdrop-blur-xl

// //         max-[900px]:max-w-none

// //         [transform-style:preserve-3d]
// //       "
// //     >
// //       {/* Cursor-following glow */}

// //       <motion.div
// //         style={{
// //           x: glowX,
// //           y: glowY,
// //         }}
// //         className="
// //           pointer-events-none
// //           absolute
// //           left-[-50%]
// //           top-[-50%]
// //           h-full
// //           w-full
// //           rounded-full
// //           bg-[radial-gradient(circle,rgba(88,166,255,0.14),transparent_65%)]
// //           blur-2xl
// //         "
// //       />

// //       {/* Subtle card border glow */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           inset-0
// //           rounded-xl
// //           bg-[linear-gradient(135deg,rgba(88,166,255,0.08),transparent_35%,rgba(137,87,229,0.06))]
// //         "
// //       />

// //       {/* Avatar */}

// //       <motion.div
// //         style={{
// //           x: avatarX,
// //           y: avatarY,
// //           translateZ: 40,
// //         }}
// //         className="
// //           relative
// //           mx-auto
// //           mb-4
// //           flex
// //           h-[120px]
// //           w-[120px]
// //           items-center
// //           justify-center
// //           [transform-style:preserve-3d]
// //         "
// //       >
// //         <motion.div
// //           animate={{
// //             rotate: 360,
// //           }}
// //           transition={{
// //             duration: 12,
// //             repeat: Infinity,
// //             ease: "linear",
// //           }}
// //           className="
// //             absolute
// //             inset-[-7px]
// //             rounded-full
// //             border
// //             border-dashed
// //             border-[#58a6ff]/50
// //             [box-shadow:0_0_25px_rgba(88,166,255,0.14)]
// //           "
// //         />

// //         <div
// //           className="
// //             absolute
// //             inset-0
// //             rounded-full
// //             bg-[radial-gradient(circle_at_35%_25%,#30363d,#161b22_68%)]
// //             shadow-[0_12px_35px_rgba(0,0,0,0.4)]
// //           "
// //         />

// //         <motion.div
// //           whileHover={{
// //             scale: 1.05,
// //           }}
// //           className="
// //             relative
// //             flex
// //             h-[104px]
// //             w-[104px]
// //             items-center
// //             justify-center
// //             rounded-full
// //             border
// //             border-[#484f58]
// //             bg-[radial-gradient(circle_at_35%_25%,#30363d,#21262d_65%,#161b22)]
// //             text-4xl
// //             font-bold
// //             text-[#f0f6fc]
// //             shadow-[inset_0_0_25px_rgba(255,255,255,0.04),0_10px_30px_rgba(0,0,0,0.35)]
// //           "
// //         >
// //           A
// //         </motion.div>

// //         <motion.span
// //           animate={{
// //             scale: [1, 1.2, 1],
// //             opacity: [1, 0.7, 1],
// //           }}
// //           transition={{
// //             duration: 2,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //           }}
// //           className="
// //             absolute
// //             bottom-[8px]
// //             right-[5px]
// //             h-4
// //             w-4
// //             rounded-full
// //             border-[3px]
// //             border-[#161b22]
// //             bg-[#3fb950]
// //             shadow-[0_0_12px_rgba(63,185,80,0.8)]
// //           "
// //         />
// //       </motion.div>

// //       {/* Identity */}

// //       <motion.h1
// //         style={{
// //           translateZ: 25,
// //         }}
// //         className="
// //           relative
// //           text-center
// //           text-xl
// //           font-semibold
// //           tracking-[-0.3px]
// //         "
// //       >
// //         {profile.name}
// //       </motion.h1>

// //       <motion.h2
// //         style={{
// //           translateZ: 20,
// //         }}
// //         className="
// //           relative
// //           mt-1
// //           text-center
// //           text-sm
// //           font-normal
// //           text-[#8b949e]
// //         "
// //       >
// //         @{profile.username}
// //       </motion.h2>

// //       {/* Bio */}

// //       <motion.p
// //         style={{
// //           translateZ: 15,
// //         }}
// //         className="
// //           relative
// //           mt-4
// //           text-sm
// //           leading-6
// //           text-[#8b949e]
// //         "
// //       >
// //         {profile.bio}
// //       </motion.p>

// //       {/* Edit profile */}

// //       <motion.button
// //         whileHover={{
// //           y: -2,
// //         }}
// //         whileTap={{
// //           scale: 0.98,
// //         }}
// //         className="
// //           relative
// //           mt-4
// //           flex
// //           h-9
// //           w-full
// //           items-center
// //           justify-center
// //           rounded-md
// //           border
// //           border-[#30363d]
// //           bg-[#21262d]
// //           text-sm
// //           font-medium
// //           text-[#f0f6fc]
// //           shadow-sm
// //           transition-all
// //           hover:border-[#484f58]
// //           hover:bg-[#30363d]
// //           hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]
// //         "
// //       >
// //         Edit profile
// //       </motion.button>

// //       {/* Followers */}

// //       <motion.div
// //         style={{
// //           translateZ: 15,
// //         }}
// //         className="
// //           relative
// //           mt-4
// //           flex
// //           items-center
// //           gap-1.5
// //           text-xs
// //           text-[#8b949e]
// //         "
// //       >
// //         <Users
// //           size={16}
// //           className="mr-0.5"
// //         />

// //         <strong className="text-[#f0f6fc]">
// //           {profile.followers}
// //         </strong>

// //         <span>followers</span>

// //         <span className="mx-0.5">·</span>

// //         <strong className="text-[#f0f6fc]">
// //           {profile.following}
// //         </strong>

// //         <span>following</span>
// //       </motion.div>

// //       {/* Profile information */}

// //       <motion.div
// //         style={{
// //           translateZ: 15,
// //         }}
// //         className="
// //           relative
// //           mt-5
// //           flex
// //           flex-col
// //           gap-3
// //           border-t
// //           border-[#30363d]
// //           pt-5
// //           text-sm
// //           text-[#8b949e]
// //         "
// //       >
// //         <div className="flex items-center gap-2.5">
// //           <MapPin
// //             size={16}
// //             className="shrink-0 text-[#6e7681]"
// //           />

// //           <span className="truncate">
// //             {profile.location}
// //           </span>
// //         </div>

// //         <div className="flex items-center gap-2.5">
// //           <LinkIcon
// //             size={16}
// //             className="shrink-0 text-[#6e7681]"
// //           />

// //           <a
// //             href={profile.website}
// //             target="_blank"
// //             rel="noreferrer"
// //             className="
// //               truncate
// //               text-[#58a6ff]
// //               transition-colors
// //               hover:text-[#79c0ff]
// //               hover:underline
// //             "
// //           >
// //             portfolio.dev
// //           </a>
// //         </div>

// //         <div className="flex items-center gap-2.5">
// //           <Mail
// //             size={16}
// //             className="shrink-0 text-[#6e7681]"
// //           />

// //           <span>
// //             available for opportunities
// //           </span>
// //         </div>
// //       </motion.div>

// //       {/* Decorative depth lines */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           left-0
// //           top-1/4
// //           h-px
// //           w-16
// //           bg-gradient-to-r
// //           from-transparent
// //           via-[#58a6ff]/40
// //           to-transparent
// //         "
// //       />

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           bottom-1/4
// //           right-0
// //           h-px
// //           w-20
// //           bg-gradient-to-l
// //           from-transparent
// //           via-[#a371f7]/30
// //           to-transparent
// //         "
// //       />
// //     </motion.aside>
// //   );
// // }


// // import {
// //   MapPin,
// //   Link as LinkIcon,
// //   Users,
// //   Mail,
// // } from "lucide-react";

// // import {
// //   motion,
// //   useMotionValue,
// //   useSpring,
// //   useTransform,
// // } from "motion/react";

// // import { useRef } from "react";

// // import { profile } from "../data/portfolio";

// // export default function ProfileSidebar() {
// //   const cardRef = useRef(null);

// //   const mouseX = useMotionValue(0);
// //   const mouseY = useMotionValue(0);

// //   const rotateX = useSpring(
// //     useTransform(mouseY, [-0.5, 0.5], [7, -7]),
// //     {
// //       stiffness: 300,
// //       damping: 25,
// //     }
// //   );

// //   const rotateY = useSpring(
// //     useTransform(mouseX, [-0.5, 0.5], [-7, 7]),
// //     {
// //       stiffness: 300,
// //       damping: 25,
// //     }
// //   );

// //   const avatarX = useSpring(
// //     useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
// //     {
// //       stiffness: 250,
// //       damping: 20,
// //     }
// //   );

// //   const avatarY = useSpring(
// //     useTransform(mouseY, [-0.5, 0.5], [-10, 10]),
// //     {
// //       stiffness: 250,
// //       damping: 20,
// //     }
// //   );

// //   const glowX = useTransform(
// //     mouseX,
// //     [-0.5, 0.5],
// //     ["0%", "100%"]
// //   );

// //   const glowY = useTransform(
// //     mouseY,
// //     [-0.5, 0.5],
// //     ["0%", "100%"]
// //   );

// //   const shineX = useTransform(
// //     mouseX,
// //     [-0.5, 0.5],
// //     ["-30%", "130%"]
// //   );

// //   const shineY = useTransform(
// //     mouseY,
// //     [-0.5, 0.5],
// //     ["-30%", "130%"]
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
// //     <motion.aside
// //       ref={cardRef}
// //       onMouseMove={handleMouseMove}
// //       onMouseLeave={handleMouseLeave}
// //       style={{
// //         rotateX,
// //         rotateY,
// //         transformPerspective: 1200,
// //       }}
// //       className="
// //         group
// //         relative
// //         w-full
// //         max-w-[296px]
// //         shrink-0
// //         overflow-hidden
// //         rounded-2xl
// //         border
// //         border-white/[0.10]
// //         bg-[#161b22]/55
// //         p-5
// //         text-[#f0f6fc]
// //         shadow-[0_25px_80px_rgba(0,0,0,0.45)]
// //         backdrop-blur-2xl
// //         backdrop-saturate-150
// //         max-[900px]:max-w-none
// //         [transform-style:preserve-3d]
// //       "
// //     >
// //       {/* =====================================================
// //           GLASS BACKGROUND
// //       ===================================================== */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           inset-0
// //           rounded-2xl
// //           bg-[linear-gradient(135deg,rgba(255,255,255,0.075),transparent_28%,transparent_70%,rgba(88,166,255,0.035))]
// //         "
// //       />

// //       {/* Top glass reflection */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           inset-x-0
// //           top-0
// //           h-32
// //           rounded-t-2xl
// //           bg-[linear-gradient(to_bottom,rgba(255,255,255,0.055),transparent)]
// //         "
// //       />

// //       {/* =====================================================
// //           CURSOR LIGHT
// //       ===================================================== */}

// //       <motion.div
// //         style={{
// //           x: glowX,
// //           y: glowY,
// //         }}
// //         className="
// //           pointer-events-none
// //           absolute
// //           left-[-50%]
// //           top-[-50%]
// //           h-full
// //           w-full
// //           rounded-full
// //           bg-[radial-gradient(circle,rgba(88,166,255,0.18),rgba(88,166,255,0.05)_30%,transparent_68%)]
// //           blur-3xl
// //           opacity-80
// //         "
// //       />

// //       {/* Purple ambient light */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           -bottom-24
// //           -right-24
// //           h-52
// //           w-52
// //           rounded-full
// //           bg-[#a371f7]/[0.07]
// //           blur-3xl
// //         "
// //       />

// //       {/* =====================================================
// //           MOVING GLASS SHINE
// //       ===================================================== */}

// //       <motion.div
// //         style={{
// //           left: shineX,
// //           top: shineY,
// //         }}
// //         className="
// //           pointer-events-none
// //           absolute
// //           h-32
// //           w-8
// //           -rotate-45
// //           bg-white/[0.055]
// //           blur-xl
// //         "
// //       />

// //       {/* =====================================================
// //           GLASS BORDER
// //       ===================================================== */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           inset-0
// //           rounded-2xl
// //           border
// //           border-white/[0.045]
// //         "
// //       />

// //       {/* =====================================================
// //           AVATAR
// //       ===================================================== */}

// //       <motion.div
// //         style={{
// //           x: avatarX,
// //           y: avatarY,
// //           translateZ: 40,
// //         }}
// //         className="
// //           relative
// //           mx-auto
// //           mb-4
// //           flex
// //           h-[120px]
// //           w-[120px]
// //           items-center
// //           justify-center
// //           [transform-style:preserve-3d]
// //         "
// //       >
// //         {/* Outer glow */}

// //         <div
// //           className="
// //             pointer-events-none
// //             absolute
// //             inset-[-18px]
// //             rounded-full
// //             bg-[#58a6ff]/[0.07]
// //             blur-2xl
// //           "
// //         />

// //         {/* Rotating ring */}

// //         <motion.div
// //           animate={{
// //             rotate: 360,
// //           }}
// //           transition={{
// //             duration: 12,
// //             repeat: Infinity,
// //             ease: "linear",
// //           }}
// //           className="
// //             absolute
// //             inset-[-8px]
// //             rounded-full
// //             border
// //             border-dashed
// //             border-[#58a6ff]/55
// //             [box-shadow:0_0_30px_rgba(88,166,255,0.18)]
// //           "
// //         />

// //         {/* Secondary ring */}

// //         <motion.div
// //           animate={{
// //             rotate: -360,
// //           }}
// //           transition={{
// //             duration: 18,
// //             repeat: Infinity,
// //             ease: "linear",
// //           }}
// //           className="
// //             absolute
// //             inset-[-3px]
// //             rounded-full
// //             border
// //             border-[#a371f7]/20
// //           "
// //         />

// //         {/* Avatar glass */}

// //         <div
// //           className="
// //             absolute
// //             inset-0
// //             rounded-full
// //             border
// //             border-white/[0.08]
// //             bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),#30363d_35%,#161b22_72%)]
// //             shadow-[inset_0_0_30px_rgba(255,255,255,0.045),0_15px_40px_rgba(0,0,0,0.5)]
// //           "
// //         />

// //         <motion.div
// //           whileHover={{
// //             scale: 1.06,
// //           }}
// //           className="
// //             relative
// //             flex
// //             h-[104px]
// //             w-[104px]
// //             items-center
// //             justify-center
// //             rounded-full
// //             border
// //             border-white/[0.10]
// //             bg-[radial-gradient(circle_at_35%_25%,#3a424d,#21262d_58%,#161b22)]
// //             text-4xl
// //             font-bold
// //             text-[#f0f6fc]
// //             shadow-[inset_0_0_25px_rgba(255,255,255,0.05),0_12px_35px_rgba(0,0,0,0.4)]
// //           "
// //         >
// //           A
// //         </motion.div>

// //         {/* Online indicator */}

// //         <motion.span
// //           animate={{
// //             scale: [1, 1.2, 1],
// //             opacity: [1, 0.7, 1],
// //           }}
// //           transition={{
// //             duration: 2,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //           }}
// //           className="
// //             absolute
// //             bottom-[7px]
// //             right-[4px]
// //             h-4
// //             w-4
// //             rounded-full
// //             border-[3px]
// //             border-[#161b22]
// //             bg-[#3fb950]
// //             shadow-[0_0_14px_rgba(63,185,80,0.9)]
// //           "
// //         />
// //       </motion.div>

// //       {/* =====================================================
// //           IDENTITY
// //       ===================================================== */}

// //       <motion.h1
// //         style={{
// //           translateZ: 25,
// //         }}
// //         className="
// //           relative
// //           text-center
// //           text-xl
// //           font-semibold
// //           tracking-[-0.4px]
// //           text-white
// //         "
// //       >
// //         {profile.name}
// //       </motion.h1>

// //       <motion.h2
// //         style={{
// //           translateZ: 20,
// //         }}
// //         className="
// //           relative
// //           mt-1
// //           text-center
// //           text-sm
// //           font-normal
// //           text-[#8b949e]
// //         "
// //       >
// //         @{profile.username}
// //       </motion.h2>

// //       {/* =====================================================
// //           BIO
// //       ===================================================== */}

// //       <motion.p
// //         style={{
// //           translateZ: 15,
// //         }}
// //         className="
// //           relative
// //           mt-4
// //           text-sm
// //           leading-6
// //           text-[#8b949e]
// //         "
// //       >
// //         {profile.bio}
// //       </motion.p>

// //       {/* =====================================================
// //           EDIT PROFILE
// //       ===================================================== */}

// //       <motion.button
// //         whileHover={{
// //           y: -2,
// //         }}
// //         whileTap={{
// //           scale: 0.98,
// //         }}
// //         className="
// //           relative
// //           mt-4
// //           flex
// //           h-9
// //           w-full
// //           items-center
// //           justify-center
// //           overflow-hidden
// //           rounded-lg
// //           border
// //           border-white/[0.10]
// //           bg-white/[0.045]
// //           text-sm
// //           font-medium
// //           text-[#f0f6fc]
// //           shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
// //           backdrop-blur-md
// //           transition-all
// //           duration-200
// //           hover:border-[#58a6ff]/30
// //           hover:bg-white/[0.075]
// //           hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)]
// //         "
// //       >
// //         Edit profile
// //       </motion.button>

// //       {/* =====================================================
// //           FOLLOWERS
// //       ===================================================== */}

// //       <motion.div
// //         style={{
// //           translateZ: 15,
// //         }}
// //         className="
// //           relative
// //           mt-4
// //           flex
// //           items-center
// //           gap-1.5
// //           text-xs
// //           text-[#8b949e]
// //         "
// //       >
// //         <Users
// //           size={16}
// //           className="mr-0.5 text-[#6e7681]"
// //         />

// //         <strong className="text-[#f0f6fc]">
// //           {profile.followers}
// //         </strong>

// //         <span>followers</span>

// //         <span className="mx-0.5 text-[#484f58]">
// //           ·
// //         </span>

// //         <strong className="text-[#f0f6fc]">
// //           {profile.following}
// //         </strong>

// //         <span>following</span>
// //       </motion.div>

// //       {/* =====================================================
// //           PROFILE INFORMATION
// //       ===================================================== */}

// //       <motion.div
// //         style={{
// //           translateZ: 15,
// //         }}
// //         className="
// //           relative
// //           mt-5
// //           flex
// //           flex-col
// //           gap-3
// //           border-t
// //           border-white/[0.08]
// //           pt-5
// //           text-sm
// //           text-[#8b949e]
// //         "
// //       >
// //         <div className="flex items-center gap-2.5">
// //           <MapPin
// //             size={16}
// //             className="shrink-0 text-[#6e7681]"
// //           />

// //           <span className="truncate">
// //             {profile.location}
// //           </span>
// //         </div>

// //         {profile.website && (
// //           <div className="flex items-center gap-2.5">
// //             <LinkIcon
// //               size={16}
// //               className="shrink-0 text-[#6e7681]"
// //             />

// //             <a
// //               href={profile.website}
// //               target="_blank"
// //               rel="noreferrer"
// //               className="
// //                 truncate
// //                 text-[#58a6ff]
// //                 transition-colors
// //                 hover:text-[#79c0ff]
// //                 hover:underline
// //               "
// //             >
// //               portfolio.dev
// //             </a>
// //           </div>
// //         )}

// //         <div className="flex items-center gap-2.5">
// //           <Mail
// //             size={16}
// //             className="shrink-0 text-[#6e7681]"
// //           />

// //           <span>
// //             available for opportunities
// //           </span>
// //         </div>
// //       </motion.div>

// //       {/* =====================================================
// //           DECORATIVE LIGHT LINES
// //       ===================================================== */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           left-0
// //           top-1/4
// //           h-px
// //           w-20
// //           bg-gradient-to-r
// //           from-transparent
// //           via-[#58a6ff]/50
// //           to-transparent
// //         "
// //       />

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           bottom-1/4
// //           right-0
// //           h-px
// //           w-24
// //           bg-gradient-to-l
// //           from-transparent
// //           via-[#a371f7]/40
// //           to-transparent
// //         "
// //       />

// //       {/* Bottom glass reflection */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           bottom-0
// //           left-1/2
// //           h-20
// //           w-3/4
// //           -translate-x-1/2
// //           rounded-full
// //           bg-[#58a6ff]/[0.035]
// //           blur-2xl
// //         "
// //       />
// //     </motion.aside>
// //   );
// // }


// import {
//   MapPin,
//   Link as LinkIcon,
//   Github,
//   Users,
//   GitFork,
//   ExternalLink,
// } from "lucide-react";

// import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
// import { useRef } from "react";

// import { profile } from "../data/portfolio";

// export default function ProfileSidebar() {
//   const cardRef = useRef(null);

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const rotateX = useSpring(
//     useTransform(mouseY, [-0.5, 0.5], [5, -5]),
//     {
//       stiffness: 180,
//       damping: 20,
//     }
//   );

//   const rotateY = useSpring(
//     useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
//     {
//       stiffness: 180,
//       damping: 20,
//     }
//   );

//   const glowX = useTransform(mouseX, [-0.5, 0.5], ["20%", "80%"]);
//   const glowY = useTransform(mouseY, [-0.5, 0.5], ["20%", "80%"]);

//   function handleMouseMove(event) {
//     if (!cardRef.current) return;

//     const rect = cardRef.current.getBoundingClientRect();

//     const x =
//       (event.clientX - rect.left) / rect.width - 0.5;

//     const y =
//       (event.clientY - rect.top) / rect.height - 0.5;

//     mouseX.set(x);
//     mouseY.set(y);
//   }

//   function handleMouseLeave() {
//     mouseX.set(0);
//     mouseY.set(0);
//   }

//   return (
//     <motion.aside
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         rotateX,
//         rotateY,
//         transformPerspective: 1200,
//       }}
//       className="
//         group
//         relative
//         w-full
//         max-w-[296px]
//         shrink-0
//         [transform-style:preserve-3d]
//         max-[900px]:max-w-none
//       "
//     >
//       {/* =====================================================
//           MAIN CARD
//       ===================================================== */}

//       <div
//         className="
//           relative
//           overflow-hidden
//           rounded-3xl
//           border
//           border-white/[0.10]
//           bg-[#161b22]/70
//           p-6
//           shadow-[0_25px_70px_rgba(0,0,0,0.45)]
//           backdrop-blur-2xl
//           backdrop-saturate-150
//         "
//       >
//         {/* Mouse-follow glow */}

//         <motion.div
//           style={{
//             left: glowX,
//             top: glowY,
//           }}
//           className="
//             pointer-events-none
//             absolute
//             h-40
//             w-40
//             -translate-x-1/2
//             -translate-y-1/2
//             rounded-full
//             bg-[#58a6ff]/10
//             blur-3xl
//           "
//         />

//         {/* Top glass highlight */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-x-8
//             top-0
//             h-px
//             bg-gradient-to-r
//             from-transparent
//             via-white/20
//             to-transparent
//           "
//         />

//         {/* =================================================
//             AVATAR
//         ================================================= */}

//         <div className="relative mx-auto w-fit">
//           {/* Single animated ring */}

//           <motion.div
//             animate={{
//               rotate: 360,
//             }}
//             transition={{
//               duration: 18,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="
//               absolute
//               -inset-2
//               rounded-full
//               border
//               border-dashed
//               border-[#58a6ff]/35
//             "
//           />

//           {/* Avatar */}

//           <div
//             className="
//               relative
//               h-32
//               w-32
//               overflow-hidden
//               rounded-full
//               border
//               border-white/[0.12]
//               bg-[#0d1117]
//               shadow-[0_0_45px_rgba(88,166,255,0.16)]
//             "
//           >
//             <img
//               src="/avatar.png"
//               alt={profile.name}
//               className="
//                 h-full
//                 w-full
//                 object-cover
//               "
//             />
//           </div>

//           {/* Online indicator */}

//           <span
//             className="
//               absolute
//               bottom-1
//               right-1
//               flex
//               h-5
//               w-5
//               items-center
//               justify-center
//               rounded-full
//               border-[3px]
//               border-[#161b22]
//               bg-[#238636]
//             "
//           >
//             <span
//               className="
//                 h-1.5
//                 w-1.5
//                 rounded-full
//                 bg-[#3fb950]
//                 shadow-[0_0_8px_rgba(63,185,80,0.9)]
//               "
//             />
//           </span>
//         </div>

//         {/* =================================================
//             IDENTITY
//         ================================================= */}

//         <div className="relative mt-6 text-center">
//           <h2
//             className="
//               text-xl
//               font-semibold
//               tracking-[-0.4px]
//               text-[#f0f6fc]
//             "
//           >
//             {profile.name}
//           </h2>

//           <p className="mt-1 text-sm text-[#8b949e]">
//             @{profile.username}
//           </p>

//           <p
//             className="
//               mx-auto
//               mt-4
//               max-w-[245px]
//               text-sm
//               leading-6
//               text-[#8b949e]
//             "
//           >
//             {profile.bio}
//           </p>
//         </div>

//         {/* =================================================
//             DETAILS
//         ================================================= */}

//         <div className="relative mt-6 space-y-3 border-t border-white/[0.07] pt-5">
//           <Detail
//             icon={MapPin}
//             text={profile.location}
//           />

//           {profile.website && (
//             <a
//               href={profile.website}
//               target="_blank"
//               rel="noreferrer"
//               className="
//                 flex
//                 items-center
//                 gap-3
//                 text-sm
//                 text-[#8b949e]
//                 transition-colors
//                 hover:text-[#58a6ff]
//               "
//             >
//               <LinkIcon size={15} />

//               <span className="truncate">
//                 {profile.website.replace(/^https?:\/\//, "")}
//               </span>

//               <ExternalLink
//                 size={12}
//                 className="ml-auto shrink-0"
//               />
//             </a>
//           )}
//         </div>

//         {/* =================================================
//             STATS
//         ================================================= */}

//         <div
//           className="
//             relative
//             mt-6
//             grid
//             grid-cols-2
//             overflow-hidden
//             rounded-xl
//             border
//             border-white/[0.07]
//             bg-[#0d1117]/45
//           "
//         >
//           <Stat
//             icon={Users}
//             value={profile.followers}
//             label="Followers"
//           />

//           <Stat
//             icon={GitFork}
//             value={profile.following}
//             label="Following"
//             border
//           />
//         </div>

//         {/* =================================================
//             GITHUB BUTTON
//         ================================================= */}

//         <motion.a
//           href={profile.github}
//           target="_blank"
//           rel="noreferrer"
//           whileHover={{
//             y: -2,
//           }}
//           whileTap={{
//             scale: 0.98,
//           }}
//           className="
//             relative
//             mt-5
//             flex
//             w-full
//             items-center
//             justify-center
//             gap-2
//             rounded-xl
//             border
//             border-[#30363d]
//             bg-[#21262d]/70
//             px-4
//             py-2.5
//             text-sm
//             font-medium
//             text-[#f0f6fc]
//             transition-all
//             duration-300
//             hover:border-[#58a6ff]/35
//             hover:bg-[#30363d]/70
//             hover:shadow-[0_0_25px_rgba(88,166,255,0.08)]
//           "
//         >
//           <Github size={16} />

//           <span>View GitHub</span>

//           <ExternalLink
//             size={12}
//             className="text-[#6e7681]"
//           />
//         </motion.a>

//         {/* Bottom status */}

//         <div className="relative mt-5 flex items-center justify-center gap-2 text-[11px] text-[#6e7681]">
//           <span
//             className="
//               h-1.5
//               w-1.5
//               rounded-full
//               bg-[#3fb950]
//               shadow-[0_0_7px_rgba(63,185,80,0.7)]
//             "
//           />

//           <span>Open to opportunities</span>
//         </div>
//       </div>

//       {/* =====================================================
//           SUBTLE OUTER GLOW
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -inset-1
//           -z-10
//           rounded-[28px]
//           bg-[#58a6ff]/[0.035]
//           blur-xl
//           transition-opacity
//           duration-500
//           group-hover:opacity-100
//         "
//       />
//     </motion.aside>
//   );
// }

// /* =============================================================
//    DETAIL
// ============================================================= */

// function Detail({
//   icon: Icon,
//   text,
// }) {
//   return (
//     <div className="flex items-center gap-3 text-sm text-[#8b949e]">
//       <Icon
//         size={15}
//         className="shrink-0 text-[#6e7681]"
//       />

//       <span className="truncate">
//         {text}
//       </span>
//     </div>
//   );
// }

// /* =============================================================
//    STAT
// ============================================================= */

// function Stat({
//   icon: Icon,
//   value,
//   label,
//   border = false,
// }) {
//   return (
//     <div
//       className={`
//         flex
//         flex-col
//         items-center
//         justify-center
//         gap-1
//         py-4
//         ${border ? "border-l border-white/[0.07]" : ""}
//       `}
//     >
//       <div className="flex items-center gap-1.5">
//         <Icon
//           size={13}
//           className="text-[#6e7681]"
//         />

//         <span className="text-sm font-semibold text-[#c9d1d9]">
//           {value}
//         </span>
//       </div>

//       <span className="text-[10px] text-[#6e7681]">
//         {label}
//       </span>
//     </div>
//   );
// }

import {
  MapPin,
  Link as LinkIcon,
} from "lucide-react";

import { motion } from "motion/react";

import { profile } from "../data/portfolio";
import image from "../assets/avatar.jpg"
export default function ProfileSidebar() {
  return (
    <aside className="w-full max-w-[296px] shrink-0 max-[900px]:max-w-none">
      <div className="space-y-4">

        {/* Avatar */}
        <div className="relative w-fit">
          <img
            src={image}
            alt={image}
            className="
              h-60
              w-60
              rounded-full
              border
              border-[#30363d]
              object-cover
            "
          />

          {/* Online indicator */}
          <span
            className="
              absolute
              bottom-1
              right-1
              h-5
              w-5
              rounded-full
              border-4
              border-[#0d1117]
              bg-[#238636]
            "
          />
        </div>

        {/* Name */}
        <div>
          <h1
            className="
              text-2xl
              font-semibold
              tracking-tight
              text-[#f0f6fc]
            "
          >
            {profile.name}
          </h1>

          <p className="text-xl text-[#8b949e]">
            @{profile.username}
          </p>
        </div>

        {/* Bio */}
        <p
          className="
            text-sm
            leading-6
            text-[#c9d1d9]
          "
        >
          {profile.bio}
        </p>

        {/* GitHub button */}
        <motion.a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          whileTap={{ scale: 0.98 }}
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-md
            border
            border-[#30363d]
            bg-[#21262d]
            px-4
            py-1.5
            text-sm
            font-medium
            text-[#f0f6fc]
            shadow-sm
            transition-colors
            hover:border-[#8b949e]
            hover:bg-[#30363d]
          "
        >
          {/* GitHub logo */}
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.57 9.57 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z"
              clipRule="evenodd"
            />
          </svg>

          <span>View GitHub</span>
        </motion.a>

        {/* Details */}
        <div className="space-y-3 pt-1">

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-[#8b949e]">
            <MapPin
              size={16}
              className="shrink-0"
            />

            <span>{profile.location}</span>
          </div>

          {/* Website */}
          {profile.website && (
            <a
              href={profile.website}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                text-sm
                text-[#58a6ff]
                transition-colors
                hover:underline
              "
            >
              <LinkIcon
                size={16}
                className="shrink-0"
              />

              <span className="truncate">
                {profile.website.replace(/^https?:\/\//, "")}
              </span>
            </a>
          )}
        </div>

        {/* Followers */}
        <div className="flex items-center gap-1 text-sm">
          <span className="font-semibold text-[#c9d1d9]">
            {profile.followers}
          </span>

          <span className="text-[#8b949e]">
            followers
          </span>

          <span className="px-1 text-[#6e7681]">
            ·
          </span>

          <span className="font-semibold text-[#c9d1d9]">
            {profile.following}
          </span>

          <span className="text-[#8b949e]">
            following
          </span>
        </div>

        {/* Footer */}
        <div className="pt-2">
          <div className="h-px bg-[#21262d]" />

          <p className="mt-3 text-xs text-[#6e7681]">
            Building · Learning · Solving
          </p>
        </div>

      </div>
    </aside>
  );
}