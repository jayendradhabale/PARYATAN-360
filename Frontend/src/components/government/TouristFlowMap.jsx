const zones = [
  { name: 'Amber Fort', visitors: '2,840', level: 'High', x: '23%', y: '20%', colour: '#f26b5b' },
  { name: 'City Palace', visitors: '3,160', level: 'High', x: '56%', y: '45%', colour: '#f26b5b' },
  { name: 'Hawa Mahal', visitors: '1,980', level: 'Moderate', x: '71%', y: '54%', colour: '#f3b63f' },
  { name: 'Albert Hall', visitors: '1,240', level: 'Comfortable', x: '45%', y: '75%', colour: '#0b7285' },
];

function TouristFlowMap() {
  return (
    <section className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-ocean">Tourist flow map</p><h2 className="mt-1 text-2xl font-black">Live visitor distribution</h2></div><div className="flex gap-3 text-xs font-bold"><span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-full bg-coral" /> High</span><span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-full bg-[#f3b63f]" /> Moderate</span><span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-full bg-ocean" /> Comfortable</span></div></div>
      <div className="relative mt-6 min-h-80 overflow-hidden rounded-2xl bg-[#e9f6f7]" aria-label="Schematic tourist flow map of Jaipur zones">
        <div className="absolute -left-12 top-20 h-52 w-[120%] rotate-[-13deg] rounded-full border-[28px] border-white/80" />
        <div className="absolute left-24 top-0 h-[115%] w-16 rotate-[28deg] rounded-full bg-white/80" />
        <div className="absolute left-[18%] top-[48%] h-3 w-[64%] rotate-[12deg] bg-white/80" />
        <span className="absolute left-[36%] top-[28%] text-xs font-bold text-ink/40">Heritage corridor</span>
        {zones.map((zone) => <div key={zone.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: zone.x, top: zone.y }}><span className="block h-4 w-4 rounded-full border-4 border-white shadow" style={{ backgroundColor: zone.colour }} /><div className="mt-2 w-28 rounded-lg bg-white px-2 py-1.5 text-xs shadow"><strong className="block">{zone.name}</strong><span className="text-ink/60">{zone.visitors} visitors</span></div></div>)}
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{zones.map((zone) => <div key={zone.name} className="rounded-xl bg-[#f6f9fb] p-3"><p className="text-sm font-bold">{zone.name}</p><p className="mt-1 text-xs text-ink/60">{zone.visitors} active visitors · {zone.level}</p></div>)}</div>
    </section>
  );
}

export default TouristFlowMap;
