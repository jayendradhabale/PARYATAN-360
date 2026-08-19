import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TouristDashboard from './pages/TouristDashboard';
import HotelDashboard from './pages/HotelDashboard';
import BusinessDashboard from './pages/BusinessDashboard';
import GovernmentDashboard from './pages/GovernmentDashboard';
import DashboardFeaturePage from './pages/DashboardFeaturePage';
import TripPlannerForm from './components/tourist/TripPlannerForm';
import TripTimeline from './components/tourist/TripTimeline';
import TripRecovery from './components/tourist/TripRecovery';
import OccupancyChart from './components/hotel/OccupancyChart';
import HotelDemandForecast from './components/hotel/HotelDemandForecast';
import PackageRecommendation from './components/hotel/PackageRecommendation';
import OfferCreator from './components/business/OfferCreator';
import RevenueOpportunity from './components/business/RevenueOpportunity';
import BusinessProfile from './components/business/BusinessProfile';
import TouristFlowMap from './components/government/TouristFlowMap';
import CrowdMonitoring from './components/government/CrowdMonitoring';
import RevenueAnalytics from './components/government/RevenueAnalytics';
import DemandForecast from './components/government/DemandForecast';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/tourist" element={<TouristDashboard />} />
      <Route path="/tourist/planner" element={<DashboardFeaturePage role="Tourist" title="AI Trip Planner" description="Build a personalised trip that balances your preferences, budget and live destination conditions."><TripPlannerForm /></DashboardFeaturePage>} />
      <Route path="/tourist/trips" element={<DashboardFeaturePage role="Tourist" title="My Trips" description="Review and adjust your day-by-day itinerary."><TripTimeline /></DashboardFeaturePage>} />
      <Route path="/tourist/recovery" element={<DashboardFeaturePage role="Tourist" title="Trip Recovery" description="Stay ahead of weather, transport and destination disruptions."><TripRecovery /></DashboardFeaturePage>} />
      <Route path="/hotel" element={<HotelDashboard />} />
      <Route path="/hotel/occupancy" element={<DashboardFeaturePage role="Hotel" title="Occupancy" description="Track room utilisation and prepare for peak periods."><OccupancyChart /></DashboardFeaturePage>} />
      <Route path="/hotel/demand" element={<DashboardFeaturePage role="Hotel" title="Demand Forecast" description="Understand the tourism signals shaping upcoming bookings."><HotelDemandForecast /></DashboardFeaturePage>} />
      <Route path="/hotel/packages" element={<DashboardFeaturePage role="Hotel" title="Packages" description="Turn demand insight into timely, relevant booking packages."><PackageRecommendation /></DashboardFeaturePage>} />
      <Route path="/business" element={<BusinessDashboard />} />
      <Route path="/business/profile" element={<DashboardFeaturePage role="Business" title="Business Profile" description="Set up the details that help PARYATAN 360 match your business to relevant travellers."><BusinessProfile /></DashboardFeaturePage>} />
      <Route path="/business/offers" element={<DashboardFeaturePage role="Business" title="Offers" description="Create timely offers for visitors near your business."><OfferCreator /></DashboardFeaturePage>} />
      <Route path="/business/revenue" element={<DashboardFeaturePage role="Business" title="Revenue Insights" description="Identify high-potential tourist demand and activate it."><RevenueOpportunity /></DashboardFeaturePage>} />
      <Route path="/government" element={<GovernmentDashboard />} />
      <Route path="/government/flow" element={<DashboardFeaturePage role="Government" title="Tourist Flow" description="View visitor movement across destination zones."><TouristFlowMap /></DashboardFeaturePage>} />
      <Route path="/government/crowds" element={<DashboardFeaturePage role="Government" title="Crowd Monitoring" description="Prioritise and deploy crowd-balancing actions."><CrowdMonitoring /></DashboardFeaturePage>} />
      <Route path="/government/revenue" element={<DashboardFeaturePage role="Government" title="Revenue Analytics" description="Understand where tourism spending creates local value."><RevenueAnalytics /></DashboardFeaturePage>} />
      <Route path="/government/demand" element={<DashboardFeaturePage role="Government" title="Demand Prediction" description="Prepare destination resources for anticipated visitor demand."><DemandForecast /></DashboardFeaturePage>} />
    </Routes>
  );
}

export default App;
