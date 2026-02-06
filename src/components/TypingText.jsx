import { motion } from 'framer-motion';

const TypingText = ({ text, className = "" }) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const wordVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            className={className}
            variants={container}
            initial="hidden"
            animate="visible"
            style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}
        >
            {words.map((word, index) => (
                <span key={index} style={{ display: 'inline-flex' }}>
                    <motion.span
                        variants={wordVariant}
                        style={{ display: 'inline-block' }}
                    >
                        {Array.from(word).map((char, charIndex) => (
                            <motion.span variants={child} key={charIndex} style={{ display: 'inline-block' }}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.span>
                    {/* Add space between words */}
                    {index < words.length - 1 && (
                        <span style={{ whiteSpace: 'pre' }}> </span>
                    )}
                </span>
            ))}
        </motion.span>
    );
};

export default TypingText;
