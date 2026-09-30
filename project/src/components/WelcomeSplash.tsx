import { useEffect, useState } from 'react';

export function WelcomeSplash() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Hold 1.6s then fade ~0.4s → ~2s total
    const fadeTimer = setTimeout(() => setFade(true), 1600);
    const hideTimer = setTimeout(() => setShow(false), 2000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`welcome-splash ${fade ? 'welcome-splash-out' : ''}`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="welcome-splash-inner">
        <img src="/images/aviu-logo.png" alt="" className="welcome-splash-logo" />
        <p className="welcome-splash-title">Avance International University</p>
        <p className="welcome-splash-sub">Welcome · NCHE Accredited · Nabweru, Uganda</p>
      </div>
    </div>
  );
}
