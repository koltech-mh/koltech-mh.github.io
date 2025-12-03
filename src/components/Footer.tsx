import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* CONTACT INFO */}
          <div>
            <h3 className="footer-title">Contact Us</h3>

            <div className="footer-contact-list">

              <div className="footer-contact-item">
                <Mail className="footer-icon" />
                <p className="footer-text">events@yourcompany.com</p>
              </div>

              <div className="footer-contact-item">
                <Phone className="footer-icon" />
                <p className="footer-text">+1 (555) 123-4567</p>
              </div>

              <div className="footer-contact-item">
                <MapPin className="footer-icon" />
                <p className="footer-text">
                  Tech Convention Center<br />
                  San Francisco, CA 94105
                </p>
              </div>

            </div>
          </div>

          {/* EVENT INFO */}
          <div>
            <h3 className="footer-title">Event Information</h3>
            <ul className="footer-list">
              <li>Date: June 15, 2025</li>
              <li>Time: 9:00 AM - 5:00 PM</li>
              <li>Format: In-Person</li>
              <li>Dress Code: Business Casual</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="footer-title">Follow Us</h3>

            <div className="footer-social">
              <a href="#" className="footer-social-btn linkedin">
                <Linkedin className="footer-social-icon" />
              </a>

              <a href="#" className="footer-social-btn twitter">
                <Twitter className="footer-social-icon" />
              </a>
            </div>

            <p className="footer-desc">
              Stay updated with the latest news and announcements about the PLM Innovation Summit.
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Your Company. All rights reserved. | PLM Innovation Summit 2025</p>
        </div>

      </div>
    </footer>
  );
}
