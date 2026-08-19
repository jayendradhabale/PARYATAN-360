import DashboardLayout from '../components/dashboard/DashboardLayout';
import InsightPanel from '../components/dashboard/InsightPanel';
import MetricCard from '../components/dashboard/MetricCard';
import OfferCreator from '../components/business/OfferCreator';
import TouristReach from '../components/business/TouristReach';
import RevenueOpportunity from '../components/business/RevenueOpportunity';

function BusinessDashboard() {
  return (
    <DashboardLayout role="Business" title="Local growth opportunities" description="Turn nearby tourist demand into relevant offers and stronger local revenue.">
      <div className="grid gap-4 sm:grid-cols-3"><MetricCard label="Tourists in reach" value="1,286" change="Near your area today" /><MetricCard label="Offer views" value="348" change="18% this week" /><MetricCard label="Potential revenue" value="₹18,600" change="This weekend" /></div>
      <div className="mt-5"><InsightPanel title="Suggested offer"><p className="font-bold">Create an evening snack experience for heritage-trail visitors.</p><p className="mt-2 text-sm leading-6 text-ink/65">Traffic is expected to increase between 5 PM and 8 PM. Add a limited-time offer to surface in recommendations.</p></InsightPanel></div>
      <div className="mt-5"><OfferCreator /></div>
      <div className="mt-5 grid gap-5 xl:grid-cols-2"><TouristReach /><RevenueOpportunity /></div>
    </DashboardLayout>
  );
}

export default BusinessDashboard;
