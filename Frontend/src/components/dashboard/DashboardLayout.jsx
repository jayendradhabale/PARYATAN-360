import Sidebar from './Sidebar';

function DashboardLayout({ role, title, description, children }) {
  return (
    <div className="min-h-screen bg-[#f6f9fb] text-ink lg:flex">
      <Sidebar role={role} />
      <main className="min-w-0 flex-1">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 bg-white px-6 py-5 lg:px-10">
          <div>
            <p className="text-sm font-bold text-ocean">PARYATAN 360 / {role}</p>
            <h1 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">{title}</h1>
          </div>
          <button type="button" className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-white">Demo account</button>
        </header>
        <div className="px-6 py-8 lg:px-10">
          <p className="max-w-2xl leading-7 text-ink/65">{description}</p>
          <div className="mt-8">{children}</div>
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;
