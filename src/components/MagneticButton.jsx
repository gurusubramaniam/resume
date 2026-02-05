import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const MagneticButton = ({ children, className = "", onClick, href }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        // Calculate distance from center
        const x = (clientX - (left + width / 2)) * 0.35; // Multiply by 0.35 for magnetic strength
        const y = (clientY - (top + height / 2)) * 0.35;

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const springConfig = { type: "spring", stiffness: 150, damping: 15, mass: 0.1 };

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            ref={ref}
            href={href}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={springConfig}
            className={className}
            style={{
                display: 'inline-block',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 10
            }}
            download={href?.endsWith('.pdf') ? true : undefined}
        >
            {children}
        </Component>
    );
};

export default MagneticButton;
