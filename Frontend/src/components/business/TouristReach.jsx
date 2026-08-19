const hourlyVisitors = [['2 PM', 38], ['3 PM', 52], ['4 PM', 68], ['5 PM', 91], ['6 PM', 86], ['7 PM', 74]];

function TouristReach() {
  return (
    <section className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"><p className="text-sm font-bold uppercase tracking-[0.14em] text-ocean">Tourist reach</p><h2 className="mt-1 text-2xl font-black">When visitors are nearby</h2><div className="mt-7 flex h-52 items-end gap-2 border-b border-l border-ink/15 px-3 pb-1 pt-4" role="img" aria-label="Expected nearby tourists by hour">{hourlyVisitors.map(([time, value]) => <div key={time} className="flex h-full flex-1 flex-col justify-end"><div className="group relative rounded-t-lg bg-ocean" style={{ height: `${value}%` }}><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 transition group-hover:opacity-100">{value}%</span></div><span className="mt-2 text-center text-[11px] font-semibold text-ink/55">{time}</span></div>)}</div><p className="mt-6 rounded-xl bg-[#e0f5f7] p-4 text-sm leading-6 text-ink/75"><strong className="text-ocean">Best window: 5–6 PM.</strong> Heritage-trail visitors are most likely to be within walking distance during this period.</p></section>
  );
}

export default TouristReach;
