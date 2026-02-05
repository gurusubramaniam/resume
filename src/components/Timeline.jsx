import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const Timeline = () => {
    const experiences = [
        {
            company: "Lowe's",
            role: "Senior Engineering Manager",
            period: "Jun 2024 - Present",
            location: "NC",
            achievements: [
                "Built AI-driven automation platform reducing troubleshooting effort by 80% and support tickets by 85%",
                "Designed event-driven workflows using Kafka for real-time store operations",
                "Architected LLM-powered knowledge systems for store associates"
            ],
            color: "var(--accent-cyan)"
        },
        {
            company: "Greenlight Financial",
            role: "Director of Software Engineering",
            period: "2023 - 2024",
            location: "Remote, NC",
            achievements: [
                "Re-architected monolithic systems into microservices and micro-frontend architecture",
                "Introduced Kafka-based event streaming for scalability across onboarding and card lifecycle",
                "Reduced release cycles by 90% through CI/CD pipelines and automated testing"
            ],
            color: "var(--accent-purple)"
        },
        {
            company: "Hyphen (Tuya Infotech)",
            role: "Senior Software Engineering Manager",
            period: "May 2023 - Oct 2023",
            location: "Remote, CA",
            achievements: [
                "Led development of SaaS healthcare platform across frontend, backend, and cloud services",
                "Migrated services to AWS improving scalability and operational efficiency",
                "Reduced time-to-market by 40% through CI/CD pipelines"
            ],
            color: "var(--accent-cyan)"
        },
        {
            company: "PayPal",
            role: "Software Engineering Manager, Level 2",
            period: "Oct 2011 - May 2023",
            location: "San Jose, CA",
            achievements: [
                "Led global teams building full-stack platforms supporting 450M+ users",
                "Designed distributed systems for high-throughput customer transactions",
                "Delivered regulatory initiatives and international platform launches with measurable revenue impact"
            ],
            color: "var(--accent-purple)"
        },
        {
            company: "CSC (Computer Sciences Corporation)",
            role: "Senior Software Engineer",
            period: "2006 - 2011",
            location: "PayPal",
            achievements: [
                "Built enterprise web applications integrating frontend interfaces with Java-based backend services",
                "Contributed to large-scale client implementations and production support"
            ],
            color: "var(--accent-cyan)"
        }
    ];

    return (
        <div style={{ padding: '80px 0', background: 'rgba(15, 23, 42, 0.3)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
                        Career <span className="text-gradient">Journey</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        18+ years of engineering leadership across fintech, retail, and healthcare
                    </p>
                </motion.div>

                <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
                    {/* Timeline Line */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: '40px',
                        bottom: '40px',
                        width: '2px',
                        background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-purple))',
                        opacity: 0.3
                    }} />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                marginBottom: '40px',
                                paddingLeft: '60px',
                                position: 'relative'
                            }}
                        >
                            {/* Timeline Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '11px',
                                top: '30px',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                background: exp.color,
                                boxShadow: `0 0 20px ${exp.color}`,
                                border: '3px solid var(--bg-primary)'
                            }} />

                            <SpotlightCard
                                style={{
                                    padding: '24px',
                                    background: 'rgba(15, 23, 42, 0.6)'
                                }}
                            >
                                <div style={{ marginBottom: '16px' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '4px' }}>
                                        {exp.company}
                                    </h3>
                                    <p style={{ color: exp.color, fontWeight: '600', marginBottom: '4px' }}>
                                        {exp.role}
                                    </p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        {exp.period} • {exp.location}
                                    </p>
                                </div>

                                <ul style={{
                                    paddingLeft: '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px'
                                }}>
                                    {exp.achievements.map((achievement, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + i * 0.05 }}
                                            style={{
                                                color: 'var(--text-secondary)',
                                                fontSize: '0.95rem',
                                                lineHeight: '1.6'
                                            }}
                                        >
                                            {achievement}
                                        </motion.li>
                                    ))}
                                </ul>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
