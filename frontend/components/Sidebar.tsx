

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// export default function Sidebar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);
//   const [settingsOpen, setSettingsOpen] = useState(false);

//   const links = [
//     { href: "/", label: "Home", key: "home" },
//     { href: "/learn", label: "Learn", key: "learn" },
//     { href: "/progress", label: "Progress", key: "progress" },
//     { href: "/achievements", label: "Achievements", key: "achievements" },
//     { href: "/plant", label: "My plant", key: "plant" },
//   ];

//   const settingsLinks = [
//     { href: "/settings/language", label: "Language", dot: "bg-blue" },
//     { href: "/settings/appearance", label: "Light / dark mode", dot: "bg-lavender" },
//     { href: "/settings/companion", label: "Companion", dot: "bg-sand" },
//   ];

//   return (
//     <>
//       {/* Top-left toggle button, always visible */}
//       <button
//         onClick={() => setOpen(true)}
//         aria-label="Open menu"
//         className="
//           fixed top-6 left-6 z-50
//           flex h-10 w-10 items-center justify-center
//           rounded-full
//           bg-[var(--background)]
//           shadow-sm
//           text-text
//           transition-all duration-300 ease-out
//           hover:scale-105
//           hover:bg-sage/50
//           cursor-pointer
//         "
//       >
//         <svg
//           width="18"
//           height="18"
//           viewBox="0 0 18 18"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//         >
//           <line x1="1" y1="4" x2="17" y2="4" />
//           <line x1="1" y1="9" x2="17" y2="9" />
//           <line x1="1" y1="14" x2="17" y2="14" />
//         </svg>
//       </button>

//       {/* Overlay */}
//       <div
//         onClick={() => setOpen(false)}
//         className={`
//           fixed inset-0 z-40 bg-black/20
//           transition-opacity duration-300 ease-out
//           ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
//         `}
//       />

//       {/* Sidebar panel */}
//       <aside
//         className={`
//           fixed top-0 left-0 z-50 h-screen w-72
//           bg-[var(--background)]
//           rounded-2xl
//           shadow-sm
//           px-8 py-6
//           flex flex-col
//           transition-transform duration-300 ease-out
//           ${open ? "translate-x-0" : "-translate-x-full"}
//         `}
//       >
//         {/* Header row: logo + close */}
//         <div className="flex items-center justify-between">
//           <div className="text-xl font-semibold text-text">Atlas</div>
//           <button
//             onClick={() => setOpen(false)}
//             aria-label="Close menu"
//             className="
//               flex h-9 w-9 items-center justify-center
//               rounded-full
//               text-text
//               transition-all duration-300 ease-out
//               hover:scale-105
//               hover:bg-sage/50
//               cursor-pointer
//             "
//           >
//             <svg
//               width="14"
//               height="14"
//               viewBox="0 0 14 14"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.6"
//               strokeLinecap="round"
//             >
//               <line x1="1" y1="1" x2="13" y2="13" />
//               <line x1="13" y1="1" x2="1" y2="13" />
//             </svg>
//           </button>
//         </div>

//         {/* Nav links */}
//         <nav className="mt-10 flex flex-col gap-2">
//           {links.map((link) => {
//             const active = pathname === link.href;
//             return (
//               <Link
//                 key={link.key}
//                 href={link.href}
//                 onClick={() => setOpen(false)}
//                 className={`
//                   nav-link nav-${link.key}
//                   rounded-full px-4 py-2.5
//                   text-sm font-medium
//                   transition-all duration-300 ease-out
//                   ${active ? "bg-sage/10 text-text" : "text-text/80"}
//                 `}
//               >
//                 {link.label}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* Settings, collapsible */}
//         <div className="mt-4">
//           <button
//             onClick={() => setSettingsOpen((v) => !v)}
//             className={`
//               nav-link nav-settings
//               w-full flex items-center justify-between
//               rounded-full px-4 py-2.5
//               text-sm font-medium text-text/80
//               transition-all duration-300 ease-out
//               cursor-pointer
//               ${settingsOpen ? "bg-sage/10" : ""}
//             `}
//           >
//             Settings
//             <svg
//               width="10"
//               height="10"
//               viewBox="0 0 10 10"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.6"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className={`transition-transform duration-300 ease-out ${
//                 settingsOpen ? "rotate-180" : ""
//               }`}
//             >
//               <polyline points="1,3 5,7 9,3" />
//             </svg>
//           </button>

//           <div
//             className={`
//               overflow-hidden transition-all duration-300 ease-out
//               ${settingsOpen ? "max-h-40 mt-1" : "max-h-0"}
//             `}
//           >
//             <div className="flex flex-col gap-1 pl-4">
//               {settingsLinks.map((s) => (
//                 <Link
//                   key={s.href}
//                   href={s.href}
//                   onClick={() => setOpen(false)}
//                   className="group flex items-center gap-2 rounded-full px-4 py-2 text-sm text-text/70 transition-all duration-300 ease-out"
//                 >
//                   <span
//                     className={`h-1.5 w-1.5 shrink-0 rounded-full ${s.dot} opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100`}
//                   />
//                   {s.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Profile, pinned to bottom */}
//         <div className="mt-auto pt-6">
//           <button
//             className="
//               flex h-10 w-10 items-center justify-center
//               rounded-full
//               bg-sage/50
//               text-sm font-medium text-text
//               transition-all duration-300 ease-out
//               hover:scale-105
//               hover:bg-[#C9DCC4]
//               hover:shadow-sm
//               cursor-pointer
//             "
//           >
//             A
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: "⌂",
    color: "var(--sage)",
  },
  {
    name: "Learn",
    href: "/learn",
    icon: "◈",
    color: "var(--blue)",
  },
  {
    name: "Progress",
    href: "/progress",
    icon: "◒",
    color: "var(--lavender)",
  },
  {
    name: "Achievements",
    href: "/achievements",
    icon: "✦",
    color: "var(--sand)",
  },
  {
    name: "My Plant",
    href: "/plant",
    icon: "♧",
    color: "var(--sage)",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        className="
          fixed left-6 top-6 z-[60]
          flex h-11 w-11
          cursor-pointer
          items-center justify-center
          rounded-full
          bg-[var(--surface)]
          text-[var(--text)]
          shadow-sm
          ring-1 ring-[var(--text)]/5
          transition-all duration-300 ease-out
          hover:-translate-y-0.5
          hover:shadow-md
        "
      >
        <span className="text-lg">
          {open ? "×" : "☰"}
        </span>
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-40
          bg-[var(--text)]/10
          backdrop-blur-[2px]
          transition-all duration-500
          ${open ? "visible opacity-100" : "invisible opacity-0"}
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-[280px]
          flex-col
          bg-[var(--background)]
          px-7 py-8
          shadow-xl
          rounded-2xl
          transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="mb-14 pl-12">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-2xl font-semibold tracking-tight text-[var(--text)]"
          >
            Atlas
          </Link>

          <p className="mt-1 text-xs text-[var(--muted-text)]">
            Your learning companion
          </p>
        </div>

        {/* Main navigation */}
        <nav className="flex flex-col gap-2">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  group relative
                  flex items-center gap-4
                  rounded-2xl
                  px-4 py-3.5
                  text-sm font-medium
                  transition-all duration-300 ease-out
                  ${
                    active
                      ? "bg-[var(--surface)]"
                      : "hover:bg-[var(--surface)]"
                  }
                `}
                style={{
                  color: active
                    ? item.color
                    : "var(--muted-text)",
                }}
              >
                {/* Icon */}
                <span
                  className="
                    flex h-8 w-8
                    items-center justify-center
                    rounded-full
                    text-base
                    transition-all duration-300
                    group-hover:scale-105
                  "
                  style={{
                    backgroundColor: active
                      ? `color-mix(in srgb, ${item.color} 25%, transparent)`
                      : "transparent",
                  }}
                >
                  {item.icon}
                </span>

                <span>{item.name}</span>

                {/* Active indicator */}
                <span
                  className={`
                    absolute left-0
                    h-7 w-1
                    rounded-r-full
                    transition-all duration-300
                    ${active ? "opacity-100" : "opacity-0"}
                  `}
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Bottom area */}
        <div className="mt-auto">
          {/* Settings */}
          <Link
            href="/settings"
            onClick={() => setOpen(false)}
            className={`
              group flex items-center gap-4
              rounded-2xl px-4 py-3.5
              text-sm font-medium
              text-[var(--muted-text)]
              transition-all duration-300
              hover:bg-[var(--surface)]
              hover:text-[var(--text)]
            `}
          >
            <span
              className="
                flex h-8 w-8
                items-center justify-center
                rounded-full
                text-base
                transition-transform duration-300
                group-hover:rotate-45
              "
            >
              ⚙
            </span>

            Settings
          </Link>

          {/* Profile */}
          <div className="mt-5 border-t border-[var(--text)]/5 pt-5">
            <button
              className="
                flex w-full
                cursor-pointer
                items-center gap-3
                rounded-2xl
                p-2
                text-left
                transition-all duration-300
                hover:bg-[var(--surface)]
              "
            >
              <div
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  bg-[var(--sage)]
                  text-sm font-medium
                  text-[var(--text)]
                "
              >
                A
              </div>

              <div>
                <p className="text-sm font-medium text-[var(--text)]">
                  Alina
                </p>

                <p className="text-xs text-[var(--muted-text)]">
                  Learner
                </p>
              </div>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}