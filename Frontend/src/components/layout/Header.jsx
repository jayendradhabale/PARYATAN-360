const navigationItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'For partners', href: '#partners' },
  { label: 'About', href: '#about' },
];

function Header() {
  return (
    <header className="border-b border-ink/10 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="PARYATAN 360 home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-ocean text-xl text-white shadow-soft">✦</span>
          <span className="text-lg font-extrabold tracking-tight">PARYATAN <span className="text-ocean">360</span></span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-ocean">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#planner" className="rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:bg-ocean">
          Plan a journey
        </a>
      </div>
    </header>
  );
}

export default Header;
