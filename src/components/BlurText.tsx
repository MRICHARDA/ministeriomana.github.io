import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '@/lib/utils';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  direction?: 'bottom' | 'top';
  by?: 'word' | 'letter';
}

export default function BlurText({
  text,
  className,
  delay = 200,
  direction = 'bottom',
  by = 'word',
}: BlurTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const elements = by === 'word' ? text.split(' ') : text.split('');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  const initialY = direction === 'bottom' ? 50 : -50;
  const overshootY = direction === 'bottom' ? -5 : 5;

  const childVariants = {
    hidden: {
      filter: 'blur(10px)',
      opacity: 0,
      y: initialY,
    },
    visible: {
      filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
      opacity: [0, 0.5, 1],
      y: [initialY, overshootY, 0],
      transition: {
        duration: 0.7, // roughly 0.35s per step
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={cn("flex flex-wrap", className)}
    >
      {elements.map((element, i) => (
        <motion.span
          key={i}
          variants={childVariants as any}
          className={cn("inline-block", by === 'word' && "mr-[0.25em]")}
        >
          {element === ' ' && by === 'letter' ? '\u00A0' : element}
        </motion.span>
      ))}
    </motion.div>
  );
}
