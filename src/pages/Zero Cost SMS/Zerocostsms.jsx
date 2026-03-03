import './style.css';

function Zerocostsms() {
  return (
    <>
<section className="free-sms-hero">
  <div className="free-sms-hero-content">
    <h1>
      Enjoy Free SMS to Short Numbers with Zoiko Mobile!
    </h1>
  </div>
</section>

{/* These include */}

<section className="sms-includes-section">

  <h2 className="sms-includes-title">These include:</h2>

  <div className="sms-highlight">
    The British Transport Police on: <strong>61016</strong>
  </div>

  <div className="sms-card-grid">

    <div className="sms-card">
      <span className="sms-pill">SHOUT</span>
      <h3>85258</h3>
    </div>

    <div className="sms-card">
      <span className="sms-pill">SPAM</span>
      <h3>7726</h3>
    </div>

    <div className="sms-card">
      <span className="sms-pill">PAC</span>
      <h3>65075</h3>
    </div>

    <div className="sms-card">
      <span className="sms-pill">STAC</span>
      <h3>75075</h3>
    </div>

    <div className="sms-card">
      <span className="sms-pill">INFO</span>
      <h3>85075</h3>
    </div>

  </div>

</section>


{/* If you receive a suspicious text */}

<section className="sms-warning-section">

  <h2 className="sms-warning-title">
    If you receive a suspicious text:
  </h2>

  <div className="sms-warning-grid">

    <div className="sms-warning-card">
      <div className="sms-warning-icon">✋</div>
      <h3>STOP</h3>
      <p>
        Hang up and call the company they claim to be from 
        to check if it is a scam
      </p>
    </div>

    <div className="sms-warning-card">
      <div className="sms-warning-icon">🖱️</div>
      <h3>DON'T CLICK</h3>
      <p>
        Don't click on any links or give out any personal 
        or bank details.
      </p>
    </div>

    <div className="sms-warning-card">
      <div className="sms-warning-icon">🚨</div>
      <h3>REPORT</h3>
      <p>
        Report any suspicious texts to 2225 and make your 
        friends and family aware too.
      </p>
    </div>

  </div>

</section>

<section className="suspicious-section">

  <h2 className="suspicious-title">
    If you receive a suspicious text:
  </h2>

  <div className="suspicious-grid">

    <div className="suspicious-card">
      <div className="suspicious-icon">
        ✋
      </div>
      <h3>STOP</h3>
      <p>
        Stop! Do not give out any personal<br />
        or bank details.
      </p>
    </div>

    <div className="suspicious-card">
      <div className="suspicious-icon">
        ☎
      </div>
      <h3>HANG UP</h3>
      <p>
        Hang up and call the company they<br />
        claim to be from to check if it is a scam
      </p>
    </div>

    <div className="suspicious-card">
      <div className="suspicious-icon">
        🚨
      </div>
      <h3>REPORT</h3>
      <p>
        Report scam calls to Action Fraud<br />
        and make your family aware too.
      </p>
    </div>

  </div>

</section>
    </>
  );
}

export default Zerocostsms;