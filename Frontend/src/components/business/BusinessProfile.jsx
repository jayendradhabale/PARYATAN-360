import { useState } from 'react';
import { useToast } from '../ui/ToastProvider';

const serviceOptions = ['Food & drinks', 'Local crafts', 'Guided experience', 'Transport', 'Accommodation', 'Wellness'];

function BusinessProfile() {
  const [profile, setProfile] = useState({ name: 'Rajasthan Rasoi', category: 'Restaurant / café', location: 'MI Road, Jaipur', hours: '10:00 AM – 10:00 PM', services: ['Food & drinks', 'Local crafts'] });
  const [saved, setSaved] = useState(false);
  const showToast = useToast();

  function toggleService(service) {
    setProfile((current) => ({ ...current, services: current.services.includes(service) ? current.services.filter((item) => item !== service) : [...current.services, service] }));
  }

  function saveProfile(event) {
    event.preventDefault();
    setSaved(true);
    showToast('Business profile saved successfully.');
  }

  return (
    <section className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"><div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-ocean">Business profile</p><h2 className="mt-1 text-2xl font-black">Help tourists discover your business</h2></div>{saved && <span className="rounded-full bg-[#e2f6ed] px-3 py-1.5 text-sm font-bold text-[#16856c]">✓ Profile saved</span>}</div><form onSubmit={saveProfile} className="mt-6 grid gap-5 md:grid-cols-2"><label className="text-sm font-bold">Business name<input value={profile.name} onChange={(event) => setProfile({ ...profile, name: event.target.value })} className="mt-2 w-full rounded-xl border border-ink/15 px-3 py-3 font-medium outline-none focus:border-ocean" required /></label><label className="text-sm font-bold">Business category<select value={profile.category} onChange={(event) => setProfile({ ...profile, category: event.target.value })} className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-3 py-3 font-medium outline-none focus:border-ocean"><option>Restaurant / café</option><option>Retail / crafts</option><option>Tour operator</option><option>Transport provider</option><option>Wellness provider</option></select></label><label className="text-sm font-bold">Location<input value={profile.location} onChange={(event) => setProfile({ ...profile, location: event.target.value })} className="mt-2 w-full rounded-xl border border-ink/15 px-3 py-3 font-medium outline-none focus:border-ocean" required /></label><label className="text-sm font-bold">Opening hours<input value={profile.hours} onChange={(event) => setProfile({ ...profile, hours: event.target.value })} className="mt-2 w-full rounded-xl border border-ink/15 px-3 py-3 font-medium outline-none focus:border-ocean" required /></label><fieldset className="md:col-span-2"><legend className="text-sm font-bold">Services offered</legend><div className="mt-3 flex flex-wrap gap-2">{serviceOptions.map((service) => { const selected = profile.services.includes(service); return <button key={service} type="button" onClick={() => toggleService(service)} className={`rounded-full border px-3 py-2 text-sm font-bold transition ${selected ? 'border-ocean bg-ocean text-white' : 'border-ink/15 hover:border-ocean'}`}>{service}</button>; })}</div></fieldset><button type="submit" className="w-fit rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white hover:bg-ocean">Save business profile</button></form></section>
  );
}

export default BusinessProfile;
