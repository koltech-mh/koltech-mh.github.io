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
    const sections = document.querySelectorAll('[id="about"], [id="agenda"], [id="location"], [id="partners"], [id="registration"], [id="contact"]');
    sections.forEach((section) => observer.observe(section));

    // Force activation on scroll when near top or bottom
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollBottom = scrollTop + winHeight;

      console.log(scrollTop);
      if (scrollTop < 100) {
        setActiveSection('');
      }
      else if (docHeight - scrollBottom < 100) {
        setActiveSection('contact');
      }
    };
    

    window.addEventListener('scroll', handleScroll);
    

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'O Wydarzeniu', href: '#about' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Lokacja', href: '#location' },
    { name: 'Partnerzy', href: '#partners' },
    { name: 'Rejestracja', href: '#registration' },
    { name: 'Kontakt', href: '#contact' }
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