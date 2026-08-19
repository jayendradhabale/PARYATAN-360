import { Link, useLocation } from 'react-router-dom';

const roleLinks = {
  Tourist: [
    ['Overview', '/tourist'], ['AI Trip Planner', '/tourist/planner'], ['My Trips', '/tourist/trips'], ['Trip Recovery', '/tourist/recovery'],
  ],
  Hotel: [
    ['Overview', '/hotel'], ['Occupancy', '/hotel/occupancy'], ['Demand Forecast', '/hotel/demand'], ['Packages', '/hotel/packages'],
  ],
  Business: [
    ['Overview', '/business'], ['Business Profile', '/business/profile'], ['Offers', '/business/offers'], ['Revenue Insights', '/business/revenue'],
  ],
  Government: [
    ['Overview', '/government'], ['Tourist Flow', '/government/flow'], ['Crowd Monitoring', '/government/crowds'], ['Revenue Analytics', '/government/revenue'], ['Demand Prediction', '/government/demand'],
  ],
};

function Sidebar({ role }) {
  const location = useLocation();
  const links = roleLinks[role];

  return (
    <aside className="bg-ink p-5 text-white lg:min-h-screen lg:w-64">
      <Link to="/" className="flex items-center gap-3 px-2 py-3">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-ocean text-lg">✦</span>
        <span className="font-extrabold tracking-tight">PARYATAN <span className="text-[#83dfe7]">360</span></span>
      </Link>
      <p className="mt-8 px-2 text-xs font-bold uppercase tracking-[0.16em] text-white/50">{role} workspace</p>
      <nav className="mt-3 flex gap-2 overflow-x-auto lg:flex-col" aria-label={`${role} navigation`}>
        {links.map(([label, path], index) => {
          const active = location.pathname === path;
          return (
            <Link key={label} to={path} className={`whitespace-nowrap rounded-xl px-3 py-2.5 text-sm font-semibold transition ${active ? 'bg-ocean text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
              {label}
            </Link>
          );
        })}
      </nav>
      <Link to="/" className="mt-8 inline-block px-3 text-sm font-bold text-[#83dfe7] hover:text-white">← Back to home</Link>
    </aside>
  );
}

export default Sidebar;
