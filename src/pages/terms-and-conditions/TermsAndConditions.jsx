import './style.css';
import { useState, useEffect } from "react";

const navItems = [
  { id: "introduction",   label: "Introduction",                    num: "01" },
  { id: "responsibilities", label: "User Responsibilities",         num: "02" },
  { id: "ip-rights",      label: "Intellectual Property Rights",    num: "03" },
  { id: "prohibited",     label: "Prohibited Activities",           num: "04" },
  { id: "limitation",     label: "Limitation of Liability",         num: "05" },
  { id: "dispute",        label: "Dispute Resolution",              num: "06" },
  { id: "updates",        label: "Updates to Terms",                num: "07" },
  { id: "contact",        label: "Contact Information",             num: "08" },
];

function Termsandconditions() {
  const [activeId, setActiveId] = useState("introduction");

  useEffect(() => {
    const observers = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  return (
    <div className="tc-root">

      {/* ── Header ── */}
      <header className="tc-header">
        <div className="tc-header-inner">
          <p className="tc-breadcrumb">Home / <span>Terms and Conditions</span></p>
          <h1>Terms and Conditions</h1>
          <p className="tc-header-subtitle">
            Please read this document carefully as it contains important
            information about your rights and responsibilities when using
            Zoiko Mobile's services.
          </p>
          <div className="tc-header-badge">Last Updated: October 2025</div>
        </div>
      </header>

      {/* ── Layout ── */}
      <div className="tc-layout">

        {/* ── Sidebar ── */}
        <aside className="tc-sidebar">
          <nav className="tc-nav-card">
            <div className="tc-nav-title">Quick Navigation</div>
            <ul className="tc-nav-list">
              {navItems.map(({ id, label, num }) => (
                <li key={id}>
                  <button
                    className={`tc-nav-link ${activeId === id ? "active" : ""}`}
                    onClick={() => scrollTo(id)}
                  >
                    <span className="tc-nav-num">{num}</span>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* ── Main Content ── */}
        <main className="tc-content">

          {/* Intro Banner */}
          <div className="tc-intro-banner">
            <p>
              Welcome to Zoiko Mobile. By accessing and using our website, you
              agree to abide by these Terms and Conditions. Please read this
              document carefully as it contains important information about your
              rights and responsibilities.
            </p>
          </div>

          {/* 1 — Introduction */}
          <section id="introduction" className="tc-section">
            <div className="tc-section-header">
              <div className="tc-section-icon">📋</div>
              <h2>Introduction</h2>
            </div>
            <p>
              Welcome to Zoiko Mobile. By accessing and using our website, you
              agree to abide by these Terms and Conditions. These terms govern
              your use of our website and services.
            </p>
            <div className="tc-info-box">
              <p>
                <strong>Important:</strong> By continuing to use our website and
                services, you acknowledge that you have read, understood, and
                agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </section>

          {/* 2 — User Responsibilities */}
          <section id="responsibilities" className="tc-section">
            <div className="tc-section-header">
              <div className="tc-section-icon">👤</div>
              <h2>User Responsibilities</h2>
            </div>

            <div className="tc-subsection">
              <h3>2.1 Compliance</h3>
              <p>
                When using our website, you agree to comply with all applicable
                laws and regulations, both local and international. You are
                responsible for ensuring that your use of the site does not
                violate any legal requirements.
              </p>
            </div>

            <div className="tc-subsection">
              <h3>2.2 Accuracy of Information</h3>
              <p>
                You are responsible for the accuracy and truthfulness of the
                information you provide on our website. Any information you
                submit should not be misleading, false, or fraudulent.
              </p>
            </div>

            <div className="tc-subsection">
              <h3>2.3 Security</h3>
              <p>
                You are responsible for maintaining the security of your account
                credentials and for all activities that occur under your account.
              </p>
            </div>

            <div className="tc-responsibility-grid">
              {[
                { icon: "⚖️", title: "Legal Compliance", desc: "Follow all applicable local and international laws" },
                { icon: "✅", title: "Accurate Info", desc: "Provide truthful and non-misleading information" },
                { icon: "🔐", title: "Account Security", desc: "Keep your credentials safe and confidential" },
                { icon: "🤝", title: "Fair Use", desc: "Use our services in good faith and responsibly" },
              ].map((item) => (
                <div className="tc-resp-card" key={item.title}>
                  <div className="tc-resp-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3 — Intellectual Property */}
          <section id="ip-rights" className="tc-section">
            <div className="tc-section-header">
              <div className="tc-section-icon">©️</div>
              <h2>Intellectual Property Rights</h2>
            </div>

            <div className="tc-subsection">
              <h3>3.1 Content Ownership</h3>
              <p>
                All content on this website, including but not limited to text,
                images, graphics, logos, and software, is the property of Zoiko
                Mobile or its content suppliers and is protected by intellectual
                property laws. You may not use, reproduce, or distribute our
                content without express written permission.
              </p>
            </div>

            <div className="tc-subsection">
              <h3>3.2 User-Generated Content</h3>
              <p>
                If you submit content to our website, such as comments, reviews,
                or other user-generated material, you grant Zoiko Mobile a
                non-exclusive, royalty-free, worldwide, and perpetual licence to
                use, modify, reproduce, and distribute that content for any
                purpose.
              </p>
            </div>

            <div className="tc-info-box">
              <p>
                <strong>Note:</strong> Any unauthorised use of our intellectual
                property may result in legal action. Please contact us if you
                wish to use any of our content.
              </p>
            </div>
          </section>

          {/* 4 — Prohibited Activities */}
          <section id="prohibited" className="tc-section">
            <div className="tc-section-header">
              <div className="tc-section-icon">🚫</div>
              <h2>Prohibited Activities</h2>
            </div>
            <p>The following activities are strictly prohibited on our platform:</p>

            <div className="tc-subsection">
              <h3>4.1 Unauthorised Access</h3>
              <p>
                You may not attempt to gain unauthorised access to our website
                or any part of it. This includes avoiding any security measures,
                hacking, or using any automated tools for data extraction.
              </p>
            </div>

            <div className="tc-subsection">
              <h3>4.2 Malicious Use</h3>
              <p>
                You may not use our website for any malicious purposes, such as
                spreading malware, conducting phishing attacks, or engaging in
                any other harmful activities.
              </p>
            </div>

            <div className="tc-subsection">
              <h3>4.3 Infringement</h3>
              <p>
                You may not use our website to infringe on the intellectual
                property rights of others, engage in defamation, or violate any
                laws related to the content you publish.
              </p>
            </div>

            <ul className="tc-bullet-list">
              <li><span>Attempting to hack, exploit, or breach our security systems</span></li>
              <li><span>Spreading malware, viruses, or any malicious code</span></li>
              <li><span>Conducting phishing attacks or fraudulent schemes</span></li>
              <li><span>Infringing on intellectual property rights of others</span></li>
              <li><span>Using automated bots or scrapers without authorisation</span></li>
              <li><span>Engaging in defamatory, abusive, or harassing behaviour</span></li>
            </ul>
          </section>

          {/* 5 — Limitation of Liability */}
          <section id="limitation" className="tc-section">
            <div className="tc-section-header">
              <div className="tc-section-icon">⚠️</div>
              <h2>Limitation of Liability</h2>
            </div>

            <div className="tc-subsection">
              <h3>5.1 Disclaimer</h3>
              <p>
                Zoiko Mobile is not responsible for any indirect, incidental,
                special, or consequential damages that result from your use of
                our website. We provide our services "as is" without any
                warranties.
              </p>
            </div>

            <div className="tc-subsection">
              <h3>5.2 Third-Party Links</h3>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the content, reliability, or privacy
                practices of these external sites.
              </p>
            </div>

            <div className="tc-liability-grid">
              {[
                { icon: "🔗", title: "Third-Party Sites", desc: "We are not liable for external website content or practices" },
                { icon: "📉", title: "Indirect Damages", desc: "No liability for indirect or consequential losses" },
                { icon: "🛠️", title: "Service Availability", desc: "Services provided 'as is' without guarantees" },
                { icon: "📊", title: "Data Accuracy", desc: "We do not guarantee accuracy of third-party data" },
              ].map((item) => (
                <div className="tc-liability-card" key={item.title}>
                  <span className="tc-liability-icon">{item.icon}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6 — Dispute Resolution */}
          <section id="dispute" className="tc-section">
            <div className="tc-section-header">
              <div className="tc-section-icon">🏛️</div>
              <h2>Dispute Resolution</h2>
            </div>
            <p>
              In the event of any disputes or claims related to your use of our
              website, you agree to attempt to resolve them through negotiation
              and good faith communication.
            </p>

            <div className="tc-dispute-steps">
              {[
                { step: "01", title: "Negotiation", desc: "First, attempt direct resolution through good faith communication with our team." },
                { step: "02", title: "Mediation", desc: "If direct negotiation fails, both parties may agree to mediation." },
                { step: "03", title: "Legal Action", desc: "Unresolved disputes fall under the exclusive jurisdiction of courts in England and Wales." },
              ].map((s) => (
                <div className="tc-dispute-step" key={s.step}>
                  <div className="tc-step-num">{s.step}</div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="tc-info-box" style={{ marginTop: 20 }}>
              <p>
                <strong>Jurisdiction:</strong> These Terms and Conditions are
                governed by the laws of England and Wales.
              </p>
            </div>
          </section>

          {/* 7 — Updates */}
          <section id="updates" className="tc-section">
            <div className="tc-section-header">
              <div className="tc-section-icon">🔄</div>
              <h2>Updates to Terms and Conditions</h2>
            </div>
            <p>
              We may update these Terms and Conditions from time to time to
              reflect changes in our services or for other operational, legal,
              or regulatory reasons. The date of the latest revision will be
              indicated at the top of the document.
            </p>

            <div className="tc-info-box">
              <p>
                <strong>Stay Informed:</strong> We recommend reviewing these
                terms periodically. Continued use of our services after any
                changes constitutes your acceptance of the updated terms.
              </p>
            </div>

            <p style={{ marginTop: 16, fontWeight: 600, color: "var(--text-main)", fontSize: 14 }}>
              Last Updated: October 2025
            </p>
          </section>

          {/* 8 — Contact */}
          <section id="contact" className="tc-section">
            <div className="tc-section-header">
              <div className="tc-section-icon">📬</div>
              <h2>Contact Information</h2>
            </div>
            <p>
              If you have any questions or concerns about these Terms and
              Conditions, please contact us at the following address:
            </p>

            <div className="tc-contact-grid">
              <div className="tc-contact-card">
                <h4>Zoiko Mobile</h4>
                <p>🏢 Berkeley Suite, 35 Berkeley Square, Mayfair, London W1J 5BF</p>
                <p>📧 <a href="mailto:legal@zoikomobile.co.uk">legal@zoikomobile.co.uk</a></p>
                <p>📞 <a href="tel:+447071646399">+44 7071 646 399</a></p>
              </div>
              <div className="tc-contact-card">
                <h4>Legal Team</h4>
                <p>
                  For specific legal inquiries regarding these Terms and
                  Conditions, our legal team is available to assist you with
                  any questions or concerns.
                </p>
                <p>🕒 Mon–Sat: 8:30am – 8:30pm</p>
                <p>🕒 Sun: 10am – 6pm</p>
              </div>
            </div>

            <div className="tc-info-box" style={{ marginTop: 20 }}>
              <p>
                By using Zoiko Mobile's website, you agree to these Terms and
                Conditions. Thank you for choosing Zoiko Mobile as your online
                destination. We value your compliance with these guidelines to
                ensure a secure and enjoyable online experience.
              </p>
            </div>

            <button className="tc-cta-btn">← Back to My Account</button>
          </section>

        </main>
      </div>
    </div>
  );
}

export default Termsandconditions;