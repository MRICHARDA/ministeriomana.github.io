import { motion } from 'motion/react';
import { Zap, Palette, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Modelo D12",
    description: "Discipulamos a 12 parejas para crear 'Conexiones' y extender el mensaje de salvación a más familias."
  },
  {
    icon: Palette,
    title: "Discipulado",
    description: "Estructurados conforme al discipulado mayor, impartiendo enseñanzas bíblicas para fortalecer el conocimiento."
  },
  {
    icon: BarChart3,
    title: "Conexiones",
    description: "Grupos pequeños con los cuales compartimos sobre la palabra de Dios, oramos y escuchamos enseñanzas edificantes."
  },
  {
    icon: Shield,
    title: "Academias",
    description: "Aprende acerca de la Biblia y recibe capacitación en liderazgo y comunicación. Programas de mentoría para crecer tu relación con Dios."
  }
];

export default function FeaturesGrid() {
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
          <span className="text-xs font-medium text-white font-body tracking-wide">Estructura</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Como puedes formar parte de esta gran iglesia.
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
      >
        {features.map((feature, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="liquid-glass rounded-2xl p-8 flex flex-col items-start text-left transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default"
          >
            <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <feature.icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-body font-medium text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-sm font-body font-light text-white/60 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
      
    </section>
  );
}
