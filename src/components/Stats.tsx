import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';
import HlsVideo from './HlsVideo';

const stats = [
  { value: 2012, label: "Año de Fundación", suffix: "" },
  { value: 3, label: "Países Alcanzados", suffix: "" },
  { value: 12, label: "Parejas en D12", suffix: "" },
  { value: 100, label: "Fe en Cristo", suffix: "%" }
];

function Counter({ from, to, suffix, duration = 2 }: { from: number, to: number, suffix: string, duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView, suffix]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center py-32 overflow-hidden">
      {/* Background Video (Desaturated) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <HlsVideo 
          src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8" 
          className="saturate-0 opacity-40"
        />
      </div>

      {/* Gradient Fades */}
      <div className="absolute top-0 left-0 w-full h-[200px] pointer-events-none z-0" style={{ background: 'linear-gradient(to bottom, hsl(var(--background)), transparent)' }} />
      <div className="absolute bottom-0 left-0 w-full h-[200px] pointer-events-none z-0" style={{ background: 'linear-gradient(to top, hsl(var(--background)), transparent)' }} />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="z-10 w-full max-w-5xl px-6"
      >
        <div className="liquid-glass rounded-3xl p-12 md:p-16 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start">
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-2">
                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-white/60 font-body font-light text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
