import './style.css';
import { useState, useEffect } from "react";

const navItems = [
  { id: "introduction",        label: "Introduction",                  num: "01" },
  { id: "policy-statement",    label: "Policy Statement",              num: "02" },
  { id: "org-responsibility",  label: "Organizational Responsibility", num: "03" },
  { id: "supply-chain",        label: "Supply Chain",                  num: "04" },
  { id: "training",            label: "Training and Awareness",        num: "05" },
  { id: "reporting",           label: "Reporting and Whistleblowing",  num: "06" },
  { id: "transparency",        label: "Transparency",                  num: "07" },
  { id: "contact",             label: "Contact Information",           num: "08" },
];

function Modernslaverypolicy() {
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
    <div className="ms-root">

      {/* ── Header ── */}
      <header className="ms-header">
        <div className="ms-header-inner">
          <p className="ms-breadcrumb">Home / <span>Modern Slavery Policy</span></p>
          <h1>Modern Slavery Policy</h1>
          <p className="ms-header-subtitle">
            Our commitment to ethical business practices — combating modern
            slavery and human trafficking in all its forms.
          </p>
          <div className="ms-header-badge">Modern Slavery Act 2015</div>
        </div>
      </header>

      {/* ── Layout ── */}
      <div className="ms-layout">

        {/* ── Sidebar ── */}
        <aside className="ms-sidebar">
          <nav className="ms-nav-card">
            <div className="ms-nav-title">Quick Navigation</div>
            <ul className="ms-nav-list">
              {navItems.map(({ id, label, num }) => (
                <li key={id}>
                  <button
                    className={`ms-nav-link ${activeId === id ? "active" : ""}`}
                    onClick={() => scrollTo(id)}
                  >
                    <span className="ms-nav-num">{num}</span>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* ── Main Content ── */}
        <main className="ms-content">

          {/* Intro Banner */}
          <div className="ms-intro-banner">
            <p>
              Zoiko Mobile is committed to combating modern slavery and human
              trafficking in all its forms. This Modern Slavery Policy outlines
              our commitment to taking proactive measures to prevent such
              practices within our organisation and supply chains.
            </p>
          </div>

          {/* 1 — Introduction */}
          <section id="introduction" className="ms-section">
            <div className="ms-section-header">
              <div className="ms-section-icon">📋</div>
              <h2>Introduction</h2>
            </div>
            <p>
              Zoiko Mobile is committed to combating modern slavery and human
              trafficking in all its forms. This Modern Slavery Policy outlines
              our commitment to taking proactive measures to prevent such
              practices within our organisation and supply chains.
            </p>

            <div className="ms-commitment-grid">
              {[
                { icon: "🚫", title: "Zero Tolerance",      desc: "We have a strict zero-tolerance approach to modern slavery and human trafficking." },
                { icon: "🔍", title: "Proactive Measures",  desc: "We actively identify and mitigate risks of modern slavery across our operations." },
                { icon: "🤝", title: "Ethical Partnerships", desc: "We only work with suppliers and partners who share our ethical values." },
                { icon: "📢", title: "Raising Awareness",   desc: "We educate our employees and stakeholders on identifying modern slavery risks." },
              ].map((c) => (
                <div className="ms-commitment-card" key={c.title}>
                  <span className="ms-commitment-icon">{c.icon}</span>
                  <div>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2 — Policy Statement */}
          <section id="policy-statement" className="ms-section">
            <div className="ms-section-header">
              <div className="ms-section-icon">📜</div>
              <h2>Policy Statement</h2>
            </div>

            <div className="ms-subsection">
              <h3>2.1 Our Commitment</h3>
              <p>
                Zoiko Mobile is dedicated to ensuring that modern slavery and
                human trafficking have no place in our business operations. We
                uphold the principles of transparency, accountability, and
                ethical conduct in our approach to business.
              </p>
            </div>

            <div className="ms-subsection">
              <h3>2.2 Compliance</h3>
              <p>
                We are committed to complying with the provisions of the Modern
                Slavery Act 2015 and other relevant legislation, taking necessary
                steps to prevent slavery and human trafficking within our
                operations.
              </p>
            </div>

            <div className="ms-principles-grid">
              {[
                { icon: "👁️", label: "Transparency",    desc: "Open and honest reporting on our anti-slavery efforts" },
                { icon: "⚖️", label: "Accountability",  desc: "Clear ownership of responsibilities at all levels" },
                { icon: "🌱", label: "Ethical Conduct", desc: "Upholding the highest standards in all our dealings" },
                { icon: "📋", label: "Compliance",      desc: "Full adherence to the Modern Slavery Act 2015" },
              ].map((p) => (
                <div className="ms-principle-card" key={p.label}>
                  <div className="ms-principle-icon">{p.icon}</div>
                  <h4>{p.label}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3 — Organizational Responsibility */}
          <section id="org-responsibility" className="ms-section">
            <div className="ms-section-header">
              <div className="ms-section-icon">🏢</div>
              <h2>Organizational Responsibility</h2>
            </div>
            <p>
              Responsibility for combating modern slavery and human trafficking
              is upheld at all levels of the organisation.
            </p>

            <div className="ms-subsection">
              <h3>3.1 Leadership</h3>
              <p>
                Senior leadership at Zoiko Mobile takes ultimate responsibility
                for this policy and ensures that adequate resources are allocated
                to implement it effectively across the organisation.
              </p>
            </div>

            <div className="ms-subsection">
              <h3>3.2 Employees</h3>
              <p>
                All employees of Zoiko Mobile are expected to act in accordance
                with this policy and report any concerns related to modern slavery
                or human trafficking through our confidential reporting channels.
              </p>
            </div>

            <div className="ms-subsection">
              <h3>3.3 Suppliers & Partners</h3>
              <p>
                Our suppliers and business partners are required to comply with
                this policy and demonstrate their own commitment to preventing
                modern slavery within their operations and supply chains.
              </p>
            </div>

            <div className="ms-org-levels">
              {[
                { step: "01", title: "Board & Leadership",    desc: "Sets the tone, approves policy, and allocates resources for anti-slavery measures." },
                { step: "02", title: "Management Teams",      desc: "Implements policy in day-to-day operations and monitors employee compliance." },
                { step: "03", title: "All Employees",         desc: "Act in accordance with the policy and report any concerns through proper channels." },
                { step: "04", title: "Suppliers & Partners",  desc: "Must comply with our standards and demonstrate their own ethical commitments." },
              ].map((l) => (
                <div className="ms-org-level" key={l.step}>
                  <div className="ms-org-step">{l.step}</div>
                  <div>
                    <h4>{l.title}</h4>
                    <p>{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4 — Supply Chain */}
          <section id="supply-chain" className="ms-section">
            <div className="ms-section-header">
              <div className="ms-section-icon">🔗</div>
              <h2>Supply Chain</h2>
            </div>
            <p>
              We take a rigorous approach to managing our supply chain to prevent
              modern slavery and human trafficking at every level.
            </p>

            <div className="ms-supply-grid">
              <div className="ms-supply-card ms-supply-featured">
                <div className="ms-supply-card-icon">🤝</div>
                <h4>Supplier Engagement</h4>
                <p>
                  Zoiko Mobile works with suppliers who share our commitment to
                  preventing modern slavery and human trafficking. We require our
                  suppliers to adhere to this policy and to demonstrate their
                  compliance through transparent reporting and auditing.
                </p>
              </div>

              <div className="ms-supply-card ms-supply-featured">
                <div className="ms-supply-card-icon">🔎</div>
                <h4>Due Diligence</h4>
                <p>
                  We conduct due diligence to assess and address risks within our
                  supply chain. We strive to identify and mitigate risks of modern
                  slavery and human trafficking, with a particular focus on
                  high-risk areas and geographies.
                </p>
              </div>

              <div className="ms-supply-card ms-supply-featured">
                <div className="ms-supply-card-icon">📊</div>
                <h4>Audits and Monitoring</h4>
                <p>
                  Periodic audits and monitoring of our supply chain are conducted
                  to ensure ongoing compliance with this policy and applicable law.
                  Non-compliant suppliers are subject to remediation or termination.
                </p>
              </div>
            </div>

            <div className="ms-info-box">
              <p>
                <strong>Supplier Code of Conduct:</strong> All suppliers are
                required to sign our Supplier Code of Conduct, which includes
                specific provisions against modern slavery, forced labour, and
                child labour.
              </p>
            </div>
          </section>

          {/* 5 — Training and Awareness */}
          <section id="training" className="ms-section">
            <div className="ms-section-header">
              <div className="ms-section-icon">🎓</div>
              <h2>Training and Awareness</h2>
            </div>

            <div className="ms-subsection">
              <h3>5.1 Training</h3>
              <p>
                We provide training to our employees and suppliers to raise
                awareness of modern slavery and human trafficking risks and to
                equip them with the knowledge and tools necessary to identify and
                address such risks.
              </p>
            </div>

            <div className="ms-training-list">
              {[
                { icon: "📚", title: "Onboarding Training",       desc: "All new employees complete mandatory modern slavery awareness training as part of their induction programme." },
                { icon: "🔄", title: "Annual Refresher Training",  desc: "Regular updates ensure employees stay informed on latest legislation, risks, and best practices." },
                { icon: "🎯", title: "Role-Specific Training",     desc: "Employees in procurement, HR, and supply chain roles receive specialist training relevant to their functions." },
                { icon: "🌐", title: "Supplier Training",          desc: "Key suppliers are provided with guidance and training on our modern slavery expectations and reporting procedures." },
              ].map((t) => (
                <div className="ms-training-item" key={t.title}>
                  <div className="ms-training-icon">{t.icon}</div>
                  <div>
                    <h4>{t.title}</h4>
                    <p>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6 — Reporting and Whistleblowing */}
          <section id="reporting" className="ms-section">
            <div className="ms-section-header">
              <div className="ms-section-icon">📣</div>
              <h2>Reporting and Whistleblowing</h2>
            </div>

            <div className="ms-subsection">
              <h3>6.1 Reporting Channels</h3>
              <p>
                Zoiko Mobile maintains confidential reporting channels for
                employees, suppliers, and other stakeholders to report concerns
                related to modern slavery or human trafficking.
              </p>
            </div>

            <div className="ms-subsection">
              <h3>6.2 Investigation Process</h3>
              <p>
                Reports are thoroughly investigated, and appropriate actions are
                taken in response to concerns or allegations of modern slavery or
                human trafficking. Whistleblowers are protected from any form of
                retaliation.
              </p>
            </div>

            <div className="ms-reporting-grid">
              {[
                { icon: "📧", title: "Email Reporting",          desc: "Submit concerns confidentially via our dedicated email channel" },
                { icon: "📞", title: "Telephone Hotline",        desc: "Anonymous reporting available via our confidential telephone hotline" },
                { icon: "👤", title: "Anonymous Reporting",      desc: "Reports can be made anonymously without fear of identification" },
                { icon: "🛡️", title: "Whistleblower Protection", desc: "Full legal protection guaranteed for anyone raising genuine concerns" },
              ].map((r) => (
                <div className="ms-reporting-card" key={r.title}>
                  <div className="ms-reporting-icon">{r.icon}</div>
                  <h4>{r.title}</h4>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>

            <div className="ms-info-box" style={{ marginTop: 20 }}>
              <p>
                <strong>Non-Retaliation:</strong> Zoiko Mobile guarantees that
                anyone raising a genuine concern about modern slavery in good
                faith will not face any form of retaliation, dismissal, or
                disciplinary action.
              </p>
            </div>
          </section>

          {/* 7 — Transparency */}
          <section id="transparency" className="ms-section">
            <div className="ms-section-header">
              <div className="ms-section-icon">🌐</div>
              <h2>Transparency</h2>
            </div>

            <div className="ms-subsection">
              <h3>7.1 Transparency in Reporting</h3>
              <p>
                Zoiko Mobile commits to providing annual transparency reports in
                compliance with the Modern Slavery Act 2015, outlining the steps
                taken to prevent modern slavery and human trafficking within our
                organisation and supply chain.
              </p>
            </div>

            <div className="ms-transparency-steps">
              {[
                { step: "01", icon: "🗓️", title: "Annual Reporting",   desc: "We publish an annual Modern Slavery Statement in compliance with the Modern Slavery Act 2015." },
                { step: "02", icon: "📊", title: "Progress Tracking",  desc: "We track and report on the effectiveness of our anti-slavery measures and outcomes each year." },
                { step: "03", icon: "🔓", title: "Public Disclosure",  desc: "Our transparency reports are published publicly to ensure stakeholder accountability." },
              ].map((s) => (
                <div className="ms-transparency-step" key={s.step}>
                  <div className="ms-trans-step-num">{s.step}</div>
                  <div className="ms-trans-emoji">{s.icon}</div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="ms-info-box" style={{ marginTop: 20 }}>
              <p>
                <strong>Annual Statement:</strong> Our Modern Slavery Act
                transparency statement is reviewed and approved by the Board of
                Directors each year and published on our website.
              </p>
            </div>
          </section>

          {/* 8 — Contact Information */}
          <section id="contact" className="ms-section">
            <div className="ms-section-header">
              <div className="ms-section-icon">📬</div>
              <h2>Contact Information</h2>
            </div>
            <p>
              If you have any questions or require further information about our
              Modern Slavery Policy, please contact us at the following address:
            </p>

            <div className="ms-contact-grid">
              <div className="ms-contact-card">
                <h4>Zoiko Mobile</h4>
                <p>🏢 Berkeley Suite, 35 Berkeley Square, Mayfair, London W1J 5BF</p>
                <p>📧 <a href="mailto:legal@zoikomobile.co.uk">legal@zoikomobile.co.uk</a></p>
                <p>📞 <a href="tel:+447071646399">+44 7071 646 399</a></p>
              </div>
              <div className="ms-contact-card">
                <h4>Report a Concern</h4>
                <p>
                  To report a concern related to modern slavery or human
                  trafficking, please contact our confidential reporting channel.
                </p>
                <p>📧 <a href="mailto:compliance@zoikomobile.co.uk">compliance@zoikomobile.co.uk</a></p>
                <p>🕒 Mon–Sat: 8:30am – 8:30pm</p>
                <p>🕒 Sun: 10:00am – 6:00pm</p>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="ms-closing-banner">
              <div className="ms-closing-icon">🌍</div>
              <div>
                <h3>Our Unwavering Commitment</h3>
                <p>
                  Zoiko Mobile is unwavering in its commitment to the eradication
                  of modern slavery and human trafficking. We believe in a world
                  where every individual is treated with dignity, respect, and
                  fairness. Thank you for choosing Zoiko Mobile and for supporting
                  our mission to end modern slavery.
                </p>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default Modernslaverypolicy;