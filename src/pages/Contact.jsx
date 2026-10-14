// import { useState } from "react";
// import { motion } from "motion/react";
// import {
//   Mail,
//   Code2,
//   MapPin,
//   Send,
//   MessageSquare,
//   ArrowUpRight,
//   CheckCircle2,
// } from "lucide-react";

// import { profile } from "../data/portfolio";

// const contactItems = [
//   {
//     icon: Mail,
//     label: "Email",
//     value: profile.email || "Add your email",
//     href: profile.email
//       ? `mailto:${profile.email}`
//       : null,
//     color: "text-[#58a6ff]",
//   },
//   {
//     icon: Code2,
//     label: "GitHub",
//     value: "Explore my repositories",
//     href: profile.github,
//     color: "text-[#f0f6fc]",
//   },
//   {
//     icon: MapPin,
//     label: "Location",
//     value: profile.location || "India",
//     href: null,
//     color: "text-[#3fb950]",
//   },
// ];

// const inputClass =
// "w-full rounded-lg border border-[#30363d] bg-[#0d1117]/80 px-4 py-3 text-sm text-[#f0f6fc] outline-none transition duration-200 placeholder:text-[#6e7681] focus:border-[#58a6ff] focus focus:ring-[#58a6ff]/15";

// export default function Contact() {
// const [form, setForm] = useState({
// name: "",
// email: "",
// subject: "",
// message: "",
// });

// const [status, setStatus] = useState("");

// function handleChange(event) {
// const { name, value } = event.target;

// setForm((previous) => ({
//   ...previous,
//   [name]: value,
// }));

// setStatus("");

// }

// function handleSubmit(event) {
// event.preventDefault();

// if (!profile.email) {
//   setStatus(
//     "Please add your email address to src/data/portfolio.js first."
//   );
//   return;
// }

// const body = [
//   `Name: ${form.name}`,
//   `Reply email: ${form.email}`,
//   "",
//   "Message:",
//   form.message,
// ].join("\n");

// const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
//   form.subject
// )}&body=${encodeURIComponent(body)}`;

// window.location.href = mailtoUrl;

// setStatus(
//   "Your email draft is ready. Send it from your email application to complete the message."
// );

// }

// return (
// <div className="relative min-w-0 overflow-hidden pb-10">
// {/* Ambient background glow */}
// <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full bg-[#58a6ff]/10 blur-[100px]" />

//   <div className="pointer-events-none absolute -bottom-10 -left-20 h-64 w-64 rounded-full bg-[#a371f7]/10 blur-[110px]" />

//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
//     className="relative"
//   >
//     {/* Page heading */}
//     <div className="mb-8">
//       <div className="mb-3 flex items-center gap-2 text-sm text-[#8b949e]">
//         <MessageSquare size={16} className="text-[#58a6ff]" />
//         <span>Let's connect</span>
//       </div>

//       <h1 className="text-3xl font-semibold tracking-tight text-[#f0f6fc] sm:text-4xl">
//         Contact me
//         <span className="text-[#58a6ff]">.</span>
//       </h1>

//       <p className="mt-3 max-w-xl text-sm leading-7 text-[#8b949e]">
//         Have a project idea, a collaboration opportunity, or just want
//         to talk about technology? Feel free to reach out. I'd love to
//         hear from you.
//       </p>
//     </div>

//     {/* Contact information cards */}
//     <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
//       {contactItems.map((item, index) => {
//         const Icon = item.icon;

//         const card = (
//           <div className="flex h-full items-start gap-3 rounded-xl border border-[#30363d]/80 bg-[#161b22]/75 p-4 backdrop-blur-xl transition duration-300 hover:border-[#58a6ff]/40 hover:bg-[#21262d]/80">
//             <div className="rounded-lg border border-[#30363d] bg-[#0d1117] p-2.5">
//               <Icon size={18} className={item.color} />
//             </div>

//             <div className="min-w-0 flex-1">
//               <p className="text-xs text-[#8b949e]">
//                 {item.label}
//               </p>

//               <p className="mt-1 break-words text-sm font-medium text-[#f0f6fc]">
//                 {item.value}
//               </p>
//             </div>

//             {item.href && (
//               <ArrowUpRight
//                 size={15}
//                 className="shrink-0 text-[#6e7681]"
//               />
//             )}
//           </div>
//         );

//         return (
//           <motion.div
//             key={item.label}
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.08, duration: 0.4 }}
//             className="h-full"
//           >
//             {item.href ? (
//               <a
//                 href={item.href}
//                 target={
//                   item.label === "GitHub" ? "_blank" : undefined
//                 }
//                 rel={
//                   item.label === "GitHub"
//                     ? "noopener noreferrer"
//                     : undefined
//                 }
//                 className="block h-full"
//               >
//                 {card}
//               </a>
//             ) : (
//               card
//             )}
//           </motion.div>
//         );
//       })}
//     </div>

//     {/* Contact form card */}
//     <motion.section
//       initial={{ opacity: 0, y: 16 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.15, duration: 0.45 }}
//       className="overflow-hidden rounded-xl border border-[#30363d]/80 bg-[#161b22]/75 shadow-2xl shadow-black/10 backdrop-blur-xl"
//     >
//       {/* Card header */}
//       <div className="flex items-center gap-3 border-b border-[#30363d] px-5 py-4 sm:px-6">
//         <div className="rounded-lg border border-[#238636]/30 bg-[#238636]/15 p-2">
//           <Mail size={18} className="text-[#3fb950]" />
//         </div>

//         <div>
//           <h2 className="text-base font-semibold text-[#f0f6fc]">
//             Send a message
//           </h2>

//           <p className="mt-1 text-xs text-[#8b949e]">
//             I'll be glad to hear from you.
//           </p>
//         </div>

//         <div className="ml-auto hidden items-center gap-2 rounded-full border border-[#238636]/30 bg-[#238636]/10 px-3 py-1.5 sm:flex">
//           <span className="h-2 w-2 rounded-full bg-[#3fb950]" />
//           <span className="text-xs text-[#3fb950]">
//             Open to opportunities
//           </span>
//         </div>
//       </div>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="space-y-5 p-5 sm:p-6"
//       >
//         {/* Name and email */}
//         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//           <div>
//             <label
//               htmlFor="contact-name"
//               className="mb-2 block text-sm font-medium text-[#c9d1d9]"
//             >
//               Your name
//               <span className="ml-1 text-[#f85149]">*</span>
//             </label>

//             <input
//               id="contact-name"
//               name="name"
//               type="text"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="John Doe"
//               autoComplete="name"
//               className={inputClass}
//               required
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="contact-email"
//               className="mb-2 block text-sm font-medium text-[#c9d1d9]"
//             >
//               Email address
//               <span className="ml-1 text-[#f85149]">*</span>
//             </label>

//             <input
//               id="contact-email"
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="john@example.com"
//               autoComplete="email"
//               className={inputClass}
//               required
//             />
//           </div>
//         </div>

//         {/* Subject */}
//         <div>
//           <label
//             htmlFor="contact-subject"
//             className="mb-2 block text-sm font-medium text-[#c9d1d9]"
//           >
//             Subject
//             <span className="ml-1 text-[#f85149]">*</span>
//           </label>

//           <input
//             id="contact-subject"
//             name="subject"
//             type="text"
//             value={form.subject}
//             onChange={handleChange}
//             placeholder="Project collaboration"
//             className={inputClass}
//             required
//           />
//         </div>

//         {/* Message */}
//         <div>
//           <label
//             htmlFor="contact-message"
//             className="mb-2 block text-sm font-medium text-[#c9d1d9]"
//           >
//             Message
//             <span className="ml-1 text-[#f85149]">*</span>
//           </label>

//           <textarea
//             id="contact-message"
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             placeholder="Tell me about your project or idea..."
//             rows={6}
//             className={`${inputClass} resize-y`}
//             required
//           />
//         </div>

//         {/* Submission status */}
//         {status && (
//           <div
//             role="status"
//             className="flex items-start gap-2 rounded-lg border border-[#30363d] bg-[#0d1117]/70 p-3 text-sm leading-6 text-[#c9d1d9]"
//           >
//             <CheckCircle2
//               size={17}
//               className="mt-1 shrink-0 text-[#3fb950]"
//             />

//             <p>{status}</p>
//           </div>
//         )}

//         {/* Submit button */}
//         <div className="flex flex-col gap-4 border-t border-[#30363d] pt-5 sm:flex-row sm:items-center sm:justify-between">
//           <p className="max-w-sm text-xs leading-5 text-[#6e7681]">
//             Your message will be prepared in your default email
//             application. You'll need to send it there.
//           </p>

//           <motion.button
//             type="submit"
//             whileHover={{ y: -1 }}
//             whileTap={{ scale: 0.98 }}
//             className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-[#3fb950]/40 bg-[#238636] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2ea043] focus:outline-none focus:ring-2 focus:ring-[#3fb950]/50 focus:ring-offset-2 focus:ring-offset-[#161b22]"
//           >
//             <Send size={16} />
//             Prepare message
//           </motion.button>
//         </div>
//       </form>
//     </motion.section>

//     {/* Footer */}
//     <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#6e7681]">
//       <Code2 size={14} />
//       <span>Designed and built with care.</span>
//     </div>
//   </motion.div>
// </div>

// );
// }


// import { useState } from "react";
// import { motion } from "motion/react";
// import {
//   Mail,
//   Code2,
//   MapPin,
//   Send,
//   MessageSquare,
//   ArrowUpRight,
//   CheckCircle2,
// } from "lucide-react";

// import { profile } from "../data/portfolio";

// const contactItems = [
//   {
//     icon: Mail,
//     label: "Email",
//     value: profile.email || "Add your email",
//     href: profile.email ? `mailto:${profile.email}` : null,
//     color: "text-[#58a6ff]",
//   },
//   {
//     icon: Code2,
//     label: "GitHub",
//     value: "Explore my repositories",
//     href: profile.github,
//     color: "text-[#f0f6fc]",
//   },
//   {
//     icon: MapPin,
//     label: "Location",
//     value: profile.location || "India",
//     href: null,
//     color: "text-[#3fb950]",
//   },
// ];

// const inputClass =
//   "w-full min-w-0 rounded-lg border border-[#30363d] bg-[#0d1117]/80 px-4 py-3 text-sm text-[#f0f6fc] outline-none transition duration-200 placeholder:text-[#6e7681] focus:border-[#58a6ff] focus:ring-2 focus:ring-[#58a6ff]/15";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setForm((previous) => ({ ...previous, [name]: value }));
//     setStatus("");
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     if (!profile.email) {
//       setStatus("Please add your email address to src/data/portfolio.js first.");
//       return;
//     }

//     const body = [
//       `Name: ${form.name}`,
//       `Reply email: ${form.email}`,
//       "",
//       "Message:",
//       form.message,
//     ].join("\n");

//     const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
//       form.subject
//     )}&body=${encodeURIComponent(body)}`;

//     window.location.href = mailtoUrl;
//     setStatus(
//       "Your email draft is ready. Send it from your email application to complete the message."
//     );
//   }

//   return (
//     <div className="relative isolate w-full min-w-0 max-w-full mt-10 overflow-hidden pb-8">
//       {/* Ambient background glow */}
//       <div className="pointer-events-none absolute -right-16 -top-12 -z-10 h-56 w-56 rounded-full bg-[#58a6ff]/10 blur-[90px]" />
//       <div className="pointer-events-none absolute -bottom-10 -left-12 -z-10 h-56 w-56 rounded-full bg-[#a371f7]/10 blur-[100px]" />

//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
//         className="relative mx-auto w-full min-w-0 max-w-4xl"
//       >
//         <div className="mb-6">
//           <div className="mb-3 flex items-center gap-2 text-sm text-[#8b949e]">
//             <MessageSquare size={16} className="text-[#58a6ff]" />
//             <span>Let's connect</span>
//           </div>

//           <h1 className="text-3xl font-semibold tracking-tight text-[#f0f6fc] sm:text-4xl">
//             Contact me<span className="text-[#58a6ff]">.</span>
//           </h1>

//           <p className="mt-3 max-w-xl text-sm leading-7 text-[#8b949e]">
//             Have a project idea, a collaboration opportunity, or just want to
//             talk about technology? Feel free to reach out. I'd love to hear
//             from you.
//           </p>
//         </div>

//         <div className="mb-5 grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
//           {contactItems.map((item, index) => {
//             const Icon = item.icon;
//             const card = (
//               <div className="flex h-full min-w-0 items-start gap-3 rounded-xl border border-[#30363d]/80 bg-[#161b22]/75 p-4 backdrop-blur-xl transition duration-300 hover:border-[#58a6ff]/40 hover:bg-[#21262d]/80">
//                 <div className="shrink-0 rounded-lg border border-[#30363d] bg-[#0d1117] p-2.5">
//                   <Icon size={18} className={item.color} />
//                 </div>
//                 <div className="min-w-0 flex-1">
//                   <p className="text-xs text-[#8b949e]">{item.label}</p>
//                   <p className="mt-1 break-words text-sm font-medium text-[#f0f6fc]">
//                     {item.value}
//                   </p>
//                 </div>
//                 {item.href && (
//                   <ArrowUpRight size={15} className="shrink-0 text-[#6e7681]" />
//                 )}
//               </div>
//             );

//             return (
//               <motion.div
//                 key={item.label}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.08, duration: 0.35 }}
//                 className="min-w-0"
//               >
//                 {item.href ? (
//                   <a
//                     href={item.href}
//                     target={item.label === "GitHub" ? "_blank" : undefined}
//                     rel={item.label === "GitHub" ? "noopener noreferrer" : undefined}
//                     className="block h-full"
//                   >
//                     {card}
//                   </a>
//                 ) : (
//                   card
//                 )}
//               </motion.div>
//             );
//           })}
//         </div>

//         <motion.section
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1, duration: 0.4 }}
//           className="w-full min-w-0 overflow-hidden rounded-xl border border-[#30363d]/80 bg-[#161b22]/75 shadow-xl shadow-black/10 backdrop-blur-xl"
//         >
//           <div className="flex min-w-0 items-center gap-3 border-b border-[#30363d] px-4 py-4 sm:px-6">
//             <div className="shrink-0 rounded-lg border border-[#238636]/30 bg-[#238636]/15 p-2">
//               <Mail size={18} className="text-[#3fb950]" />
//             </div>
//             <div className="min-w-0">
//               <h2 className="text-base font-semibold text-[#f0f6fc]">Send a message</h2>
//               <p className="mt-1 text-xs text-[#8b949e]">I'll be glad to hear from you.</p>
//             </div>
//             <div className="ml-auto hidden shrink-0 items-center gap-2 rounded-full border border-[#238636]/30 bg-[#238636]/10 px-3 py-1.5 md:flex">
//               <span className="h-2 w-2 rounded-full bg-[#3fb950]" />
//               <span className="text-xs text-[#3fb950]">Open to opportunities</span>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="min-w-0 space-y-5 p-4 sm:p-6">
//             <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
//               <div className="min-w-0">
//                 <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-[#c9d1d9]">
//                   Your name <span className="text-[#f85149]">*</span>
//                 </label>
//                 <input
//                   id="contact-name"
//                   name="name"
//                   type="text"
//                   value={form.name}
//                   onChange={handleChange}
//                   placeholder="John Doe"
//                   autoComplete="name"
//                   className={inputClass}
//                   required
//                 />
//               </div>

//               <div className="min-w-0">
//                 <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-[#c9d1d9]">
//                   Email address <span className="text-[#f85149]">*</span>
//                 </label>
//                 <input
//                   id="contact-email"
//                   name="email"
//                   type="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="john@example.com"
//                   autoComplete="email"
//                   className={inputClass}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="min-w-0">
//               <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-[#c9d1d9]">
//                 Subject <span className="text-[#f85149]">*</span>
//               </label>
//               <input
//                 id="contact-subject"
//                 name="subject"
//                 type="text"
//                 value={form.subject}
//                 onChange={handleChange}
//                 placeholder="Project collaboration"
//                 className={inputClass}
//                 required
//               />
//             </div>

//             <div className="min-w-0">
//               <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-[#c9d1d9]">
//                 Message <span className="text-[#f85149]">*</span>
//               </label>
//               <textarea
//                 id="contact-message"
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 placeholder="Tell me about your project or idea..."
//                 rows={5}
//                 className={`${inputClass} resize-y`}
//                 required
//               />
//             </div>

//             {status && (
//               <div role="status" className="flex min-w-0 items-start gap-2 rounded-lg border border-[#30363d] bg-[#0d1117]/70 p-3 text-sm leading-6 text-[#c9d1d9]">
//                 <CheckCircle2 size={17} className="mt-1 shrink-0 text-[#3fb950]" />
//                 <p className="min-w-0 break-words">{status}</p>
//               </div>
//             )}

//             <div className="flex min-w-0 flex-col gap-4 border-t border-[#30363d] pt-5 sm:flex-row sm:items-center sm:justify-between">
//               <p className="max-w-sm text-xs leading-5 text-[#6e7681]">
//                 Your message will be prepared in your email application. You'll
//                 need to send it there.
//               </p>
//               <motion.button
//                 type="submit"
//                 whileHover={{ y: -1 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-[#3fb950]/40 bg-[#238636] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2ea043] focus:outline-none focus:ring-2 focus:ring-[#3fb950]/50 focus:ring-offset-2 focus:ring-offset-[#161b22]"
//               >
//                 <Send size={16} />
//                 Prepare message
//               </motion.button>
//             </div>
//           </form>
//         </motion.section>

//         <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#6e7681]">
//           <Code2 size={14} />
//           <span>Designed and built with care.</span>
//         </div>
//       </motion.div>
//     </div>
//   );
// }


import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Code2,
  MapPin,
  Send,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import { profile } from "../data/portfolio";

const contactItems = [
  {
    icon: Mail,
    label: "EMAIL",
    value: profile.email || "Add your email",
    href: profile.email ? `mailto:${profile.email}` : null,
  },
  {
    icon: Code2,
    label: "GITHUB",
    value: "View my repositories",
    href: profile.github,
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: profile.location || "India",
    href: null,
  },
];

const inputClass =
  "w-full min-w-0 rounded-md border border-white/[0.12] bg-black/20 px-4 py-3 text-sm text-neutral-100 outline-none backdrop-blur-md transition placeholder:text-neutral-600 focus:border-white/25 focus:bg-black/30";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!profile.email) {
      setStatus("Add your email address to src/data/portfolio.js first.");
      return;
    }

    const body = [
      `Name: ${form.name}`,
      `Reply email: ${form.email}`,
      "",
      form.message,
    ].join("\n");

    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setStatus(
      "Your email draft has been prepared. Send it from your email application to complete the message."
    );
  }

  return (
    <div className="relative mt-6 w-full min-w-0 max-w-full pb-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mx-auto w-full min-w-0 max-w-3xl"
      >
        <header className="mb-7 border-b border-white/10 pb-6">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            Get in touch
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Contact
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-400">
            Have a question, an idea, or want to work together? Send me a
            message.
          </p>
        </header>

        <div className="mb-5 grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-3">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            const card = (
              <div className="flex h-full min-w-0 items-start gap-3 rounded-xl border border-white/[0.12] bg-white/[0.035] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] backdrop-blur-xl transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.06]">
                <Icon size={17} className="mt-0.5 shrink-0 text-neutral-400" />
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-medium tracking-[0.16em] text-neutral-500">
                    {item.label}
                  </p>
                  <p className="mt-1 break-words text-sm text-neutral-200">
                    {item.value}
                  </p>
                </div>
                {item.href && (
                  <ArrowUpRight
                    size={14}
                    className="shrink-0 text-neutral-600"
                  />
                )}
              </div>
            );

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.25 }}
                className="min-w-0"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.label === "GITHUB" ? "_blank" : undefined}
                    rel={
                      item.label === "GITHUB"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block h-full"
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </motion.div>
            );
          })}
        </div>

        <section className="overflow-hidden rounded-xl border border-white/[0.14] bg-black/25 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
          <div className="border-b border-white/[0.10] bg-white/[0.025] px-5 py-4 backdrop-blur-xl sm:px-6">
            <h2 className="text-sm font-medium text-neutral-100">
              Send a message
            </h2>
            <p className="mt-1 text-xs text-neutral-500">
              Fields marked with * are required.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 bg-white/[0.015] p-5 sm:p-6">
            <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="min-w-0">
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs font-medium text-neutral-300"
                >
                  Name <span className="text-neutral-500">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  className={inputClass}
                  required
                />
              </div>

              <div className="min-w-0">
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs font-medium text-neutral-300"
                >
                  Email <span className="text-neutral-500">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div className="min-w-0">
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-xs font-medium text-neutral-300"
              >
                Subject <span className="text-neutral-500">*</span>
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                className={inputClass}
                required
              />
            </div>

            <div className="min-w-0">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs font-medium text-neutral-300"
              >
                Message <span className="text-neutral-500">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={5}
                className={`${inputClass} resize-y`}
                required
              />
            </div>

            {status && (
              <div
                role="status"
                className="flex min-w-0 items-start gap-2 border border-white/[0.12] bg-white/[0.04] p-3 text-sm leading-6 text-neutral-300 backdrop-blur-lg"
              >
                <CheckCircle2
                  size={16}
                  className="mt-1 shrink-0 text-neutral-400"
                />
                <p className="min-w-0 break-words">{status}</p>
              </div>
            )}

            <div className="flex min-w-0 flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-xs leading-5 text-neutral-500">
                This opens your email application with the message filled in.
              </p>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-white/15 bg-white text-sm font-medium text-black transition-colors hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black px-5 py-3"
              >
                <Send size={15} />
                Prepare email
              </motion.button>
            </div>
          </form>
        </section>

        <p className="mt-5 text-center text-[11px] tracking-wide text-neutral-600">
          Usually happy to talk about development, ideas, and collaboration.
        </p>
      </motion.div>
    </div>
  );
}
