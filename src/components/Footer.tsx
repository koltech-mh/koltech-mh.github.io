import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import "./Footer.css";
import logo from '../assets/img/logo/koltech_logo_white.png';

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        <div className='footer-logo'>
          <img src={logo} onClick={()=>{window.open("https://koltech.com.pl/", "_blank");}} alt="" />
        </div>

        <div className="footer-grid">

          {/* CONTACT INFO */}
          <div>
            <h3 className="footer-title">Kontakt</h3>

            <div className="footer-contact-list">

              <div className="footer-contact-item">
                <MapPin className="footer-icon" />
                <p className="footer-text">
                  P.P.W. KOLTECH Sp. z.o.o. <br />
                  Zakład Systemów Inżynierskich<br />
                  Racibórz, 47-400<br/>
                  ul. Malczewskiego 1
                </p>
              </div>

              <div className="footer-contact-item">
                <Mail className="footer-icon" />
                <p className="footer-text">
                  zsi@koltech.com.pl <br />
                  plm_support@koltech.com.pl <br />
                  marketing_zsi@koltech.com.pl
                </p>
              </div>

              <div className="footer-contact-item">
                <Phone className="footer-icon" />
                <p className="footer-text">(+48) 32 415 35 09</p>
              </div>

            </div>
          </div>

          {/* EVENT INFO 
          <div>
            <h3 className="footer-title">Informacje o Wydarzeniu</h3>
            <ul className="footer-list">
              <li>Data: 23/10/2025</li>
              <li>Godziny: 8:00 - 16:00</li>
              <li>Miejsce: FANUC Polska, Wrocław</li>
              <li>Dress Code: Business Casual</li>
            </ul>
          </div>
            */}
          {/* SOCIAL */}
          <div>
            <h3 className="footer-title">Śledź Nas</h3>

            <div className="footer-social">
              <a target="_blank" rel="noopener noreferrer" href="https://pl-pl.facebook.com/KOLTECHPLM" className="footer-social-btn facebook">
                <Facebook className="footer-social-icon" />
              </a>

              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/koltech_plm_systems/" className="footer-social-btn instagram">
                <Instagram className="footer-social-icon" />
              </a>

              <a target="_blank" rel="noopener noreferrer" href="https://pl.linkedin.com/company/wwwkoltechcompl" className="footer-social-btn linkedin">
                <Linkedin className="footer-social-icon" />
              </a>

              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/koltech/featured" className="footer-social-btn youtube">
                <Youtube className="footer-social-icon" />
              </a>
            </div>

          
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 KOLTECH. Wszystkie Prawa Zastrzeżone. | KOLTECH FORUM 2025</p>
        </div>

      </div>
    </footer>
  );
}
