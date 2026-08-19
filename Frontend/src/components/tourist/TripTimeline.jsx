import { useEffect, useState } from 'react';
import { getCurrentTrip, removeTripStop } from '../../api/tourismService';
import { getSession } from '../../api/session';
import { useToast } from '../ui/ToastProvider';

const defaultTripDays = [
  {
    label: 'Day 1 · Heritage and local flavours',
    date: 'Friday, 12 September',
    stops: [
      ['08:30', 'Amber Fort', 'Guided heritage visit · Low crowd window', 'Confirmed'],
      ['13:00', 'Amer local kitchen', 'Traditional Rajasthani lunch', 'Confirmed'],
      ['17:30', 'Jal Mahal viewpoint', 'Sunset photo stop', 'Suggested'],
    ],
  },
  {
    label: 'Day 2 · City culture',
    date: 'Saturday, 13 September',
    stops: [
      ['09:30', 'City Palace', 'Museum and royal courtyard', 'Confirmed'],
      ['14:30', 'Bapu Bazaar', 'Handicrafts and local shopping', 'Suggested'],
      ['18:00', 'Jawahar Circle', 'Evening food and cultural walk', 'Suggested'],
    ],
  },
];

function normaliseDays(days) {
  return days.map((day, index) => ({
    label: day.label || day.title || `Day ${index + 1}`,
    date: day.date || 'Date to be confirmed',
    stops: (day.stops || []).map((stop) => Array.isArray(stop) ? stop : [stop.time || 'Flexible', stop.name || stop.title || 'Recommended stop', stop.detail || stop.description || '', stop.status || 'Suggested']),
  }));
}

function TripTimeline() {
  const [activeDay, setActiveDay] = useState(0);
  const [removedStops, setRemovedStops] = useState([]);
  const [tripDays, setTripDays] = useState(defaultTripDays);
  const [error, setError] = useState('');
  const showToast = useToast();
  useEffect(() => {
    async function loadTrip() {
      try {
        const response = await getCurrentTrip(getSession()?.token);
        const days = response?.days || response?.trip?.days;
        if (Array.isArray(days) && days.length) setTripDays(normaliseDays(days));
      } catch (requestError) {
        if (!(requestError instanceof TypeError)) setError(requestError.message);
      }
    }
    loadTrip();
  }, []);
  const currentDay = tripDays[activeDay] || tripDays[0];
  const visibleStops = currentDay.stops.filter(([, place]) => !removedStops.includes(`${activeDay}-${place}`));

  async function removeStop(place) {
    try {
      await removeTripStop(place, getSession()?.token);
      showToast(`${place} removed from your itinerary.`);
    } catch (requestError) {
      if (requestError instanceof TypeError) showToast(`${place} removed from your demo itinerary.`, 'info');
      else { setError(requestError.message); return; }
    }
    setRemovedStops((current) => [...current, `${activeDay}-${place}`]);
  }

  return (
    <section className="mt-8 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-ocean">My trips</p><h2 className="mt-1 text-2xl font-black">Your Jaipur itinerary</h2></div><span className="rounded-full bg-[#e0f5f7] px-3 py-1.5 text-sm font-bold text-ocean">12–14 September</span></div>

      <div className="mt-6 flex gap-2 overflow-x-auto border-b border-ink/10">
        {tripDays.map((day, index) => <button key={day.label} type="button" onClick={() => setActiveDay(index)} className={`shrink-0 border-b-2 px-4 py-3 text-sm font-bold transition ${activeDay === index ? 'border-ocean text-ocean' : 'border-transparent text-ink/55 hover:text-ink'}`}>Day {index + 1}</button>)}
      </div>

      {error && <p className="mt-4 text-sm font-bold text-coral">{error}</p>}

      <div className="mt-6"><h3 className="text-lg font-extrabold">{currentDay.label}</h3><p className="mt-1 text-sm text-ink/60">{currentDay.date}</p></div>
      <ol className="mt-6 space-y-1">
        {visibleStops.length ? visibleStops.map(([time, place, detail, status], index) => <li key={place} className="grid grid-cols-[58px_18px_1fr] gap-3 pb-5"><p className="pt-1 text-sm font-bold text-ink/60">{time}</p><div className="relative"><span className={`mt-1 block h-4 w-4 rounded-full border-4 ${status === 'Confirmed' ? 'border-ocean bg-white' : 'border-coral bg-white'}`} />{index < visibleStops.length - 1 && <span className="absolute left-[7px] top-5 h-[calc(100%-5px)] w-px bg-ink/15" />}</div><div className="rounded-xl bg-[#f6f9fb] p-4"><div className="flex flex-wrap justify-between gap-2"><h4 className="font-extrabold">{place}</h4><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${status === 'Confirmed' ? 'bg-[#e0f5f7] text-ocean' : 'bg-[#fff0d9] text-[#9a5b00]'}`}>{status}</span></div><p className="mt-1 text-sm text-ink/65">{detail}</p><button type="button" onClick={() => removeStop(place)} className="mt-3 text-xs font-bold text-coral hover:underline">Remove stop</button></div></li>) : <li className="rounded-xl bg-[#f6f9fb] p-5 text-sm text-ink/65">No remaining stops for this day.</li>}
      </ol>
    </section>
  );
}

export default TripTimeline;
