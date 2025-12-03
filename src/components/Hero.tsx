import { Calendar, MapPin } from 'lucide-react';
import "./Hero.css";

export function Hero() {
  return (
    <div className="hero">
      {/* Background */}
      <div className="hero-bg">
        {/* Optional image placeholder */}
        {/* <img src="..." alt="" className="hero-img" /> */}
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-inner">
          <h1 className="hero-title">KOLTECH FORUM 2025</h1>

          <h2 className="hero-subtitle">
            Robotyzacja - cyfrowa ciągłość w biznesie
          </h2>

          <div className="hero-info">
            <div className="hero-info-item">
              <Calendar className="icon" />
              <span>październik 23, 2025</span>
            </div>

            <div className="hero-divider"></div>

            <div className="hero-info-item">
              <MapPin className="icon" />
              <span>siedziba firmy FANUC, Wrocław</span>
            </div>
          </div>

          <a href="#registration" className="hero-button">
            Rejestruj się teraz
          </a>
        </div>
      </div>
    </div>
  );
}
