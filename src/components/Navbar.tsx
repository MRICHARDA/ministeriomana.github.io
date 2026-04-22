import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import logo from '../../img/Logo_Mana.png';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between pointer-events-none">
      {/* Left: Logo */}
      <div className="pointer-events-auto flex items-center">
        <img src={logo} alt="Ministerios Maná" className="h-12 md:h-14 w-auto object-contain drop-shadow-md" />
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex pointer-events-auto">
        <div className="liquid-glass rounded-full px-1.5 py-1 flex items-center gap-1">
          {["Inicio", "Quienes Somos", "Servicios", "Equipo Pastoral", "Academia"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contactanos"
            className="ml-2 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium flex items-center gap-1 hover:bg-white/90 transition-colors"
          >
            Contáctanos
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
