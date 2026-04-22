import HlsVideo from './HlsVideo';

export default function CtaFooter() {
  return (
    <section className="relative w-full min-h-[800px] flex flex-col items-center justify-end overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <HlsVideo 
          src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8" 
          className="opacity-60"
        />
      </div>

      {/* Gradient Fades */}
      <div className="absolute top-0 left-0 w-full h-[200px] pointer-events-none z-0" style={{ background: 'linear-gradient(to bottom, hsl(var(--background)), transparent)' }} />
      <div className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none z-0" style={{ background: 'linear-gradient(to top, hsl(var(--background)), transparent)' }} />

      {/* Content */}
      <div className="z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl pb-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] mb-6">
          Queremos Conocerte.
        </h2>
        
        <p className="text-white/80 font-body text-base md:text-lg max-w-2xl mx-auto mb-4">
          Será un gusto atenderte y conocerte un poco más. Si tienes alguna duda queremos saberla, estamos para servirte en cualquier momento porque eres un hijo de Dios amado por Él.
        </p>

        <p className="text-white/50 font-body font-light text-sm md:text-base max-w-xl mx-auto mb-10">
          Podemos invitarte a una conexión o servicio, déjanos tu correo para darte una invitación personal a nuestra iglesia. Queremos atenderte como lo mereces.
        </p>
        
        <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg mb-32" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Tu correo electrónico..." 
            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors font-body text-sm"
            required
          />
          <button type="submit" className="liquid-glass-strong shrink-0 rounded-full px-8 py-3.5 text-white font-medium text-sm transition-transform hover:scale-105">
            Contactar
          </button>
        </form>

        {/* Footer Bar */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-body">
            &copy; 2026 Ministerios de Restauración Maná. Diseñado por Ing. Marroquin.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors text-xs font-body">Privacidad</a>
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors text-xs font-body">Términos</a>
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors text-xs font-body">Contacto</a>
          </div>
        </div>
      </div>
    </section>
  );
}
