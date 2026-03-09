import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const planItems = [
  {
    group: 'FOR YOU',
    items: [
      { to: '/student-discount-programme/',        icon: '🎓', label: 'Student Plans',        sub: 'Exclusive deals for students',    pink: false },
      { to: '/essential-worker-plans', icon: '💼', label: 'Essential Worker Plans', sub: 'Tailored for key workers',      pink: true  },
      { to: '/social-tariff-plans',  icon: '🤝', label: 'Social Tariff Plans',  sub: 'Affordable connectivity for all', pink: false },
    ],
  },
  {
    group: 'USAGE & FLEXIBILITY',
    items: [
      { to: '/data-only-plans', icon: '📊', label: 'Data-Only Plans',       sub: 'Pure data, no calls needed',    pink: false },
      { to: '/30-day-plans',    icon: '🔁', label: 'Flexible 30-Day Plans', sub: 'No contract, cancel anytime',   pink: false },
    ],
  },
];

function Header() {
  const [isSticky, setIsSticky]   = useState(false);
  const [plansOpen, setPlansOpen] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const open  = () => { clearTimeout(timerRef.current); setPlansOpen(true);  };
  const close = () => { timerRef.current = setTimeout(() => setPlansOpen(false), 150); };

  return (
    <>
      {/* ── Top Bar ── */}
      <div className={`zkTopBar ${isSticky ? 'zkTopBar--hidden' : ''}`}>
        <div className="container d-flex justify-content-end gap-4">
          <NavLink className="zkTopLink" to="/activate-your-sim">Activate Your SIM</NavLink>
          <NavLink className="zkTopLink" to="/top-up">Top Up</NavLink>
          <NavLink className="zkTopLink" to="/switch-and-save">Switch &amp; Save</NavLink>
          <NavLink className="zkTopLink" to="/contact">Contact Us</NavLink>
          <NavLink className="zkTopLink" to="/support">Support</NavLink>
          <a className="zkTopLink" href="#">International Calls</a>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav className={`zkNav ${isSticky ? 'zkNav--sticky' : ''}`}>
        <div className="container d-flex align-items-center">

          {/* Logo */}
          <a className="navbar-brand me-4" href="/">
            <img src="/images/logo.png" alt="Zoiko" height="50" />
          </a>

          {/* Links */}
          <ul className="zkNavLinks">

            {/* ── Plans dropdown ── */}
            <li className="zkNavItem zkNavItem--plans" onMouseEnter={open} onMouseLeave={close}>
              <span className={`zkNavLink zkPlansTrigger ${plansOpen ? 'zkPlansTrigger--open' : ''}`}>
                Zoiko Plans
                <svg className={`zkChevron ${plansOpen ? 'zkChevron--open' : ''}`}
                  width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2.2"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>

              {/* ── Dropdown Panel ── */}
              <div className={`zkDrop ${plansOpen ? 'zkDrop--open' : ''}`}>
                <div className="zkDropArrow" />

                {/* All Plans */}
                <NavLink className="zkDropAllPlans" to="/plans">All Plans</NavLink>

                {planItems.map(section => (
                  <div key={section.group}>
                    <p className="zkDropGroupLabel">{section.group}</p>
                    {section.items.map((item, i) => (
                      <NavLink
                        key={item.to}
                        className="zkDropRow"
                        to={item.to}
                        style={{ animationDelay: `${i * 0.04 + 0.05}s` }}
                      >
                        <span className="zkDropIcon">{item.icon}</span>
                        <span className="zkDropTexts">
                          <span className={`zkDropLabel ${item.pink ? 'zkDropLabel--pink' : ''}`}>
                            {item.label}
                          </span>
                          <span className="zkDropSub">{item.sub}</span>
                        </span>
                      </NavLink>
                    ))}
                  </div>
                ))}
              </div>
            </li>

            <li className="zkNavItem"><NavLink className="zkNavLink" to="/business-deals">Business Deals</NavLink></li>
            <li className="zkNavItem"><NavLink className="zkNavLink" to="/devices">Devices</NavLink></li>
            <li className="zkNavItem"><NavLink className="zkNavLink" to="/animals-music">Animals &amp; Music</NavLink></li>
            <li className="zkNavItem"><NavLink className="zkNavLink" to="/about-us">About Us</NavLink></li>
          </ul>

          {/* Right side */}
          <div className="zkNavRight">
            <button className="zkIconBtn"><i className="bi bi-search" /></button>
            <button className="zkIconBtn"><i className="bi bi-cart" /></button>
            <NavLink className="zkLoginBtn" to="/login">Login</NavLink>
          </div>
        </div>
      </nav>

      {isSticky && <div style={{ height: 80 }} />}
    </>
  );
}

export default Header;