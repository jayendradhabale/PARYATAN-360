import { useState } from 'react';

const alerts = [
  ['City Palace approach', '91%', 'Redirect visitors to the Albert Hall and museum circuit.', 'High'],
  ['Amber Fort entrance', '84%', 'Stagger group entry messages for the next hour.', 'High'],
  ['Hawa Mahal viewpoint', '68%', 'Maintain current advisory and monitor arrival flow.', 'Moderate'],
];

function CrowdMonitoring() {
  const [actedOn, setActedOn] = useState([]);

  return (
    <section className="mt-5 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-ocean">Crowd monitoring</p><h2 className="mt-1 text-2xl font-black">Priority interventions</h2></div><p className="text-sm font-bold text-ink/60">{actedOn.length} action{actedOn.length === 1 ? '' : 's'} deployed</p></div>
      <div className="mt-6 space-y-3">{alerts.map(([zone, capacity, action, severity]) => { const complete = actedOn.includes(zone); return <article key={zone} className="flex flex-col gap-4 rounded-xl bg-[#f6f9fb] p-4 lg:flex-row lg:items-center"><div className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${severity === 'High' ? 'bg-[#ffe7e2] text-coral' : 'bg-[#fff0d9] text-[#9a5b00]'}`}>{severity} priority</div><div className="min-w-44"><h3 className="font-extrabold">{zone}</h3><p className="text-sm text-ink/60">{capacity} of comfortable capacity</p></div><p className="flex-1 text-sm leading-6 text-ink/65">{action}</p><button type="button" onClick={() => setActedOn((current) => [...current, zone])} disabled={complete} className={`rounded-xl px-4 py-2.5 text-sm font-bold transition ${complete ? 'bg-[#e2f6ed] text-[#16856c]' : 'bg-ink text-white hover:bg-ocean'}`}>{complete ? '✓ Deployed' : 'Deploy action'}</button></article>; })}</div>
    </section>
  );
}

export default CrowdMonitoring;
