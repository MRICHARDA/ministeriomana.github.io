import { motion } from 'motion/react';
import HlsVideo from './HlsVideo';

export default function StartSection() {
  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center py-32 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <HlsVideo src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8" />
      </div>

      {/* Gradient Fades */}
      <div className="absolute top-0 left-0 w-full h-[200px] pointer-events-none z-0" style={{ background: 'linear-gradient(to bottom, hsl(var(--background)), transparent)' }} />
      <div className="absolute bottom-0 left-0 w-full h-[200px] pointer-events-none z-0" style={{ background: 'linear-gradient(to top, hsl(var(--background)), transparent)' }} />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
        className="z-10 flex flex-col items-center text-center px-6 max-w-3xl"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-full px-3.5 py-1 mb-8"
        >
          <span className="text-xs font-medium text-white font-body tracking-wide">Visión</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-6"
        >
          Amor, Esperanza y Redención.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white/60 font-body font-light text-sm md:text-base max-w-lg mx-auto mb-10"
        >
          Buscamos difundir el amor, la esperanza y la redención a través de mensajes inspiradores, enseñanzas bíblicas y acciones concretas.
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass-strong rounded-full px-6 py-3 text-white font-medium text-sm transition-transform hover:scale-105"
        >
          Únete a Nosotros
        </motion.button>
      </motion.div>
    </section>
  );
}
