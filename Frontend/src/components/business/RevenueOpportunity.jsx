import { useState } from 'react';

function RevenueOpportunity() {
  const [activated, setActivated] = useState(false);
  return (
    <section className="rounded-2xl bg-ink p-6 text-white shadow-soft"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[#83dfe7]">Revenue opportunity</p><h2 className="mt-2 text-2xl font-black">Convert evening footfall</h2><p className="mt-3 leading-7 text-white/70">A 15% food-and-drink offer could attract an estimated 38 additional visitors from the nearby heritage route tonight.</p><div className="mt-6 space-y-3 rounded-xl bg-white/10 p-4"><div className="flex justify-between text-sm"><span className="text-white/65">Estimated extra sales</span><strong>₹5,700</strong></div><div className="flex justify-between text-sm"><span className="text-white/65">Recommended offer period</span><strong>5 PM – 8 PM</strong></div><div className="flex justify-between text-sm"><span className="text-white/65">Target group</span><strong>Culture + food</strong></div></div><button type="button" onClick={() => setActivated(true)} className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-bold transition ${activated ? 'bg-[#e2f6ed] text-[#16856c]' : 'bg-coral text-white hover:bg-[#df5547]'}`}>{activated ? '✓ Opportunity activated' : 'Activate this opportunity'}</button></section>
  );
}

export default RevenueOpportunity;
