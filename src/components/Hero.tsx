import { motion } from 'motion/react';
import BlurText from './BlurText';
import { ArrowUpRight, Play } from 'lucide-react';
import heroVideo from '../../Video/Imagen_a_Video_Generado.mp4';
import logo from '../../img/Logo_Mana.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden h-[1000px] w-full flex flex-col items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[1.35] origin-center z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-background/40 z-0" />
      <div
        className="absolute bottom-0 w-full z-0 h-[300px] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }}
      />

      {/* Content */}
      <div className="z-10 flex flex-col items-center w-full px-6 text-center" style={{ paddingTop: '120px' }}>

        {/* Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-full px-1 py-1 flex items-center gap-3 mb-8"
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">Maná</span>
          <span className="text-white text-sm font-medium pr-3 font-body">Seguiremos Avanzando.</span>
        </motion.div>
        {/* Subtext */}
        <motion.img
          src={logo}
          alt="Logo Ministerios Maná"
          className="h-40 md:h-56 lg:h-72 w-auto object-contain drop-shadow-2xl mb-8"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        />

        {/* Heading */}
        <BlurText
          text="Ministerios de Restauración Maná"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] max-w-4xl tracking-[-4px] justify-center mb-8"
          delay={100}
        />

        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-6"
        >
          <span className="bg-white/10 border border-white/20 text-white rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-sm shadow-sm">
            Organización Sin Ánimo de Lucro
          </span>
        </motion.div>

        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm md:text-base text-white font-body font-light leading-tight max-w-md mb-10"
        >
          Anunciando y enseñando públicamente la palabra del reino de Dios, tanto en Guatemala como en las naciones.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#quienes-somos" className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-white font-medium text-sm transition-transform hover:scale-105">
            Conócenos
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button className="text-white flex items-center gap-2 font-medium text-sm transition-opacity hover:opacity-80">
            <span className="bg-white/10 rounded-full p-2 flex items-center justify-center">
              <Play className="w-3 h-3 fill-white" />
            </span>
            Ver Transmisión
          </button>
        </motion.div>
      </div>

      {/* Partners Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-auto pb-12 pt-16 z-10 flex flex-col items-center w-full"
      >
        <div className="liquid-glass rounded-full px-4 py-1.5 mb-8">
          <span className="text-white/60 text-xs font-body uppercase tracking-widest">Nuestra Estructura</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 px-6">
          {['D12', 'Discipulado', 'Conexiones', 'Academias', 'Avanzadas'].map(partner => (
            <span key={partner} className="text-2xl md:text-3xl font-heading italic text-white/80">
              {partner}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
