import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-primary border-b-2 border-primary pb-1 font-label-sm uppercase tracking-[0.1em] text-label-sm"
      : "text-on-surface-variant hover:text-primary transition-colors font-label-sm uppercase tracking-[0.1em] text-label-sm";

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-surface/95 backdrop-blur-md shadow-sm border-outline-variant/30' : 'bg-surface/90 backdrop-blur-md border-outline-variant/20'}`} id="top-nav">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop h-20">
        <NavLink className="font-headline-md text-headline-md font-medium text-primary tracking-tight" to="/">
          Amartha View
        </NavLink>
        <div className="hidden md:flex gap-10 items-center">
          <NavLink className={navClass} to="/" end>Home</NavLink>
          <NavLink className={navClass} to="/about">About</NavLink>
          <NavLink className={navClass} to="/fasilitas">Fasilitas</NavLink>
          <NavLink className={navClass} to="/tipe-unit">Tipe Unit</NavLink>
          <NavLink className={navClass} to="/kontak">Kontak</NavLink>
        </div>
        <button className="bg-primary text-on-primary px-8 py-3 font-label-sm uppercase tracking-[0.1em] text-label-sm cursor-pointer transition-all active:scale-95 hover:bg-primary/90">
          Book Now
        </button>
      </div>
    </nav>
  );
}
