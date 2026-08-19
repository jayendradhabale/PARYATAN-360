import { useState } from 'react';

function TripRecovery() {
  const [status, setStatus] = useState('alert');

  if (status === 'resolved') {
    return (
      <section className="mt-8 rounded-2xl border border-[#a9e3ca] bg-[#effbf5] p-6">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#16856c]">Recovery activated</p>
        <h2 className="mt-2 text-2xl font-black">Your itinerary has been updated.</h2>
        <p className="mt-3 max-w-2xl leading-7 text-ink/70">Jal Mahal has been replaced with the Albert Hall Museum and a nearby local-food stop. Your timing and budget remain on track.</p>
        <button type="button" onClick={() => setStatus('alert')} className="mt-5 text-sm font-bold text-ocean hover:underline">View original alert</button>
      </section>
    );
  }

  return (
    <section className="mt-8 overflow-hidden rounded-2xl border border-[#f0c46a] bg-white shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4 bg-[#fff6df] p-6">
        <div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f3b63f] text-xl">!</span><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-[#8a5700]">Trip recovery alert</p><h2 className="mt-1 text-2xl font-black">Rain may affect your Jal Mahal stop.</h2><p className="mt-2 max-w-2xl leading-7 text-ink/70">Heavy rain is expected around 5:30 PM, which may reduce visibility and make the lakeside route uncomfortable.</p></div></div>
        <span className="rounded-full bg-white px-3 py-1.5 text-sm font-bold text-[#8a5700]">Medium impact</span>
      </div>
      <div className="grid gap-5 p-6 lg:grid-cols-[1fr_.9fr]">
        <div><p className="text-sm font-bold text-ink/55">Suggested alternative</p><h3 className="mt-2 text-xl font-extrabold">Albert Hall Museum + Ram Niwas Garden</h3><p className="mt-2 leading-7 text-ink/65">Move indoors at 5:00 PM, then visit the garden if conditions improve. This preserves your culture-focused experience.</p><div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full bg-[#e2f6ed] px-3 py-1.5 text-sm font-bold text-[#16856c]">Weather-safe</span><span className="rounded-full bg-[#e0f5f7] px-3 py-1.5 text-sm font-bold text-ocean">Low crowd</span><span className="rounded-full bg-[#f6f9fb] px-3 py-1.5 text-sm font-bold text-ink/65">+ ₹80 estimated</span></div></div>
        <div className="rounded-xl bg-[#f6f9fb] p-5"><p className="text-sm font-bold text-ink/55">Plan comparison</p><div className="mt-4 space-y-3 text-sm"><div className="flex justify-between gap-3"><span className="text-ink/60">Original</span><span className="font-bold">Jal Mahal · 5:30 PM</span></div><div className="flex justify-between gap-3"><span className="text-ink/60">Replacement</span><span className="font-bold">Albert Hall · 5:00 PM</span></div><div className="flex justify-between gap-3"><span className="text-ink/60">Travel change</span><span className="font-bold text-[#16856c]">+ 10 min</span></div></div><button type="button" onClick={() => setStatus('resolved')} className="mt-6 w-full rounded-xl bg-ink px-4 py-3 text-sm font-bold text-white transition hover:bg-ocean">Accept recovery plan</button><button type="button" onClick={() => setStatus('dismissed')} className="mt-3 w-full text-sm font-bold text-ink/60 hover:text-ink">Keep my original plan</button>{status === 'dismissed' && <p className="mt-3 text-center text-xs font-semibold text-ink/55">Original plan kept. We will continue monitoring conditions.</p>}</div>
      </div>
    </section>
  );
}

export default TripRecovery;
