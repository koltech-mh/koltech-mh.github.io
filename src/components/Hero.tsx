import { Calendar, MapPin } from 'lucide-react';
import "./Hero.css";

export function Hero() {
  return (
    <div className="hero">
      {/* Background */}
      <div className="hero-bg">

        {/* <img src="..." alt="" className="hero-img" /> */}
        <div className="hero-overlay"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0}}>
          <defs>
            <linearGradient id="fade" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stop-color="#00d4ff" stop-opacity="0.6"/>
              <stop offset="70%" stop-color="#00d4ff" stop-opacity="0.15"/>
              <stop offset="100%" stop-color="#00d4ff" stop-opacity="0"/>
            </linearGradient>
          </defs>

          <g fill="none" stroke="url(#fade)" stroke-width="2" transform="translate(0, -100)">
            <path d="M0,100 C300,700 700,850 1200,700"/>
            <path d="M0,160 C280,660 720,830 1200,680"/>
            <path d="M0,120 C260,620 740,810 1200,660"/>
            <path d="M0,180 C240,580 760,790 1200,640"/>
            <path d="M0,140 C220,540 780,770 1200,620"/>
            <path d="M0,100 C200,500 800,750 1200,600"/>
            <path d="M0,160 C180,460 820,730 1200,580"/>
            <path d="M0,120 C160,420 840,710 1200,560"/>
            <path d="M0,180 C140,380 860,690 1200,540"/>
          </g>


        </svg>
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
