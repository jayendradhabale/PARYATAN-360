function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_75%_25%,rgba(11,114,133,0.22),transparent_28%),radial-gradient(circle_at_15%_75%,rgba(242,107,91,0.15),transparent_23%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-ocean/20 bg-white/60 px-4 py-2 text-sm font-bold text-ocean">
            AI-powered tourism ecosystem
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            The intelligent operating system for <span className="text-ocean">tourism.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75">
            PARYATAN 360 connects tourists, hotels, local businesses and tourism authorities through demand prediction, crowd balancing and dynamic trip optimisation.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a id="planner" href="#how-it-works" className="rounded-full bg-coral px-6 py-3.5 font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#df5547]">
              Plan my journey →
            </a>
            <a href="#partners" className="rounded-full border border-ink/20 bg-white/60 px-6 py-3.5 font-bold transition hover:border-ocean hover:text-ocean">
              Explore tourism intelligence
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-soft backdrop-blur sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ocean">Tourism pulse</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Metric label="Demand forecast" value="+28%" detail="Festival week" />
            <Metric label="Crowd balance" value="82%" detail="Healthy flow" />
            <Metric label="Local reach" value="146" detail="Partner businesses" />
            <Metric label="Trip recovery" value="4 min" detail="Average replanning" />
          </div>
          <div className="mt-5 rounded-2xl bg-ink p-5 text-white">
            <p className="text-sm text-white/70">Smart recommendation</p>
            <p className="mt-2 text-lg font-bold">Try the heritage trail at 3:30 PM — lower crowd levels, same local experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value, detail }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-4">
      <p className="text-2xl font-black text-ink">{value}</p>
      <p className="mt-1 text-sm font-bold">{label}</p>
      <p className="mt-1 text-xs text-ink/55">{detail}</p>
    </div>
  );
}

export default Hero;
