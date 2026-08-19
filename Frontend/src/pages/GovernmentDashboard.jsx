import DashboardLayout from '../components/dashboard/DashboardLayout';
import InsightPanel from '../components/dashboard/InsightPanel';
import MetricCard from '../components/dashboard/MetricCard';
import TouristFlowMap from '../components/government/TouristFlowMap';
import CrowdMonitoring from '../components/government/CrowdMonitoring';
import RevenueAnalytics from '../components/government/RevenueAnalytics';
import DemandForecast from '../components/government/DemandForecast';

function GovernmentDashboard() {
  return (
    <DashboardLayout role="Government" title="Destination intelligence" description="Monitor tourism movement and act early to improve destination capacity and visitor experience.">
      <div className="grid gap-4 sm:grid-cols-3"><MetricCard label="Active visitors" value="12,480" change="Across monitored zones" /><MetricCard label="High-crowd zones" value="2" change="Action recommended" trend="down" /><MetricCard label="Local spend signal" value="₹8.4L" change="Today so far" /></div>
      <div className="mt-5"><InsightPanel title="Crowd alert"><p className="font-bold">Amber: City Palace approach is nearing comfortable capacity.</p><p className="mt-2 text-sm leading-6 text-ink/65">Promote the nearby museum circuit and stagger entry messaging for the next 90 minutes.</p></InsightPanel></div>
      <div className="mt-5"><TouristFlowMap /></div>
      <CrowdMonitoring />
      <div className="mt-5 grid gap-5 xl:grid-cols-2"><RevenueAnalytics /><DemandForecast /></div>
    </DashboardLayout>
  );
}

export default GovernmentDashboard;
