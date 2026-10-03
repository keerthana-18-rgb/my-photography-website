import { useState } from 'react';

const services = [
  {
    title: 'Wedding Stories',
    text: 'Cinematic coverage of vows, rituals, emotions, and the moments you never want to forget.',
    slug: 'wedding-stories',
    heroImage:
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    ],
    summary: 'We document sacred rituals, joyful ceremonies, and intimate family moments with a cinematic editorial touch that feels deeply personal and timeless.',
    pricing: [
      { name: 'Classic Story', amount: '₹35,000', detail: 'Ideal for intimate ceremonies with essential coverage and curated highlights.' },
      { name: 'Signature Celebration', amount: '₹55,000', detail: 'Full-day wedding coverage with family portraits and a polished final gallery.' },
      { name: 'Heritage Collection', amount: '₹82,000', detail: 'Luxury-day storytelling, multiple setups, and an elevated cinematic album experience.' },
    ],
    process: [
      'Pre-wedding planning call to understand your venue, rituals, and priorities.',
      'Coverage of the haldi, mehendi, wedding rituals, and emotional family moments.',
      'Candid storytelling with a relaxed direction to ensure natural expressions and graceful portraits.',
      'Fine-art final delivery with a curated album and print-ready gallery.',
    ],
    testimonials: [
      {
        name: 'Aarav & Meera',
        event: 'Wedding Story',
        quote: 'Every emotion felt beautifully documented. We still relive our ceremony through the images and the storytelling felt incredibly personal.',
      },
      {
        name: 'Nisha Kapoor',
        event: 'Family Celebration',
        quote: 'The team blended into our wedding day so naturally that we forgot they were there. Each frame felt candid, warm, and deeply meaningful.',
      },
    ],
  },
  {
    title: 'Portrait Sessions',
    text: 'Artful portraits with natural light, fashion direction, and warm, editorial styling.',
    slug: 'portrait-sessions',
    heroImage:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    ],
    summary: 'Our portrait sessions blend beauty, expression, and cultural elegance to create refined images that celebrate individuality with confidence and warmth.',
    pricing: [
      { name: 'Minimal Glow', amount: '₹18,000', detail: 'One location, classic styling, and a curated portrait set.' },
      { name: 'Studio Luxe', amount: '₹28,000', detail: 'Fashion-forward styling, multiple looks, and premium retouching.' },
      { name: 'Signature Editorial', amount: '₹42,000', detail: 'Luxury portrait direction with multiple outfits, location storytelling, and final gallery delivery.' },
    ],
    process: [
      'Creative consultation to decide styling, colors, mood, and location.',
      'Direction for pose flow, natural movement, and expressive storytelling.',
      'Use of natural light and handcrafted composition for a premium editorial feel.',
      'Delivery of polished high-resolution portraits for prints, social media, and keepsakes.',
    ],
    testimonials: [
      {
        name: 'Riya Sharma',
        event: 'Portrait Session',
        quote: 'The entire session felt like a luxury editorial shoot. The direction was gentle, the final portraits were stunning, and every pose looked effortless.',
      },
      {
        name: 'Aditya Nair',
        event: 'Personal Branding',
        quote: 'We wanted elegant portraits with confidence and character. The results felt refined, modern, and deeply aligned with my brand.',
      },
    ],
  },
  {
    title: 'Events & Celebrations',
    text: 'From birthdays to corporate events, we capture the spirit and atmosphere of every gathering.',
    slug: 'events-celebrations',
    heroImage:
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&w=900&q=80',
    ],
    summary: 'From festive birthdays to meaningful cultural gatherings, we capture the atmosphere, energy, and emotional details that make every celebration unforgettable.',
    pricing: [
      { name: 'Celebration Cover', amount: '₹22,000', detail: 'A relaxed event coverage package with a curated gallery of key moments.' },
      { name: 'Grand Event Story', amount: '₹38,000', detail: 'Expanded coverage for longer events, guest storytelling, and selection planning.' },
      { name: 'Luxury Event Experience', amount: '₹58,000', detail: 'Complete event narrative with premium detail coverage and branded highlight presentation.' },
    ],
    process: [
      'Event planning and timing review to map the story of the celebration.',
      'Candid photo coverage of arrivals, rituals, speeches, performances, and guest moments.',
      'Balanced documentary and portrait coverage to preserve both emotion and atmosphere.',
      'Fast-turnaround gallery and highlight reels for easy sharing and remembrance.',
    ],
    testimonials: [
      {
        name: 'Kavya & Group',
        event: 'Birthday Celebration',
        quote: 'The energy of the evening was captured perfectly. We loved how the gallery told the story from entrance to final dance performance.',
      },
      {
        name: 'Siddharth Rao',
        event: 'Corporate Gathering',
        quote: 'Professional, thoughtful and beautifully composed. The team documented our event with a sense of elegance that matched the brand exactly.',
      },
    ],
  },
];

const testimonials = [
  {
    name: 'Ananya & Vikram',
    event: 'Destination Wedding',
    quote: 'Our wedding felt cinematic, and the final gallery captured every blessing, every smile, and every deeply emotional moment with grace.',
  },
  {
    name: 'Priya Menon',
    event: 'Portrait Experience',
    quote: 'The session felt personal, calm, and beautifully styled. The photos were polished but still felt like us—warm, natural, and expressive.',
  },
  {
    name: 'Rohan Sethi',
    event: 'Corporate Event',
    quote: 'The team documented our celebration in a way that felt premium and polished. Every moment was captured without making anyone feel posed or staged.',
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
  const [selectedService, setSelectedService] = useState(null);

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

  const handleBookThisSession = (serviceTitle) => {
    setBookingForm((prev) => ({ ...prev, serviceType: serviceTitle }));
    setSelectedService(null);
    document.getElementById('book-now')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        {selectedService ? (
          <section className="info-section service-detail-section">
            <button className="back-btn" onClick={() => setSelectedService(null)}>
              ← Back to services
            </button>

            <div
              className="service-banner"
              style={{ backgroundImage: `linear-gradient(90deg, rgba(24,18,15,0.72), rgba(24,18,15,0.28)), url(${selectedService.heroImage})` }}
            >
              <div className="service-banner-content">
                <p className="eyebrow">Our Signature Service</p>
                <h2>{selectedService.title}</h2>
                <p className="service-summary">{selectedService.summary}</p>
                <div className="service-cta-row">
                  <button className="primary-btn" onClick={() => handleBookThisSession(selectedService.title)}>
                    Book this session
                  </button>
                </div>
              </div>
            </div>

            <div className="pricing-block">
              <div className="section-heading left-aligned">
                <p className="eyebrow">Pricing</p>
                <h2>Luxury experiences tailored to your story.</h2>
              </div>
              <div className="pricing-grid">
                {selectedService.pricing.map((plan) => (
                  <div className="price-card" key={plan.name}>
                    <span className="price-label">{plan.name}</span>
                    <strong>{plan.amount}</strong>
                    <p>{plan.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-gallery">
              {selectedService.images.map((image, index) => (
                <img key={`${selectedService.slug}-${index}`} src={image} alt={selectedService.title} />
              ))}
            </div>

            <div className="service-process">
              <h3>How the session flows</h3>
              <ol>
                {selectedService.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>

            {selectedService.testimonials && (
              <div className="service-testimonials">
                <h3>Client feedback</h3>
                <div className="testimonials-grid">
                  {selectedService.testimonials.map((item) => (
                    <article className="testimonial-card" key={`${selectedService.slug}-${item.name}`}>
                      <div className="stars">★★★★★</div>
                      <p>“{item.quote}”</p>
                      <div className="testimonial-author">
                        <strong>{item.name}</strong>
                        <span>{item.event}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </section>
        ) : (
          <>
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
              <article
                className="service-card"
                key={service.title}
                onClick={() => setSelectedService(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedService(service);
                  }
                }}
              >
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="read-more">View details →</span>
              </article>
            ))}
          </div>
        </section>

        <section className="info-section testimonials-section">
          <div className="section-heading">
            <p className="eyebrow">Testimonials</p>
            <h2>Words from our clients.</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <div className="stars">★★★★★</div>
                <p>“{item.quote}”</p>
                <div className="testimonial-author">
                  <strong>{item.name}</strong>
                  <span>{item.event}</span>
                </div>
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
          </>
        )}
      </main>

      <footer className="footer">
        <p>© 2026 Photostudio. Crafted for meaningful moments.</p>
      </footer>
    </div>
  );
}

export default App;
