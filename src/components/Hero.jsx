import DashboardPreview from './DashboardPreview.jsx'

// Hero introduces TutorTrack and places its dashboard preview beside the text.
function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-2 lg:px-10">
      {/* The left column contains the headline, description, and page links. */}
      <div>
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
          <span className="h-2 w-2 rounded-full bg-indigo-500" />
          Built for better teaching
        </div>

        <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          Less admin.
          <br />
          <span className="text-indigo-600">More teaching.</span>
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
          Manage your classes, understand your earnings, and see every
          student's learning journey in one organized workspace.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#preview"
            className="rounded-full bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            Explore TutorTrack <span aria-hidden="true">→</span>
          </a>
          <a href="#features" className="px-3 py-3 font-medium text-slate-700 hover:text-indigo-600">
            See what's included
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          One class at a time. One clear picture of your work.
        </p>
      </div>

      {/* The preview is its own component so it can be understood independently. */}
      <DashboardPreview />
    </section>
  )
}

export default Hero
