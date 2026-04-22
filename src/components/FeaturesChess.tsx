import React from 'react';
import { motion } from 'motion/react';
import misionVideo from '../../Video/GIF_a_Video_Conversión.mp4';
import feImage from '../../Video/WhatsApp Image 2026-04-15 at 2.35.03 AM (3).jpeg';

export default function FeaturesChess() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto flex flex-col items-center">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-20"
      >
        <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
          <span className="text-xs font-medium text-white font-body tracking-wide">Quienes Somos</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Nuestra Misión y Fe.
        </h2>
      </motion.div>

      <div className="flex flex-col gap-24 w-full overflow-hidden">
        {/* Row 1 */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          <div className="flex-1 flex flex-col items-start text-left">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white tracking-tight leading-none mb-6">
              Nuestra Misión
            </h3>
            <p className="text-white/60 font-body font-light text-sm md:text-base mb-8 max-w-md">
              Llegando a personas de todas las edades y trasfondos culturales, promoviendo la fe en nuestro Señor Jesus. Anunciando y enseñando públicamente la palabra.
            </p>
            <button className="liquid-glass-strong rounded-full px-6 py-2.5 text-white font-medium text-sm transition-transform hover:scale-105">
              Conocer más
            </button>
          </div>
          <div className="flex-1 w-full relative">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center p-2">
              <video 
                src={misionVideo} 
                className="w-full h-full object-cover rounded-xl"
                autoPlay 
                loop 
                muted 
                playsInline
              />
            </div>
          </div>
        </motion.div>

        {/* Row 2 */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20"
        >
          <div className="flex-1 flex flex-col items-start text-left">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white tracking-tight leading-none mb-6">
              Declaración de Fe
            </h3>
            <p className="text-white/60 font-body font-light text-sm md:text-base mb-8 max-w-md">
              Todo lo que es verdadero, todo lo honesto, todo lo justo, todo lo puro, todo lo amable; así pensaremos. La palabra incorruptible dará fruto al ciento por uno en nuestras vidas.
            </p>
            <button className="liquid-glass-strong rounded-full px-6 py-2.5 text-white font-medium text-sm transition-transform hover:scale-105">
              Nuestros Valores
            </button>
          </div>
          <div className="flex-1 w-full relative">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center p-2">
              <img 
                src={feImage} 
                alt="Fe" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}
