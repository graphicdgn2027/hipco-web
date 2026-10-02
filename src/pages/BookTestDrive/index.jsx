import { useState } from 'react';
import SideActions from '@/components/common/SideActions';
import usePageMeta from '@/hooks/usePageMeta';
import stylesheet from '@/styles/webflow/home.css?url';
import NepaliDatePicker from './NepaliDatePicker';
import './book-test-drive.css';

const meta = {
  title: 'Book a Test Drive | Hipco Montra Electric',
  description: "Book a test drive for the Montra Electric Super Auto, Super Cargo or EVIATOR. Experience zero-emission mobility on Nepal's roads.",
  stylesheet,
  bodyClass: 'body-4',
};

const VEHICLES = ['Super Auto', 'Super Cargo', 'EVIATOR'];
const TIME_SLOTS = [
  { id: 'morning',   label: 'Morning',   sub: '9 AM – 12 PM' },
  { id: 'afternoon', label: 'Afternoon', sub: '12 PM – 4 PM' },
  { id: 'evening',   label: 'Evening',   sub: '4 PM – 7 PM' },
];
const EMPTY = { name: '', phone: '', email: '', city: '', vehicle: '', timeSlot: '', message: '' };

export default function BookTestDrivePage() {
  usePageMeta(meta);
  const [values, setValues]         = useState(EMPTY);
  const [bsDate, setBsDate]         = useState(null); // { year, month, day, adDate }
  const [status, setStatus]         = useState('idle'); // idle | sending | success | error

  const update = (e) => {
    setStatus('idle');
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDateChange = (sel) => {
    setStatus('idle');
    setBsDate(sel);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const dateBS = bsDate
      ? `${['Baisakh','Jestha','Ashadh','Shrawan','Bhadra','Ashwin','Kartik','Mangsir','Poush','Magh','Falgun','Chaitra'][bsDate.month]} ${bsDate.day}, ${bsDate.year} BS (${bsDate.adDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })} AD)`
      : 'Not specified';

    try {
      const res = await fetch('https://formsubmit.co/ajax/info@hipco.com.np', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Test Drive Request – ${values.vehicle} – ${values.name}`,
          _template: 'table',
          Name: values.name,
          Phone: values.phone,
          Email: values.email,
          'City / Location': values.city,
          Vehicle: values.vehicle,
          'Preferred Date (BS)': dateBS,
          'Preferred Time': values.timeSlot || 'Not specified',
          Message: values.message || '—',
        }),
      });
      const data = await res.json();
      setStatus(data.success === 'true' || data.success === true ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="btd-page">
      <SideActions />

      {/* Hero */}
      <section className="btd-hero">
        <div className="btd-shell">
          <p className="btd-eyebrow">Experience electric</p>
          <h1 className="btd-hero__title">Book a<br /><span>Test Drive</span></h1>
          <p className="btd-hero__lead">
            Get behind the wheel of a Montra Electric vehicle. Fill in the form and our team will
            reach out to schedule your drive at a location convenient for you.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="btd-body">
        <div className="btd-shell btd-layout">

          {/* Side info */}
          <aside className="btd-info">
            <div className="btd-info__block">
              <p className="btd-info__label">Choose your vehicle</p>
              <ul className="btd-info__vehicles">
                {VEHICLES.map((v) => (
                  <li
                    key={v}
                    className={`btd-info__vehicle${values.vehicle === v ? ' is-selected' : ''}`}
                    onClick={() => { setStatus('idle'); setValues((prev) => ({ ...prev, vehicle: v })); }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setValues((prev) => ({ ...prev, vehicle: v }))}
                  >
                    <span className="btd-info__vehicle-dot" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>

            <div className="btd-info__block">
              <p className="btd-info__label">What to expect</p>
              <ol className="btd-info__steps">
                <li>Submit this form</li>
                <li>Our team contacts you within 24 hrs</li>
                <li>Schedule a convenient time &amp; location</li>
                <li>Experience your test drive</li>
              </ol>
            </div>

            <div className="btd-info__block">
              <p className="btd-info__label">Have questions?</p>
              <a className="btd-info__link" href="tel:+9779717101010">+977 971-7101010</a>
              <a className="btd-info__link" href="mailto:info@hipco.com.np">info@hipco.com.np</a>
            </div>
          </aside>

          {/* Form card */}
          {status === 'success' ? (
            <div className="btd-card btd-success">
              <div className="btd-success__icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M14 25l7 7 13-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="btd-success__heading">Request received!</h2>
              <p className="btd-success__body">
                Thank you, <strong>{values.name}</strong>. We&rsquo;ve received your test drive request for
                the <strong>{values.vehicle}</strong>. Our team will contact you at{' '}
                <strong>{values.phone}</strong> within 24 hours to confirm.
              </p>
              <button className="btd-btn btd-btn--outline" onClick={() => { setValues(EMPTY); setBsDate(null); setStatus('idle'); }}>
                Book another
              </button>
            </div>
          ) : (
            <form className="btd-card" onSubmit={handleSubmit} noValidate>
              <h2 className="btd-card__heading">Your details</h2>

              <div className="btd-form__grid">
                {/* Name */}
                <label className="btd-field">
                  <span>Full name <em>*</em></span>
                  <input name="name" value={values.name} onChange={update} required maxLength={120} autoComplete="name" placeholder="Aarav Sharma" />
                </label>

                {/* Phone */}
                <label className="btd-field">
                  <span>Phone <em>*</em></span>
                  <input name="phone" type="tel" value={values.phone} onChange={update} required maxLength={30} autoComplete="tel" placeholder="+977 98XXXXXXXX" />
                </label>

                {/* Email */}
                <label className="btd-field">
                  <span>Email <em>*</em></span>
                  <input name="email" type="email" value={values.email} onChange={update} required maxLength={160} autoComplete="email" placeholder="you@example.com" />
                </label>

                {/* City */}
                <label className="btd-field">
                  <span>City / Location <em>*</em></span>
                  <input name="city" value={values.city} onChange={update} required maxLength={80} placeholder="Kathmandu" />
                </label>

                {/* Vehicle */}
                <label className="btd-field">
                  <span>Vehicle model <em>*</em></span>
                  <select name="vehicle" value={values.vehicle} onChange={update} required>
                    <option value="">Select a vehicle</option>
                    {VEHICLES.map((v) => <option key={v}>{v}</option>)}
                  </select>
                </label>

                {/* Nepali Date Picker */}
                <div className="btd-field">
                  <span>Preferred date (BS)</span>
                  <NepaliDatePicker onChange={handleDateChange} />
                </div>

                {/* Time slot */}
                <div className="btd-field btd-field--wide">
                  <span>Preferred time</span>
                  <div className="btd-timeslots">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        className={`btd-timeslot${values.timeSlot === slot.id ? ' is-active' : ''}`}
                        onClick={() => { setStatus('idle'); setValues((prev) => ({ ...prev, timeSlot: slot.id })); }}
                      >
                        <span className="btd-timeslot__label">{slot.label}</span>
                        <span className="btd-timeslot__sub">{slot.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <label className="btd-field btd-field--wide">
                  <span>Additional message</span>
                  <textarea name="message" rows={4} value={values.message} onChange={update} maxLength={1000} placeholder="Any specific questions or requirements..." />
                </label>
              </div>

              <div className="btd-form__footer">
                <button type="submit" className="btd-btn btd-btn--primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Book test drive →'}
                </button>
                {status === 'error' && (
                  <p className="btd-form__error" role="alert">
                    Something went wrong. Please try again or call +977 971-7101010.
                  </p>
                )}
                <p className="btd-form__note">
                  Sent directly to <strong>info@hipco.com.np</strong>. We respond within 24 hours.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
