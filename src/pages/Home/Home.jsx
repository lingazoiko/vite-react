import './style.css';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { plansData } from "./plans";
import products from "./products";


function Hero() {

  // SECOND SECTION
  const items = [
    { icon: '📱', title: 'Keep Your Number' },
    { icon: '🎵', title: 'Apple Music Free' },
    { icon: '⚡', title: 'Quick & Easy' },
    { icon: '📊', title: 'Track Your Usage' },
    { icon: '🎁', title: 'Great Rewards' },
  ];

  // THIRD SECTION
  const features = [
    { icon: '📡', title: 'Free 5G Access', desc: 'Lightning-fast speeds at no extra cost' },
    { icon: '🚚', title: 'Free UK Delivery', desc: 'Quick delivery to your doorstep' },
    { icon: '🌍', title: 'Free 5G EU Roaming', desc: 'Stay connected throughout Europe' },
    { icon: '💬', title: 'Free Customer Service Call', desc: "We're always here to help" },
    { icon: '⏰', title: 'Free 24×7 Customer Support', desc: 'Round-the-clock assistance' },
    { icon: '🔄', title: 'Free Switching to Zoiko Mobile', desc: 'Seamless transition' },
  ];

  // FOURTH SECTION
  const [activeTab, setActiveTab] = useState("24");

  // FIFTH SECTION
  const reasons = [
    { icon: '📞', title: 'Free International Calls', desc: 'Ring your loved ones abroad & stay in touch without the hefty bill' },
    { icon: '🔍', title: 'No Credit Check Required', desc: "We've made it easier than ever for you to switch" },
    { icon: '💰', title: 'Pocket-friendly Pricing', desc: 'Enjoy a whole lot of data without breaking your bank' },
    { icon: '🔄', title: 'Easy to Switch', desc: 'Switching to Zoiko Mobile has never been easier' },
  ];
const supportItems = [
  {
    icon: "✉️",
    title: "Email Support",
    desc: "Contact us at any time of the day via email",
  },
  {
    icon: "💬",
    title: "Live Chat",
    desc: "Chat with our team 24/7 for instant responses",
  },
  {
    icon: "⏰",
    title: "Extended Support",
    desc: "Our customer service is open for extended hours",
  },
  {
    icon: "📱",
    title: "Self-Service Portal",
    desc: "Get quick answers in our online help center",
  },
  {
    icon: "💻",
    title: "Ask Me Anytime",
    desc: "Quick help for common questions",
  },
  {
    icon: "🎧",
    title: "Contact Sales",
    desc: "Speak to our sales team Monday to Sunday",
  },
];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>
              Make the Smart <br />
              <span>Switch today!</span>
            </h1>
            <p>
              Enjoy Unlimited Data | Unlimited Calls <br />
              Hassle-free Roaming!
            </p>
            <div className="hero-price">
              <span className="price">£0.00</span>
              <span className="per">/month For Up To 3 months*</span>
            </div>
            <div className="hero-buttons">
              <Link to="/switch-save" className="btn-primary">Switch & Save</Link>
              <Link to="/plans" className="btn-outline">View Plans</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="why-zoiko">
        <div className="container">
          <h2>Join Zoiko Mobile today and start something new!</h2>
          <div className="why-grid">
            {items.map((item, index) => (
              <div className="why-card" key={index}>
                <div className="why-icon">{item.icon}</div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THIRD SECTION */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose Zoiko Mobile?</h2>
          <div className="choose-grid">
            {features.map((item, index) => (
              <div className="choose-card" key={index}>
                <div className="choose-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOURTH SECTION */}
       <section className="plans-section">
      <div className="container">
        <h2>Choose Your SIM Only Plan & Duration Below</h2>

        {/* TABS */}
        <div className="plan-tabs">
          {["24", "12", "30"].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "24" && "24 Month Plan"}
              {tab === "12" && "12 Month Plan"}
              {tab === "30" && "30 Day Plan"}
            </button>
          ))}
        </div>

        {/* CAROUSEL */}
        <Swiper
          spaceBetween={25}
          centeredSlides={true}
          initialSlide={1}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {plansData[activeTab]?.map((plan, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`plan-card ${
                    isActive ? "highlight" : ""
                  }`}
                >
                  <h4>{plan.name}</h4>

                  <div className="plan-box">
                    <span className="data">{plan.data}</span>
                    <span className="price">
                      {plan.price}
                      <small>/month</small>
                    </span>
                  </div>

                  <ul>
                    {plan.features.map((f, i) => (
                      <li key={i}>✔ {f}</li>
                    ))}
                  </ul>

                  <button className="buy-btn">Buy this plan</button>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

      {/* FIFTH SECTION */}
      <section className="reasons-trust">
        <div className="container">
          <h2>Reasons to Trust Zoiko Mobile</h2>
          <div className="trust-grid">
            {reasons.map((item, index) => (
              <div className="trust-card" key={index}>
                <div className="trust-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIXTH SECTION — MOBILE CAROUSEL (fixed with Swiper + Autoplay) */}
      <section className="mobile-section">
        <h2>Pick Up A Fantastic Deal On Our Refurbished Smartphones!</h2>
        <p>
          From Apple iPhones to Samsung Galaxy devices, we've thoroughly inspected
          and restored each smartphone for you.
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          breakpoints={{
            0:    { slidesPerView: 1.2 },
            480:  { slidesPerView: 2.1 },
            768:  { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mobile-swiper"
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
                <button>View Details</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

       <section className="support-section">
      <div className="container">
        <h2>Most Asked Questions</h2>
        <p className="subtitle">
          Quick answers to common questions – get instant help!
        </p>

        <div className="support-grid">
          {supportItems.map((item, index) => (
            <div className="support-card" key={index}>
              <div className="support-icon">{item.icon}</div>
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

export default Hero;