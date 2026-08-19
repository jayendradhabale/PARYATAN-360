import { useEffect, useState } from 'react';
import { addTripStop, getDestinationRecommendations } from '../../api/tourismService';
import { getSession } from '../../api/session';
import LoadingState from '../ui/LoadingState';
import { useToast } from '../ui/ToastProvider';

const destinations = [
  { name: 'Amber Fort', type: 'Heritage', time: '8:30 AM', crowd: 'Low crowd', crowdStyle: 'bg-[#e2f6ed] text-[#16856c]', cost: '₹500', rating: '4.8', note: 'Visit before the peak tour-bus window for a calmer experience.', icon: '🏰' },
  { name: 'Jawahar Circle', type: 'Local experience', time: '5:00 PM', crowd: 'Comfortable', crowdStyle: 'bg-[#e0f5f7] text-ocean', cost: 'Free', rating: '4.5', note: 'A relaxed evening alternative near food and craft stops.', icon: '🌳' },
  { name: 'Nahargarh Fort', type: 'Viewpoint', time: '4:30 PM', crowd: 'Moderate crowd', crowdStyle: 'bg-[#fff0d9] text-[#9a5b00]', cost: '₹200', rating: '4.7', note: 'Best timed for sunset; leave early to avoid the exit rush.', icon: '🌅' },
];

function DestinationRecommendations() {
  const [saved, setSaved] = useState([]);
  const [recommendations, setRecommendations] = useState(destinations);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const showToast = useToast();

  useEffect(() => {
    async function loadRecommendations() {
      try {
        const response = await getDestinationRecommendations('Jaipur', getSession()?.token);
        const items = response?.recommendations || response;
        if (Array.isArray(items) && items.length) {
          setRecommendations(items.map((item) => ({
            name: item.name || item.title || 'Recommended destination', type: item.type || item.category || 'Experience', time: item.time || item.bestTime || 'Flexible', crowd: item.crowd || item.crowdLevel || 'Comfortable', crowdStyle: item.crowdStyle || 'bg-[#e0f5f7] text-ocean', cost: item.cost || item.estimatedCost || 'Varies', rating: item.rating || 'New', note: item.note || item.description || 'Recommended for your journey.', icon: item.icon || '📍', id: item.id,
          })));
        }
      } catch (requestError) {
        if (!(requestError instanceof TypeError)) setError(requestError.message);
      } finally { setLoading(false); }
    }
    loadRecommendations();
  }, []);

  async function toggleSaved(destination) {
    const alreadySaved = saved.includes(destination.name);
    if (alreadySaved) {
      setSaved((current) => current.filter((item) => item !== destination.name));
      return;
    }
    try {
      await addTripStop(destination, getSession()?.token);
      showToast(`${destination.name} added to your trip.`);
    } catch (requestError) {
      if (requestError instanceof TypeError) showToast(`${destination.name} added to your demo itinerary.`, 'info');
      else { setError(requestError.message); return; }
    }
    setSaved((current) => [...current, destination.name]);
  }

  return (
    <section className="mt-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><p className="text-sm font-bold uppercase tracking-[0.14em] text-ocean">Smart alternatives</p><h2 className="mt-1 text-2xl font-black">Recommended for your Jaipur trip</h2></div>
        <p className="text-sm font-semibold text-ink/60">{saved.length} stop{saved.length === 1 ? '' : 's'} added</p>
      </div>
      {error && <p className="mt-4 text-sm font-bold text-coral">{error}</p>}
      {loading ? <div className="mt-5"><LoadingState label="Finding balanced destinations…" /></div> : <div className="mt-5 grid gap-5 lg:grid-cols-3">
        {recommendations.map((destination) => {
          const isSaved = saved.includes(destination.name);
          return <article key={destination.name} className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
            <div className="flex h-28 items-center justify-between bg-[linear-gradient(135deg,#e0f5f7,#fff0d9)] px-5"><span className="text-5xl">{destination.icon}</span><span className={`rounded-full px-3 py-1.5 text-xs font-extrabold ${destination.crowdStyle}`}>{destination.crowd}</span></div>
            <div className="p-5"><div className="flex items-start justify-between gap-3"><div><p className="text-sm font-bold text-ocean">{destination.type}</p><h3 className="mt-1 text-xl font-extrabold">{destination.name}</h3></div><span className="text-sm font-bold">★ {destination.rating}</span></div><p className="mt-3 min-h-12 text-sm leading-6 text-ink/65">{destination.note}</p><div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4 text-sm font-bold"><span>{destination.time}</span><span>{destination.cost}</span></div><button type="button" onClick={() => toggleSaved(destination)} className={`mt-5 w-full rounded-xl px-4 py-2.5 text-sm font-bold transition ${isSaved ? 'bg-[#e2f6ed] text-[#16856c]' : 'bg-ink text-white hover:bg-ocean'}`}>{isSaved ? '✓ Added to itinerary' : 'Add to itinerary'}</button></div>
          </article>;
        })}
      </div>}
    </section>
  );
}

export default DestinationRecommendations;
