import './style.css';
import { useState, useEffect } from "react";

const navItems = [
  { id: "introduction",    label: "Introduction of ESG Policy",          num: "01" },
  { id: "environmental",   label: "Environmental Responsibility",         num: "02" },
  { id: "social",          label: "Social Responsibility",                num: "03" },
  { id: "governance",      label: "Governance and Ethics",                num: "04" },
  { id: "reporting",       label: "Reporting and Continuous Improvement", num: "05" },
  { id: "compliance",      label: "Compliance",                           num: "06" },
  { id: "enhancement",     label: "Continuous Enhancement",               num: "07" },
  { id: "conclusion",      label: "Conclusion",                           num: "08" },
];

function EsgPolicy() {
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
    <div className="esg-root">

      {/* ── Header ── */}
      <header className="esg-header">
        <div className="esg-header-inner">
          <p className="esg-breadcrumb">Home / <span>ESG Policy</span></p>
          <h1>Environmental, Social, and Governance (ESG) Policy</h1>
          <p className="esg-header-subtitle">
            Our commitment to responsible corporate citizenship and
            sustainability — building a better future for people and planet.
          </p>
          <div className="esg-header-pills">
            <span className="esg-pill esg-pill-e">🌿 Environmental</span>
            <span className="esg-pill esg-pill-s">🤝 Social</span>
            <span className="esg-pill esg-pill-g">⚖️ Governance</span>
          </div>
        </div>
      </header>

      {/* ── Layout ── */}
      <div className="esg-layout">

        {/* ── Sidebar ── */}
        <aside className="esg-sidebar">
          <nav className="esg-nav-card">
            <div className="esg-nav-title">Quick Navigation</div>
            <ul className="esg-nav-list">
              {navItems.map(({ id, label, num }) => (
                <li key={id}>
                  <button
                    className={`esg-nav-link ${activeId === id ? "active" : ""}`}
                    onClick={() => scrollTo(id)}
                  >
                    <span className="esg-nav-num">{num}</span>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* ── Main Content ── */}
        <main className="esg-content">

          {/* Intro Banner */}
          <div className="esg-intro-banner">
            <p>
              Zoiko Mobile, a registered trademark of Zoiko Telecom Ltd,
              establishes this Environmental, Social, and Governance (ESG) Policy
              to formalise our commitment to responsible corporate citizenship and
              sustainability. This policy outlines our core principles and
              dedication to ESG principles.
            </p>
          </div>

          {/* ESG Pillars Overview */}
          <div className="esg-pillars">
            <div className="esg-pillar esg-pillar-e">
              <div className="esg-pillar-icon">🌿</div>
              <h3>Environmental</h3>
              <p>Reducing our carbon footprint and driving sustainable innovation across all operations.</p>
            </div>
            <div className="esg-pillar esg-pillar-s">
              <div className="esg-pillar-icon">🤝</div>
              <h3>Social</h3>
              <p>Fair labour practices, community engagement, and putting customers at the centre of everything.</p>
            </div>
            <div className="esg-pillar esg-pillar-g">
              <div className="esg-pillar-icon">⚖️</div>
              <h3>Governance</h3>
              <p>Ethical conduct, board diversity, transparency, and robust risk management.</p>
            </div>
          </div>

          {/* 1 — Introduction */}
          <section id="introduction" className="esg-section">
            <div className="esg-section-header">
              <div className="esg-section-icon">📋</div>
              <h2>Introduction of ESG Policy</h2>
            </div>
            <p>
              Zoiko Mobile, a registered trademark of Zoiko Telecom Ltd,
              establishes this Environmental, Social, and Governance (ESG) Policy
              to formalise our commitment to responsible corporate citizenship and
              sustainability. This policy outlines our core principles and
              dedication to ESG principles.
            </p>
            <div className="esg-intro-grid">
              {[
                { icon: "🎯", title: "Our Purpose",      desc: "To provide reliable, affordable connectivity while driving positive impact for our communities and the environment." },
                { icon: "🌍", title: "Our Vision",       desc: "A sustainable, inclusive world where technology empowers everyone equitably." },
                { icon: "📌", title: "Our Commitment",   desc: "To embed ESG principles into every aspect of our business strategy and operations." },
                { icon: "📊", title: "Our Approach",     desc: "Transparent reporting, continuous improvement, and meaningful stakeholder engagement." },
              ].map((item) => (
                <div className="esg-intro-card" key={item.title}>
                  <span className="esg-intro-icon">{item.icon}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2 — Environmental Responsibility */}
          <section id="environmental" className="esg-section">
            <div className="esg-section-header">
              <div className="esg-section-icon esg-icon-e">🌿</div>
              <h2>Environmental Responsibility</h2>
            </div>
            <p>
              Zoiko Mobile is committed to minimising our environmental impact and
              leading by example in sustainable business practices across all our
              operations and supply chain.
            </p>

            <div className="esg-env-grid">
              <div className="esg-env-card">
                <div className="esg-env-card-header">
                  <span className="esg-env-emoji">✅</span>
                  <h4>Compliance</h4>
                </div>
                <p>
                  Zoiko Mobile is committed to strict compliance with all relevant
                  environmental laws and regulations, ensuring that our operations
                  adhere to the highest environmental standards.
                </p>
              </div>

              <div className="esg-env-card">
                <div className="esg-env-card-header">
                  <span className="esg-env-emoji">♻️</span>
                  <h4>Resource Efficiency</h4>
                </div>
                <p>
                  We will actively work to minimise resource consumption and reduce
                  our carbon footprint by embracing energy-efficient practices and
                  waste reduction strategies across our operations.
                </p>
              </div>

              <div className="esg-env-card">
                <div className="esg-env-card-header">
                  <span className="esg-env-emoji">💡</span>
                  <h4>Innovation for Sustainability</h4>
                </div>
                <p>
                  Zoiko Mobile will drive innovation in the development of
                  environmentally friendly and energy-efficient products and
                  services, contributing to a more sustainable environment.
                </p>
              </div>
            </div>

            <div className="esg-env-stats">
              {[
                { icon: "🌱", value: "Net Zero",   label: "Carbon Target"        },
                { icon: "⚡", value: "100%",        label: "Renewable Energy Goal" },
                { icon: "🗑️", value: "Zero Waste",  label: "Waste Strategy"       },
                { icon: "🌳", value: "Annual",      label: "Environmental Audit"  },
              ].map((s) => (
                <div className="esg-stat-card" key={s.label}>
                  <span className="esg-stat-icon">{s.icon}</span>
                  <strong>{s.value}</strong>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3 — Social Responsibility */}
          <section id="social" className="esg-section">
            <div className="esg-section-header">
              <div className="esg-section-icon esg-icon-s">🤝</div>
              <h2>Social Responsibility</h2>
            </div>
            <p>
              We believe that business success and social responsibility go hand
              in hand. Zoiko Mobile is committed to making a positive impact on
              our employees, customers, and the communities we serve.
            </p>

            <div className="esg-social-grid">
              <div className="esg-social-card">
                <div className="esg-social-icon">⚖️</div>
                <h4>Fair Labour Practices</h4>
                <p>
                  Zoiko Mobile is committed to maintaining fair labour practices,
                  which include providing fair wages, ensuring safe and healthy
                  working conditions, and respecting workers' rights.
                </p>
                <ul className="esg-social-list">
                  <li>Fair and competitive wages for all staff</li>
                  <li>Safe and healthy working environments</li>
                  <li>Respect for workers' rights and dignity</li>
                  <li>Equal opportunities for all employees</li>
                </ul>
              </div>

              <div className="esg-social-card">
                <div className="esg-social-icon">🏘️</div>
                <h4>Community Engagement</h4>
                <p>
                  We actively engage with the communities where we operate,
                  supporting social development, philanthropy, and volunteerism to
                  make a positive impact on society.
                </p>
                <ul className="esg-social-list">
                  <li>Local community investment programmes</li>
                  <li>Employee volunteering initiatives</li>
                  <li>Charitable giving and philanthropy</li>
                  <li>Digital inclusion partnerships</li>
                </ul>
              </div>

              <div className="esg-social-card">
                <div className="esg-social-icon">⭐</div>
                <h4>Customer Focus</h4>
                <p>
                  Our top priority is customer satisfaction. We achieve this by
                  delivering high-quality products and services, maintaining
                  transparency, and conducting our business with the utmost
                  integrity.
                </p>
                <ul className="esg-social-list">
                  <li>High-quality, reliable products and services</li>
                  <li>Transparent pricing and communication</li>
                  <li>Proactive customer support</li>
                  <li>Protecting vulnerable customers</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4 — Governance and Ethics */}
          <section id="governance" className="esg-section">
            <div className="esg-section-header">
              <div className="esg-section-icon esg-icon-g">⚖️</div>
              <h2>Governance and Ethics</h2>
            </div>
            <p>
              Strong governance and ethical conduct are the foundation of
              everything we do at Zoiko Mobile. We hold ourselves to the highest
              standards of integrity, accountability, and transparency.
            </p>

            <div className="esg-gov-grid">
              {[
                {
                  icon: "🧭",
                  title: "Ethical Conduct",
                  desc: "Zoiko Mobile conducts its business with the highest ethical standards, guided by a robust code of conduct that applies to all employees and stakeholders.",
                },
                {
                  icon: "👥",
                  title: "Board Diversity",
                  desc: "Our board of directors strives to be diverse in terms of expertise, gender, and background, encouraging a broader range of perspectives in our decision-making processes.",
                },
                {
                  icon: "🔓",
                  title: "Transparency & Accountability",
                  desc: "We are committed to maintaining transparency in financial reporting, corporate governance, and decision-making processes, while adhering to legal and regulatory requirements.",
                },
                {
                  icon: "🛡️",
                  title: "Risk Management",
                  desc: "Zoiko Mobile actively assesses and manages risks to the business, including those related to ESG issues, to safeguard the long-term interests of our stakeholders.",
                },
              ].map((g) => (
                <div className="esg-gov-card" key={g.title}>
                  <div className="esg-gov-icon">{g.icon}</div>
                  <h4>{g.title}</h4>
                  <p>{g.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5 — Reporting and Continuous Improvement */}
          <section id="reporting" className="esg-section">
            <div className="esg-section-header">
              <div className="esg-section-icon">📊</div>
              <h2>Reporting and Continuous Improvement</h2>
            </div>
            <p>
              Zoiko Mobile is committed to regularly assessing and reporting on
              our ESG performance to ensure transparency and accountability to our
              stakeholders.
            </p>
            <p>
              We actively seek feedback from stakeholders and engage with them to
              align our ESG initiatives with their expectations.
            </p>

            <div className="esg-reporting-steps">
              {[
                { step: "01", icon: "📋", title: "Assess",   desc: "Regular assessment of our ESG performance against defined metrics and industry benchmarks." },
                { step: "02", icon: "📢", title: "Report",   desc: "Annual ESG reports published transparently and made available to all stakeholders." },
                { step: "03", icon: "💬", title: "Engage",   desc: "Active stakeholder engagement to gather feedback and align ESG initiatives with expectations." },
                { step: "04", icon: "🔄", title: "Improve",  desc: "Continuous improvement of ESG practices based on feedback, data, and evolving standards." },
              ].map((s) => (
                <div className="esg-reporting-step" key={s.step}>
                  <div className="esg-step-num">{s.step}</div>
                  <div className="esg-step-emoji">{s.icon}</div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="esg-info-box">
              <p>
                <strong>Stakeholder Engagement:</strong> We regularly consult
                with customers, employees, investors, and community partners to
                ensure our ESG strategy reflects the priorities of those we serve.
              </p>
            </div>
          </section>

          {/* 6 — Compliance */}
          <section id="compliance" className="esg-section">
            <div className="esg-section-header">
              <div className="esg-section-icon">✅</div>
              <h2>Compliance</h2>
            </div>
            <p>
              Zoiko Mobile commits to full compliance with all relevant laws,
              regulations, and industry standards pertaining to ESG issues.
            </p>

            <div className="esg-compliance-grid">
              {[
                { icon: "🌍", title: "Environmental Law",    desc: "Full compliance with UK and international environmental legislation and standards." },
                { icon: "👷", title: "Labour Standards",     desc: "Adherence to UK employment law, health & safety regulations, and international labour standards." },
                { icon: "📜", title: "Corporate Governance", desc: "Compliance with UK Corporate Governance Code and relevant financial regulations." },
                { icon: "♻️", title: "Sustainability Standards", desc: "Alignment with recognised sustainability frameworks and reporting standards." },
                { icon: "🔒", title: "Data Protection",      desc: "Full compliance with GDPR, Data Protection Act 2018, and related privacy regulations." },
                { icon: "⚖️", title: "Equality & Inclusion", desc: "Compliance with the Equality Act 2010 and commitment to diversity and inclusion." },
              ].map((c) => (
                <div className="esg-compliance-card" key={c.title}>
                  <span className="esg-compliance-icon">{c.icon}</span>
                  <div>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7 — Continuous Enhancement */}
          <section id="enhancement" className="esg-section">
            <div className="esg-section-header">
              <div className="esg-section-icon">🚀</div>
              <h2>Continuous Enhancement</h2>
            </div>
            <p>
              We continuously review and enhance our ESG practices, setting
              increasingly higher standards and achieving better performance in
              environmental, social, and governance matters.
            </p>

            <div className="esg-enhancement-list">
              {[
                { icon: "📈", title: "Annual Target Setting",        desc: "Each year we set more ambitious ESG targets, building on our previous achievements and learnings." },
                { icon: "🔬", title: "Innovation & Research",        desc: "We invest in research and innovation to develop new approaches to ESG challenges." },
                { icon: "🤝", title: "Industry Collaboration",       desc: "We collaborate with industry peers, regulators, and NGOs to share best practices and drive sector-wide improvement." },
                { icon: "📊", title: "Performance Benchmarking",     desc: "Our ESG performance is benchmarked against leading industry standards and peer companies." },
              ].map((e) => (
                <div className="esg-enhancement-item" key={e.title}>
                  <div className="esg-enhancement-icon">{e.icon}</div>
                  <div>
                    <h4>{e.title}</h4>
                    <p>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="esg-info-box" style={{ marginTop: 20 }}>
              <p>
                <strong>Our Commitment:</strong> ESG improvement is not a
                destination but an ongoing journey. We are committed to raising
                the bar year on year across all three pillars.
              </p>
            </div>
          </section>

          {/* 8 — Conclusion */}
          <section id="conclusion" className="esg-section">
            <div className="esg-section-header">
              <div className="esg-section-icon">🌍</div>
              <h2>Conclusion</h2>
            </div>
            <p>
              This ESG Policy underscores Zoiko Mobile's unwavering commitment to
              sustainable and responsible business practices, focusing on
              environmental conservation, social responsibility, and sound
              governance.
            </p>

            <div className="esg-conclusion-banner">
              <div className="esg-conclusion-icon">🌟</div>
              <div>
                <h3>Our Aim</h3>
                <p>
                  Our aim is to be a leader in ESG initiatives, providing value
                  to our stakeholders and contributing to a more sustainable and
                  inclusive world. This policy is a living document — reviewed and
                  updated regularly to reflect our progress and evolving
                  commitments.
                </p>
              </div>
            </div>

            <div className="esg-conclusion-grid">
              <div className="esg-conclusion-card esg-conclusion-e">
                <h4>🌿 Environmental</h4>
                <p>Leading the way in sustainable telecom operations with net-zero ambitions.</p>
              </div>
              <div className="esg-conclusion-card esg-conclusion-s">
                <h4>🤝 Social</h4>
                <p>Empowering communities, protecting customers, and valuing every employee.</p>
              </div>
              <div className="esg-conclusion-card esg-conclusion-g">
                <h4>⚖️ Governance</h4>
                <p>Transparent, ethical, accountable leadership at every level of our business.</p>
              </div>
            </div>

            <div className="esg-contact-card">
              <h4>📬 Questions about our ESG Policy?</h4>
              <p>
                For any queries about this ESG Policy or our sustainability
                initiatives, please contact us:
              </p>
              <p>🏢 Berkeley Suite, 35 Berkeley Square, Mayfair, London W1J 5BF</p>
              <p>📧 <a href="mailto:legal@zoikomobile.co.uk">legal@zoikomobile.co.uk</a></p>
              <p>📞 <a href="tel:+447071646399">+44 7071 646 399</a></p>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default EsgPolicy;