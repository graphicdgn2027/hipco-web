import { useState } from 'react';
import SideActions from '@/components/common/SideActions';
import usePageMeta from '@/hooks/usePageMeta';
import stylesheet from '@/styles/webflow/home.css?url';
import '../Contact/contact.css'; // Reuse contact layout styles for form

const meta = {
  title: 'Become a Dealer | HIPCO Trading Pvt. Ltd.',
  description: 'Join our growing network of Montra Electric dealers across Nepal.',
  stylesheet,
  bodyClass: 'body-4',
};

const EMPTY = { name: '', phone: '', email: '', location: '', experience: '' };

export default function BecomeDealerPage() {
  usePageMeta(meta);
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const update = (e) => {
    setStatus('idle');
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target._honey && e.target._honey.value) {
      // Honeypot triggered by bot - fake success and discard
      setStatus('success');
      return;
    }
    setStatus('sending');

    try {
      const res = await fetch('https://formsubmit.co/ajax/info@hipco.com.np', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Dealership Inquiry – ${values.name} (${values.location})`,
          _template: 'table',
          _honey: '',
          Name: values.name,
          Phone: values.phone,
          Email: values.email,
          'Proposed Dealership Location': values.location,
          'Prior Business Experience': values.experience || '—',
        }),
      });
      const data = await res.json();
      setStatus(data.success === 'true' || data.success === true ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="ct-page">
      <SideActions variant="home" />
      <section className="ct-hero ct-hero--solo page-grid">
        <div className="ct-shell page-content">
          <p className="ct-eyebrow">Partner with us</p>
          <h1 className="ct-hero__title">Become a <span>Dealer.</span></h1>
          <p className="ct-hero__lead">
            Join Nepal's electric mobility revolution. Partner with HIPCO Trading Pvt. Ltd. and bring Montra Electric vehicles to your region.
          </p>
        </div>
      </section>
      <section className="ct-body page-grid">
        <div className="ct-shell page-content">
          <div className="btd-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {status === 'success' ? (
              <div className="btd-success">
                <div className="btd-success__icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M14 25l7 7 13-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="btd-success__heading">Inquiry Received!</h2>
                <p className="btd-success__body">
                  Thank you, <strong>{values.name}</strong>. We&rsquo;ve received your dealership inquiry for{' '}
                  <strong>{values.location}</strong>. Our business development team will contact you at{' '}
                  <strong>{values.phone}</strong> or <strong>{values.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  className="btd-btn btd-btn--outline"
                  onClick={() => { setValues(EMPTY); setStatus('idle'); }}
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <>
                <h2 className="btd-card__heading">Express Your Interest</h2>
                <form className="btd-form__grid" onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                  {/* Honeypot field for bot spam prevention */}
                  <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                  <label className="btd-field">
                    <span>Full Name <em>*</em></span>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={values.name}
                      onChange={update}
                      required
                      maxLength={120}
                    />
                  </label>
                  <label className="btd-field">
                    <span>Phone <em>*</em></span>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+977 98XXXXXXXX"
                      value={values.phone}
                      onChange={update}
                      required
                      maxLength={30}
                    />
                  </label>
                  <label className="btd-field">
                    <span>Email <em>*</em></span>
                    <input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={values.email}
                      onChange={update}
                      required
                      maxLength={160}
                    />
                  </label>
                  <label className="btd-field">
                    <span>Proposed Dealership Location <em>*</em></span>
                    <input
                      name="location"
                      type="text"
                      placeholder="City / District"
                      value={values.location}
                      onChange={update}
                      required
                      maxLength={100}
                    />
                  </label>
                  <label className="btd-field btd-field--wide">
                    <span>Prior Business Experience</span>
                    <textarea
                      name="experience"
                      rows="4"
                      placeholder="Briefly describe your current business or automobile experience..."
                      value={values.experience}
                      onChange={update}
                      maxLength={1500}
                    />
                  </label>
                  <div className="btd-form__footer" style={{ gridColumn: '1 / -1' }}>
                    <button
                      type="submit"
                      className="btd-btn btd-btn--primary"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Submitting…' : 'Submit Inquiry'}
                    </button>
                    {status === 'error' && (
                      <p className="btd-form__error" role="alert" style={{ marginTop: '10px' }}>
                        Something went wrong. Please try again or call +977 971-7101010.
                      </p>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
