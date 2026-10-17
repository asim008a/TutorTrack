// DashboardPreview displays illustrative sample metrics and student progress.
function DashboardPreview() {
  // Each object provides the label and percentage used by one progress row.
  const progressItems = [
    { name: 'Python fundamentals', progress: 72 },
    { name: 'Conditional logic', progress: 85 },
    { name: 'Loops and iteration', progress: 48 },
  ]

  return (
    <div id="preview" className="relative">
      <div className="absolute -inset-5 rounded-[2rem] bg-indigo-200/30 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/5 sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Your workspace</p>
            <h2 className="mt-1 text-xl font-semibold">Overview</h2>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            Dashboard preview
          </span>
        </div>

        {/* These two cards show the sample totals from the original page. */}
        <div className="mt-7 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-indigo-50 p-5">
            <p className="text-sm text-indigo-700">Teaching hours</p>
            <p className="mt-3 text-3xl font-semibold">24.5</p>
            <p className="mt-1 text-xs text-slate-500">Sample data</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-5">
            <p className="text-sm text-emerald-700">Earnings</p>
            <p className="mt-3 text-3xl font-semibold">₹8,400</p>
            <p className="mt-1 text-xs text-slate-500">Sample data</p>
          </div>
        </div>

        <div className="mt-7">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Student progress</h3>
            <span className="text-xs text-slate-500">Illustrative</span>
          </div>

          {/* map creates one progress row for every item in the data list. */}
          {progressItems.map((item) => (
            <div key={item.name} className="mt-5">
              <div className="mb-2 flex justify-between gap-3 text-sm">
                <span className="text-slate-600">{item.name}</span>
                <span className="font-semibold">{item.progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-indigo-600"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-sm font-medium">Your teaching, at a glance.</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            A preview of the reports and learning insights we'll build.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPreview
