import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import "./Navigation.css";
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'O Wydarzeniu', href: '#about' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Partnerzy', href: '#partners' },
    { name: 'Rejestracja', href: '#registration' }
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-inner">

          {/* Logo */}
          <div className="nav-logo">
            <h3>Koltech Forum 2025</h3>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
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
                className="nav-mobile-link"
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