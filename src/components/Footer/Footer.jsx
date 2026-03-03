import './footer.css';
import { Link, NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="zm-footer">
      <div className="footer-top">
        <div className="container footer-grid">

          {/* Column 1 */}
          <div className="footer-col">
            <img src="/images/logo.png" alt="Zoiko Mobile" className="footer-logo" />
            <p>
              Empowering individuals and businesses with seamless,
              reliable connectivity wherever it matters most.
            </p>

            <div className="store-buttons">
              <a href="https://play.google.com" target="_blank" rel="noreferrer">
                Google Play
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                App Store
              </a>
            </div>

          <div className="social-icons">
  <a href="https://facebook.com" target="_blank" rel="noreferrer">
    <i className="bi bi-facebook"></i>
  </a>

  <a href="https://twitter.com" target="_blank" rel="noreferrer">
    <i className="bi bi-twitter-x"></i>
  </a>

  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
    <i className="bi bi-linkedin"></i>
  </a>

  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <i className="bi bi-instagram"></i>
  </a>

  <a href="https://pinterest.com" target="_blank" rel="noreferrer">
    <i className="bi bi-pinterest"></i>
  </a>
</div>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h4>Zoiko Mobile UK</h4>
            <ul>
              <li><a href="/plans">Zoiko Mobile Plans</a></li>
              <li><a href="/business-sim-deals">Business SIM Deals</a></li>
              <li><a href="/data-only-sims">Data Only SIMs</a></li>
              <li><a href="/30-day-plans">30-Day Plans</a></li>
              <li><a href="/coverage-checker">Coverage Checker</a></li>
              <li><a href="/broadband">Zoiko Broadband</a></li>
              <li><a href="/zoiko-orbit">Zoiko Orbit</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h4>Zoiko Rates</h4>
            <ul>
            <li><NavLink className="nav-link" to="/roaming-and-overage">
           Roaming And Overage
           </NavLink></li> 
<<<<<<< HEAD
              <li><a href="/zero-cost-sms">Zero Cost SMS</a></li>
=======
              <li><NavLink className="nav-link" to="/zero-cost-sms">
           Zero Cost SMS
           </NavLink></li>
>>>>>>> 8d10878 (Added Free SMS page and suspicious section)
              <li><a href="/discounted-rates">Discounted Rates</a></li>
              <li><a href="/refer-a-friend">Refer A Friend</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h4>About Zoiko</h4>
            <ul>
              <li><a href="/blogs">Blogs</a></li>
              <li><a href="/news">News</a></li>
              <li></li>
             <li> <NavLink className="nav-link" to="/faqs">
           FAQs
           </NavLink></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="footer-col">
            <h4>Zoiko Legal</h4>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
              <li><a href="/vulnerability-policy">Vulnerability Policy</a></li>
              <li><a href="/modern-slavery-policy">Modern Slavery Policy</a></li>
              <li><a href="/esg-policy">ESG Policy</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Offices */}
      <div className="footer-offices">
        <div className="container office-grid">
          <div>
            <h5>Head Office</h5>
            <p>167-169 Great Portland Street, 5th Floor, London W1W 5PF</p>
            <p><a href="tel:+442071646399">+44 020 7164 6399</a></p>
            <p><a href="mailto:info@zoikomobile.co.uk">info@zoikomobile.co.uk</a></p>
          </div>

          <div>
            <h5>Glasgow</h5>
            <p>Suite 2/3, 48 West George Street, Glasgow G2 1BP</p>
            <p><a href="tel:+442071646399">+44 020 7164 6399</a></p>
            <p><a href="mailto:info@zoikomobile.co.uk">info@zoikomobile.co.uk</a></p>
          </div>

          <div>
            <h5>Cardiff</h5>
            <p>Portland House, 113-116 Blue Street, Cardiff CF10 5EQ</p>
            <p><a href="tel:+442071646399">+44 020 7164 6399</a></p>
            <p><a href="mailto:info@zoikomobile.co.uk">info@zoikomobile.co.uk</a></p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 Zoiko Mobile UK. Zoiko Mobile UK is a trading name for Zoiko Mobile (UK) Ltd.
        Registered in England and Wales (No. 16564980). All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;