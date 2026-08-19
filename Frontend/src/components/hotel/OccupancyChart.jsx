const occupancy = [
  ['Mon', 58], ['Tue', 61], ['Wed', 65], ['Thu', 68], ['Fri', 76], ['Sat', 89], ['Sun', 82],
];

function OccupancyChart() {
  return (
    <section className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
      <div className="flex items-end justify-between gap-3"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-ocean">Occupancy</p><h2 className="mt-1 text-2xl font-black">Weekly room utilisation</h2></div><span className="text-sm font-bold text-[#16856c]">↑ 8% this week</span></div>
      <div className="mt-8 flex h-56 items-end gap-2 border-b border-l border-ink/15 px-4 pb-1 pt-4" role="img" aria-label="Weekly hotel occupancy chart">
        {occupancy.map(([day, value]) => <div key={day} className="flex h-full flex-1 flex-col justify-end"><div className="group relative rounded-t-lg bg-ocean transition hover:bg-coral" style={{ height: `${value}%` }}><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 transition group-hover:opacity-100">{value}%</span></div><span className="mt-2 text-center text-[11px] font-semibold text-ink/55">{day}</span></div>)}
      </div>
      <p className="mt-6 text-sm leading-6 text-ink/65">Weekend occupancy is expected to exceed 85%. Prepare staffing and promote longer-stay packages for Thursday arrivals.</p>
    </section>
  );
}

export default OccupancyChart;
