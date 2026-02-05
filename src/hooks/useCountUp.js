import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useCountUp = (end, duration = 2, suffix = '') => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        // Extract number from string if needed (simple parse)
        const endNum = parseInt(end.toString().replace(/\D/g, ''));
        if (isNaN(endNum)) return;

        const incrementTime = (duration / endNum) * 1000;

        // For large numbers, step appropriately
        let current = 0;
        const step = Math.ceil(endNum / (duration * 60)); // 60fps

        const timer = setInterval(() => {
            current += step;
            if (current >= endNum) {
                setCount(endNum);
                clearInterval(timer);
            } else {
                setCount(current);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration, isInView]);

    return { ref, value: count + suffix };
};
