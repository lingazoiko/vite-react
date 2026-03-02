import './Style.css';

function ActivateYourSIM() {
  return (
    <section className="sim-activate">
      <div className="sim-container">

        {/* Header */}
        <div className="sim-header">
          <div className="sim-header-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          </div>
          <div className="sim-header-text">
            <h1>Activate Your SIM</h1>
            <p>Complete the form below to get started with Zoiko Mobile.</p>
          </div>
        </div>

        {/* Body */}
        <div className="sim-body">
          <form className="sim-form">

            {/* Account Details */}
            <div className="form-section">
              <div className="form-section-title">Account Details</div>
              <div className="form-grid">
                <div className="field">
                  <label>Username</label>
                  <input type="text" placeholder="Enter username" />
                </div>
                <div className="field">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter email" />
                </div>
                <div className="field full">
                  <label>OTP Code</label>
                  <input type="text" placeholder="Enter OTP code" />
                </div>
                <div className="field full">
                  <label>SIM Serial Number</label>
                  <input type="text" placeholder="Enter SIM serial number" />
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="form-section">
              <div className="form-section-title">Personal Information</div>
              <div className="form-grid">
                <div className="field">
                  <label>Title</label>
                  <div className="select-wrap">
                    <select>
                      <option>Mr</option>
                      <option>Mrs</option>
                      <option>Ms</option>
                      <option>Dr</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label>Date of Birth</label>
                  <input type="date" />
                </div>
                <div className="field">
                  <label>First Name</label>
                  <input type="text" placeholder="Enter first name" />
                </div>
                <div className="field">
                  <label>Last Name</label>
                  <input type="text" placeholder="Enter last name" />
                </div>
              </div>
            </div>

            {/* Plan & Address */}
            <div className="form-section">
              <div className="form-section-title">Plan &amp; Address</div>
              <div className="form-grid">
                <div className="field full">
                  <label>Your Zoiko Package</label>
                  <div className="select-wrap">
                    <select>
                      <option>Everyday 3GB+</option>
                      <option>Zoiko Max 30GB</option>
                      <option>Zoiko Elite 100GB</option>
                      <option>Zoiko Unlimited Data</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label>Country</label>
                  <input type="text" defaultValue="United Kingdom" />
                </div>
                <div className="field">
                  <label>Postcode / Zip Code</label>
                  <input type="text" placeholder="Enter postcode" />
                </div>
                <div className="field">
                  <label>City</label>
                  <input type="text" placeholder="Enter city" />
                </div>
                <div className="field">
                  <label>Address</label>
                  <input type="text" placeholder="Enter address" />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="form-actions">
              <button type="submit" className="primary-btn">Submit</button>
              <button type="button" className="secondary-btn">Back to My Account</button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}

export default ActivateYourSIM;