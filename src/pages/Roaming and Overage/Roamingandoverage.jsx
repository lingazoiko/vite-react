import './style.css';
import React, { useState } from "react";

const zoneCountries = {
  1: ["Aland Islands","Austria","Belgium","Bulgaria"],
  2: ["Australia","Canada","South Africa","United States"],
  3: ["Albania","Argentina","Brazil","China"],
  4: ["Azerbaijan","Belarus","Egypt","Indonesia"],
  5: ["Afghanistan","India","Pakistan","Nigeria"],
  6: ["Algeria","Angola","Bahamas","Bolivia"]
};

const prices = {
  1: "0.08",
  2: "0.10",
  3: "0.16",
  4: "0.35",
  5: "0.70",
  6: "0.70"
};

const callCountries = {
  1: ["Country A","Country B","Country C","Country D"],
  2: ["Country E","Country F","Country G","Country H"],
  3: ["Country I","Country J","Country K","Country L"],
  4: ["Country M","Country N","Country O","Country P"],
  5: ["Country Q","Country R","Country S","Country T"]
};

const callPrices = {
  1: { sent: "0.013", received: "0.036" },
  2: { sent: "0.065", received: "0.052" },
  3: { sent: "0.065", received: "0.033" },
  4: { sent: "0.065", received: "0.390" },
  5: { sent: "0.520", received: "1.170" }
};

const dataPrices = {
  1: "0.0040",
  2: "0.0160",
  3: "0.0320",
  4: "0.0800",
  5: "1.0900",
  6: "3.1250"
};

const dataCountries = {
  1: ["Country A","Country B","Country C","Country D"],
  2: ["Country E","Country F","Country G","Country H"],
  3: ["Country I","Country J","Country K","Country L"],
  4: ["Country M","Country N","Country O","Country P"],
  5: ["Country Q","Country R","Country S","Country T"],
  6: ["Country U","Country V","Country W","Country X"]
};

function Roamingandoverage() {

  const [activeTextZone, setActiveTextZone] = useState(null);
  const [activeCallZone, setActiveCallZone] = useState(null);
  const [activeDataZone, setActiveDataZone] = useState(null);

  return (
    <>
      {/* HERO */}
      <section className="zone-hero">
        <div className="zone-hero-content">
          <h1>Zoiko Roaming Zone Charges</h1>
          <p>Zone 1 - Ireland, Guernsey, Jersey, Isle of Man</p>
        </div>
      </section>

      {/* ================= TEXT SECTION ================= */}
      <div className="rz-section">

        <div className="rz-heading">
          <span className="rz-badge">TEXT</span>
          <h2>Roaming Zone Charges (Text)</h2>
        </div>

        <div className="rz-card">

          <div className="rz-table-header">
            <div>
              <strong>Zones</strong>
              <p>Countries</p>
            </div>
            <div>
              <strong>Cost Per Text</strong>
              <p>Sent from visited Zones to any destinations whilst abroad (£)</p>
            </div>
            <div>
              <strong>Cost Per Text</strong>
              <p>Received whilst abroad (£)</p>
            </div>
          </div>

          {[1,2,3,4,5,6].map(zone => (
            <div key={zone} className="rz-row">
              <div
                className="rz-link"
                onClick={() => setActiveTextZone(zone)}
              >
                Zone {zone} Countries
              </div>
              <div className="rz-price">£{prices[zone]}</div>
              <div className="rz-price">£0.00</div>
            </div>
          ))}

        </div>

        {activeTextZone && (
          <div className="rz-modal-overlay" onClick={() => setActiveTextZone(null)}>
            <div className="rz-modal" onClick={(e) => e.stopPropagation()}>
              <div className="rz-modal-header">
                <h3>Zone {activeTextZone} Countries</h3>
                <button className="rz-close" onClick={() => setActiveTextZone(null)}>×</button>
              </div>

              <div className="rz-grid">
                {zoneCountries[activeTextZone].map((country, i) => (
                  <div key={i}>{country}</div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ================= CALLS SECTION ================= */}
      <div className="rz-section">

        <div className="rz-heading">
          <span className="rz-badge rz-badge-calls">CALLS</span>
          <h2>Roaming Zones (Calls)</h2>
        </div>

        <div className="rz-card">

          <div className="rz-table-header">
            <div>
              <strong>Countries</strong>
            </div>
            <div>
              <strong>Roaming Zones (Calls)</strong>
              <p>Sent from visited Zones to any destinations whilst abroad (£)</p>
            </div>
            <div>
              <strong>Received whilst abroad (£)</strong>
            </div>
          </div>

          {[1,2,3,4,5].map(zone => (
            <div key={zone} className="rz-row">
              <div
                className="rz-link"
                onClick={() => setActiveCallZone(zone)}
              >
                Zone {zone} Countries
              </div>
              <div className="rz-price">£{callPrices[zone].sent}</div>
              <div className="rz-price">£{callPrices[zone].received}</div>
            </div>
          ))}

        </div>

        {activeCallZone && (
          <div className="rz-modal-overlay" onClick={() => setActiveCallZone(null)}>
            <div className="rz-modal" onClick={(e) => e.stopPropagation()}>
              <div className="rz-modal-header">
                <h3>Zone {activeCallZone} Countries</h3>
                <button className="rz-close" onClick={() => setActiveCallZone(null)}>×</button>
              </div>

              <div className="rz-grid">
                {callCountries[activeCallZone].map((country, i) => (
                  <div key={i}>{country}</div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

        {/* ================= DATA SECTION ================= */}

        <div className="rz-section">

  <div className="rz-heading">
    <span className="rz-badge rz-badge-data">DATA</span>
    <h2>Zoiko Roaming Zone Charges (Data)</h2>
  </div>

  <div className="rz-card">

    {/* HEADER */}
    <div className="rz-table-header" style={{gridTemplateColumns: "1.3fr 1fr"}}>
      <div>
        <strong>Zones</strong>
      </div>
      <div>
        <strong>Price (£)/MB</strong>
      </div>
    </div>

    {/* ROWS */}
    {[1,2,3,4,5,6].map(zone => (
      <div
        key={zone}
        className="rz-row"
        style={{gridTemplateColumns: "1.3fr 1fr"}}
      >
        <div
          className="rz-link"
          onClick={() => setActiveDataZone(zone)}
        >
          Zone {zone} Countries
        </div>
        <div className="rz-price">£{dataPrices[zone]}</div>
      </div>
    ))}

    {/* FOOT NOTE */}
    <div style={{
      padding: "18px 28px",
      background: "#f7f7f7",
      fontSize: "13px",
      color: "#555",
      textAlign: "center",
      borderTop: "1px solid #e6e6e6"
    }}>
      Roaming Data is billed per kilobyte sent to or from Subscribers.
    </div>

  </div>

  {/* MODAL */}
  {activeDataZone && (
    <div className="rz-modal-overlay" onClick={() => setActiveDataZone(null)}>
      <div className="rz-modal" onClick={(e) => e.stopPropagation()}>
        <div className="rz-modal-header">
          <h3>Zone {activeDataZone} Countries</h3>
          <button className="rz-close" onClick={() => setActiveDataZone(null)}>×</button>
        </div>

        <div className="rz-grid">
          {dataCountries[activeDataZone].map((country, i) => (
            <div key={i}>{country}</div>
          ))}
        </div>
      </div>
    </div>
  )}

</div>

{/* ================= PAY MONTHLY SECTION ================= */}

<div className="rz-section">
  <div className="rz-info-card">
    <h3>For Pay Monthly Subscribers</h3>

    <p>
      For monthly recurring data bundles, <strong>Zoiko Mobile does not impose a cap</strong>, 
      and any Out-of-Bundle usage will be charged at the 
      <strong> Data Out-of-Bundle Charge rate</strong>. 
      Subscriptions are charged upfront for the upcoming month. 
      Pro-rata charges apply during the first billing period 
      from the date of bundle activation until the next bill-cycle date.
    </p>
  </div>
</div>

{/* ================= Voice And Text Bundles ================= */}

<div className="rz-section">
  <div className="rz-info-card rz-info-pink">
    <h3>Voice And Text Bundles</h3>

    <p>
      Zoiko Mobile offers <strong>Voice and Text Bundles for National Calls and National Texts</strong> 
      within the Underlying Mobile Network and while roaming in Zone 1 (to comply with RLAH regulations). 
      These bundles do not cover Calls and SMS while roaming outside the EU, to any International destination, 
      to any Premium or Special numbers or Services, or incoming Calls and Texts. 
      <strong>Please note that only one Voice and Texts Bundle can be subscribed to per SIM card at a time.</strong> 
      Pro-rata charges are applied during the first billing period from the date of Bundle activation until the next bill-cycle date. 
      No pro-rata balance is refunded upon Bundle de-activation (the last month is fully billed).
    </p>

    <p>
      Voice and Text Bundles come with an Allowance of Minutes and SMS. 
      If you exceed the allowances, Zoiko Mobile will apply the Out-of-Bundle Charge 
      for each additional Minute/SMS used outside the defined Bundle Allowance.
    </p>

    <p>
      For subscribers using SIP Mobile Services, the Voice Allowance includes National Calls 
      on the Underlying Mobile Network and while roaming in Zone 1 (to comply with RLAH regulation), 
      to be routed to the Zoiko Mobile Platform. Please note that for voice calls delivered 
      to the Service Provider Platform, the Service Provider is responsible for the costs 
      associated with the termination of calls through its own interconnect agreements. 
      Voice Calls from the Service Provider network (Mobile Call Termination SIP service) are also included.
    </p>

    <p>
      The maximum call duration is set to 2 hours. Beyond this duration, 
      Zoiko Mobile reserves the right to bill the extra usage at the Out-of-Bundle Charge.
    </p>

    <p>
      All Voice and Texts Bundles are limited to a maximum of 99 distinct destination numbers 
      from each mobile Subscriber per month. Exceeding this limit, Zoiko Mobile reserves 
      the right to bill the extra usage at the Out-of-Bundle Charge.
    </p>

  </div>
</div>



    </>
  );
}

export default Roamingandoverage;