function MetricCard({ label, value, change, trend = 'up' }) {
  const trendColour = trend === 'up' ? 'text-[#16856c]' : 'text-coral';
  return (
    <article className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-ink/60">{label}</p>
      <p className="mt-3 text-3xl font-black tracking-tight">{value}</p>
      {change && <p className={`mt-2 text-sm font-bold ${trendColour}`}>{trend === 'up' ? '↑' : '↓'} {change}</p>}
    </article>
  );
}

export default MetricCard;
