import { MapPin } from 'lucide-react';
import "./Location.css";

export function Location() {
  return (
    <section className="location-section" id="location">
      <div className="location-container">

        <div className="location-header">
            
          <h2><MapPin/> Lokacja</h2>

        </div>

        <div className="location-grid">
          {/* Map */}
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8917.638932614422!2d17.01106581773288!3d51.15589830319183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc17ae3391b0d%3A0xc949222f22bd1628!2sFANUC%20Polska!5e0!3m2!1spl!2spl!4v1754981307524!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Event Location Map"
            ></iframe>
          </div>

          {/* Right Side Info */}
          <div className="location-info">
            
            <div>
                <h3>Gdzie</h3>
                <p>
                    Siedziba firmy Fanuc<br />
                    Polska, Wrocław, ul. Sakury 2<br />
                </p>
                <h3>Jak się dostać</h3>
                <p>
                    • Public Transit: Powell Street BART Station (5 min walk)<br />
                    • Parking: Available on-site<br />
                </p>
                
            </div>


            {/* Directions Button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=FANUC+Polska,+Sakury,+Wrocław"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              Wskaż Drogę
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
