import "./Style.css";         
import { useState } from "react";

/* ── Data ── */
const categories = [
  { icon: "💳", title: "Billing & Payments",  desc: "Questions about bills, charges, and payment methods", count: "8 questions" },
  { icon: "📱", title: "Plans & Services",     desc: "Information about mobile plans, data, and features",  count: "6 questions" },
  { icon: "🔧", title: "Technical Support",    desc: "Network issues, device setup, and troubleshooting",   count: "5 questions" },
  { icon: "👤", title: "Account Management",   desc: "SIM registration, account details, and security",     count: "4 questions" },
];

const faqs = {
  "Billing & Payments": [
    "How can I receive texts with Zoiko Mobile offers and promotions?",
    "Why have I been charged for internet access when I use WiFi?",
    "How can I get a copy of my itemised bill?",
    "How can I check my billing details?",
  ],
  "Plans & Services": [
    "Is it mandatory to register my details to use Zoiko Mobile services?",
    "Do you provide locked or unlocked handsets?",
    "Do you offer contract services?",
  ],
  "Technical Support": [
    "How to Register Your Zoiko Mobile SIM?",
    "Why can't I send or receive texts?",
    "How do I activate roaming using Zoiko Mobile?",
  ],
  "Account Management": [
    "I have just registered MyZoiko Mobile SIM. Why am I still unable to activate a plan?",
    "How do I check my balance?",
    "How do I check the call rates?",
    "How do I find my Zoiko Mobile number?",
  ],
};

const popularTopics = [
  "How to top up my account",
  "Setting up mobile internet",
  "International calling rates",
  "Network coverage checker",
  "Lost or stolen phone reporting",
  "Plan upgrade options",
];

const appFeatures = [
  "Check balance instantly",
  "Top up with one tap",
  "View usage history",
  "Manage your plan",
  "Get exclusive offers",
];

/* ── AccordionItem ── */
function AccordionItem({ question }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`zs-accordion-item ${open ? "zs-open" : ""}`}>
      <button className="zs-accordion-header" onClick={() => setOpen(!open)}>
        <span className="zs-accordion-question">{question}</span>
        <span className={`zs-accordion-icon ${open ? "zs-rotated" : ""}`}>
          <svg
            width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <div className="zs-accordion-body">
        <div className="zs-accordion-body-inner">
          For assistance with this topic, please contact our support team or
          explore our detailed help articles below.
        </div>
      </div>
    </div>
  );
}

/* ── Main Export ── */
export default function Faqs() {
  return (
    <>
      {/* ════════════════ HERO ════════════════ */}
      <section className="faq-hero">
        <div className="faq-hero-content">
          <h1>Got Questions?</h1>
          <h3>Zoiko's Got Answers!</h3>
          <p>Find instant solutions to your mobile queries with our comprehensive help center</p>
          <div className="faq-search">
            <svg
              className="search-icon" width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="#2d8c6e" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Search for answers..." />
          </div>
        </div>
      </section>

      {/* ════════════════ QUICK HELP CATEGORIES ════════════════ */}
      <section className="quick-help">
        <h2>Quick Help Categories</h2>
        <div className="quick-help-grid">
          {categories.map((item, i) => (
            <div className="quick-help-card" key={i}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="question-badge">{item.count}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════ SUPPORT LAYOUT ════════════════ */}
      <div className="zs-page-wrapper">
        <div className="zs-page-container">

          {/* ── Left: hero card + FAQ accordions ── */}
          <div className="zs-main-content">

            <div className="zs-hero-card">
              <h1>How Zoiko Mobile Help and Support Team helps?</h1>
              <p>
                Welcome to our Zoiko Mobile Help and Support hub, where we're here to assist you
                with a wide range of services. Whether you have questions about your plan, need
                technical support, or require help with billing and account management, our
                dedicated customer support team is ready to help.
              </p>
              <p>
                Explore our FAQs for quick answers to common inquiries or reach out directly for
                personalized assistance. From troubleshooting and upgrading mobile plans to
                addressing network issues and roaming support, we've got you covered. Feel free to
                contact us for any queries regarding lost or stolen phones, billing disputes, or
                assistance with activations and deactivations. Your satisfaction is our priority,
                and we're here to ensure a smooth and seamless mobile experience for you.
              </p>
            </div>

            {Object.entries(faqs).map(([section, questions]) => (
              <div key={section} className="zs-faq-section">
                <h2>{section}</h2>
                {questions.map((q) => (
                  <AccordionItem key={q} question={q} />
                ))}
              </div>
            ))}
          </div>

          {/* ── Right: Sidebar ── */}
          <div className="zs-sidebar">

            {/* Need More Help */}
            <div className="zs-sidebar-card">
              <h3>Need More Help?</h3>
              <div className="zs-section-underline" />
              <p>Can't find what you're looking for? Our support team is here to help!</p>

              {/* Call Us Now */}
              <div className="zs-contact-card-green">
                <span className="zs-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
                             A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67
                             A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81
                             a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27
                             a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7
                             A2 2 0 0122 16.92z"/>
                  </svg>
                </span>
                <div>
                  <div className="zs-contact-title-white">Call Us Now</div>
                  <div className="zs-contact-text-white">333 (from Zoiko mobile)</div>
                  <div className="zs-contact-text-white">0333 004 0333 (other networks)</div>
                </div>
              </div>

              {/* Live Chat */}
              <div className="zs-contact-card">
                <span className="zs-contact-icon-gray">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>
                </span>
                <div>
                  <div className="zs-contact-title-green">Live Chat</div>
                  <div className="zs-contact-text-gray">Available 24/7</div>
                  <div className="zs-contact-text-gray">Instant support online</div>
                </div>
              </div>

              {/* Email Support */}
              <div className="zs-contact-card">
                <span className="zs-contact-icon-gray">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4
                             c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <div>
                  <div className="zs-contact-title-green">Email Support</div>
                  <div className="zs-contact-text-gray">help@zoikomobile.co.uk</div>
                  <div className="zs-contact-text-gray">Response within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Popular Topics */}
            <div className="zs-sidebar-card">
              <h3>Popular Topics</h3>
              <div className="zs-section-underline" />
              {popularTopics.map((topic, i) => (
                <div key={i} className="zs-topic-item">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                  {topic}
                </div>
              ))}
            </div>

            {/* Get the MyZoiko App */}
            <div className="zs-sidebar-card">
              <h3>Get the MyZoiko App</h3>
              <div className="zs-section-underline" />
              <p>Manage everything from one place — fast and easy!</p>

              {appFeatures.map((item, i) => (
                <div key={i} className="zs-app-feature-item">
                  <div className="zs-app-feature-check">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                      stroke="white" strokeWidth="3.5"
                      strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="zs-app-feature-label">{item}</span>
                </div>
              ))}

              <div className="zs-app-image-netflix">N</div>
              <div className="zs-app-image-preview">📱 App Preview</div>
            </div>

          </div>{/* end zs-sidebar */}
        </div>{/* end zs-page-container */}
      </div>{/* end zs-page-wrapper */}
    </>
  );
}