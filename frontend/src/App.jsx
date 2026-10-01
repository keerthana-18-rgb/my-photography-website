import { useState } from 'react';

const services = [
  {
    title: 'Wedding Stories',
    text: 'Cinematic coverage of vows, rituals, emotions, and the moments you never want to forget.',
  },
  {
    title: 'Portrait Sessions',
    text: 'Artful portraits with natural light, fashion direction, and warm, editorial styling.',
  },
  {
    title: 'Events & Celebrations',
    text: 'From birthdays to corporate events, we capture the spirit and atmosphere of every gathering.',
  },
];

const gallery = [
  {
    title: 'Wedding',
    number: '01',
    image:
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Portrait',
    number: '02',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Travel',
    number: '03',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Engagement',
    number: '04',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Family',
    number: '05',
    image:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Editorial',
    number: '06',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  },
];

const initialContact = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const initialBooking = {
  serviceType: 'Wedding Photography',
  preferredDate: '',
  fullName: '',
  phone: '',
};

const API_BASE = import.meta.env.VITE_API_URL || '';

function App() {
  const [contactForm, setContactForm] = useState(initialContact);
  const [bookingForm, setBookingForm] = useState(initialBooking);
  const [contactStatus, setContactStatus] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingChange = (event) => {
    const { name, value } = event.target;
    setBookingForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setContactStatus('Sending...');

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Something went wrong');
      }

      setContactStatus('Your message has been sent successfully!');
      setContactForm(initialContact);
    } catch (error) {
      setContactStatus(error.message || 'Could not send message.');
    }
  };

  const handleBookingSubmit = async (event) => {
    event.preventDefault();
    setBookingStatus('Submitting...');

    try {
      const response = await fetch(`${API_BASE}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingForm),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Booking failed');
      }

      setBookingStatus('Booking request submitted successfully!');
      setBookingForm(initialBooking);
    } catch (error) {
      setBookingStatus(error.message || 'Could not submit booking.');
    }
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark" aria-label="Evara Studios logo">
            <span>E</span>
          </div>
          <div>
            <p className="brand-name">Evara Studios</p>
            <p className="brand-tag">Stories in light</p>
          </div>
        </div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <a href="#book-now" className="nav-cta">Book Now</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Modern storytelling photography</p>
            <h1>We capture the moments that shape your story.</h1>
            <p className="hero-text">
              Whether it is a wedding, portrait session, or milestone celebration,
              we create timeless images that feel as real as the moment itself.
            </p>
            <div className="hero-actions">
              <a href="#book-now" className="primary-btn">Book a Session</a>
              <a href="#contact" className="secondary-btn">Contact Us</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="mini-card">
              <span>450+</span>
              <small>Weddings covered</small>
            </div>
            <div className="mini-card gold">
              <span>12 yrs</span>
              <small>Creative experience</small>
            </div>
          </div>
        </section>

        <section id="about" className="info-section">
          <div className="section-heading">
            <p className="eyebrow">About us</p>
            <h2>Crafting beautiful, honest imagery.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                We are a boutique photography studio focused on human connection,
                natural emotion, and elevated storytelling. Our work blends editorial
                composition with candid authenticity so every frame feels personal.
              </p>
            </div>
            <div className="stats-panel">
              <div>
                <strong>8k</strong>
                <span>Photos delivered</span>
              </div>
              <div>
                <strong>96%</strong>
                <span>Client referral rate</span>
              </div>
              <div>
                <strong>3 weeks</strong>
                <span>Average delivery time</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="info-section alt">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Photography for life’s biggest moments.</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="info-section">
          <div className="section-heading">
            <p className="eyebrow">Gallery</p>
            <h2>Selected stories.</h2>
          </div>

          <div className="gallery-grid">
            {gallery.map((item) => (
              <div
                className="gallery-item"
                key={item.title}
                style={{ backgroundImage: `linear-gradient(180deg, rgba(24, 18, 15, 0.15), rgba(24, 18, 15, 0.7)), url(${item.image})` }}
              >
                <span>{item.number}</span>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="info-section alt">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let’s create something beautiful together.</h2>
          </div>

          <div className="contact-layout">
            <div className="contact-details">
              <p><strong>Studio:</strong> 123 Creative Studio Lane</p>
              <p><strong>Email:</strong> contact@photographyagency.com</p>
              <p><strong>Phone:</strong> +1 (555) 234-5678</p>
            </div>

            <form className="form-card" onSubmit={handleContactSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={handleContactChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={handleContactChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={contactForm.subject}
                onChange={handleContactChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={contactForm.message}
                onChange={handleContactChange}
                required
              />
              <button type="submit" className="primary-btn full-width">Send Message</button>
              {contactStatus && <p className="form-status">{contactStatus}</p>}
            </form>
          </div>
        </section>

        <section id="book-now" className="info-section">
          <div className="section-heading">
            <p className="eyebrow">Booking</p>
            <h2>Reserve your session.</h2>
          </div>

          <form className="booking-card" onSubmit={handleBookingSubmit}>
            <label>
              <span>Service Type</span>
              <select name="serviceType" value={bookingForm.serviceType} onChange={handleBookingChange}>
                <option value="Wedding Photography">Wedding Photography</option>
                <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                <option value="Birthday Party">Birthday Party</option>
                <option value="Corporate Event">Corporate Event</option>
              </select>
            </label>

            <label>
              <span>Preferred Date</span>
              <input
                type="date"
                name="preferredDate"
                value={bookingForm.preferredDate}
                onChange={handleBookingChange}
                required
              />
            </label>

            <label>
              <span>Full Name</span>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={bookingForm.fullName}
                onChange={handleBookingChange}
                required
              />
            </label>

            <label>
              <span>Phone Number</span>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={bookingForm.phone}
                onChange={handleBookingChange}
                required
              />
            </label>

            <button type="submit" className="primary-btn full-width">Confirm Booking Request</button>
            {bookingStatus && <p className="form-status">{bookingStatus}</p>}
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Photostudio. Crafted for meaningful moments.</p>
      </footer>
    </div>
  );
}

export default App;
