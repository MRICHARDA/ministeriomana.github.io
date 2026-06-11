import { motion } from 'motion/react';
import BlurText from './BlurText';

import carrusel1 from '../../img/carrusel_1.jpg';
import carrusel2 from '../../img/carrusel_2.jpg';
import carrusel3 from '../../img/carrusel_3.jpg';
import carrusel4 from '../../img/carrusel_4.jpg';
import carrusel5 from '../../img/carrusel_5.jpg';
import carrusel6 from '../../img/carrusel_6.jpg';

const photos = [
  {
    id: 1,
    url: carrusel1,
    alt: "Nuestra Comunidad",
    className: "row-span-2"
  },
  {
    id: 2,
    url: carrusel2,
    alt: "Alabanza",
    className: "row-span-1"
  },
  {
    id: 3,
    url: carrusel3,
    alt: "Enseñanza",
    className: "row-span-2"
  },
  {
    id: 4,
    url: carrusel4,
    alt: "Momentos Especiales",
    className: "row-span-1"
  },
  {
    id: 5,
    url: carrusel5,
    alt: "Celebración",
    className: "row-span-2"
  },
  {
    id: 6,
    url: carrusel6,
    alt: "Familia Maná",
    className: "row-span-1"
  }
];

export default function PhotoGallery() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-background relative overflow-hidden flex flex-col items-center">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-16 max-w-2xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-full px-4 py-1.5 mb-6"
        >
          <span className="text-white/60 text-xs font-body uppercase tracking-widest">Nuestra Familia</span>
        </motion.div>
        <BlurText
          text="Momentos Inolvidables"
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-tight justify-center"
          delay={100}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/60 font-body mt-6"
        >
          Un vistazo a nuestra comunidad, servicios y el impacto que Dios está teniendo en la vida de cada persona.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="w-full max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer liquid-glass-panel border-white/10 p-2"
          >
            <div className="relative overflow-hidden rounded-xl h-full w-full">
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-auto min-h-[250px] object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-heading italic text-2xl tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {photo.alt}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
