//import { Building2, Award, Globe } from 'lucide-react';
import { Award, Handshake } from 'lucide-react';
import "./Partners.css";

interface Partner {
  name: string;
  description: string;
  expertise: string;
  icon: string;
}

const partners: Partner[] = [
  {
    name: "Dassault Systèmes",
    description: "Global leader in 3D design, 3D digital mock-up, and PLM solutions. Provider of the 3DEXPERIENCE platform that empowers businesses to innovate sustainably.",
    expertise: "PLM Platform & Strategy",
    icon: "🏢"
  },
  {
    name: "CATIA",
    description: "World-leading solution for product design and innovation. Enables the creation of 3D parts and assemblies with powerful modeling capabilities.",
    expertise: "3D Design & Engineering",
    icon: "✏️"
  },
  {
    name: "SIMULIA",
    description: "Provides realistic simulation solutions that enable users to explore and optimize product performance with computational fluid dynamics and structural analysis.",
    expertise: "Simulation & Analysis",
    icon: "🔬"
  },
  {
    name: "DELMIA",
    description: "Delivers digital manufacturing and operations solutions that help companies plan, produce, and service their products with virtual production simulation.",
    expertise: "Manufacturing Excellence",
    icon: "🏭"
  },
  {
    name: "ENOVIA",
    description: "Collaborative innovation platform that enables global teams to collaboratively define, build, and manage products throughout the entire lifecycle.",
    expertise: "Collaboration & Data Management",
    icon: "🤝"
  },
  {
    name: "NETVIBES",
    description: "Dashboard intelligence platform that aggregates data from multiple sources to provide real-time business insights and analytics.",
    expertise: "Business Intelligence",
    icon: "📊"
  }
];

export function Partners() {
  return (
    <section className="partners-section" id="partners">
      <div className="partners-container">

        <div className="partners-header">
          <h2><Handshake/> Partnerzy</h2>
        </div>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-icon">{partner.icon}</div>
              <h3>{partner.name}</h3>

              <p className="partner-desc">{partner.description}</p>

              <div className="partner-expertise">
                <Award className="expertise-icon" />
                <span>{partner.expertise}</span>
              </div>
            </div>
          ))}
        </div>

          {/* 
        <div className="partners-why">
          <h3>Why Partner With Us?</h3>

          <div className="why-grid">
            <div className="why-item">
              <Building2 className="why-icon" />
              <h4>Industry Leadership</h4>
              <p>Work with recognized leaders in PLM and digital transformation</p>
            </div>

            <div className="why-item">
              <Award className="why-icon" />
              <h4>Proven Success</h4>
              <p>Benefit from decades of experience and successful implementations</p>
            </div>

            <div className="why-item">
              <Globe className="why-icon" />
              <h4>Global Reach</h4>
              <p>Access worldwide support and resources for your projects</p>
            </div>
          </div>
        </div>
            */}
      </div>
    </section>
  );
}
