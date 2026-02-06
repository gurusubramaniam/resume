import { motion } from 'framer-motion';
import { FaReact, FaNode, FaAws, FaDocker, FaJava, FaCode, FaDatabase } from 'react-icons/fa';

const Skills = () => {
    const skillCategories = [
        {
            category: "Frontend",
            skills: [
                { name: "React", icon: <FaReact />, level: 95 },
                { name: "Next.js", icon: <FaCode />, level: 90 },
                { name: "TypeScript", icon: <FaCode />, level: 90 },
                { name: "GraphQL", icon: <FaDatabase />, level: 85 },
            ]
        },
        {
            category: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNode />, level: 95 },
                { name: "Java", icon: <FaJava />, level: 85 },
                { name: "Kafka", icon: <FaDatabase />, level: 85 },
            ]
        },
        {
            category: "Cloud & Infrastructure",
            skills: [
                { name: "AWS", icon: <FaAws />, level: 90 },
                { name: "Docker", icon: <FaDocker />, level: 85 },
                { name: "Kubernetes", icon: <FaCode />, level: 80 },
                { name: "MongoDB", icon: <FaDatabase />, level: 85 },
            ]
        }
    ];

    return (
        <div style={{ padding: '80px 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
                        Technical <span className="text-gradient">Expertise</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        Full-stack proficiency across modern technologies
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.category}
                            className="glass-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            style={{ padding: '32px' }}
                        >
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                marginBottom: '24px',
                                color: 'var(--accent-cyan)'
                            }}>
                                {category.category}
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginBottom: '8px'
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <span style={{ fontSize: '1.5rem', color: 'var(--accent-purple)' }}>
                                                    {skill.icon}
                                                </span>
                                                <span style={{ fontWeight: '500' }}>{skill.name}</span>
                                            </div>
                                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* Progress bar */}
                                        <div style={{
                                            width: '100%',
                                            height: '6px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '3px',
                                            overflow: 'hidden'
                                        }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05 + 0.2 }}
                                                style={{
                                                    height: '100%',
                                                    background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
                                                    borderRadius: '3px'
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
