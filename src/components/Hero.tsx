import { Calendar, MapPin } from 'lucide-react';
import "./Hero.css";

export function Hero() {
  return (
    <div className="hero">
      {/* Background */}
      <div className="hero-bg">

        {/* <img src="..." alt="" className="hero-img" /> */}

        <div className="hero-underlay"></div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0}}>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#00a8cc" stopOpacity="0.3"/>
            </linearGradient>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0099bb" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.1"/>
            </linearGradient>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
            </filter>
            <filter id="blurLight">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
            </filter>
          </defs>
          
          {/* Large flowing curves */}
          <path d="M0,600 Q300,400 600,500 T1200,450" stroke="url(#grad1)" strokeWidth="3" fill="none" />
          <path transform="translate(0, -50)" d="M0,700 Q400,500 800,650 T1200,600" stroke="url(#grad2)" strokeWidth="2" fill="none" filter="url(#blur)"/>
          
          {/* Accent diagonal lines */}
          <line x1="0" y1="200" x2="1200" y2="400" stroke="url(#grad1)" strokeWidth="1.5" opacity="0.5" filter="url(#blur)"/>
          <line x1="0" y1="100" x2="1200" y2="300" stroke="url(#grad2)" strokeWidth="1" opacity="0.4"/>
          
          {/* Organic curved strokes */}
          <path transform="translate(0, 30)" d="M1200,150 Q900,300 600,200 Q300,100 0,280" stroke="url(#grad1)" strokeWidth="2.5" fill="none" opacity="0.6" filter="url(#blurLight)"/>
          
          {/* Bottom accent wave */}
          <path d="M0,750 Q300,650 600,720 Q900,790 1200,700" stroke="url(#grad2)" strokeWidth="2" fill="none" opacity="0.7"/>
        </svg>

        {/*<div className="hero-overlay"></div>*/}
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
              <span>FANUC Polska, Wrocław</span>
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


/*  OLD BACKGROUND CODE

      <div className="hero-bg">
        <div className="hero-underlay"></div>

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
*/