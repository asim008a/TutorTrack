import { useState } from 'react'

// Header contains the site name and navigation links for both screen sizes.
function Header() {
  // React state remembers whether the small-screen navigation is open.
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Fixed positioning removes the header from normal page flow and pins it to the viewport. */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#faf9f6]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="text-2xl font-black tracking-tight">
            TutorTrack<span className="text-indigo-600">.</span>
          </a>

          {/* The desktop links are hidden on small screens by the responsive classes. */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-slate-600 hover:text-indigo-600">
              Features
            </a>
            <a href="#preview" className="text-sm text-slate-600 hover:text-indigo-600">
              Preview
            </a>
            <a
              href="#features"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
            >
              Explore the app ↗
            </a>
          </div>

          {/* This button toggles the separate mobile navigation below. */}
          <button
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </nav>

        {/* Keep the menu mounted so CSS can animate both opening and closing. */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none md:hidden ${
            menuOpen
              ? 'grid-rows-[1fr] border-t border-slate-200 opacity-100'
              : 'grid-rows-[0fr] border-t border-transparent opacity-0'
          }`}
          aria-hidden={!menuOpen}
          inert={!menuOpen}
        >
          {/* The inner wrapper clips its links while the outer grid row collapses. */}
          <div className="min-h-0 overflow-hidden">
            <div className="flex flex-col gap-4 px-6 py-5">
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#preview" onClick={() => setMenuOpen(false)}>Preview</a>
            </div>
          </div>
        </div>
      </header>

      {/* Reserve the space the fixed header would oterwise leave empty. */}
      <div className="h-18.25" aria-hidden="true" />
    </>
  )
}

export default Header
