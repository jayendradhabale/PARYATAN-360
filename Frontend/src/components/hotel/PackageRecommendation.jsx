import { useState } from 'react';

function PackageRecommendation() {
  const [published, setPublished] = useState(false);
  return (
    <section className="rounded-2xl bg-ink p-6 text-white shadow-soft"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[#83dfe7]">Recommended package</p><h2 className="mt-2 text-2xl font-black">Two-night heritage escape</h2><p className="mt-3 leading-7 text-white/70">Combine a deluxe room, breakfast and a guided heritage walk for visitors arriving during the festival demand window.</p><div className="mt-6 grid grid-cols-3 gap-3 text-center"><div className="rounded-xl bg-white/10 p-3"><p className="text-xs text-white/60">Suggested price</p><p className="mt-1 font-extrabold">₹9,999</p></div><div className="rounded-xl bg-white/10 p-3"><p className="text-xs text-white/60">Expected take-up</p><p className="mt-1 font-extrabold">18 rooms</p></div><div className="rounded-xl bg-white/10 p-3"><p className="text-xs text-white/60">Revenue lift</p><p className="mt-1 font-extrabold">₹72k</p></div></div><button type="button" onClick={() => setPublished(true)} className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-bold transition ${published ? 'bg-[#e2f6ed] text-[#16856c]' : 'bg-coral text-white hover:bg-[#df5547]'}`}>{published ? '✓ Package published' : 'Publish package'}</button></section>
  );
}

export default PackageRecommendation;
