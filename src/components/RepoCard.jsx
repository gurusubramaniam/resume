import { FaStar, FaCodeBranch, FaExclamationCircle, FaExternalLinkAlt } from 'react-icons/fa';
import TechIcons from './TechIcons';
import SpotlightCard from './SpotlightCard';

const RepoCard = ({ repo }) => {
    return (
        <SpotlightCard
            whileHover={{ y: -8, boxShadow: '0 12px 40px 0 rgba(6, 182, 212, 0.25)' }}
            style={{
                padding: '24px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.3s'
            }}
        >
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <TechIcons repo={repo} />
                    <a href={repo.html_url} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} className="hover-link">
                        <FaExternalLinkAlt />
                    </a>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', fontWeight: 'bold' }}>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px', lineHeight: '1.5' }}>
                    {repo.description || "No description provided."}
                </p>
            </div>

            <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)', paddingTop: '16px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <FaStar color="gold" /> {repo.stargazers_count}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <FaCodeBranch /> {repo.forks_count}
                </span>
                {repo.open_issues_count > 0 && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-cyan)' }}>
                        <FaExclamationCircle /> {repo.open_issues_count}
                    </span>
                )}
            </div>

            <style>{`
        .hover-link:hover { color: var(--accent-cyan) !important; }
      `}</style>
        </SpotlightCard>
    );
};

export default RepoCard;
