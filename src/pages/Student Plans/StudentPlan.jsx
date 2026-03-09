import React from "react";
import "./style.css";

// ✅ Replace these with your actual image paths
const students = [
  {
    id: 1,
    alt: "Two excited female students with yellow headphones",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop&crop=faces",
  },
  {
    id: 2,
    alt: "Male student with headphones holding a laptop",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
  },
  {
    id: 3,
    alt: "Smiling man in suit holding phone",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
  },
  {
    id: 4,
    alt: "Student with headphones and backpack",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces",
  },
];

const steps = [
  {
    id: 1,
    title: "Choose Your Plan",
    description:
      "Browse our range of SIM-only plans and select the one that best suits your needs.",
  },
  {
    id: 2,
    title: "Sign Up with Student Email",
    description:
      "Register for a Zoiko Mobile account using your student email address.",
  },
  {
    id: 3,
    title: "Verify Student Status",
    description:
      "Fill out the form and submit your student ID or proof of enrollment to confirm your eligibility for the discount.",
  },
  {
    id: 4,
    title: "Get Verification",
    description:
      "After successful registration and verification, we will share a promotional code with you via email or through the registered account.",
  },
  {
    id: 5,
    title: "Apply Promotional Code",
    description:
      "Apply the promotional code during the checkout process to receive a 20% discount on your chosen plan.",
  },
];




function StudentPlan() {
  return (
   <>
         <section id="zoiko-hero-section">
      <div id="zoiko-hero-inner">

        {/* Left Content */}
        <div id="zoiko-hero-left-content">

          {/* Badges */}
          <div className="zoiko-hero-badges-wrapper">
            <span className="zoiko-badge zoiko-badge-outline">
              Zoiko Mobile Student Discount Programme
            </span>
            <span className="zoiko-badge zoiko-badge-yellow">20% OFF</span>
          </div>

          {/* Heading */}
          <h1 className="zoiko-hero-heading">
            Stay Connected, Study Smart, Save More
          </h1>

          {/* Description */}
          <p className="zoiko-hero-description">
            Zoiko Mobile is delighted to introduce a{" "}
            <b className="zoiko-text-highlight">comprehensive student discount programme</b>{" "}
            with student SIM only deals UK that not only offers{" "}
            <b className="zoiko-text-highlight">significant savings on our monthly price plans</b>{" "}
            but also provides a{" "}
            <b className="zoiko-text-highlight">free SIM card</b>{" "}
            to students looking to switch networks within the UK. We recognise the importance of staying
            connected while managing a tight budget, and we are here to help students make the most of
            their mobile services, including a{" "}
            <b className="zoiko-text-highlight">hassle-free network switch.</b>
          </p>

          {/* CTA Button */}
          <button className="zoiko-hero-register-btn">Register Now</button>

        </div>

        {/* Right Image Grid */}
        <div id="zoiko-hero-image-grid">
          {students.map((student) => (
            <div key={student.id} className="zoiko-hero-img-card">
              <img
                src={student.src}
                alt={student.alt}
                className="zoiko-hero-img"
              />
            </div>
          ))}
        </div>

      </div>
    </section>

{/* Get Your Discount */}

    <section id="zoiko-steps-section">

      {/* Heading */}
      <div id="zoiko-steps-heading-wrapper">
        <h2 id="zoiko-steps-heading">
          How to Get Your Discount - Student SIM only Deals UK
        </h2>
        <div id="zoiko-steps-heading-underline"></div>
      </div>

      {/* Row 1 — 3 cards */}
      <div className="zoiko-steps-row zoiko-steps-row-top">
        {steps.slice(0, 3).map((step) => (
          <div key={step.id} className="zoiko-steps-card">
            <div className="zoiko-steps-number">{step.id}</div>
            <h3 className="zoiko-steps-card-title">{step.title}</h3>
            <p className="zoiko-steps-card-desc">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Row 2 — 2 cards centered */}
      <div className="zoiko-steps-row zoiko-steps-row-bottom">
        {steps.slice(3, 5).map((step) => (
          <div key={step.id} className="zoiko-steps-card">
            <div className="zoiko-steps-number">{step.id}</div>
            <h3 className="zoiko-steps-card-title">{step.title}</h3>
            <p className="zoiko-steps-card-desc">{step.description}</p>
          </div>
        ))}
      </div>

    </section>

    {/* Don't Miss Out */}

  <section className="promo-section">
      <div className="promo-container">

        {/* Left Content */}
        <div className="promo-left">
          <h2>Don't Miss Out</h2>

          <p>
            Zoiko Mobile is dedicated to helping students stay connected,
            save money, and make network switching in the UK a seamless
            process. Join us today to experience affordable, high-quality
            mobile services while focusing on your studies and social life.
            Stay connected, stay smart, and stay within your budget with
            Zoiko Mobile.
          </p>

          <button className="promo-btn">
            Browse Plan Now
          </button>
        </div>


        {/* Right Image */}
        <div className="promo-right">
          <img
            src="/images/Student Plan/missout.png"
            alt="Features"
            className="promo-feature-image"
          />
        </div>

      </div>
    </section>

{/* Network Switching */}

       <section className="zs-wrapper">
      <div className="zs-container">

        {/* LEFT CONTENT */}
        <div className="zs-left">
          <h2 className="zs-title">
            Free SIM Card and Network<br />Switching
          </h2>

          <p className="zs-text">
            As part of our student discount programme, you will also receive a
            <span className="zs-highlight"> free SIM card </span>
            when you join Zoiko Mobile to switch from another network.
            Switching networks within the UK is a straightforward process,
            and you can keep your existing number. By making this switch or
            joining as a new user, you gain access to our discounted student
            plans, ensuring
            <span className="zs-highlight"> flexibility and savings.</span>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="zs-right">

          <img
            src="/images/Student Plan/freesim.png"
            alt="Zoiko SIM"
            className="zs-sim-image"
          />

          <div className="zs-feature">
            <span className="zs-check">✓</span>
            Keep Your Number
          </div>

          <div className="zs-feature">
            <span className="zs-check">✓</span>
            Easy Network Switch
          </div>

          <div className="zs-feature">
            <span className="zs-check">✓</span>
            No Setup Fees
          </div>

        </div>

      </div>
    </section>

    {/* Terms & Conditions */}

 <section className="tc-wrapper">
      <div className="tc-container">

        <h2 className="tc-title">Terms & Conditions</h2>
        <div className="tc-title-underline"></div>

        <div className="tc-list">

          <div className="tc-item">
            <img
              src="/images/Student Plan/student.png"
              alt="icon"
              className="tc-icon"
            />
            <p>
              The student discount and free SIM card offer are available
              exclusively to registered students at recognized
              <span className="tc-highlight"> UK educational institutions.</span>
            </p>
          </div>

          <div className="tc-item">
            <img src="/images/Student Plan/phone.png" alt="icon" className="tc-icon" />
            <p>
              The discount is applicable to the specified monthly plans and
              contract durations as mentioned earlier.
            </p>
          </div>

          <div className="tc-item">
            <img src="/images/Student Plan/sim.png" alt="icon" className="tc-icon" />
            <p>
              The free SIM card is available to students switching networks to
              Zoiko Mobile, as well as to new customers.
            </p>
          </div>

          <div className="tc-item">
            <img src="/images/Student Plan/renew.png" alt="icon" className="tc-icon" />
            <p>
              Renew your student discount with updated proof of enrollment
              upon contract expiration.
            </p>
          </div>

        </div>

        <div className="tc-note">
          This offer can be used in conjunction with other promotional offers
          from Zoiko Mobile.
        </div>

        <div className="tc-buttons">
          <button className="tc-btn-primary">Join Now</button>
          <button className="tc-btn-secondary">Switch & Save</button>
        </div>

      </div>
    </section>
   </>
  );
}

export default StudentPlan;