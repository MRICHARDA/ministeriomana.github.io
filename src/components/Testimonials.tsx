import { motion } from 'motion/react';
import { Quote, Facebook } from 'lucide-react';

const testimonials = [
  {
    quote: "Pastor desde 2012 fundador de Ministerios Mana en Guatemala, la cual se ha extendido hacia México y El Salvador.",
    name: "Christian Marroquin",
    role: "Pastor General",
    socialLink: "https://www.facebook.com/cmarroquinvilleda?locale=es_LA"
  },
  {
    quote: "Pastora desde 2012, cofundadora de Ministerios Maná en Guatemala, es la esposa del Pastor Christian y Guia espiritual de la iglesia.",
    name: "Maritza de Marroquin",
    role: "Pastora General",
    socialLink: "https://www.facebook.com/profile.php?id=100060847284886&locale=es_LA"
  },
  {
    quote: "Pastor, desde 2012 encargado de iglesias hijas en el extranjero, ministro de alabanza y coordinador de actividades.",
    name: "Antony Marroquin",
    role: "Pastor"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto flex flex-col items-center">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
          <span className="text-xs font-medium text-white font-body tracking-wide">Equipo Pastoral</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Guías de nuestra iglesia.
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
      >
        {testimonials.map((testimonial, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="liquid-glass rounded-2xl p-8 flex flex-col justify-between min-h-[250px] relative overflow-hidden cursor-default transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <Quote className="absolute top-6 right-6 w-24 h-24 text-white/5 rotate-12 pointer-events-none" />
            <p className="text-white/80 font-body font-light text-lg md:text-xl italic leading-relaxed mb-8 relative z-10">
              "{testimonial.quote}"
            </p>
            <div className="flex justify-between items-end relative z-10">
              <div className="flex flex-col">
                <span className="text-white font-body font-medium text-sm">
                  {testimonial.name}
                </span>
                <span className="text-white/50 font-body font-light text-xs">
                  {testimonial.role}
                </span>
              </div>
              {testimonial.socialLink && (
                <a href={testimonial.socialLink} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#1877F2] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
    </section>
  );
}
