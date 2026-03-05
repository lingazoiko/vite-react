import './style.css';

const discountData = [
  {
    title: "Bundle Plans",
    text: "Our bundled packages include talk, text, mms and data services at a lower rate than if you purchased these services separately."
  },
  {
    title: "SIM-Only Plans",
    text: "SIM-only plans, which exclude the cost of a new or refurbished device, are typically more affordable than traditional mobile contracts."
  },
  {
    title: "Pay-As-You-Go",
    text: "Our Monthly Rolling plans are like pay-as-you-go, allowing customers to pay only for the services they use."
  },
  {
    title: "Family Plans",
    text: "We offer discounted rates for multiple SIMs or family plans, making it more cost-effective for households."
  },
  {
    title: "Data-Specific Discounts",
    text: "We offer data-specific discounts or unlimited data options for a reduced price."
  },
  {
    title: "Promotional Deals",
    text: "We often run promotions, such as introductory offers or seasonal sales on our SIMs, phones and accessories."
  },
  {
    title: "Loyalty Rewards",
    text: "We provide discounts, free upgrades, or other perks to long-term customers."
  },
  {
    title: "Student or Senior Discounts",
    text: "We offer specialised plans with discounts for students, seniors, or other specific customer groups."
  },
  {
    title: "International Calling and Roaming",
    text: "We have competitive international calling and roaming rates which help frequent travellers save money."
  },
  {
    title: "Refer-a-Friend Programme",
    text: "Customers who refer friends or family members to our services can receive discounts or credits."
  }
];

function Discountedrates() {
  return (
    <>
       <section className="discount-rates-hero">
        <div className="discount-rates-hero-content">
          <h1>Zoiko Mobile Discounted Rates</h1>
        </div>
      </section>

          <section className="discount-rates-info-section">
      <div className="discount-rates-info-box">

        {discountData.map((item, index) => (
          <div className="discount-rates-item" key={index}>
            <div className="discount-rates-number">{index + 1}</div>

            <div className="discount-rates-text">
              <h3>{item.title}:</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
    </>
  );
}
export default Discountedrates;
