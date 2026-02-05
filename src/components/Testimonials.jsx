import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { FaQuoteLeft, FaLinkedin } from 'react-icons/fa';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: "Dinesh Damodharan",
            role: "SVP Engineering @ Mastercard | ex-PayPal",
            text: "I have known Guru for a long time, starting as a young engineer and through his career progression. I had the opportunity to manage him when I was leading the Shopping organization at PayPal, where he was managing the web experiences team and the Loyalty product. He is a fantastic engineering lead on top of the latest technology and has delivered critical platform transformation at PayPal, like Onboarding experiences, Shopping Loyalty program at scale. He is focused on the customers and gets things done."
        },
        {
            name: "Rebecca Nguyen",
            role: "Chief of Staff at The RADZ Group",
            text: "I am delighted to recommend Guru as an engineering leader and architect. He is a hardworking and empathetic manager who cares deeply for his team. He works tirelessly to manage burnout and motivation levels so the team can be successful. Guru is also a reliable engineering partner. When he says he will do something, he will. Guru is one of the hardest working, self-aware, engineering leaders I've worked with. He would be an asset to any organization that values teamwork, delivering excellent results, and empathy."
        },
        {
            name: "Ramya Chandrasekaran",
            role: "Sr Principal Product Manager @ Gen | ex-PayPal, Google",
            text: "Guru was one of the first Software Engineers I worked with at PayPal when I joined as a Product Manager. Guru was the main technical lead behind the consumer onboarding platform developing innovative solutions to challenging problems at scale. He is very approachable and works effectively with the product team to collaborate and innovate in a timely manner. Guru is highly talented and would be an incredible asset to any team he joins."
        },
        {
            name: "Ruth Wang",
            role: "Product GM | ex-PayPal, eBay, Snappy | Harvard MBA",
            text: "I worked with Guru when he was the tech lead for the consumer onboarding development team. He was one of the strongest tech leads I worked with at PayPal with a positive, humble altitude, strong technical acumen and growth mindset. Other engineers turn to him for technical advice and he's a pleasure to work with as a cross-functional partner. I would highly recommend him!"
        },
        {
            name: "Matheus Silveira",
            role: "FullStack Product Manager Leader | Business Analysis | Fintech Services",
            text: "Guru possesses a blend of technical expertise and customer-focused mindset, allowing him to deliver valued technology solutions. He excels in bridging the gap between engineering and business, and is equally comfortable communicating with executives and technical teams. His versatile skillset and positive attitude make him a strong contender for various roles."
        },
        {
            name: "Everett Quebral",
            role: "Innovative Software Engineering Leader | UX Platform Specialist | ex-PayPal, ex-Yahoo",
            text: "Worked with Guru for several projects on web and mobile development. He is very passionate with what he does and delivers with extreme quality. He's a very good person with a very humble heart and very much willing to learn. Even on tight deadlines Guru was able to accomplish his tasks. He maintains good relationship with people whom he worked with and I'm one of those lucky people. I highly recommend Guru as a very good software engineer!!!"
        },
        {
            name: "Harry Hantman",
            role: "Growth Lead @ Fruitful",
            text: "I worked directly with Guru on the Greenlight website team while I was a PM for web. He was a great manager and team lead in his tenure, always seeking to advance the goals of the company while balancing work across the team. He is a clear and consistent communicator. Guru understood where folks strengths were and leveraged them to the best work. I'd recommend Guru as an engineering leader."
        },
        {
            name: "Matt Edelman",
            role: "Sr Web Platform Engineering Manager at PayPal",
            text: "Guru and I worked together on several mobile web projects. Guru was instrumental in the implementation as well as bug fixing and release support on those projects. His UI Engineering skills and communication skills make him an integral part of any mobile web development project he is on."
        },
        {
            name: "Ganimat Brah",
            role: "Product @ PayPal",
            text: "I had the pleasure of working with Guru at PayPal where we worked on multiple initiatives. Guru is one of a kind engineering leader who not only focuses on launching robust products but also never loses sight of customer-centricity. He truly believes in growing as one team and has gone above and beyond to invest in his team's growth and success. Guru your domain knowledge has really helped accelerate go-to-market launch timelines and helped develop holistic products."
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [testimonials.length]);

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
                        What People <span className="text-gradient">Say</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        Recommendations from colleagues and partners
                    </p>
                </motion.div>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', minHeight: '350px' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <SpotlightCard
                                style={{
                                    padding: '48px',
                                    background: 'rgba(15, 23, 42, 0.6)'
                                }}
                            >
                                <FaQuoteLeft style={{
                                    fontSize: '2.5rem',
                                    color: 'var(--accent-cyan)',
                                    opacity: 0.3,
                                    marginBottom: '24px'
                                }} />

                                <p style={{
                                    fontSize: '1.2rem',
                                    lineHeight: '1.8',
                                    marginBottom: '32px',
                                    fontStyle: 'italic',
                                    color: 'var(--text-primary)'
                                }}>
                                    "{testimonials[currentIndex].text}"
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <FaLinkedin size={24} />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                                            {testimonials[currentIndex].name}
                                        </p>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                            {testimonials[currentIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    </AnimatePresence>

                    {/* Indicators */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '12px',
                        marginTop: '32px'
                    }}>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                style={{
                                    width: index === currentIndex ? '32px' : '12px',
                                    height: '12px',
                                    borderRadius: '6px',
                                    background: index === currentIndex
                                        ? 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))'
                                        : 'rgba(255, 255, 255, 0.2)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
