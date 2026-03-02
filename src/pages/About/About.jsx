import './style.css';
import { useState } from "react";



function About() {

  const [open, setOpen] = useState(false);

  const reasons = [
  {
    icon: "🌍",
    title: "Free International Calls",
    desc: "Stay connected worldwide with complimentary international calling",
  },
  {
    icon: "💳",
    title: "No Credit Check",
    desc: "Simple activation process without credit verification requirements",
  },
  {
    icon: "🎁",
    title: "Pocket Friendly",
    desc: "Affordable plans designed to fit every budget without compromise",
  },
  {
    icon: "📱",
    title: "Switch to Zoiko Mobile and keep your current number",
    desc: "Seamless transition while retaining your existing phone number",
  },
  {
    icon: "📡",
    title: "No.1 Network in the UK",
    desc: "Premium coverage and reliability across the United Kingdom",
  },
  {
    icon: "📶",
    title: "Free 5G Roam",
    desc: "Experience high-speed 5G connectivity wherever you travel",
  },
];

const coreValues = [
  {
    icon: "£",
    title: "Affordable and Reliable Mobile Solutions",
    desc: "Zoiko Mobile UK offers budget-friendly SIM Plans and Refurbished Phone Plans, ensuring affordability without compromising on reliability.",
  },
  {
    icon: "🌱",
    title: "Environmental Commitment",
    desc: "Embrace sustainability with Zoiko Mobile's eco-conscious initiatives, providing environmentally friendly SIM plans and refurbished devices to contribute to a greener future.",
  },
  {
    icon: "❤️",
    title: "Our Story and Customer Focus",
    desc: "Explore Zoiko Mobile's journey, values, and dedication to transparency. Our customer-centric approach ensures a top-notch mobile experience through SIM Plans and Refurbished Phone Deals designed to meet and exceed your expectations.",
  },
];

const ctaItems = [
  {
    icon: "📶",
    title: "UK's Best Network",
    desc: "99% UK coverage powered by UK's No.1 Network with 4G and 5G coverage",
  },
  {
    icon: "⭐",
    title: "Fantastic Features",
    desc: "Inclusive EU Roam, Data rollover, Bundled offers, Wi-Fi calling & Customised Plans",
  },
  {
    icon: "🏠",
    title: "Roam Free",
    desc: "Travel hassle-free with Zoiko Mobile. Enjoy crystal-clear calls, lightning-fast data",
  },
  {
    icon: "🏆",
    title: "Amazing Value",
    desc: "Stay ahead with the latest phones or SIM only plans, we’ve got the very best deals",
  },
  {
    icon: "🎧",
    title: "Help With Support",
    desc: "Get the support you deserve! 24/7 with SMS & Customer Care Support",
  },
  {
    icon: "🔁",
    title: "Switch With a Text!",
    desc: "Switch to Zoiko Mobile with a simple Text. Set up your new mobile connectivity everywhere!",
  },
];

  return (
  <>
  <section className="zoiko-philosophy">
  <h2>The Zoiko Philosophy</h2>
</section>

{/* Zoiko Mobile */}

      <section className="zoiko-chronicle">
        <div className="content">
          <h2>The Zoiko Mobile Chronicle</h2>

          <p>
            At <strong style={{ color: "#2E8B57" }}>Zoiko Mobile UK</strong>, we believe connectivity should
            do more than link devices — it should connect lives, ideas, and
            communities. We are proudly British, serving individuals, families,
            and businesses with mobile experiences designed around real human
            needs: flexibility, affordability, and trust.
          </p>

          <button className="read-more" onClick={() => setOpen(true)}>
            Read More
          </button>
        </div>

        <div className="image">
          <img src="/images/About/z-logo.png" alt="Zoiko" />
        </div>
      </section>

      {/* POPUP */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>

            <div className="modal-content">
              <p>
                As part of Zoiko Communications Group, a global telecommunications organisation and recognised leader in cultivating Community & Lifestyle MVNOs, we are driven by a single mission — to make communication purposeful, intelligent, and accessible to everyone. Our network of next-generation mobile brands across multiple continents empowers diverse communities while redefining how people experience mobility and belonging.
              </p>

              <p>
                In the United Kingdom, Zoiko Mobile UK stands at the intersection of innovation and inclusion. We combine Tier-1 connectivity with people-centred design, offering affordable SIM-only and eSIM plans with free 5G, EU roaming, and UK-based customer support. Whether you’re a business professional, a student, a creative, or a family on the move, we ensure your connection is fast, reliable, and ready for the future.
              </p>

              <p>
               Our journey is guided by innovation and purpose. Every plan we create, every service we launch, and every customer we serve reflects our belief that mobile technology should inspire, empower, and simplify modern life.
              </p>
              <p>Explore our cheapest and most affordable monthly SIM-only deals, designed for both 4G and 5G-compatible devices, and discover budget-friendly international roaming tariffs built for today’s connected world.</p>
              <p>At Zoiko Mobile UK, our philosophy is simple: “Connecting Every Possibility.” It’s more than a tagline — it’s our commitment to help you stay connected to what truly matters, wherever life takes you.</p>
              <p>Together, we’re shaping a future where communication is smarter, communities are stronger, and every connection has meaning.</p>
            </div>
          </div>
        </div>
      )}

      {/* Reasons to Love Zoiko */}

      <section className="reasons-section">
  <div className="container">
    <h2>
      Reasons to Love Zoiko – Free SIM Card <br />
      with SIM only deals UK
    </h2>
    <span className="title-underline"></span>

    <div className="reasons-grid">
      {reasons.map((item, index) => (
        <div className="reason-card" key={index}>
          <div className="icon">{item.icon}</div>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>

    <button className="view-plans-btn">View Plans</button>
  </div>
</section>

{/* Our Core Values */}

<section className="core-values">
  <div className="container">
    <h2>Our Core Values</h2>
    <span className="title-underline"></span>

    <div className="values-list">
      {coreValues.map((item, index) => (
        <div className="value-card" key={index}>
          <div className="value-icon">{item.icon}</div>

          <div className="value-content">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Last Section */}

<section className="zoiko-cta">
  <div className="container">
    <h2>You will never regret choosing Zoiko Mobile UK's</h2>
    <span className="title-underline yellow"></span>

    <h4 className="sub-title">
      SIM only deals UK with <span>Unlimited Data</span>
    </h4>
    <p className="tagline">You'll just love it...!</p>

    <div className="cta-grid">
      {ctaItems.map((item, index) => (
        <div className="cta-card" key={index}>
          <div className="cta-icon">{item.icon}</div>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  </>
  );
}

export default About;