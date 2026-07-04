import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogPostBySlug } from '../services/blogService';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await getBlogPostBySlug(slug);
        setPost(response.data || null);
      } catch (err) {
        setError(err.message || 'Unable to load post.');
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  if (loading) return <main className="section"><div className="container"><p>Loading post...</p></div></main>;
  if (error) return <main className="section"><div className="container"><p>{error}</p></div></main>;
  if (!post) return <main className="section"><div className="container"><p>Post not found.</p></div></main>;

  return (
    <main className="section">
      <div className="container" style={{ display: 'grid', gap: '1.25rem' }}>
        {post.coverImage ? <img src={post.coverImage} alt={post.title} style={{ width: '100%', maxHeight: '360px', objectFit: 'cover', borderRadius: '1rem' }} /> : null}
        <p className="eyebrow">{post.category}</p>
        <h1>{post.title}</h1>
        <p style={{ color: '#4b5563' }}>{post.excerpt}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </main>
  );
}