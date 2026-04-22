import { motion } from 'motion/react';
import { BookOpen, Map, Users, Star } from 'lucide-react';

const bimestres = [
  {
    icon: BookOpen,
    title: "Primer Bimestre",
    subtitle: "Principios del Creyente",
    topics: [
      "Odres Nuevos",
      "Arrepentimiento de Obras Muertas",
      "Fe En Dios",
      "Mi Posición En Cristo",
      "La Oración Transformadora"
    ]
  },
  {
    icon: Map,
    title: "Segundo Bimestre",
    subtitle: "Principios de la Visión",
    topics: [
      "Entendiendo la Visión",
      "El Carácter de un Siervo",
      "Fundamentos del Liderazgo Espiritual",
      "Compromiso y Disciplina",
      "El Valor de la Familia"
    ]
  },
  {
    icon: Users,
    title: "Tercer Bimestre",
    subtitle: "Principios del Liderazgo",
    topics: [
      "Formando el Carácter",
      "Liderazgo Transformacional",
      "Resolución de Conflictos",
      "Mentoria y Discipulado",
      "Trabajo en Equipo Ministerial"
    ]
  },
  {
    icon: Star,
    title: "Cuarto Bimestre",
    subtitle: "Principios del Éxito",
    topics: [
      "Éxito Integral",
      "Mayordomía Financiera",
      "Llamado y Propósito",
      "Impactando la Sociedad",
      "Legado Espiritual"
    ]
  }
];

export default function Academia() {
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
          <span className="text-xs font-medium text-white font-body tracking-wide">Academia</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-4">
          Nuestra Ruta de Enseñanza.
        </h2>
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-2xl">
          Estructurados conforme al discipulado mayor, impartimos enseñanzas bíblicas organizadas en cuatro bimestres para fortalecer tu conocimiento y crecimiento espiritual.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
      >
        {bimestres.map((bimestre, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="liquid-glass rounded-2xl p-8 flex flex-col items-start text-left h-full transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default"
          >
            <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <bimestre.icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-sm font-body font-light text-white/60 mb-1 uppercase tracking-wider">
              {bimestre.title}
            </h3>
            <h4 className="text-xl font-heading italic text-white mb-6 leading-none">
              {bimestre.subtitle}
            </h4>
            <ul className="flex flex-col gap-3 mt-auto w-full">
              {bimestre.topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-2 text-white/70 font-body text-sm font-light">
                  <div className="w-1 h-1 rounded-full bg-white/40 mt-2 shrink-0" />
                  <span className="leading-tight">{topic}</span>
                </li>
              ))}
              <li className="flex items-start gap-2 text-white/40 font-body text-xs italic mt-2">
                <span>Y muchos temas más...</span>
              </li>
            </ul>
          </motion.div>
        ))}
      </motion.div>
      
    </section>
  );
}
