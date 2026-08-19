function LoadingState({ label = 'Loading insights…' }) {
  return <div className="flex min-h-48 flex-col items-center justify-center rounded-2xl border border-ink/10 bg-white p-6 text-center"><span className="h-9 w-9 animate-spin rounded-full border-4 border-ocean/20 border-t-ocean" aria-hidden="true" /><p className="mt-4 font-bold text-ink/70">{label}</p></div>;
}

export default LoadingState;
