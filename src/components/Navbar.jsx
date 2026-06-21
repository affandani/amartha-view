import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    `relative py-1 font-label-sm uppercase tracking-[0.1em] text-label-sm transition-colors duration-300 group ${
      isActive ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-primary'
    }`;

  const mobileNavClass = ({ isActive }) =>
    `block py-3.5 px-2 font-label-sm uppercase tracking-[0.1em] text-label-sm transition-all duration-300 border-b border-outline-variant/10 rounded-md ${
      isActive ? 'text-primary font-bold bg-primary/5 pl-4' : 'text-on-surface-variant hover:text-primary hover:pl-4'
    }`;

  const renderLink = (label, isActive) => (
    <>
      {label}
      <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left transition-transform duration-300 ease-out ${
        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`} />
    </>
  );

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-surface/95 backdrop-blur-md shadow-sm border-outline-variant/30' : 'bg-surface/90 backdrop-blur-md border-outline-variant/20'}`} id="top-nav">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20 relative">
        <NavLink className="inline-block transition-transform hover:scale-[1.02] active:scale-[0.98]" to="/" onClick={() => setMenuOpen(false)}>
          <img 
            src="/logo.svg" 
            alt="Amartha View Logo" 
            className="h-12 w-auto object-contain"
          />
        </NavLink>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center">
          <NavLink className={navClass} to="/" end>
            {({ isActive }) => renderLink('Home', isActive)}
          </NavLink>
          <NavLink className={navClass} to="/about">
            {({ isActive }) => renderLink('About', isActive)}
          </NavLink>
          <NavLink className={navClass} to="/fasilitas">
            {({ isActive }) => renderLink('Fasilitas', isActive)}
          </NavLink>
          <NavLink className={navClass} to="/tipe-unit">
            {({ isActive }) => renderLink('Tipe Unit', isActive)}
          </NavLink>
          <NavLink className={navClass} to="/kontak">
            {({ isActive }) => renderLink('Kontak', isActive)}
          </NavLink>
        </div>

        {/* Desktop CTA Button */}
        <a 
          href="https://wa.me/6287894473388" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex bg-primary text-on-primary px-8 py-3 font-label-sm uppercase tracking-[0.1em] text-label-sm cursor-pointer transition-all duration-300 active:scale-95 hover:bg-primary/95 hover:shadow-md hover:translate-y-[-1px] rounded-lg font-semibold items-center justify-center"
        >
          Book Now
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none z-50 cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-primary absolute transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
          <span className={`block w-6 h-0.5 bg-primary absolute transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primary absolute transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
        </button>

        {/* Mobile Dropdown Menu */}
        <div className={`absolute top-20 left-0 w-full bg-surface/98 backdrop-blur-md border-b border-outline-variant/20 shadow-lg flex flex-col p-6 space-y-3 md:hidden transition-all duration-300 ease-in-out origin-top ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <NavLink onClick={() => setMenuOpen(false)} className={mobileNavClass} to="/" end>
            Home
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className={mobileNavClass} to="/about">
            About
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className={mobileNavClass} to="/fasilitas">
            Fasilitas
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className={mobileNavClass} to="/tipe-unit">
            Tipe Unit
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className={mobileNavClass} to="/kontak">
            Kontak
          </NavLink>
          <a 
            href="https://wa.me/6287894473388" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="bg-primary text-on-primary w-full py-4 font-label-sm uppercase tracking-[0.1em] text-label-sm rounded-lg font-semibold flex items-center justify-center hover:bg-primary/95 transition-all active:scale-95 mt-4 shadow-md"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
