import './style.css';

function Contact() {

 
  const offices = [
    {
      city: "London Head Office",
      image: "/images/london.jpg",
      address:
        "167–169 Great Portland Street, 5th Floor, London W1W 5PF",
      hours: "Mon–Fri 9AM–6PM",
    },
    {
      city: "Glasgow Office",
      image: "/images/glasgow.jpg",
      badge: "Regional Office",
      address:
        "Suite 2/3, 48 West George Street, Glasgow G2 1BP",
      hours: "Mon–Fri 9AM–5PM",
    },
    {
      city: "Cardiff Office",
      image: "/images/cardiff.jpg",
      address:
        "Portland House, 113–116 Blue Street, Cardiff CF10 5EQ",
      hours: "Mon–Fri 9AM–5PM",
    },
  ];

   const faqs = [
    {
      icon: "💳",
      title: "Account & Billing",
      desc: "Payment methods, billing queries, and account management",
    },
    {
      icon: "📶",
      title: "Network & Coverage",
      desc: "Signal issues, network coverage, and connectivity problems",
    },
    {
      icon: "🌍",
      title: "Roaming & International",
      desc: "International calls, roaming setup, and data charges abroad",
    },
    {
      icon: "📞",
      title: "Call & Text Charges",
      desc: "Call rates, international charges, and premium services",
    },
    {
      icon: "📅",
      title: "Plans & Packages",
      desc: "Day pass options, roaming plans, and service upgrades",
    },
    {
      icon: "📱",
      title: "SIM & Device Setup",
      desc: "SIM activation, device configuration, and technical support",
    },
  ];

  return (
    <>
      {/* Top Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Have You Got Any Questions?</h1>
          <h4>At Zoiko Mobile We Offer Solutions!</h4>
          <p>We pride ourselves on providing tailored solutions within the shortest possible time</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-section">
        <div className="container">

          {/* TOP GRID */}
          <div className="contact-grid">

            {/* LEFT – FORM */}
            <div className="contact-card">
              <h3>Get In Touch With Us</h3>
              <p className="desc">
                If you have any questions, at Zoiko Mobile we pride ourselves on providing
                tailored solutions within the shortest possible time.
              </p>

              <form className="contact-form">
                <div className="form-row">
                  <div>
                    <label>Your Name *</label>
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div>
                    <label>Your Email *</label>
                    <input type="email" placeholder="Your Email" />
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label>Your Phone Number *</label>
                    <input type="tel" placeholder="Your Phone Number" />
                  </div>
                  <div>
                    <label>Subject</label>
                    <input type="text" placeholder="Subject" />
                  </div>
                </div>

                <label>Your Message *</label>
                <textarea placeholder="Your Message"></textarea>

                {/* Checkbox 1 */}
                <div className="checkbox">
                  <label>
                    <input type="checkbox" />
                    <span>Please save my name, email address, and website information on this browser for future use</span>
                  </label>
                </div>

                {/* Checkbox 2 */}
                <div className="checkbox">
                  <label>
                    <input type="checkbox" />
                    <span>Subscribe to our newsletter for updates and exclusive offers</span>
                  </label>
                </div>

                <button type="submit" className="send-btn">Send Message</button>
              </form>
            </div>

            {/* RIGHT – QUICK CONTACT */}
            <div className="contact-card">
              <h3>Quick Contact</h3>

              <div className="info-box">
                <img src='/images/Contact/phone.png' />
                <h4>Call Us Now</h4>
                <p>500 (from Zoiko mobile)</p>
                <p>020 7164 6399 (other networks)</p>
                <span className="status">Available 24/7</span>
              </div>

              <div className="info-box">
                 <img src='/images/Contact/message.png' />
                <h4>Live Chat</h4>
                <p>Instant support online</p>
                <span className="status">Available 24/7</span>
              </div>

              <div className="info-box">
                 <img src='/images/Contact/email.png' />
                <h4>Email Support</h4>
                <p>help@zoikomobile.co.uk</p>
                <p>Response within 24 hours</p>
              </div>
            </div>
          </div>

          {/* BOTTOM GRID */}
          <div className="bottom-grid">
            <div className="contact-card">
              <h3>Emergency Support</h3>

              <div className="alert danger">
                <strong>Lost or Stolen Phone</strong>
                <p>Call 500 immediately to suspend your service</p>
              </div>

              <div className="alert danger">
                <strong>Network Emergency</strong>
                <p>Report critical network issues 24/7</p>
              </div>

              <div className="alert danger">
                <strong>Fraud Alert</strong>
                <p>Report suspicious activity immediately</p>
              </div>
            </div>

            <div className="contact-card">
              <h3>Response Times</h3>

              <div className="response-row">
                <span>Phone Support</span>
                <span className="green">Immediate</span>
              </div>
              <div className="response-row">
                <span>Live Chat</span>
                <span className="green">&lt; 2 minutes</span>
              </div>
              <div className="response-row">
                <span>Email</span>
                <span className="green">&lt; 24 hours</span>
              </div>
              <div className="response-row">
                <span>Social Media</span>
                <span className="green">&lt; 4 hours</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Office Locations  */}

       <section className="office-section">
      <h2>Our Office Locations</h2>

      <div className="office-grid">
        {offices.map((office, index) => (
          <div className="office-card" key={index}>
            <div className="office-image">
              <img src={office.image} alt={office.city} />
              {office.badge && (
                <span className="badge">{office.badge}</span>
              )}
            </div>

            <div className="office-content">
              <h3>{office.city}</h3>

              <p>
                📍 {office.address}
              </p>

              <p>📞 +44 020 7164 6399</p>
              <p>✉️ info@zoikomobile.co.uk</p>

              <p className="hours">
                Hours: {office.hours}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Questions */}
    <section className="faq-section">
      <div className="container">
        <h2>Most Asked Questions</h2>
        <p className="sub-text">
          Quick answers to common questions – get instant help!
        </p>

        <div className="faq-grid">
          {faqs.map((item, index) => (
            <div className="faq-card" key={index}>
              <div className="faq-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <a href="#" className="faq-link">
                View Questions →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Contact;