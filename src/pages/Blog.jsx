import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';
import { FaExternalLinkAlt, FaBook, FaSpinner } from 'react-icons/fa';

const Blog = () => {
    // Just add your article URLs here - everything else auto-generates!
    const articleUrls = [
        'https://skipprichard.com/leadership-lessons-from-dr-martin-luther-king-jr/',
        // Add more URLs here, one per line:
        // 'https://example.com/another-article',
    ];

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllArticles = async () => {
            setLoading(true);
            const fetchedArticles = [];

            for (const url of articleUrls) {
                try {
                    // Using CORS proxy to fetch the URL
                    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
                    const response = await fetch(proxyUrl);
                    const data = await response.json();

                    // Parse HTML to extract metadata
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(data.contents, 'text/html');

                    // Extract title
                    const title =
                        doc.querySelector('meta[property="og:title"]')?.getAttribute('content') ||
                        doc.querySelector('meta[name="twitter:title"]')?.getAttribute('content') ||
                        doc.querySelector('title')?.textContent ||
                        'Untitled Article';

                    // Extract description
                    const description =
                        doc.querySelector('meta[property="og:description"]')?.getAttribute('content') ||
                        doc.querySelector('meta[name="twitter:description"]')?.getAttribute('content') ||
                        doc.querySelector('meta[name="description"]')?.getAttribute('content') ||
                        'No description available';

                    // Extract source/site name
                    let source =
                        doc.querySelector('meta[property="og:site_name"]')?.getAttribute('content') ||
                        new URL(url).hostname.replace('www.', '').split('.')[0];
                    source = source.charAt(0).toUpperCase() + source.slice(1);

                    // Extract publish date or use current year
                    const publishDate =
                        doc.querySelector('meta[property="article:published_time"]')?.getAttribute('content') ||
                        doc.querySelector('meta[name="publish_date"]')?.getAttribute('content');

                    const year = publishDate
                        ? new Date(publishDate).getFullYear().toString()
                        : new Date().getFullYear().toString();

                    fetchedArticles.push({
                        title: title.trim(),
                        source: source.trim(),
                        description: description.trim(),
                        link: url,
                        date: year
                    });

                } catch (error) {
                    console.error(`Error fetching metadata for ${url}:`, error);
                    // Add a fallback entry
                    fetchedArticles.push({
                        title: 'Article',
                        source: new URL(url).hostname,
                        description: 'Click to read the article',
                        link: url,
                        date: new Date().getFullYear().toString()
                    });
                }
            }

            setArticles(fetchedArticles);
            setLoading(false);
        };

        if (articleUrls.length > 0) {
            fetchAllArticles();
        } else {
            setLoading(false);
        }
    }, [articleUrls.join(',')]);

    return (
        <div style={{ padding: '80px 0', minHeight: '60vh' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '16px' }}>
                        <FaBook style={{ display: 'inline', marginRight: '16px', color: 'var(--accent-cyan)' }} />
                        Reading <span className="text-gradient">Collection</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                        Technical insights, leadership lessons, and articles I've found valuable throughout my journey.
                    </p>
                </motion.div>

                {/* Loading State */}
                {loading ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ textAlign: 'center', padding: '60px 20px' }}
                    >
                        <FaSpinner size={40} style={{ color: 'var(--accent-cyan)', animation: 'spin 1s linear infinite' }} />
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '20px' }}>
                            Fetching article metadata...
                        </p>
                    </motion.div>
                ) : articles.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ textAlign: 'center', padding: '60px 20px' }}
                    >
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            No articles yet! Add URLs to the articleUrls array in Blog.jsx
                        </p>
                    </motion.div>
                ) : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '32px',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        {articles.map((article, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <SpotlightCard
                                    style={{
                                        padding: '32px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '16px'
                                    }}
                                >
                                    <div style={{ flex: 1 }}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            marginBottom: '12px'
                                        }}>
                                            <span style={{
                                                fontSize: '0.85rem',
                                                color: 'var(--accent-purple)',
                                                fontWeight: '600'
                                            }}>
                                                {article.source}
                                            </span>
                                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                                                {article.date}
                                            </span>
                                        </div>

                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: 'bold',
                                            marginBottom: '12px',
                                            lineHeight: '1.3'
                                        }}>
                                            {article.title}
                                        </h3>

                                        <p style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6'
                                        }}>
                                            {article.description}
                                        </p>
                                    </div>

                                    <a
                                        href={article.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            color: 'var(--accent-cyan)',
                                            fontWeight: '600',
                                            fontSize: '0.95rem',
                                            textDecoration: 'none',
                                            marginTop: 'auto'
                                        }}
                                    >
                                        Read Article <FaExternalLinkAlt size={14} />
                                    </a>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                )}

                <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
            </div>
        </div>
    );
};

export default Blog;
