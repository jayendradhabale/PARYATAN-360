import { Link } from 'react-router-dom';

const audiences = [
  {
    icon: '🧳',
    title: 'For tourists',
    description: 'Plan better journeys, discover balanced alternatives and recover quickly from disruptions.',
    cta: 'Explore traveller tools',
    href: '/tourist/planner',
  },
  {
    icon: '🏨',
    title: 'For hotels',
    description: 'Anticipate demand, optimise occupancy and create timely packages for the right visitors.',
    cta: 'Explore hotel insights',
    href: '/hotel/demand',
  },
  {
    icon: '🏪',
    title: 'For local businesses',
    description: 'Reach relevant visitors and uncover revenue opportunities across their journey.',
    cta: 'Explore business tools',
    href: '/business/revenue',
  },
  {
    icon: '🏛️',
    title: 'For tourism authorities',
    description: 'Understand tourist flow, monitor crowding and develop more resilient destinations.',
    cta: 'Explore destination insights',
    href: '/government/flow',
  },
];

function StakeholderSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ocean">Built for every stakeholder</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">A shared platform with role-specific intelligence.</h2>
        </div>
        <p className="max-w-sm leading-7 text-ink/70">Each dashboard is designed around the decisions its users need to make next.</p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {audiences.map((audience) => (
          <article key={audience.title} className="rounded-3xl border border-ink/10 bg-white p-7 transition hover:border-ocean/40 hover:shadow-soft">
            <span className="text-3xl" aria-hidden="true">{audience.icon}</span>
            <h3 className="mt-6 text-2xl font-extrabold">{audience.title}</h3>
            <p className="mt-3 max-w-md leading-7 text-ink/70">{audience.description}</p>
            <Link to={audience.href} className="mt-6 inline-block font-bold text-ocean transition hover:text-coral">
              {audience.cta} →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StakeholderSection;
