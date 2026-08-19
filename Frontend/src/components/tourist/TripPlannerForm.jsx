import { useState } from 'react';
import { createTripPlan } from '../../api/tourismService';
import { getSession } from '../../api/session';
import LoadingState from '../ui/LoadingState';
import { useToast } from '../ui/ToastProvider';

const initialPlan = {
  destination: 'Jaipur',
  days: '3',
  budget: '₹8,000 – ₹12,000',
  interests: ['Culture', 'Food'],
};

const interestOptions = ['Culture', 'Food', 'Nature', 'Adventure', 'Shopping', 'Wellness'];

function TripPlannerForm() {
  const [plan, setPlan] = useState(initialPlan);
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const showToast = useToast();

  function toggleInterest(interest) {
    setPlan((current) => ({
      ...current,
      interests: current.interests.includes(interest)
        ? current.interests.filter((item) => item !== interest)
        : [...current.interests, interest],
    }));
  }

  async function buildItinerary(event) {
    event.preventDefault();
    const fallbackPlan = {
      title: `${plan.days}-day ${plan.destination} discovery plan`,
      summary: `Balanced for ${plan.interests.length ? plan.interests.join(' and ') : 'your chosen interests'}, within ${plan.budget}.`,
      stops: ['Amber Fort at an off-peak time', 'Local lunch near the heritage district', 'City Palace and a sunset walk'],
    };
    setLoading(true);
    setError('');
    try {
      const response = await createTripPlan(plan, getSession()?.token);
      const generatedPlan = response?.plan || response;
      setItinerary({
        title: generatedPlan?.title || fallbackPlan.title,
        summary: generatedPlan?.summary || fallbackPlan.summary,
        stops: Array.isArray(generatedPlan?.stops) ? generatedPlan.stops.map((stop) => typeof stop === 'string' ? stop : stop.name || stop.title || stop.place || 'Recommended stop') : fallbackPlan.stops,
      });
      showToast('Your AI itinerary is ready.');
    } catch (requestError) {
      if (requestError instanceof TypeError) {
        setItinerary(fallbackPlan);
        showToast('Backend unavailable. Showing a smart demo itinerary.', 'info');
      } else setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="grid gap-5 xl:grid-cols-[1fr_.9fr]">
      <form onSubmit={buildItinerary} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-ocean">AI trip planner</p>
            <h2 className="mt-1 text-2xl font-black">Tell us about your trip</h2>
          </div>
          <span className="rounded-full bg-[#e0f5f7] px-3 py-1 text-xs font-bold text-ocean">Demo mode</span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-bold">Destination
            <input value={plan.destination} onChange={(event) => setPlan({ ...plan, destination: event.target.value })} className="mt-2 w-full rounded-xl border border-ink/15 px-3 py-3 font-medium outline-none focus:border-ocean" placeholder="e.g. Jaipur" required />
          </label>
          <label className="text-sm font-bold">Number of days
            <select value={plan.days} onChange={(event) => setPlan({ ...plan, days: event.target.value })} className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-3 py-3 font-medium outline-none focus:border-ocean">
              <option value="1">1 day</option><option value="2">2 days</option><option value="3">3 days</option><option value="4">4 days</option><option value="5">5 days</option>
            </select>
          </label>
          <label className="text-sm font-bold sm:col-span-2">Trip budget
            <select value={plan.budget} onChange={(event) => setPlan({ ...plan, budget: event.target.value })} className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-3 py-3 font-medium outline-none focus:border-ocean">
              <option>Under ₹5,000</option><option>₹5,000 – ₹8,000</option><option>₹8,000 – ₹12,000</option><option>Above ₹12,000</option>
            </select>
          </label>
        </div>

        <fieldset className="mt-5"><legend className="text-sm font-bold">What interests you?</legend><div className="mt-3 flex flex-wrap gap-2">
          {interestOptions.map((interest) => {
            const selected = plan.interests.includes(interest);
            return <button key={interest} type="button" onClick={() => toggleInterest(interest)} className={`rounded-full border px-3 py-2 text-sm font-bold transition ${selected ? 'border-ocean bg-ocean text-white' : 'border-ink/15 hover:border-ocean'}`}>{interest}</button>;
          })}
        </div></fieldset>

        {error && <p className="mt-4 text-sm font-bold text-coral">{error}</p>}
        <button type="submit" disabled={loading} className="mt-7 rounded-full bg-coral px-5 py-3 font-bold text-white transition hover:bg-[#df5547] disabled:cursor-wait disabled:opacity-70">{loading ? 'Creating itinerary…' : 'Create my smart itinerary →'}</button>
      </form>

      <ItineraryPreview itinerary={itinerary} loading={loading} />
    </section>
  );
}

function ItineraryPreview({ itinerary, loading }) {
  if (loading) return <LoadingState label="Building your crowd-aware itinerary…" />;
  if (!itinerary) {
    return <div className="rounded-2xl border border-dashed border-ink/20 bg-white/50 p-6"><p className="text-sm font-bold uppercase tracking-[0.14em] text-ocean">Your itinerary</p><h2 className="mt-2 text-2xl font-black">Ready when you are.</h2><p className="mt-3 leading-7 text-ink/65">Choose your preferences and PARYATAN 360 will create a balanced route that considers experience, crowd levels and local opportunities.</p></div>;
  }

  return <div className="rounded-2xl bg-ink p-6 text-white shadow-soft"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[#83dfe7]">Generated plan</p><h2 className="mt-2 text-2xl font-black">{itinerary.title}</h2><p className="mt-3 leading-7 text-white/70">{itinerary.summary}</p><ol className="mt-6 space-y-3">{itinerary.stops.map((stop, index) => <li key={stop} className="flex gap-3"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ocean text-xs font-black">{index + 1}</span><span className="font-semibold">{stop}</span></li>)}</ol><button type="button" className="mt-7 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-ink">Save this itinerary</button></div>;
}

export default TripPlannerForm;
