import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import "./Navigation.css";
import logo from '../assets/img/logo/koltech_logo_original.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    // Intersection Observer to detect active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[id="about"], [id="agenda"], [id="location"], [id="partners"], [id="registration"]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: 'O Wydarzeniu', href: '#about' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Lokacja', href: '#location' },
    { name: 'Partnerzy', href: '#partners' },
    { name: 'Rejestracja', href: '#registration' }
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-inner">

          {/* Logo */}
          <div className="nav-logo" onClick={()=>{window.scrollTo(0,0)}}>
            <img src={logo} alt="KOLTECH" />
            {/*<h3>Koltech Forum 2025</h3>*/}
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="nav-mobile">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-mobile-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}