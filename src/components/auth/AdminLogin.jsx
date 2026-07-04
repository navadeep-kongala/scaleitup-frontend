import { useState } from 'react';
import Button from '../ui/Button/Button';
import { authenticateAdmin, saveAdminSession } from '../../utils/auth';
import './AdminLogin.css';

export default function AdminLogin({ onSuccess }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const session = await authenticateAdmin(form.username, form.password);
      saveAdminSession(session.token);
      onSuccess();
    } catch (error) {
      setError(error.message || 'Unable to sign in.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="admin-login">
      <div className="admin-login__card">
        <p className="eyebrow">Restricted area</p>
        <h1>Admin login</h1>
        <p>Enter your admin credentials to manage blog posts.</p>

        <form className="admin-login__form" onSubmit={handleSubmit}>
          <label className="admin-login__field">
            <span>Username</span>
            <input name="username" value={form.username} onChange={handleChange} required />
          </label>

          <label className="admin-login__field">
            <span>Password</span>
            <input name="password" type="password" value={form.password} onChange={handleChange} required />
          </label>

          {error ? <p className="admin-login__error">{error}</p> : null}

          <Button type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</Button>
        </form>
      </div>
    </section>
  );
}
