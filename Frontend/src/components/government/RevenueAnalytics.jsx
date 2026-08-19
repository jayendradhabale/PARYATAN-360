const revenueData = [
  ['Hotels', 42, '₹3.5L'],
  ['Food & dining', 31, '₹2.6L'],
  ['Experiences', 17, '₹1.4L'],
  ['Transport', 10, '₹0.9L'],
];

function RevenueAnalytics() {
  return (
    <section className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-ocean">Revenue analytics</p><h2 className="mt-1 text-2xl font-black">Visitor spend distribution</h2></div><p className="text-sm font-bold text-[#16856c]">↑ 14% vs last weekend</p></div>
      <div className="mt-7 space-y-5">{revenueData.map(([category, share, value]) => <div key={category}><div className="flex justify-between gap-4 text-sm"><span className="font-bold">{category}</span><span className="font-bold text-ink/65">{value} · {share}%</span></div><div className="mt-2 h-3 overflow-hidden rounded-full bg-[#edf2f4]"><div className="h-full rounded-full bg-ocean" style={{ width: `${share}%` }} /></div></div>)}</div>
      <div className="mt-7 rounded-xl bg-[#e0f5f7] p-4"><p className="text-sm font-bold text-ocean">Revenue opportunity</p><p className="mt-1 text-sm leading-6 text-ink/75">Local experiences account for 17% of spend. Promoting evening heritage bundles could lift local business participation during peak arrivals.</p></div>
    </section>
  );
}

export default RevenueAnalytics;
