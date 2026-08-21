import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-[var(--background)] z-50 w-full px-8 py-6 shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold text-text">
          Atlas
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-9">
          <Link href="/" className="nav-link nav-home">
            Home
          </Link>

          <Link href="/learn" className="nav-link nav-learn">
            Learn
          </Link>

          <Link href="/progress" className="nav-link nav-progress">
            Progress
          </Link>

          <Link href="/achievements" className="nav-link nav-achievements">
            Achievements
          </Link>

          {/* Profile */}
          <button
            className="
              ml-2 flex h-10 w-10 items-center justify-center
              rounded-full
              bg-sage/50
              text-sm font-medium text-text
              transition-all duration-300 ease-out
              hover:scale-105
              hover:bg-[#C9DCC4]
              hover:shadow-sm
              cursor-pointer
            "
          >
            A
          </button>
        </div>
      </nav>
    </header>
  );
}