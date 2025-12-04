//import { Lightbulb, Users, TrendingUp } from 'lucide-react';
import "./About.css";
import ImageFadeCarousel from "./ImageFadeCarousel.tsx";

export function About() {
  
  const carouselImages = [
    "https://lh3.googleusercontent.com/p/AF1QipMioeeQKzmKagGRVyEnj0clFD2Qc-8xKC1DBMz3=s680-w680-h510",
    "https://d16ohktstcjvly.cloudfront.net/image/513891251684/image_o8jat0e2ch6undk9vt2dsi286f/-FJPG",
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-grid">

          {/* LEFT COLUMN */}
          <div>
            <h2 className="about-title">O Wydarzeniu</h2>

            <p className="about-text">
              W tegorocznym wydarzeniu poruszymy temat wykorzystania robotyzacji w nowoczesnych technologiach przemysłowych, 
              w tym m.in. regeneracja form kuźniczych metodą napawania z wykorzystaniem 
              robotów przemysłowych FANUC oraz platformy 3DEXPERIENCE firmy Dassault Systèmes. 
            </p>

            <p className="about-text">
              • Nowości platformy 3DEXPERIENCE - DELMIA, CATIA, SIMULIA i in.<br />
              • Modelowanie odkuwek, matryc i stempli z zastosowaniem systemu CATIA<br />
              • Robotyzacja procesów technologicznych<br />
              • Automatyzacja procesów regeneracji form, matryc, stempli<br />
              • Demo Live zrobotyzowanych procesów regeneracji form metodą napawania<br />
              • Networking z ekspertami branży automatyzacji<br />
            </p>

          </div>

          {/* RIGHT COLUMN */}
          <ImageFadeCarousel images={carouselImages} onlyPropImages />

        </div>
      </div>
    </section>
  );
}
