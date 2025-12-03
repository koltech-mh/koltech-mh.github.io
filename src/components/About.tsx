//import { Lightbulb, Users, TrendingUp } from 'lucide-react';
import "./About.css";

export function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-grid">

          {/* LEFT COLUMN */}
          <div>
            <h2 className="about-title">O wydarzeniu</h2>

            <p className="about-text">
              W tegorocznym wydarzeniu poruszymy temat wykorzystania robotyzacji w nowoczesnych technologiach przemysłowych, 
              w tym m.in. regeneracja form kuźniczych metodą napawania z wykorzystaniem 
              robotów przemysłowych FANUC oraz platformy 3DEXPERIENCE firmy Dassault Systèmes. 
            </p>

            <p className="about-text">
              .
            </p>
            {/* 
            <div className="about-features-grid">

              <div className="about-feature">
                <div className="about-icon bg-blue">
                  <Lightbulb className="icon" />
                </div>
                <h3 className="about-feature-title">Innovation</h3>
                <p className="about-feature-desc">Latest PLM trends & technologies</p>
              </div>

              <div className="about-feature">
                <div className="about-icon bg-purple">
                  <Users className="icon" />
                </div>
                <h3 className="about-feature-title">Networking</h3>
                <p className="about-feature-desc">Connect with industry experts</p>
              </div>

              <div className="about-feature">
                <div className="about-icon bg-green">
                  <TrendingUp className="icon" />
                </div>
                <h3 className="about-feature-title">Growth</h3>
                <p className="about-feature-desc">Accelerate business success</p>
              </div>

            </div>
                */}
          </div>
            

          <div className="about-image-wrapper">
             
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipMioeeQKzmKagGRVyEnj0clFD2Qc-8xKC1DBMz3=s680-w680-h510"
              className="about-image"
              alt="fanuc"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
