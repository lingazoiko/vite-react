import './style.css';
import { useState, useEffect, useRef } from "react";

const navItems = [
  { id: "info-collect", label: "Information We Collect", num: "01" },
  { id: "how-we-use", label: "How We Use Your Information", num: "02" },
  { id: "cookie-policy", label: "Cookie Policy", num: "03" },
  { id: "data-retention", label: "Data Retention", num: "04" },
  { id: "user-rights", label: "User Rights", num: "05" },
  { id: "security-measures", label: "Security Measures", num: "06" },
  { id: "disclosure", label: "Disclosure of Information", num: "07" },
  { id: "third-party", label: "Third-Party Links", num: "08" },
  { id: "children-privacy", label: "Children's Privacy", num: "09" },
  { id: "policy-updates", label: "Updates to the Privacy Policy", num: "10" },
  { id: "contact-info", label: "Contact Information", num: "11" },
];

function Privacypolicy() {

    const [activeId, setActiveId] = useState("info-collect");
  const sectionRefs = useRef({});

  // Intersection Observer to highlight nav based on scroll
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
    <>
       <div className="pp-root">
      {/* ── Header ── */}
      <header className="pp-header">
        <p className="pp-breadcrumb">Home / <span>Privacy Policy</span></p>
        <h1>Privacy Policy</h1>
        <p className="pp-header-subtitle">
          We are committed to protecting your personal information and ensuring
          transparency in how we handle your data.
        </p>
        <div className="pp-header-badge">Last Updated: January 2025</div>
      </header>

      {/* ── Layout ── */}
      <div className="pp-layout">

        {/* ── Sidebar ── */}
        <aside className="pp-sidebar">
          <nav className="pp-nav-card">
            <div className="pp-nav-title">Quick Navigation</div>
            <ul className="pp-nav-list">
              {navItems.map(({ id, label, num }) => (
                <li key={id}>
                  <button
                    className={`pp-nav-link ${activeId === id ? "active" : ""}`}
                    onClick={() => scrollTo(id)}
                  >
                    <span className="pp-nav-num">{num}</span>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* ── Main Content ── */}
        <main className="pp-content">

          {/* Intro */}
          <div className="pp-intro-banner">
            <p>
              At Zoiko Mobile, we are committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, and safeguard your
              personal information. By using our website, you consent to the
              practices described in this policy.
            </p>
          </div>

          {/* 1 — Information We Collect */}
          <section id="info-collect" className="pp-section">
            <div className="pp-section-header">
              <div className="pp-section-icon">🗂️</div>
              <h2>Information We Collect</h2>
            </div>
            <p>At Zoiko Mobile, we may collect the following types of information:</p>

            <div className="pp-subsection">
              <h3>1.1 Personal Information</h3>
              <p>
                We may collect personal information, such as your name, email
                address, phone number, or other identifying information when you
                voluntarily provide it through our website, forms, or other
                interactions.
              </p>
            </div>

            <div className="pp-subsection">
              <h3>1.2 Device Information</h3>
              <p>
                We may also collect information about the device you use to
                access our website, including your IP address, browser type,
                operating system, and other technical details.
              </p>
            </div>

            <div className="pp-info-box">
              <p>
                <strong>What This Means:</strong> We only collect information
                necessary to provide you with our services and improve your
                experience.
              </p>
            </div>
          </section>

          {/* 2 — How We Use */}
          <section id="how-we-use" className="pp-section">
            <div className="pp-section-header">
              <div className="pp-section-icon">⚙️</div>
              <h2>How We Use Your Information</h2>
            </div>
            <p>
              We may use the information we collect for various purposes,
              including but not limited to:
            </p>

            <div className="pp-feature-grid">
              {[
                { emoji: "📱", title: "Service Delivery", desc: "Process orders and provide customer support" },
                { emoji: "📊", title: "Analytics", desc: "Improve website functionality and user experience" },
                { emoji: "🔒", title: "Security", desc: "Protect against fraud and abuse" },
                { emoji: "✉️", title: "Communications", desc: "Send updates and promotional materials" },
              ].map((f) => (
                <div className="pp-feature-item" key={f.title}>
                  <span className="pp-feature-emoji">{f.emoji}</span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3 — Cookie Policy */}
          <section id="cookie-policy" className="pp-section">
            <div className="pp-section-header">
              <div className="pp-section-icon">🍪</div>
              <h2>Cookie Policy</h2>
            </div>
            <p>
              Please refer to our Cookie Policy for detailed information about
              the use of cookies, including types of cookies used and instructions
              on how to manage your cookie preferences.
            </p>

            <div className="pp-subsection">
              <h3>Understanding Cookies</h3>
              <p>
                Cookies are small text files placed on your device to help us
                provide a better service. You can manage your cookie preferences
                through your browser settings.
              </p>
            </div>
          </section>

          {/* 4 — Data Retention */}
          <section id="data-retention" className="pp-section">
            <div className="pp-section-header">
              <div className="pp-section-icon">🗄️</div>
              <h2>Data Retention</h2>
            </div>
            <p>
              We will retain your personal information only for as long as
              necessary for the purposes set out in this Privacy Policy, unless a
              longer retention period is required or permitted by law.
            </p>

            <div className="pp-timeline">
              {[
                { dot: "✅", title: "Active Account", desc: "Data retained while your account is active" },
                { dot: "📅", title: "Post-Closure", desc: "Up to 7 years for legal and tax purposes" },
                { dot: "🗑️", title: "Deletion", desc: "Securely deleted after retention period" },
              ].map((t) => (
                <div className="pp-timeline-item" key={t.title}>
                  <div className="pp-timeline-dot">{t.dot}</div>
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5 — User Rights */}
          <section id="user-rights" className="pp-section">
            <div className="pp-section-header">
              <div className="pp-section-icon">⚖️</div>
              <h2>User Rights</h2>
            </div>
            <p>
              Under the General Data Protection Regulation (GDPR), you have
              certain rights regarding your personal information:
            </p>

            <div className="pp-rights-grid">
              {[
                { title: "5.1 Access", desc: "You have the right to request a copy of the personal information we hold about you." },
                { title: "5.2 Rectification", desc: "You have the right to request that we correct any inaccurate or incomplete personal information." },
                { title: "5.3 Deletion", desc: "You have the right to request the deletion of your personal information under certain circumstances." },
                { title: "5.4 Restriction", desc: "You have the right to request the restriction of processing of your personal information under certain circumstances." },
              ].map((r) => (
                <div className="pp-right-card" key={r.title}>
                  <h4>{r.title}</h4>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>

            <div className="pp-info-box" style={{ marginTop: 20 }}>
              <p>
                <strong>Exercise Your Rights:</strong> To exercise any of these
                rights, please contact our Data Protection Officer using the
                contact details provided at the end of this policy.
              </p>
            </div>
          </section>

          {/* 6 — Security */}
          <section id="security-measures" className="pp-section">
            <div className="pp-section-header">
              <div className="pp-section-icon">🛡️</div>
              <h2>Security Measures</h2>
            </div>
            <p>
              We implement appropriate technical and organisational measures to
              protect your personal information. However, no method of
              transmission over the internet is entirely secure, and we cannot
              guarantee absolute security.
            </p>

            <div className="pp-security-grid">
              {[
                { icon: "🔐", title: "Encryption", desc: "All data transmitted is encrypted using SSL/TLS technology" },
                { icon: "👁️", title: "Access Control", desc: "Strict access controls limit who can view your information" },
                { icon: "📡", title: "Monitoring", desc: "Continuous monitoring for security threats and breaches" },
                { icon: "📋", title: "Compliance", desc: "Regular audits to ensure compliance with data protection laws" },
              ].map((s) => (
                <div className="pp-security-item" key={s.title}>
                  <div className="icon">{s.icon}</div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7 — Disclosure */}
          <section id="disclosure" className="pp-section">
            <div className="pp-section-header">
              <div className="pp-section-icon">📢</div>
              <h2>Disclosure of Information</h2>
            </div>
            <p>
              We may disclose your personal information to third parties in the
              following circumstances:
            </p>

            <ul className="pp-bullet-list">
              <li><span><strong>With your explicit consent:</strong> When you have given us permission to share your information.</span></li>
              <li><span><strong>To comply with legal obligations:</strong> When required by law or legal process.</span></li>
              <li><span><strong>To protect our rights:</strong> When necessary to protect our legitimate interests, privacy, safety, or property.</span></li>
              <li><span><strong>In connection with a business transaction:</strong> If all or part of our company is involved in a sale, merger, or acquisition.</span></li>
            </ul>

            <div className="pp-info-box">
              <p>
                <strong>Important:</strong> We will never sell your personal
                information to third parties for marketing purposes without your
                explicit consent.
              </p>
            </div>
          </section>

          {/* 8 — Third-Party Links */}
          <section id="third-party" className="pp-section">
            <div className="pp-section-header">
              <div className="pp-section-icon">🔗</div>
              <h2>Third-Party Links</h2>
            </div>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these websites. We
              encourage you to read the privacy policies of these third-party
              sites.
            </p>

            <div className="pp-info-box">
              <p>
                <strong>External Links:</strong> When you click on third-party
                links, you leave our website and are subject to the privacy
                policies of those external sites.
              </p>
            </div>
          </section>

          {/* 9 — Children */}
          <section id="children-privacy" className="pp-section">
            <div className="pp-section-header">
              <div className="pp-section-icon">👶</div>
              <h2>Children's Privacy</h2>
            </div>
            <p>
              Our website is not intended for children under the age of 13. We do
              not knowingly collect or maintain personal information from children
              under 13 years of age. If you are a parent or guardian and believe
              your child has provided us with personal information, please contact
              us and we will take appropriate action to remove the information.
            </p>

            <div className="pp-subsection">
              <h3>Protection of Minors</h3>
              <p>
                We are committed to protecting children's privacy online. If we
                become aware that we have collected personal information from a
                child under 13, we will delete it immediately.
              </p>
            </div>
          </section>

          {/* 10 — Updates */}
          <section id="policy-updates" className="pp-section">
            <div className="pp-section-header">
              <div className="pp-section-icon">🔄</div>
              <h2>Updates to the Privacy Policy</h2>
            </div>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. The date of the latest revision will be
              indicated at the top of the policy.
            </p>

            <div className="pp-info-box">
              <p>
                <strong>Stay Informed:</strong> We recommend reviewing this
                policy periodically. Continued use of our services after changes
                constitutes your acceptance of the updated policy.
              </p>
            </div>

            <p style={{ marginTop: 16, fontWeight: 600, color: "var(--text-main)" }}>
              Last Updated: January 2025
            </p>
          </section>

          {/* 11 — Contact */}
          <section id="contact-info" className="pp-section">
            <div className="pp-section-header">
              <div className="pp-section-icon">📬</div>
              <h2>Contact Information</h2>
            </div>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at the following address:
            </p>

            <div className="pp-contact-grid">
              <div className="pp-contact-card">
                <h4>Zoiko Mobile</h4>
                <p>🏢 Berkeley Suite, 35 Berkeley Square, Mayfair, London W1J 5BF</p>
                <p>📧 <a href="mailto:legal@zoikomobile.co.uk">legal@zoikomobile.co.uk</a></p>
                <p>📞 <a href="tel:+447071646399">+44 7071 646 399</a></p>
              </div>
              <div className="pp-contact-card">
                <h4>Data Protection Officer</h4>
                <p>
                  For specific privacy-related inquiries, contact our dedicated
                  Data Protection Officer who will assist you with any concerns
                  regarding your personal data.
                </p>
              </div>
            </div>

            <button className="pp-cta-btn">
              📋 View Plans
            </button>
          </section>

        </main>
      </div>
    </div>
    </>
  );
}
export default Privacypolicy;
