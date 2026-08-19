import { useState } from 'react';

const forecasts = {
  '7 days': [54, 62, 58, 72, 82, 94, 86],
  '30 days': [44, 56, 63, 71, 78, 88, 91],
};

function DemandForecast() {
  const [period, setPeriod] = useState('7 days');
  const values = forecasts[period];
  const labels = period === '7 days' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] : ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Festival', 'Holiday', 'Peak'];

  return (
    <section className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-ocean">Demand prediction</p><h2 className="mt-1 text-2xl font-black">Expected visitor demand</h2></div><div className="flex rounded-xl bg-[#f6f9fb] p-1">{Object.keys(forecasts).map((option) => <button key={option} type="button" onClick={() => setPeriod(option)} className={`rounded-lg px-3 py-2 text-sm font-bold transition ${period === option ? 'bg-white text-ocean shadow-sm' : 'text-ink/60'}`}>{option}</button>)}</div></div>
      <div className="mt-8 flex h-56 items-end gap-2 border-b border-l border-ink/15 px-4 pb-1 pt-4" role="img" aria-label={`Visitor demand forecast for ${period}`}>
        {values.map((value, index) => <div key={labels[index]} className="flex h-full flex-1 flex-col justify-end"><div className="group relative rounded-t-lg bg-coral transition hover:bg-[#df5547]" style={{ height: `${value}%` }}><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 transition group-hover:opacity-100">{value}k</span></div><span className="mt-2 text-center text-[11px] font-semibold text-ink/55">{labels[index]}</span></div>)}
      </div>
      <div className="mt-7 grid gap-3 sm:grid-cols-2"><div className="rounded-xl bg-[#f6f9fb] p-4"><p className="text-sm font-bold text-ink/60">Peak demand expected</p><p className="mt-1 text-xl font-black">Saturday · 94k visitors</p></div><div className="rounded-xl bg-[#fff0d9] p-4"><p className="text-sm font-bold text-[#9a5b00]">Recommended preparation</p><p className="mt-1 text-sm font-semibold">Expand crowd-routing advisories before Friday afternoon.</p></div></div>
    </section>
  );
}

export default DemandForecast;
