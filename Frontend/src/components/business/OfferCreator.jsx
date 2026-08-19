import { useState } from 'react';
import { useToast } from '../ui/ToastProvider';

function OfferCreator() {
  const [offer, setOffer] = useState({ title: 'Evening snack experience', discount: '15', audience: 'Heritage trail visitors' });
  const [published, setPublished] = useState(false);
  const showToast = useToast();

  function publish(event) {
    event.preventDefault();
    setPublished(true);
    showToast('Your targeted offer is now live.');
  }

  return (
    <section className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"><div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-ocean">Create an offer</p><h2 className="mt-1 text-2xl font-black">Reach visitors at the right moment</h2></div>{published && <span className="rounded-full bg-[#e2f6ed] px-3 py-1.5 text-sm font-bold text-[#16856c]">✓ Offer is live</span>}</div><form onSubmit={publish} className="mt-6 grid gap-4 sm:grid-cols-2"><label className="text-sm font-bold sm:col-span-2">Offer title<input value={offer.title} onChange={(event) => setOffer({ ...offer, title: event.target.value })} className="mt-2 w-full rounded-xl border border-ink/15 px-3 py-3 font-medium outline-none focus:border-ocean" required /></label><label className="text-sm font-bold">Discount (%)<input type="number" min="1" max="100" value={offer.discount} onChange={(event) => setOffer({ ...offer, discount: event.target.value })} className="mt-2 w-full rounded-xl border border-ink/15 px-3 py-3 font-medium outline-none focus:border-ocean" required /></label><label className="text-sm font-bold">Target audience<select value={offer.audience} onChange={(event) => setOffer({ ...offer, audience: event.target.value })} className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-3 py-3 font-medium outline-none focus:border-ocean"><option>Heritage trail visitors</option><option>Family travellers</option><option>Food-focused visitors</option><option>Weekend tourists</option></select></label><button type="submit" className="w-fit rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white hover:bg-ocean">Publish offer</button></form></section>
  );
}

export default OfferCreator;
