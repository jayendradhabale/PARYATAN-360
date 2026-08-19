function EmptyState({ icon = '✦', title, description, actionLabel, onAction }) {
  return <section className="rounded-2xl border border-dashed border-ink/20 bg-white p-8 text-center"><span className="text-4xl" aria-hidden="true">{icon}</span><h2 className="mt-4 text-2xl font-black">{title}</h2><p className="mx-auto mt-3 max-w-md leading-7 text-ink/65">{description}</p>{actionLabel && <button type="button" onClick={onAction} className="mt-6 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white hover:bg-ocean">{actionLabel}</button>}</section>;
}

export default EmptyState;
