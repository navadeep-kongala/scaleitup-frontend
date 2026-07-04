import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../services/blogService';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await getBlogPosts();
        setPosts(response.data || []);
      } catch (err) {
        setError(err.message || 'Unable to load posts.');
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Insights</p>
        <h1>Blog</h1>

        {loading && <p>Loading posts...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && posts.length === 0 && <p>No posts published yet.</p>}

        <div style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
          {posts.map((post) => (
            <article key={post._id} style={{ border: '1px solid #e5e7eb', borderRadius: '1rem', overflow: 'hidden' }}>
              {post.coverImage ? <img src={post.coverImage} alt={post.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} /> : null}
              <div style={{ padding: '1.25rem' }}>
                <p style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem', color: '#6b7280' }}>{post.category}</p>
                <h2 style={{ margin: '0.3rem 0 0.6rem' }}>{post.title}</h2>
                <p style={{ color: '#4b5563', marginBottom: '1rem' }}>{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`}>Read more</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}