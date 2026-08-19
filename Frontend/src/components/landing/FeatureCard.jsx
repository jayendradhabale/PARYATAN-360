function FeatureCard({ icon, title, description, accent }) {
  return (
    <article className="group rounded-3xl border border-ink/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <span className={`grid h-12 w-12 place-items-center rounded-2xl text-2xl ${accent}`}>{icon}</span>
      <h3 className="mt-6 text-xl font-extrabold">{title}</h3>
      <p className="mt-3 leading-7 text-ink/70">{description}</p>
      <span className="mt-5 inline-block font-bold text-ocean transition group-hover:translate-x-1">Learn more →</span>
    </article>
  );
}

export default FeatureCard;
