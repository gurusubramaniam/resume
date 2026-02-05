import { useState, useEffect } from 'react';
import RepoCard from '../components/RepoCard';
import { motion } from 'framer-motion';

const Repos = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const res = await fetch('https://api.github.com/users/gurusubramaniam/repos');
                const data = await res.json();
                const filtered = Array.isArray(data) ? data.filter(repo => !repo.fork) : [];
                // Sort by stars for better presentation
                filtered.sort((a, b) => b.stargazers_count - a.stargazers_count);
                setRepos(filtered);
            } catch (error) {
                console.error("Failed to fetch repos", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
    };

    return (
        <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
            <h1 style={{
                fontSize: '2.5rem',
                marginBottom: '40px',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                <span className="text-gradient">Open Source Projects</span>
            </h1>

            {loading ? (
                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <div style={{
                        display: 'inline-block',
                        width: '50px',
                        height: '50px',
                        border: '3px solid rgba(255,255,255,0.1)',
                        borderTop: '3px solid var(--accent-cyan)',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                    }}></div>
                    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                </div>
            ) : (
                <motion.div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '30px'
                    }}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {repos.map((repo) => (
                        <motion.div key={repo.id} variants={itemVariants}>
                            <RepoCard repo={repo} />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Repos;
