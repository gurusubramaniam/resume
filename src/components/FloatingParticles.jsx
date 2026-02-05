import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingParticles = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Generate random particles
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        // Random usage of Cyan and Purple
        color: Math.random() > 0.5 ? 'var(--accent-cyan)' : 'var(--accent-purple)',
        size: Math.random() * 4 + 1, // 1px to 5px
        initialX: Math.random() * 100, // vw
        initialY: Math.random() * 100, // vh
        duration: Math.random() * 20 + 10, // 10s to 30s
    }));

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: -1
        }}>
            {particles.map((p) => {
                // Calculate distance from mouse for simple repulsion
                // Note: Full physics is heavy, so we use a simple parallax offset
                // based on original position vs mouse position
                const movementFactor = p.size * 2; // Larger particles move more

                return (
                    <motion.div
                        key={p.id}
                        animate={{
                            x: [
                                `calc(${p.initialX}vw - 20px)`,
                                `calc(${p.initialX}vw + 20px)`,
                                `calc(${p.initialX}vw - 20px)`
                            ],
                            y: [
                                `calc(${p.initialY}vh - 20px)`,
                                `calc(${p.initialY}vh + 20px)`,
                                `calc(${p.initialY}vh - 20px)`
                            ],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            position: 'absolute',
                            width: p.size,
                            height: p.size,
                            backgroundColor: p.color,
                            borderRadius: '50%',
                            opacity: 0.3,
                            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                            // React to mouse slightly
                            transform: `translate(${mousePosition.x * 0.02 * movementFactor}px, ${mousePosition.y * 0.02 * movementFactor}px)`
                        }}
                    />
                );
            })}
        </div>
    );
};

export default FloatingParticles;
