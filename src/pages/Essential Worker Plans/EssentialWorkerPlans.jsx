import "./style.css";

function EssentialWorkerPlans() {

    const students = [
  {
    id: 1,
    alt: "Two excited female students with yellow headphones",
    src: "/images/Essential Worker/work1.png",
  },
  {
    id: 2,
    alt: "Male student with headphones holding a laptop",
    src: "/images/Essential Worker/work2.png",
  },
  {
    id: 3,
    alt: "Smiling man in suit holding phone",
    src: "/images/Essential Worker/work3.png",
  },
  {
    id: 4,
    alt: "Student with headphones and backpack",
    src: "/images/Essential Worker/work4.png",
  },
];

const stepsTop = [
{
id:1,
title:"Choose Your Plan",
text:"Browse our range of SIM-only plans and select the perfect option for your needs."
},
{
id:2,
title:"Sign Up with Your Work Email",
text:"Register for a Zoiko Mobile account using your official work email address."
},
{
id:3,
title:"Verify Your Status",
text:"Provide a valid work ID to confirm your public sector employment status."
}
];

const stepsBottom = [
{
id:4,
title:"Nominate Family and Friends",
text:"Add up to 5 nominated family and friends to receive a 20% lifetime discount on their SIM-only plans."
},
{
id:5,
title:"Get Your Discount",
text:"Enjoy 30% off your chosen plan for as long as you remain a Zoiko Mobile customer."
}
];

const terms = [
{
title:"30% Discount",
text:"Applies to any Zoiko Mobile SIM-only plan for as long as you remain a customer."
},
{
title:"20% Discount for Family and Friends",
text:"Applies to up to 5 nominated family and friends for as long as they remain Zoiko Mobile customers."
},
{
title:"Valid Work ID",
text:"You must provide a valid work ID to confirm your public sector work status."
},
{
title:"Eligibility",
text:"This offer is available to new public sector workers customers only."
},
{
title:"Fair Usage Policy",
text:"Applies to all plans, including unlimited calls & texts and EU roaming."
},
{
title:"5G Coverage",
text:"Available in selected areas only."
},
{
title:"Wi-Fi Calling",
text:"Requires compatible handset and network coverage."
},
{
title:"EU Roaming",
text:"For use in EU countries only. This offer can be used in conjunction with other promotional offers from Zoiko Mobile."
}
];

  return (
   <>
     <section id="zoiko-hero-section">
      <div id="zoiko-hero-inner">

        {/* Left Content */}
        <div id="zoiko-hero-left-content">

          {/* Badges */}
          <div className="zoiko-hero-badges-wrapper">
            <span className="zoiko-badge zoiko-badge-outline">
             Exclusive Offer for UK Public Sector Workers
            </span>
          </div>

          {/* Heading */}
          <h1 className="zoiko-hero-heading">
            Honouring Your Service with Exclusive Savings
          </h1>

          {/* Description */}
          <p className="zoiko-hero-description">
            At Zoiko Mobile, we appreciate the hard work and dedication of our public sector workers. As a token of gratitude, we are offering an {" "}
            <b className="zoiko-text-highlight">exclusive 30% lifetime discount </b>{" "}
            on any of our SIM- only plans for the public sector workers, and {" "}
            <b className="zoiko-text-highlight">20% lifetime discount for up to 5 nominated family and friends.
</b>
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

    <section className="hdx-wrapper">

<div className="hdx-container">

<h2 className="hdx-title">How to Get Your Discount</h2>
<div className="hdx-line"></div>

{/* TOP ROW */}
<div className="hdx-row">

{stepsTop.map(step => (
<div key={step.id} className="hdx-card">

<div className="hdx-number">{step.id}</div>

<h3 className="hdx-card-title">{step.title}</h3>

<p className="hdx-card-text">{step.text}</p>

</div>
))}

</div>

{/* BOTTOM ROW */}
<div className="hdx-row-center">

{stepsBottom.map(step => (
<div key={step.id} className="hdx-card">

<div className="hdx-number">{step.id}</div>

<h3 className="hdx-card-title">{step.title}</h3>

<p className="hdx-card-text">{step.text}</p>

</div>
))}

</div>

</div>

</section>

 <section className="dmo-wrapper">

      <div className="dmo-container">

        {/* LEFT CONTENT */}
        <div className="dmo-left">

          <h2 className="dmo-title">Don't Miss Out</h2>

          <p className="dmo-text">
            Take advantage of this exclusive offer and enjoy significant
            savings on your mobile plan. Browse our plans today and start
            saving with Zoiko Mobile.
          </p>

          <button className="dmo-btn">
            Browse Plan Now
          </button>

        </div>


        {/* RIGHT CARD */}
        <div className="dmo-right">

          <div className="dmo-off-card">

            <div className="dmo-percent">30%</div>

            <div className="dmo-off-text">OFF</div>

            <div className="dmo-subtext">
              Lifetime Discount
            </div>

          </div>

        </div>

      </div>

    </section>

      <section className="tys-wrapper">

      <div className="tys-container">

        {/* LEFT CONTENT */}
        <div className="tys-left">

          <h2 className="tys-title">
            Thank You for Your Service
          </h2>

          <p className="tys-text">
            At <span className="tys-brand">Zoiko Mobile</span>, we are proud
            to support our public sector workers and their loved ones.
            We look forward to providing you with the best network
            experience at an unbeatable price.
          </p>

        </div>


        {/* RIGHT CONTENT */}
        <div className="tys-right">

          <span className="tys-heart">❤</span>

          <span className="tys-appreciate">
            We Appreciate You
          </span>

        </div>

      </div>

    </section>


    <section className="ltc-wrapper">

<div className="ltc-container">

<h2 className="ltc-title">Terms & Conditions</h2>
<div className="ltc-line"></div>

<div className="ltc-list">

{terms.map((item,index)=>(
<div key={index} className="ltc-card">

<h4 className="ltc-card-title">{item.title}</h4>

<p className="ltc-card-text">{item.text}</p>

</div>
))}

</div>


<div className="ltc-notice">
This offer can be used in conjunction with other promotional offers from Zoiko Mobile.
</div>


<div className="ltc-buttons">

<button className="ltc-btn-primary">
Join Now
</button>

<button className="ltc-btn-secondary">
Switch & Save
</button>

</div>

</div>

</section>
   </>
  );
}

export default EssentialWorkerPlans;