import { motion } from 'framer-motion';
import { FaUserTie, FaChartLine, FaProjectDiagram, FaServer } from 'react-icons/fa';
import SpotlightCard from '../components/SpotlightCard';
import MagneticButton from '../components/MagneticButton';
import { useCountUp } from '../hooks/useCountUp';
import TypingText from '../components/TypingText';

const StatsCard = ({ icon, value, label, delay }) => {
    // Determine suffix (e.g. "+", "M+", "Global")
    const numValue = parseInt(value.replace(/\D/g, '')) || 0;
    const suffix = value.replace(/[0-9]/g, '');
    const { ref, value: countValue } = useCountUp(numValue, 2, suffix);

    // Fallback for non-numeric "Global"
    const displayValue = isNaN(numValue) || numValue === 0 ? value : countValue;

    return (
        <SpotlightCard
            delay={delay}
            style={{
                padding: '24px',
                textAlign: 'center',
                flex: 1,
                minWidth: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
            }}
        >
            <div style={{ color: 'var(--accent-cyan)', fontSize: '2rem', marginBottom: '8px' }}>
                {icon}
            </div>
            <h3 ref={ref} style={{ fontSize: '2rem', fontWeight: '800', lineHeight: 1 }}>{displayValue}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{label}</p>
        </SpotlightCard>
    );
};

const Home = () => {
    return (
        <div className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '900px', margin: '0 auto 80px' }}
            >
                <div className="hero-title">
                    <TypingText text="Turning Technical Strategy into " />
                    <br />
                    <span className="text-gradient">
                        <TypingText text="Global Scale" />
                    </span>
                </div>
                <p className="hero-subtitle">
                    Engineering Leader with 18+ years of experience transforming complex systems into high-performance solutions for Fintech, Healthcare & Retail.
                </p>

                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <MagneticButton
                        href="/Gurusubramaniam.pdf"
                        className="btn-primary"
                    >
                        Download Resume
                    </MagneticButton>
                </div>
            </motion.div>

            {/* Stats Grid */}
            <div style={{
                display: 'flex',
                gap: '24px',
                flexWrap: 'wrap',
                marginBottom: '100px',
                maxWidth: '1000px',
                margin: '0 auto 100px'
            }}>
                <StatsCard
                    icon={<FaUserTie />}
                    value="18+"
                    label="Years Experience"
                    delay={0.2}
                />
                <StatsCard
                    icon={<FaChartLine />}
                    value="$25M+"
                    label="YoY Savings Delivered"
                    delay={0.3}
                />
                <StatsCard
                    icon={<FaServer />}
                    value="450M+"
                    label="Customers Served"
                    delay={0.4}
                />
                <StatsCard
                    icon={<FaProjectDiagram />}
                    value="Global"
                    label="Distributed Teams"
                    delay={0.5}
                />
            </div>

            {/* About / Expertise */}
            <motion.div
                className="glass-panel content-panel"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="two-col-grid">
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '24px', fontWeight: 'bold' }}>Expertise</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            From hands-on coding to executive strategy, I bridge the gap between business goals and engineering execution.
                        </p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                "Distributed Systems Architecture",
                                "Fintech & Payment Processing",
                                "Cloud Migration & Optimization",
                                "Team Leadership & Mentoring"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    viewport={{ once: true }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}
                                >
                                    <span style={{ color: 'var(--accent-purple)' }}>➜</span> {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '24px', fontWeight: 'bold' }}>Impact</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                            Leading growth strategies and portfolio optimization at scale.
                        </p>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
                            <p style={{ marginBottom: '16px' }}>
                                <strong>Fintech:</strong> Delivered onboarding & checkout flows serving 450M+ users.
                            </p>
                            <p style={{ marginBottom: '16px' }}>
                                <strong>Retail (Lowe's):</strong> Senior Engineering Manager leading delivery for customer and store-associate platforms.
                                <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                    <li>Built an <strong>AI-driven automation platform</strong> reducing troubleshooting effort by 80% and tickets by 85%.</li>
                                    <li>Designed <strong>LLM-powered knowledge systems</strong> for store associates.</li>
                                    <li>Implemented <strong>Kafka event-driven workflows</strong> for real-time store operations.</li>
                                </ul>
                            </p>
                            <p>
                                <strong>Healthcare:</strong> Architected distributed systems for community health program management at Hyphen.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <style>{`
                .hero-title {
                    font-size: 4rem;
                    margin-bottom: 24px;
                    font-weight: 800;
                    line-height: 1.1;
                    letter-spacing: -0.02em;
                }
                .hero-subtitle {
                    font-size: 1.25rem;
                    color: var(--text-secondary);
                    max-width: 700px;
                    margin: 0 auto 40px;
                    line-height: 1.6;
                }
                .content-panel {
                    padding: 60px;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .two-col-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                }

                @media (max-width: 768px) {
                    .container { padding-top: 40px !important; }
                    .hero-title { 
                        font-size: 2.2rem; 
                        padding: 0 10px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .content-panel { padding: 30px; }
                    .two-col-grid { grid-template-columns: 1fr; gap: 40px; }
                    .hero-subtitle { font-size: 1rem; padding: 0 15px; }
                }
            `}</style>
        </div>
    );
};

export default Home;
