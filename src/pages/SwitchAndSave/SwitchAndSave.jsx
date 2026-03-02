import { useState } from "react";
import "./Style.css";

const PLANS = [
  { price: "£29.5/month",  name: "Zoiko Unlimited Data" },
  { price: "£28.34/month", name: "Zoiko Elite 100GB" },
  { price: "£16.99/month", name: "Zoiko Max 30GB" },
  { price: "£12.14/month", name: "Zoiko Standard 10GB" },
  { price: "£5.66/month",  name: "Zoiko Plus 3GB" },
  { price: "£4.04/month",  name: "Zoiko Connect 1GB" },
];

const PROVIDERS = [
  "EE", "O2", "Vodafone", "Three", "Sky Mobile",
  "BT Mobile", "iD Mobile", "SMARTY", "Tesco Mobile", "Other",
];

const STEP_LABELS = ["Your Details", "Current Service", "Select Plan"];

function SwitchAndSave() {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [checks, setChecks] = useState({ transfer: false, timeline: false, terms: false });

  const toggleCheck = (key) => setChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  const allChecked = checks.transfer && checks.timeline && checks.terms;

  return (
    <>
      {/* ── HERO ── */}
      <section className="switch-hero">
        <div className="switch-hero-content">
          <h1>Switch to Zoiko Mobile</h1>
          <p>Keep your number and switch in just 1 working day</p>
        </div>
      </section>

      {/* ── MAIN SECTION ── */}
      <section className="switch-section">

        {/* ── STEPPER ── */}
        <div className="stepper-card">
          <div className="stepper">
            {STEP_LABELS.map((label, i) => {
              const num = i + 1;
              const isDone = step > num;
              const isActive = step === num;
              return (
                <div key={num} style={{ display: "flex", alignItems: "center" }}>
                  <div className="step-item">
                    <div className={`step-circle ${isDone ? "done" : isActive ? "active" : ""}`}>
                      {isDone ? "✓" : num}
                    </div>
                    <span className={`step-label ${isDone ? "done" : isActive ? "active" : ""}`}>
                      {label}
                    </span>
                  </div>
                  {i < STEP_LABELS.length - 1 && (
                    <div className={`step-line ${isDone ? "done" : ""}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── STEP 1: Your Details ── */}
        {step === 1 && (
          <div className="form-card">
            <div style={{ textAlign: "center" }}>
              <span className="step-badge">Step 1</span>
              <h2>Your Details</h2>
            </div>

            <div className="field-grid">
              <div className="field">
                <label>First Name *</label>
                <input type="text" placeholder="Enter first name" />
              </div>
              <div className="field">
                <label>Last Name *</label>
                <input type="text" placeholder="Enter last name" />
              </div>
              <div className="field">
                <label>Email *</label>
                <input type="email" placeholder="Enter email address" />
              </div>
              <div className="field">
                <label>Mobile *</label>
                <input type="tel" placeholder="Enter mobile number" />
              </div>
              <div className="field full">
                <label>Billing Address / Postcode *</label>
                <input type="text" placeholder="Enter address or postcode" />
              </div>
            </div>

            <div className="info-box">
              🔒 We use this to securely process your switch in line with Ofcom rules.
            </div>

            <div className="btn-row">
              <button className="btn-primary" onClick={() => setStep(2)}>
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 2: Current Service ── */}
        {step === 2 && (
          <div className="form-card">
            <div style={{ textAlign: "center" }}>
              <span className="step-badge">Step 2</span>
              <h2>Your Current Mobile Service</h2>
            </div>

            <div className="field-grid">
              <div className="field">
                <label>Current Provider</label>
                <div className="select-wrap">
                  <select defaultValue="">
                    <option value="" disabled>Select</option>
                    {PROVIDERS.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="field">
                <label>Current Plan Cost (£)</label>
                <input type="number" placeholder="e.g. 15" />
              </div>
              <div className="field">
                <label>Current Data Allowance (GB)</label>
                <input type="number" placeholder="e.g. 10" />
              </div>
            </div>

            <div className="info-box">
              ℹ️ Optional: These details help us recommend the right plan, but are not required.
            </div>

            <div className="btn-row">
              <button className="btn-secondary" onClick={() => setStep(1)}>Back</button>
              <button className="btn-primary" onClick={() => setStep(3)}>Next Step</button>
            </div>
          </div>
        )}

        {/* ── STEP 3: Select Plan ── */}
        {step === 3 && (
          <div className="form-card">
            <div style={{ textAlign: "center" }}>
              <span className="step-badge">Step 3</span>
              <h2>Select Your New Plan</h2>
            </div>

            <div className="plan-grid">
              {PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`plan-card ${selectedPlan === plan.name ? "selected" : ""}`}
                  onClick={() => setSelectedPlan(plan.name)}
                >
                  <div className="plan-price">{plan.price}</div>
                  <div className="plan-name">{plan.name}</div>
                </div>
              ))}
            </div>

            <div className="auth-title">Authorisation Required</div>
            <div className="auth-box">
              <div className="auth-item" onClick={() => toggleCheck("transfer")}>
                <input
                  type="checkbox"
                  checked={checks.transfer}
                  onChange={() => toggleCheck("transfer")}
                />
                <div>
                  <div className="auth-item-title">Transfer Authorisation</div>
                  <div className="auth-item-desc">
                    I confirm I am authorised to request this number transfer.
                  </div>
                </div>
              </div>

              <div className="auth-item" onClick={() => toggleCheck("timeline")}>
                <input
                  type="checkbox"
                  checked={checks.timeline}
                  onChange={() => toggleCheck("timeline")}
                />
                <div>
                  <div className="auth-item-title">Switch Timeline</div>
                  <div className="auth-item-desc">
                    I understand my PAC/STAC code is valid for 30 days, and Zoiko Mobile will
                    complete my switch within 1 working day of processing.
                  </div>
                </div>
              </div>

              <div className="auth-item" onClick={() => toggleCheck("terms")}>
                <input
                  type="checkbox"
                  checked={checks.terms}
                  onChange={() => toggleCheck("terms")}
                />
                <div>
                  <div className="auth-item-title">Terms &amp; Privacy</div>
                  <div className="auth-item-desc">
                    I agree to Zoiko Mobile <a href="#">Privacy Policy</a> and{" "}
                    <a href="#">Terms &amp; Conditions</a>.
                  </div>
                </div>
              </div>
            </div>

            <div className="btn-row">
              <button className="btn-secondary" onClick={() => setStep(2)}>Back</button>
              <button
                className="btn-primary"
                disabled={!allChecked || !selectedPlan}
              >
                Complete Switch
              </button>
            </div>
          </div>
        )}

      </section>
    </>
  );
}

export default SwitchAndSave;