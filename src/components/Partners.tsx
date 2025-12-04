//import { Building2, Award, Globe } from 'lucide-react';
import { Award, Handshake } from 'lucide-react';
import "./Partners.css";

interface Partner {
  name: string;
  logo: string;
  description: string;
  expertise?: string;
  link?: string;
}

const partners: Partner[] = [
  {
    name: "FANUC",
    logo: "../assets/img/logo/partners/fanuc_logo.png",
    description: "Lider automatyzacji przemysłowej. Specjalizuje się w produkcji robotów przemysłowych, systemów CNC oraz technologii automatyzujących procesy produkcyjne.",
    expertise: "Robotyka Przemysłowa",
    link: "https://www.fanuc.eu/pl/pl",
  },
  {
    name: "ZAPAMET",
    logo: "../assets/img/logo/partners/zapamet_logo.png",
    description: "Specjalizuje się w automatyzacji produkcji, robotyce przemysłowej, obróbce metali i produkcji części metalowych.",
    expertise: "Spawalnictwo, Automatyzacja i Robotyka Przemysłowa",
    link: "https://www.zapamet.pl/",
  },
  {
    name: "Dassault Systèmes",
    logo: "../assets/img/logo/partners/ds_logo_blue.png",
    description: "Światowy lider w dziedzinie projektowania 3D, cyfrowych makiet 3D i rozwiązań PLM. Dostawca platformy 3DEXPERIENCE, która umożliwia firmom zrównoważone innowacje.",
    expertise: "Platforma PLM",
    link: "https://www.3ds.com/",
  },
];

export function Partners() {
  return (
<section className="partners-section" id="partners">
  <div className="partners-container">

    <div className="partners-header">
      <h2><Handshake /> Partnerzy</h2>
    </div>

    <div className="partners-grid">
      {partners.map((partner, index) => (
        <div key={index} className="partner-card" onClick={()=>{partner.link&&window.open(partner.link, "_blank");}}>
          <div className="partner-logo-wrapper">
            <img 
              src={partner.logo} 
              alt={`${partner.name} logo`} 
              className="partner-logo" 
            />
          </div>

          {/*<h3>{partner.name}</h3>*/}

          <p className="partner-desc">{partner.description}</p>

          {partner.expertise && 
          <div className="partner-expertise">
            <Award className="expertise-icon" />
            <span>{partner.expertise}</span>
          </div>
          }
        </div>
      ))}
    </div>

  </div>
</section>
  );
}
