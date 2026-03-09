import { useState } from "react";
import "./style.css";

// ── Update this import to your actual logo path ──
// import logo from "../../assets/logo.png";
const logo = "https://zoikomobile.co.uk/wp-content/uploads/2025/09/ZMUK_Logo_PNG-2048x912-1.png"; // fallback CDN

/* ══════════════════════
   SVG ICONS
══════════════════════ */
const IcoMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const IcoLock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const IcoUser = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="5"/>
    <path d="M20 21a8 8 0 1 0-16 0"/>
  </svg>
);
const IcoPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IcoEye = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const IcoEyeOff = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);
const IcoLeft = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);
const IcoCheck = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);
const IcoSend = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z"/>
    <path d="M22 2 11 13"/>
  </svg>
);
const IcoGoogle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);
const IcoFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);
const IcoApple = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#000000">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

/* ══════════════════════
   HELPERS
══════════════════════ */
function calcStrength(pw) {
  if (!pw) return 0;
  let s = 0;
  if (pw.length >= 8) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return s;
}
const STR_LABEL = ["", "Weak", "Fair", "Good", "Strong"];
const STR_SEG   = ["", "zk-seg-weak", "zk-seg-fair", "zk-seg-good", "zk-seg-great"];

function PwStrength({ password }) {
  const score = calcStrength(password);
  if (!password) return null;
  return (
    <>
      <div id="zk-pw-strength-bars">
        {[1,2,3,4].map(i => (
          <div key={i} className={`zk-strength-seg ${i <= score ? STR_SEG[score] : ""}`} />
        ))}
      </div>
      <div id="zk-pw-strength-text">{STR_LABEL[score]}</div>
    </>
  );
}

function AlertBox({ type, msg }) {
  return (
    <div className={`zk-alert-box ${type === "err" ? "zk-alert-danger" : "zk-alert-safe"}`}>
      {type === "err" ? "⚠" : "✓"} {msg}
    </div>
  );
}

function AccentDots() {
  return (
    <div className="zk-tri-dots">
      <span /><span /><span />
    </div>
  );
}

/* ══════════════════════
   LOGIN FORM
══════════════════════ */
function LoginForm({ onSwitch, onForgot }) {
  const [form, setForm]     = useState({ email: "", password: "" });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState("");

  function set(e) { setForm({ ...form, [e.target.name]: e.target.value }); }

  function submit() {
    setError("");
    if (!form.email || !form.password) return setError("Please fill in all fields.");
    if (!/\S+@\S+\.\S+/.test(form.email))  return setError("Enter a valid email address.");
    setLoading(true);
    setTimeout(() => { setLoading(false); setError("Invalid credentials. Please try again."); }, 1800);
  }

  return (
    <>
      <div className="zk-form-title">Welcome back</div>
      <div className="zk-form-sub">Sign in to your Zoiko account</div>

      {error && <AlertBox type="err" msg={error} />}

      <div className="zk-field">
        <label className="zk-label">Email Address</label>
        <div className="zk-input-wrap">
          <span className="zk-input-ico"><IcoMail /></span>
          <input className="zk-input" type="email" name="email"
            placeholder="you@example.com" value={form.email} onChange={set} />
        </div>
      </div>

      <div className="zk-field">
        <label className="zk-label">Password</label>
        <div className="zk-input-wrap">
          <span className="zk-input-ico"><IcoLock /></span>
          <input className="zk-input" type={showPw ? "text" : "password"} name="password"
            placeholder="Your password" value={form.password} onChange={set}
            style={{ paddingRight: 42 }} />
          <button className="zk-eye-btn" onClick={() => setShowPw(!showPw)}>
            {showPw ? <IcoEyeOff /> : <IcoEye />}
          </button>
        </div>
      </div>

      <div id="zk-forgot-row">
        <button id="zk-forgot-btn" onClick={onForgot}>Forgot password?</button>
      </div>

      <button className="zk-submit-btn" onClick={submit} disabled={loading}>
        {loading ? <><span className="zk-loader" />Signing in…</> : "Sign In →"}
      </button>
      <AccentDots />

      <div className="zk-or-divider">or continue with</div>

      <div className="zk-social-trio">
        <button className="zk-social-card zk-social-google"><IcoGoogle /><span>Google</span></button>
        <button className="zk-social-card zk-social-facebook"><IcoFacebook /><span>Facebook</span></button>
        <button className="zk-social-card zk-social-apple"><IcoApple /><span>Apple</span></button>
      </div>

      <div className="zk-footer-row">
        New to Zoiko Mobile?
        <button className="zk-switch-link" onClick={() => onSwitch("register")}>Create account</button>
      </div>
    </>
  );
}

/* ══════════════════════
   REGISTER FORM
══════════════════════ */
function RegisterForm({ onSwitch }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", password: "", confirm: "", agree: false
  });
  const [showPw, setShowPw]   = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");
  const [done, setDone]       = useState(false);

  function set(e) {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: val });
  }

  function submit() {
    setError("");
    if (!form.name || !form.email || !form.password || !form.confirm)
      return setError("Please fill in all required fields.");
    if (!/\S+@\S+\.\S+/.test(form.email))
      return setError("Enter a valid email address.");
    if (form.password.length < 8)
      return setError("Password must be at least 8 characters.");
    if (form.password !== form.confirm)
      return setError("Passwords do not match.");
    if (!form.agree)
      return setError("Please accept the Terms & Conditions.");
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 2000);
  }

  if (done) return (
    <div className="zk-success-screen">
      <div className="zk-success-orb"><IcoCheck /></div>
      <div className="zk-success-h">Account Created!</div>
      <p className="zk-success-p">
        Welcome, <span className="zk-success-highlight">{form.name.split(" ")[0]}</span>!<br />
        We've sent a verification link to your inbox.
      </p>
      <button className="zk-submit-btn" onClick={() => onSwitch("login")}>
        Go to Sign In →
      </button>
    </div>
  );

  return (
    <>
      <div className="zk-form-title">Create account</div>
      <div className="zk-form-sub">Join Zoiko Mobile in seconds</div>

      {error && <AlertBox type="err" msg={error} />}

      <div className="zk-field">
        <label className="zk-label">Full Name</label>
        <div className="zk-input-wrap">
          <span className="zk-input-ico"><IcoUser /></span>
          <input className="zk-input" type="text" name="name"
            placeholder="John Smith" value={form.name} onChange={set} />
        </div>
      </div>

      <div className="zk-field">
        <label className="zk-label">Email Address</label>
        <div className="zk-input-wrap">
          <span className="zk-input-ico"><IcoMail /></span>
          <input className="zk-input" type="email" name="email"
            placeholder="you@example.com" value={form.email} onChange={set} />
        </div>
      </div>

      <div className="zk-field">
        <label className="zk-label">
          Phone Number
          <span className="zk-label-note">(optional)</span>
        </label>
        <div className="zk-input-wrap">
          <span className="zk-input-ico"><IcoPhone /></span>
          <input className="zk-input" type="tel" name="phone"
            placeholder="+44 7700 000000" value={form.phone} onChange={set} />
        </div>
      </div>

      <div className="zk-field">
        <label className="zk-label">Password</label>
        <div className="zk-input-wrap">
          <span className="zk-input-ico"><IcoLock /></span>
          <input className="zk-input" type={showPw ? "text" : "password"} name="password"
            placeholder="Min. 8 characters" value={form.password} onChange={set}
            style={{ paddingRight: 42 }} />
          <button className="zk-eye-btn" onClick={() => setShowPw(!showPw)}>
            {showPw ? <IcoEyeOff /> : <IcoEye />}
          </button>
        </div>
        <PwStrength password={form.password} />
      </div>

      <div className="zk-field">
        <label className="zk-label">Confirm Password</label>
        <div className="zk-input-wrap">
          <span className="zk-input-ico"><IcoLock /></span>
          <input className="zk-input" type={showPw ? "text" : "password"} name="confirm"
            placeholder="Repeat your password" value={form.confirm} onChange={set} />
        </div>
      </div>

      <div className="zk-agree-row">
        <input type="checkbox" className="zk-agree-box" id="zk-agree-chk"
          name="agree" checked={form.agree} onChange={set} />
        <label className="zk-agree-text" htmlFor="zk-agree-chk">
          I agree to Zoiko Mobile's{" "}
          <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
        </label>
      </div>

      <button className="zk-submit-btn" onClick={submit} disabled={loading}>
        {loading ? <><span className="zk-loader" />Creating account…</> : "Create Account →"}
      </button>
      <AccentDots />

      <div className="zk-footer-row">
        Already have an account?
        <button className="zk-switch-link" onClick={() => onSwitch("login")}>Sign in</button>
      </div>
    </>
  );
}

/* ══════════════════════
   FORGOT PASSWORD FORM
══════════════════════ */
function ForgotForm({ onBack }) {
  const [email, setEmail]     = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");
  const [sent, setSent]       = useState(false);

  function submit() {
    setError("");
    if (!email) return setError("Please enter your email address.");
    if (!/\S+@\S+\.\S+/.test(email)) return setError("Enter a valid email address.");
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1800);
  }

  if (sent) return (
    <div className="zk-success-screen">
      <div className="zk-success-orb"><IcoSend /></div>
      <div className="zk-success-h">Check your inbox</div>
      <p className="zk-success-p">
        A reset link was sent to<br />
        <span className="zk-success-highlight">{email}</span><br /><br />
        Link expires in <strong style={{ color: "#F97316" }}>15 minutes</strong>.<br />
        Check your spam folder if you don't see it.
      </p>
      <button className="zk-submit-btn" style={{ marginBottom: 12 }}
        onClick={() => { setSent(false); setEmail(""); }}>
        Resend Email
      </button>
      <button className="zk-back-btn" style={{ justifyContent: "center", width: "100%" }}
        onClick={onBack}>
        <IcoLeft /> Back to Sign In
      </button>
    </div>
  );

  return (
    <>
      <button className="zk-back-btn" onClick={onBack}>
        <IcoLeft /> Back to Sign In
      </button>

      <div className="zk-form-title">Reset password</div>
      <div className="zk-form-sub">We'll send you a secure reset link</div>

      {error && <AlertBox type="err" msg={error} />}

      <div className="zk-field">
        <label className="zk-label">Email Address</label>
        <div className="zk-input-wrap">
          <span className="zk-input-ico"><IcoMail /></span>
          <input className="zk-input" type="email"
            placeholder="you@example.com"
            value={email} onChange={e => setEmail(e.target.value)} />
        </div>
      </div>

      <div className="zk-tip-box">
        <strong>Tip:</strong> The reset link expires in 15 minutes. Check your
        spam or junk folder if you don't see the email.
      </div>

      <button className="zk-submit-btn" onClick={submit} disabled={loading}>
        {loading ? <><span className="zk-loader" />Sending link…</> : "Send Reset Link →"}
      </button>
      <AccentDots />

      <div className="zk-footer-row">
        Remember your password?
        <button className="zk-switch-link" onClick={onBack}>Sign in</button>
      </div>
    </>
  );
}

/* ══════════════════════
   ROOT EXPORT
══════════════════════ */
export default function Login() {
  const [view, setView]           = useState("login");
  const [activeTab, setActiveTab] = useState("login");

  function switchView(target) {
    setView(target);
    if (target !== "forgot") setActiveTab(target);
  }

  return (
    <div id="zk-auth-page">
      {/* Animated backgrounds */}
      <div id="zk-dot-grid" />
      <div id="zk-blob-tr" />
      <div id="zk-blob-bl" />

      {/* Floating geometric shapes */}
      <div className="zk-geo zk-geo-circle-pink" />
      <div className="zk-geo zk-geo-square-orange" />
      <div className="zk-geo zk-geo-diamond-green" />
      <div className="zk-geo zk-geo-ring" />
      <div className="zk-geo zk-geo-dot-pink" />

      {/* Auth card */}
      <div id="zk-card">
        {/* Logo */}
        <div id="zk-logo-wrap">
          <img id="zk-logo-img" src={logo} alt="Zoiko Mobile" />
        </div>

        {/* Tabs — hidden on forgot screen */}
        {view !== "forgot" && (
          <div id="zk-tab-bar">
            <button
              className={`zk-tab-pill ${activeTab === "login" ? "zk-tab-pill--active" : ""}`}
              onClick={() => switchView("login")}
            >
              Sign In
            </button>
            <button
              className={`zk-tab-pill ${activeTab === "register" ? "zk-tab-pill--active" : ""}`}
              onClick={() => switchView("register")}
            >
              Register
            </button>
          </div>
        )}

        {/* Views */}
        {view === "login"    && <LoginForm    onSwitch={switchView} onForgot={() => setView("forgot")} />}
        {view === "register" && <RegisterForm onSwitch={switchView} />}
        {view === "forgot"   && <ForgotForm   onBack={() => switchView("login")} />}

        {view !== "forgot" && (
          <div className="zk-legal">
            Protected by reCAPTCHA ·{" "}
            <a href="#">Privacy</a> · <a href="#">Terms</a>
          </div>
        )}
      </div>
    </div>
  );
}