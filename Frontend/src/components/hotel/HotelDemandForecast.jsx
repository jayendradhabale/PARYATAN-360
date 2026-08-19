import { useState } from 'react';

const demandSignals = [
  ['Cultural festival', 'High', '12–15 Sep', 'Local visitor interest is increasing package searches.'],
  ['Rail arrivals', 'Rising', 'This weekend', 'Inbound capacity suggests higher short-stay demand.'],
  ['Nearby hotel availability', 'Low', 'Next 4 days', 'Competitors are nearing full occupancy.'],
];

function HotelDemandForecast() {
  const [expanded, setExpanded] = useState(false);
  const displayedSignals = expanded ? demandSignals : demandSignals.slice(0, 2);
  return (
    <section className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"><p className="text-sm font-bold uppercase tracking-[0.14em] text-ocean">Demand forecast</p><h2 className="mt-1 text-2xl font-black">Signals to watch</h2><div className="mt-6 space-y-3">{displayedSignals.map(([signal, status, timing, detail]) => <article key={signal} className="rounded-xl bg-[#f6f9fb] p-4"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="font-extrabold">{signal}</h3><span className="rounded-full bg-[#e0f5f7] px-2.5 py-1 text-xs font-bold text-ocean">{status}</span></div><p className="mt-1 text-sm font-semibold text-ink/55">{timing}</p><p className="mt-2 text-sm leading-6 text-ink/65">{detail}</p></article>)}</div><button type="button" onClick={() => setExpanded(!expanded)} className="mt-5 text-sm font-bold text-ocean hover:underline">{expanded ? 'Show fewer signals' : 'View all signals'} →</button></section>
  );
}

export default HotelDemandForecast;
