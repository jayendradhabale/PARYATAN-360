import FeatureCard from './FeatureCard';

const features = [
  {
    icon: '🧠',
    title: 'Demand Exchange',
    description: 'Predict tourism demand before it happens, turning unused capacity into timely opportunities.',
    accent: 'bg-[#e0f5f7]',
  },
  {
    icon: '🚶',
    title: 'Flow Balancer',
    description: 'Reduce overcrowding with intelligent alternatives that preserve the traveller experience.',
    accent: 'bg-[#fff0d9]',
  },
  {
    icon: '💰',
    title: 'Revenue Detector',
    description: 'Reveal ways local businesses can capture more value from every tourism journey.',
    accent: 'bg-[#ffe7e2]',
  },
  {
    icon: '🔄',
    title: 'Trip Recovery',
    description: 'Adapt disrupted itineraries automatically when weather, closures or delays occur.',
    accent: 'bg-[#e8edff]',
  },
];

function FeatureGrid() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ocean">One connected ecosystem</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Better journeys. Stronger destinations.</h2>
        <p className="mt-4 text-lg leading-8 text-ink/70">From tourist planning to destination-level optimisation, every decision is designed to improve the experience and local economic impact.</p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
      </div>
    </section>
  );
}

export default FeatureGrid;
