const steps = [
  ['01', 'Understand demand', 'Combine seasonal patterns, events, bookings and local capacity signals.'],
  ['02', 'Guide travellers', 'Create personalised journeys with balanced destinations and experiences.'],
  ['03', 'Respond in real time', 'Adapt plans when disruptions, crowding or changing conditions arise.'],
  ['04', 'Strengthen local value', 'Help tourism partners turn insights into better offers and outcomes.'],
];

function EcosystemSection() {
  return (
    <section id="partners" className="bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#83dfe7]">How it works</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">One view of the tourism ecosystem.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/70">PARYATAN 360 turns scattered tourism signals into decisions that benefit travellers, destinations and local partners together.</p>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2">
          {steps.map(([number, title, description]) => (
            <li key={number} className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <span className="text-sm font-black tracking-widest text-[#83dfe7]">{number}</span>
              <h3 className="mt-8 text-2xl font-extrabold">{title}</h3>
              <p className="mt-3 leading-7 text-white/65">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default EcosystemSection;
