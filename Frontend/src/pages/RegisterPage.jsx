import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import { register } from '../api/authService';
import { saveSession } from '../api/session';
import { useToast } from '../components/ui/ToastProvider';

const roles = [{ name: 'Tourist', icon: '🧳', path: '/tourist' }, { name: 'Hotel', icon: '🏨', path: '/hotel' }, { name: 'Business', icon: '🏪', path: '/business' }, { name: 'Government', icon: '🏛️', path: '/government' }];

function RegisterPage() {
  const [role, setRole] = useState(roles[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const showToast = useToast();
  async function registerAccount(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setLoading(true); setError('');
    try {
      const session = await register({ name: formData.get('name'), email: formData.get('email'), role: role.name });
      saveSession(session || { role: role.name }); navigate(role.path);
    } catch (requestError) {
      if (requestError instanceof TypeError) { showToast('Backend unavailable. Opening demo workspace.', 'info'); navigate(role.path); } else setError(requestError.message);
    } finally { setLoading(false); }
  }
  return <AuthLayout title="Join PARYATAN 360" subtitle="Choose your role to create the right tourism workspace."><form onSubmit={registerAccount} className="space-y-5"><label className="block text-sm font-bold">Full name<input name="name" className="mt-2 w-full rounded-xl border border-ink/15 px-3 py-3 font-medium outline-none focus:border-ocean" placeholder="Your name" required /></label><label className="block text-sm font-bold">Email address<input name="email" type="email" className="mt-2 w-full rounded-xl border border-ink/15 px-3 py-3 font-medium outline-none focus:border-ocean" placeholder="you@example.com" required /></label><fieldset><legend className="text-sm font-bold">I am joining as</legend><div className="mt-3 grid grid-cols-2 gap-3">{roles.map((item) => <button key={item.name} type="button" onClick={() => setRole(item)} className={`rounded-xl border p-3 text-left transition ${role.name === item.name ? 'border-ocean bg-[#e0f5f7] text-ocean' : 'border-ink/15 hover:border-ocean'}`}><span className="text-xl">{item.icon}</span><span className="ml-2 text-sm font-bold">{item.name}</span></button>)}</div></fieldset>{error && <p className="text-sm font-bold text-coral">{error}</p>}<button type="submit" disabled={loading} className="w-full rounded-xl bg-coral px-5 py-3 font-bold text-white hover:bg-[#df5547] disabled:cursor-wait disabled:opacity-70">{loading ? 'Creating account…' : 'Create account'}</button><p className="text-center text-sm text-ink/65">Already have an account? <Link to="/login" className="font-bold text-ocean hover:underline">Sign in</Link></p></form></AuthLayout>;
}

export default RegisterPage;
