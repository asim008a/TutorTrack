// Keeping the feature descriptions together makes the repeated cards easy to follow.
const features = [
  {
    number: '01',
    title: 'Class management',
    description: 'Record every session, topic, duration and fee in one place.',
  },
  {
    number: '02',
    title: 'Progress tracking',
    description: 'Follow learning progress from subjects down to individual topics.',
  },
  {
    number: '03',
    title: 'Clear reports',
    description: 'Understand your teaching hours, earnings and student progress.',
  },
]

// Features turns the data above into one card per feature.
function Features() {
  return (
    <section id="features" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          One organized workspace
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything you need to keep teaching on track.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {/* A key based on the feature number helps React identify each card. */}
          {features.map((feature) => (
            <article
              key={feature.number}
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-slate-900/5"
            >
              <span className="text-sm font-semibold text-indigo-600">
                {feature.number}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
