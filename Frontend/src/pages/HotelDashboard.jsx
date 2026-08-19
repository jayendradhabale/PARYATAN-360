import DashboardLayout from '../components/dashboard/DashboardLayout';
import InsightPanel from '../components/dashboard/InsightPanel';
import MetricCard from '../components/dashboard/MetricCard';
import OccupancyChart from '../components/hotel/OccupancyChart';
import HotelDemandForecast from '../components/hotel/HotelDemandForecast';
import PackageRecommendation from '../components/hotel/PackageRecommendation';

function HotelDashboard() {
  return (
    <DashboardLayout role="Hotel" title="Demand and occupancy insights" description="Use predicted visitor demand to optimise rooms, packages and staffing.">
      <div className="grid gap-4 sm:grid-cols-3"><MetricCard label="Current occupancy" value="68%" change="8% this week" /><MetricCard label="Forecast demand" value="86%" change="For festival weekend" /><MetricCard label="Open room nights" value="42" change="Revenue opportunity" trend="down" /></div>
      <div className="mt-5"><InsightPanel title="Suggested action"><p className="font-bold">Launch a two-night heritage package for next weekend.</p><p className="mt-2 text-sm leading-6 text-ink/65">Predicted demand is rising and nearby cultural events make this a high-intent booking window.</p></InsightPanel></div>
      <div className="mt-5 grid gap-5 xl:grid-cols-[1.1fr_.9fr]"><OccupancyChart /><HotelDemandForecast /></div>
      <div className="mt-5"><PackageRecommendation /></div>
    </DashboardLayout>
  );
}

export default HotelDashboard;
