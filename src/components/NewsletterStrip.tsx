import { useState } from 'react';
import { Mail } from 'lucide-react';

export function NewsletterStrip() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <section className="newsletter-strip">
      <div className="newsletter-inner">
        <div>
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <span className="eyebrow-line" style={{ background: 'rgba(255,255,255,0.5)' }} /> Stay informed
          </div>
          <h2>AVIU news &amp; intake reminders</h2>
          <p>January · May · August intakes · open days · research events. Unsubscribe anytime.</p>
        </div>
        {done ? (
          <p className="newsletter-thanks">Thank you — we will be in touch at {email}.</p>
        ) : (
          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (!email.includes('@')) return;
              setDone(true);
            }}
          >
            <Mail size={18} />
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email for newsletter"
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}
