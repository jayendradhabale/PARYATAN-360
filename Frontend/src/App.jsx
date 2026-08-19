import Header from './components/layout/Header';
import Hero from './components/landing/Hero';
import FeatureGrid from './components/landing/FeatureGrid';
import EcosystemSection from './components/landing/EcosystemSection';
import StakeholderSection from './components/landing/StakeholderSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <EcosystemSection />
        <StakeholderSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
