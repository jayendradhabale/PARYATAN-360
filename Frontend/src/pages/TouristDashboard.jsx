import DashboardLayout from '../components/dashboard/DashboardLayout';
import InsightPanel from '../components/dashboard/InsightPanel';
import MetricCard from '../components/dashboard/MetricCard';
import TripPlannerForm from '../components/tourist/TripPlannerForm';
import DestinationRecommendations from '../components/tourist/DestinationRecommendations';
import TripTimeline from '../components/tourist/TripTimeline';
import TripRecovery from '../components/tourist/TripRecovery';

function TouristDashboard() {
  return (
    <DashboardLayout role="Tourist" title="Your smarter journey" description="Plan an itinerary that fits your interests, time and live destination conditions.">
      <div className="grid gap-4 sm:grid-cols-3">
        <MetricCard label="Trip days planned" value="3" change="Ready to personalise" />
        <MetricCard label="Crowd comfort" value="82%" change="Low congestion" />
        <MetricCard label="Estimated savings" value="₹1,240" change="With smart choices" />
      </div>
      <div className="mt-5 grid gap-5 xl:grid-cols-[1.2fr_.8fr]">
        <InsightPanel title="Recommended next stop"><p className="text-xl font-bold">Heritage Walk, Jaipur · 3:30 PM</p><p className="mt-2 leading-7 text-ink/65">Lower crowd levels than peak hours, with a nearby local-food route added to your plan.</p><button type="button" className="mt-5 rounded-full bg-coral px-5 py-2.5 text-sm font-bold text-white">Add to itinerary</button></InsightPanel>
        <InsightPanel title="Trip recovery status"><p className="font-bold text-[#16856c]">All plans are on track</p><p className="mt-2 text-sm leading-6 text-ink/65">We will suggest alternatives if weather, traffic or closures affect your journey.</p></InsightPanel>
      </div>
      <div className="mt-5"><TripPlannerForm /></div>
      <DestinationRecommendations />
      <TripTimeline />
      <TripRecovery />
    </DashboardLayout>
  );
}

export default TouristDashboard;
