import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';

const SpotlightCard = ({ children, className = "", style = {}, delay = 0, ...props }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const spotlightX = useMotionValue(150);
    const spotlightY = useMotionValue(150);
    const spotlightOpacity = useMotionValue(0);

    // Spring physics for smooth tilt
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    // Map mouse position to rotation degrees
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["9deg", "-9deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-9deg", "9deg"]);

    const [isHovering, setIsHovering] = useState(false);

    // Random wandering animation
    useEffect(() => {
        if (isHovering) return;

        const moveSpotlight = () => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            // Pick a random target within the card
            const targetX = Math.random() * rect.width;
            const targetY = Math.random() * rect.height;
            const duration = 2 + Math.random() * 2; // Random duration 2-4s

            // Animate to new position
            animate(spotlightX, targetX, { duration: duration, ease: "easeInOut" });
            animate(spotlightY, targetY, { duration: duration, ease: "easeInOut", onComplete: moveSpotlight });

            // Ensure opacity is on for ambient effect
            animate(spotlightOpacity, 0.5, { duration: 1 });
        };

        // Start wandering
        moveSpotlight();

        return () => {
            spotlightX.stop();
            spotlightY.stop();
        };
    }, [isHovering, spotlightX, spotlightY]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        setIsHovering(true);

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);

        // Override automatic animation
        spotlightX.set(mouseX);
        spotlightY.set(mouseY);
        spotlightOpacity.set(1);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        x.set(0);
        y.set(0);
        // Let the useEffect take over again
    };

    return (
        <motion.div
            ref={ref}
            // Default initial/animate if not provided via props
            initial={props.initial || { opacity: 0, y: 20 }}
            animate={props.animate || { opacity: 1, y: 0 }}
            transition={{ delay: delay, duration: 0.5, ...props.transition }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                ...style
            }}
            className={`glass-panel relative overflow-hidden ${className}`}
        >
            {/* Spotlight Overlay */}
            <motion.div
                style={{
                    pointerEvents: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 10,
                    background: useTransform(
                        [spotlightX, spotlightY, spotlightOpacity],
                        ([inputX, inputY, opacity]) => `radial-gradient(600px circle at ${inputX}px ${inputY}px, rgba(6, 182, 212, 0.15), transparent 40%)`
                    ),
                    opacity: spotlightOpacity,
                }}
            />

            {/* Border Highlight (sharper gradient) */}
            <motion.div
                style={{
                    pointerEvents: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 11,
                    background: useTransform(
                        [spotlightX, spotlightY, spotlightOpacity],
                        ([inputX, inputY, opacity]) => `radial-gradient(400px circle at ${inputX}px ${inputY}px, rgba(255, 255, 255, 0.2), transparent 40%)`
                    ),
                    opacity: spotlightOpacity,
                    mixBlendMode: "overlay"
                }}
            />

            <div style={{ transform: "translateZ(30px)", position: 'relative', zIndex: 1, height: '100%' }}>
                {children}
            </div>
        </motion.div>
    );
};

export default SpotlightCard;
