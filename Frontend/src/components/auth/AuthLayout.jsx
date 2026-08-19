import { Link } from 'react-router-dom';

function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="grid min-h-screen bg-sand lg:grid-cols-2"><section className="hidden bg-ink p-12 text-white lg:flex lg:flex-col lg:justify-between"><Link to="/" className="flex items-center gap-3 text-lg font-extrabold"><span className="grid h-10 w-10 place-items-center rounded-xl bg-ocean">✦</span>PARYATAN <span className="text-[#83dfe7]">360</span></Link><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#83dfe7]">Tourism, connected</p><h1 className="mt-4 max-w-lg text-5xl font-black leading-tight">From tourist planning to tourism optimisation.</h1><p className="mt-5 max-w-md leading-7 text-white/70">One platform for better journeys, stronger local businesses and more resilient destinations.</p></div><p className="text-sm text-white/50">Smart India Hackathon · Travel & Tourism</p></section><section className="flex items-center justify-center px-6 py-12"><div className="w-full max-w-md"><Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-ocean lg:hidden">← PARYATAN 360</Link><p className="mt-8 text-sm font-bold uppercase tracking-[0.14em] text-ocean">Welcome</p><h1 className="mt-2 text-4xl font-black tracking-tight">{title}</h1><p className="mt-3 leading-7 text-ink/65">{subtitle}</p><div className="mt-8">{children}</div></div></section></main>
  );
}

export default AuthLayout;
