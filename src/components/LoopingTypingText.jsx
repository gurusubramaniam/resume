import { useState, useEffect } from 'react';

const LoopingTypingText = ({ texts = ["Guru"], className = "" }) => {
    // Handle both string and array inputs
    const textArray = Array.isArray(texts) ? texts : [texts];

    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopIndex, setLoopIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    const currentText = textArray[textIndex];

    useEffect(() => {
        const typingSpeed = isDeleting ? 80 : 120;
        const pauseTime = isDeleting ? 500 : 2000;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing forward
                if (loopIndex < currentText.length) {
                    setDisplayText(currentText.substring(0, loopIndex + 1));
                    setLoopIndex(loopIndex + 1);
                } else {
                    // Finished typing, pause then start deleting
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                // Deleting backward
                if (loopIndex > 0) {
                    setDisplayText(currentText.substring(0, loopIndex - 1));
                    setLoopIndex(loopIndex - 1);
                } else {
                    // Finished deleting, move to next text
                    setIsDeleting(false);
                    setTextIndex((textIndex + 1) % textArray.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [loopIndex, isDeleting, currentText, textIndex, textArray.length]);

    return (
        <span className={className}>
            {displayText}
            <span style={{
                opacity: 0.7,
                animation: 'blink 1s infinite',
                marginLeft: '2px'
            }}>|</span>
            <style>{`
        @keyframes blink {
          0%, 49% { opacity: 0.7; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
        </span>
    );
};

export default LoopingTypingText;
