import { useEffect, useState } from 'react';
import Button from '../components/ui/Button/Button';
import AdminLogin from '../components/auth/AdminLogin';
import { createBlogPost } from '../services/blogService';
import { clearAdminSession, getStoredAdminSession } from '../utils/auth';
import './Admin.css';

const initialForm = {
  title: '',
  excerpt: '',
  content: '',
  category: 'General',
  tags: '',
  published: false,
};

export default function Admin() {
  const [form, setForm] = useState(initialForm);
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(Boolean(getStoredAdminSession()));
  }, []);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.title || !form.excerpt || !form.content) {
      setStatus({ type: 'error', message: 'Please fill in the title, excerpt, and content.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('excerpt', form.excerpt);
      formData.append('content', form.content);
      formData.append('category', form.category);
      formData.append('tags', form.tags);
      formData.append('published', String(form.published));

      if (coverImage) {
        formData.append('coverImage', coverImage);
      }

      await createBlogPost(formData);
      setStatus({ type: 'success', message: 'Blog post created successfully.' });
      setForm(initialForm);
      setCoverImage(null);
      event.target.reset();
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Unable to create post.' });
    } finally {
      setLoading(false);
    }
  }

  if (!authenticated) {
    return <AdminLogin onSuccess={() => setAuthenticated(true)} />;
  }

  return (
    <main className="admin-page">
      <section className="container admin-page__content">
        <div className="admin-page__header">
          <div className="admin-page__top-row">
            <div>
              <p className="eyebrow">Admin</p>
              <h1>Create a blog post</h1>
              <p>Use this panel to publish a new entry for the website blog.</p>
            </div>
            <Button variant="outline" onClick={() => { clearAdminSession(); setAuthenticated(false); }}>
              Sign out
            </Button>
          </div>
        </div>

        <form className="admin-form" onSubmit={handleSubmit}>
          <label className="admin-form__field">
            <span>Title</span>
            <input name="title" value={form.title} onChange={handleChange} required />
          </label>

          <label className="admin-form__field">
            <span>Excerpt</span>
            <textarea name="excerpt" rows="3" value={form.excerpt} onChange={handleChange} required />
          </label>

          <label className="admin-form__field">
            <span>Content</span>
            <textarea name="content" rows="10" value={form.content} onChange={handleChange} required />
          </label>

          <div className="admin-form__row">
            <label className="admin-form__field">
              <span>Category</span>
              <select name="category" value={form.category} onChange={handleChange}>
                <option value="General">General</option>
                <option value="Marketing">Marketing</option>
                <option value="Branding">Branding</option>
                <option value="SEO">SEO</option>
                <option value="Automation">Automation</option>
                <option value="Growth">Growth</option>
              </select>
            </label>

            <label className="admin-form__field">
              <span>Tags</span>
              <input name="tags" value={form.tags} onChange={handleChange} placeholder="growth, seo, automation" />
            </label>
          </div>

          <label className="admin-form__checkbox">
            <input name="published" type="checkbox" checked={form.published} onChange={handleChange} />
            <span>Publish immediately</span>
          </label>

          <label className="admin-form__field">
            <span>Cover image</span>
            <input type="file" accept="image/*" onChange={(event) => setCoverImage(event.target.files?.[0] || null)} />
          </label>

          {status.message ? (
            <p className={`admin-form__status admin-form__status--${status.type}`}>{status.message}</p>
          ) : null}

          <Button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create post'}</Button>
        </form>
      </section>
    </main>
  );
}
