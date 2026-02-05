import { FaJs, FaReact, FaPython, FaJava, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiCsharp, SiGo, SiRust } from 'react-icons/si';

const TechIcons = ({ repo }) => {
    // Simple mapping based on language or topics
    const getIcon = (lang) => {
        if (!lang) return null;
        const l = lang.toLowerCase();

        if (l === 'javascript') return <FaJs />;
        if (l === 'typescript') return <SiTypescript />;
        if (l === 'python') return <FaPython />;
        if (l === 'java') return <FaJava />;
        if (l === 'react') return <FaReact />;
        if (l === 'html') return <FaHtml5 />;
        if (l === 'css') return <FaCss3Alt />;
        if (l === 'c++') return <SiCplusplus />;
        if (l === 'c#') return <SiCsharp />;
        if (l === 'go') return <SiGo />;
        if (l === 'rust') return <SiRust />;
        return null; // Fallback or generic code icon
    };

    const icons = [];
    if (repo.language) {
        const icon = getIcon(repo.language);
        if (icon) icons.push({ key: repo.language, icon });
    }

    // Check topics if no language match or to add more
    if (repo.topics) {
        repo.topics.forEach(topic => {
            const icon = getIcon(topic);
            // Avoid duplicates
            if (icon && !icons.find(i => i.key === topic)) {
                icons.push({ key: topic, icon });
            }
        });
    }

    if (icons.length === 0) return null;

    return (
        <div style={{ display: 'flex', gap: '8px', fontSize: '1.2rem', color: 'var(--accent-cyan)' }}>
            {icons.map(({ key, icon }) => (
                <span key={key} title={key}>{icon}</span>
            ))}
        </div>
    );
};

export default TechIcons;
