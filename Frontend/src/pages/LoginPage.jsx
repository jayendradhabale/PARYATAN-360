import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import { login } from '../api/authService';
import { saveSession } from '../api/session';
import { useToast } from '../components/ui/ToastProvider';

const rolePaths = { Tourist: '/tourist', Hotel: '/hotel', Business: '/business', Government: '/government' };

function LoginPage() {
  const [role, setRole] = useState('Tourist');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const showToast = useToast();
  async function logIn(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setLoading(true); setError('');
    try {
      const session = await login({ email: formData.get('email'), password: formData.get('password'), role });
      saveSession(session || { role }); navigate(rolePaths[session?.role] || rolePaths[role]);
    } catch (requestError) {
      if (requestError instanceof TypeError) { showToast('Backend unavailable. Opening demo workspace.', 'info'); navigate(rolePaths[role]); } else setError(requestError.message);
    } finally { setLoading(false); }
  }
  return <AuthLayout title="Welcome back" subtitle="Sign in to access your PARYATAN 360 workspace."><form onSubmit={logIn} className="space-y-5"><label className="block text-sm font-bold">Email address<input name="email" type="email" className="mt-2 w-full rounded-xl border border-ink/15 px-3 py-3 font-medium outline-none focus:border-ocean" placeholder="you@example.com" required /></label><label className="block text-sm font-bold">Password<input name="password" type="password" className="mt-2 w-full rounded-xl border border-ink/15 px-3 py-3 font-medium outline-none focus:border-ocean" placeholder="••••••••" required /></label><label className="block text-sm font-bold">Sign in as<select value={role} onChange={(event) => setRole(event.target.value)} className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-3 py-3 font-medium outline-none focus:border-ocean">{Object.keys(rolePaths).map((item) => <option key={item}>{item}</option>)}</select></label><div className="rounded-xl bg-[#f6f9fb] p-3 text-xs leading-5 text-ink/65"><p className="font-bold text-ink">Demo access</p><p>Admin: admin@paryatan360.com · Admin@12345 · Government</p><p>User: user@paryatan360.com · User@12345 · Tourist</p></div>{error && <p className="text-sm font-bold text-coral">{error}</p>}<button type="submit" disabled={loading} className="w-full rounded-xl bg-ink px-5 py-3 font-bold text-white hover:bg-ocean disabled:cursor-wait disabled:opacity-70">{loading ? 'Signing in…' : 'Sign in'}</button><p className="text-center text-sm text-ink/65">New to PARYATAN 360? <Link to="/register" className="font-bold text-ocean hover:underline">Create an account</Link></p></form></AuthLayout>;
}

export default LoginPage;
