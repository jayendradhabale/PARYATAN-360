function InsightPanel({ title, children }) {
  return (
    <section className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-extrabold">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default InsightPanel;
