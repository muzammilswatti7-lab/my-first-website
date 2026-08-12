"use client";

import { useEffect, useRef, useState } from "react";
import { FormState, submitForm } from "./lib/forms";

const whatsapp =
  "https://wa.me/923153063373?text=Hello%20MK%20Digital%20Labs%2C%20I%20want%20to%20discuss%20my%20business%20growth.";

const socialPlatforms = [
  { label: "Instagram", mark: "◎", className: "instagram" },
  { label: "Facebook", mark: "f", className: "facebook" },
  { label: "LinkedIn", mark: "in", className: "linkedin" },
  { label: "YouTube", mark: "▶", className: "youtube" },
  { label: "TikTok", mark: "♪", className: "tiktok" },
];

const services = [
  {
    index: "01",
    code: "STRATEGY",
    title: "Digital Growth Strategy",
    copy: "Research-led growth planning that connects your market, offer, funnel, channels and business objectives.",
    tags: ["Digital audits", "Go-to-market", "Growth roadmaps"],
    accent: "lime",
  },
  {
    index: "02",
    code: "SEO",
    title: "SEO & Organic Growth",
    copy: "Technical, on-page, local and content SEO designed to improve visibility, authority and qualified organic traffic.",
    tags: ["Technical SEO", "Local SEO", "Search content"],
    accent: "cyan",
  },
  {
    index: "03",
    code: "PPC",
    title: "Paid Media — SEM & PPC",
    copy: "Performance campaigns across search and social platforms, optimized around leads, sales and profitable acquisition.",
    tags: ["Google Ads", "Meta Ads", "Retargeting"],
    accent: "violet",
  },
  {
    index: "04",
    code: "SOCIAL",
    title: "Social Media Marketing",
    copy: "Channel strategy, content calendars, publishing, community management and campaigns that build meaningful reach.",
    tags: ["Management", "Campaigns", "Community"],
    accent: "cyan",
  },
  {
    index: "05",
    code: "WEB",
    title: "Website Design & Development",
    copy: "Premium, responsive and conversion-focused websites engineered for credibility, speed and business growth.",
    tags: ["Business websites", "Landing pages", "Web applications"],
    accent: "lime",
  },
  {
    index: "06",
    code: "ECOM",
    title: "E-commerce & CRO",
    copy: "Store experiences optimized from product discovery and merchandising through checkout, retention and repeat revenue.",
    tags: ["Shopify", "Store optimization", "Conversion rate"],
    accent: "violet",
  },
  {
    index: "07",
    code: "CREATIVE",
    title: "Brand, Content & Creative",
    copy: "A connected creative system covering brand identity, campaign concepts, copywriting, graphics and video marketing.",
    tags: ["Brand design", "Copywriting", "Video content"],
    accent: "lime",
  },
  {
    index: "08",
    code: "CRM",
    title: "Email, CRM & Lifecycle",
    copy: "Automated customer journeys that nurture leads, improve retention and create more value from every relationship.",
    tags: ["Email marketing", "CRM setup", "Lead nurturing"],
    accent: "cyan",
  },
  {
    index: "09",
    code: "AI",
    title: "AI & Business Automation",
    copy: "Intelligent workflows for lead capture, qualification, support, follow-up, reporting and repetitive business operations.",
    tags: ["AI assistants", "Workflows", "WhatsApp automation"],
    accent: "violet",
  },
  {
    index: "10",
    code: "DATA",
    title: "Analytics, Tracking & Attribution",
    copy: "Accurate measurement systems that connect customer activity, campaign performance and revenue-driving decisions.",
    tags: ["GA4 & GTM", "Meta CAPI", "Dashboards"],
    accent: "lime",
  },
  {
    index: "11",
    code: "ASO",
    title: "ASO & Mobile Growth",
    copy: "App store visibility and mobile acquisition strategies designed to increase qualified installs and user engagement.",
    tags: ["App Store SEO", "Acquisition", "Optimization"],
    accent: "cyan",
  },
  {
    index: "12",
    code: "PARTNER",
    title: "Affiliate & Partnership Marketing",
    copy: "Structured affiliate, creator and strategic partnership programs that expand reach with measurable accountability.",
    tags: ["Affiliate systems", "Creators", "Partnerships"],
    accent: "violet",
  },
];
const testimonials = [
  {
    name: "Amjad Sheikh",
    company: "AS Developer",
    service: "Web Development",
    location: "Karachi Pakistan",
    rating: 4,
    review:
      "I received an outstanding response from MK Digital Labs They are a reliable and credible agency",
  },
  {
    name: "Usama Majeed",
    company: "Usama Majeed",
    service: "Meta Ads",
    location: "Pakistan",
    rating: 5,
    review:
      "My company achieved amazing results after working with MK Digital Labs I truly appreciate your support",
  },
  {
    name: "Khalid Al Quraish",
    company: "Al Quraish Oud",
    service: "Shopify",
    location: "Dubai UAE",
    rating: 3,
    review:
      "A trustworthy agency with a responsive and professional team",
  },
  {
    name: "Alicent Holmes",
    company: "Nana Fashion",
    service: "Amazon Ecommerce",
    location: "Virginia USA",
    rating: 4,
    review:
      "I have worked with many agencies but MK Digital Labs stands far above the rest in quality and credibility Thank you for your support",
  },
];

const faqs = [
  {
    question: "Which businesses do you work with?",
    answer: "We work with service businesses, e-commerce brands, startups and growing companies that need a stronger digital acquisition and conversion system.",
  },
  {
    question: "Can you handle both marketing and website development?",
    answer: "Yes. That is one of our biggest strengths. We can connect your ads, website, landing pages, tracking, follow-ups and optimization under one clear strategy.",
  },
  {
    question: "Do you set up Meta Pixel, CAPI, GA4 and GTM?",
    answer: "Yes. We configure the tracking stack around your project, test the important conversion events and help make your reporting more reliable.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. MK Digital Labs is based in Pakistan and works remotely with clients worldwide through WhatsApp, email and video meetings.",
  },
  {
    question: "Can you improve an existing website or campaign?",
    answer: "Absolutely. We can audit what you already have, identify the highest-impact gaps and improve it without rebuilding everything unnecessarily.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState<FormState>("idle");
  const [statValues, setStatValues] = useState([0, 0, 0]);
const statsRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const element = statsRef.current;
  if (!element) return;

  let animationFrame = 0;
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;

    observer.disconnect();
    const targets = [8, 3, 24];
    const startedAt = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setStatValues(targets.map((target) => Math.round(target * eased)));

      if (progress < 1) animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);
  }, { threshold: 0.45 });

  observer.observe(element);

  return () => {
    observer.disconnect();
    cancelAnimationFrame(animationFrame);
  };
}, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal-scroll");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="MK Digital Labs home">
            <span className="brand-mark" aria-hidden="true"><span><b>M</b><b>K</b></span><i /></span>
            <span className="brand-copy"><strong><b>MK</b> DIGITAL LABS</strong><small>Your growth, our mission</small></span>
          </a>

          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>

          <div className={`nav-panel ${menuOpen ? "active" : ""}`}>
            <div className="nav-links">
              {[
                ["Home", "#home"],
                ["Services", "#services"],
                ["System", "#system"],
                ["Process", "#process"],
                ["Testimonials", "#testimonials"],
                ["FAQ", "#faq"],
                ["Portfolio", "/portfolio"],
                ["About", "/about"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              ))}
            </div>
        <a className="button button-nav" href="/quote">
  <span>Request a project quote</span>
  <i aria-hidden="true">↗</i>
</a>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="home">
          <div className="hero-aurora aurora-one" />
          <div className="hero-aurora aurora-two" />
          <div className="hero-grid-lines" />

          <div className="container hero-layout">
            <div className="hero-copy-block">
              <div className="hero-kicker reveal-one">
                <span className="pulse-dot" />
                Your complete digital growth partner
              </div>
              <h1 className="reveal-two">
                We build the system.<br />
                <span className="gradient-text">You scale the business.</span>
              </h1>
              <p className="hero-copy reveal-three">
                Marketing, high-converting websites, e-commerce, analytics and AI automation—connected into one growth engine built around your business.
              </p>

              <div className="hero-actions reveal-four">
               <a className="button button-primary magnetic" href="/quote">
                  <span>Build my growth engine</span><i aria-hidden="true">→</i>
                </a>
                <a className="text-link" href="#services">
                  Explore our capabilities <span aria-hidden="true">↓</span>
                </a>
              </div>

              <div className="hero-trust reveal-four" aria-label="Service benefits">
                <div><i>✓</i><span><strong>One partner</strong><small>Strategy to execution</small></span></div>
                <div><i>✓</i><span><strong>Clear reporting</strong><small>Decisions backed by data</small></span></div>
                <div><i>✓</i><span><strong>Built to scale</strong><small>Systems, not quick fixes</small></span></div>
              </div>
              <div className="hero-stats" ref={statsRef} aria-label="MK Digital Labs capabilities">
  <div className="hero-stat">
    <strong>{statValues[0]}<em>+</em></strong>
    <span>Core services</span>
  </div>
  <div className="hero-stat">
    <strong>{statValues[1]}</strong>
    <span>Growth layers</span>
  </div>
  <div className="hero-stat">
    <strong>{statValues[2]}<em>/7</em></strong>
    <span>Automation ready</span>
  </div>
</div>
            </div>

            <div className="engine-wrap reveal-three" aria-label="MK growth engine overview">
              <div className="engine-orbit orbit-one" />
              <div className="engine-orbit orbit-two" />
              <div className="engine-panel">
                <div className="engine-head">
                  <span>MK / GROWTH OS</span>
                  <div className="live-status"><i /> SYSTEM ACTIVE</div>
                </div>

                <div className="engine-title-row">
                  <div><small>CONNECTED GROWTH ENGINE</small><h2>From attention<br />to revenue.</h2></div>
                  <div className="engine-score"><span>READY</span><strong>24/7</strong></div>
                </div>

                <div className="engine-flow">
                  {[
                    ["01", "ATTRACT", "Ads + Content"],
                    ["02", "CONVERT", "Web + Funnels"],
                    ["03", "SCALE", "Data + AI"],
                  ].map(([number, label, note], index) => (
                    <div className="engine-step" key={number}>
                      <span className="step-number">{number}</span>
                      <div><strong>{label}</strong><small>{note}</small></div>
                      {index < 2 && <i className="flow-arrow" aria-hidden="true">→</i>}
                    </div>
                  ))}
                </div>

                <div className="signal-chart" aria-hidden="true">
                  <div className="chart-label"><span>Growth signal</span><strong>+ PERFORMANCE</strong></div>
                  <div className="chart-bars">
                    {[34, 42, 39, 54, 49, 65, 61, 75, 71, 88, 83, 96].map((height, index) => (
                      <i key={index} style={{ height: `${height}%`, animationDelay: `${index * 80}ms` }} />
                    ))}
                  </div>
                </div>

                <div className="engine-foot">
                  <span><i className="dot lime" /> Marketing</span>
                  <span><i className="dot cyan" /> Technology</span>
                  <span><i className="dot violet" /> Automation</span>
                </div>
              </div>

              <div className="float-chip chip-left"><span>↗</span><div><small>CONVERSION</small><strong>Optimized</strong></div></div>
              <div className="float-chip chip-right"><span>◎</span><div><small>AUTOMATION</small><strong>Always on</strong></div></div>
            </div>
          </div>

          <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><i /></div>
        </section>

        <section className="ticker" aria-label="Core capabilities">
          <div className="ticker-track">
            {["PERFORMANCE MARKETING", "WEB DEVELOPMENT", "BRAND DESIGN", "AI AUTOMATION", "E-COMMERCE GROWTH", "CREATIVE STUDIO", "TRACKING & ANALYTICS", "GROWTH STRATEGY", "PERFORMANCE MARKETING", "WEB DEVELOPMENT", "BRAND DESIGN", "AI AUTOMATION"].map((item, index) => (
              <span key={`${item}-${index}`}>{item}<i>✦</i></span>
            ))}
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-head">
              <div><p className="section-tag"><span>01</span> CAPABILITIES</p><h2>One agency.<br /><em>Every growth lever.</em></h2></div>
              <p>Stop coordinating disconnected freelancers. We connect strategy, creative, technology and automation around one outcome: sustainable growth.</p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className={`service-card ${service.accent}`} key={service.title}>
                  <div className="service-top"><span>{service.index}</span><i aria-hidden="true">↗</i></div>
                  <div className="service-code">{service.code}</div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="card-glow" />
                </article>
              ))}
            </div>
          </div>
        </section>

      

        <section className="section system-section" id="system">
          <div className="container system-layout reveal-scroll">
            <div className="system-copy">
              <p className="section-tag"><span>02</span> THE MK SYSTEM</p>
              <h2>Not random services.<br /><em>One connected engine.</em></h2>
              <p>Growth slows down when your ads, website, data and follow-up tools work in isolation. We connect the full customer journey so each piece makes the next one stronger.</p>
              <a className="text-link system-link" href="#process">See how we build it <span aria-hidden="true">↓</span></a>
            </div>

            <div className="system-map" aria-label="Connected growth system">
              <div className="map-head"><span>CUSTOMER JOURNEY / LIVE MAP</span><i><b /> CONNECTED</i></div>
              <div className="map-core">
                <div className="core-ring ring-a" />
                <div className="core-ring ring-b" />
                <div className="core-center"><small>YOUR</small><strong>GROWTH</strong><span>ENGINE</span></div>
                {[
                  ["Traffic", "Meta + Google", "node-one"],
                  ["Conversion", "Web + Funnels", "node-two"],
                  ["Intelligence", "Tracking + Data", "node-three"],
                  ["Scale", "AI + Automation", "node-four"],
                ].map(([title, note, className], index) => (
                  <div className={`map-node ${className}`} key={title}>
                    <span>{String(index + 1).padStart(2, "0")}</span><div><strong>{title}</strong><small>{note}</small></div>
                  </div>
                ))}
              </div>
              <div className="map-foot"><span>STRATEGY</span><i /><span>CREATIVE</span><i /><span>TECHNOLOGY</span><i /><span>OPTIMIZATION</span></div>
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-head process-head reveal-scroll">
              <div><p className="section-tag"><span>03</span> HOW WE WORK</p><h2>Clarity first.<br /><em>Momentum next.</em></h2></div>
              <p>A focused four-step process keeps decisions clear, work moving and every deliverable tied back to your business goal.</p>
            </div>

            <div className="process-grid reveal-scroll">
              {[
                ["01", "DISCOVER", "Find the real constraint", "We learn your offer, customers, current setup and the business result you want next."],
                ["02", "DESIGN", "Map the growth system", "We define the right channels, funnel, technology, tracking and success measures."],
                ["03", "BUILD", "Launch with precision", "We create, connect and test every moving part before it meets your audience."],
                ["04", "OPTIMIZE", "Improve what matters", "We read the data, remove friction and keep compounding the strongest opportunities."],
              ].map(([number, label, title, copy], index) => (
                <article className="process-card" key={number}>
                  <div className="process-index"><span>{number}</span>{index < 3 && <i />}</div>
                  <p>{label}</p><h3>{title}</h3><span className="process-copy">{copy}</span>
                </article>
              ))}
            </div>

            <div className="promise-grid reveal-scroll">
              <article><span>✓</span><div><h3>Business-first strategy</h3><p>Every decision starts with your goals, audience and offer.</p></div></article>
              <article><span>✓</span><div><h3>Clear communication</h3><p>Simple updates, transparent work and no unnecessary jargon.</p></div></article>
              <article><span>✓</span><div><h3>Built for conversion</h3><p>Design and campaigns focused on real customer action.</p></div></article>
              <article><span>✓</span><div><h3>Ready to scale</h3><p>Systems designed to grow with your business.</p></div></article>
            </div>
          </div>
        </section>

        <section className="stack-section">
          <div className="container stack-layout reveal-scroll">
            <div><p className="section-tag"><span>04</span> OUR TOOLBOX</p><h2>Platform fluent.<br /><em>Outcome focused.</em></h2></div>
           <div className="tool-groups" aria-label="Professional platforms and tools">
  {[
    {
      category: "Advertising & SEO",
      tools: [
        "Google Ads",
        "Meta Ads Manager",
        "LinkedIn Campaign Manager",
        "TikTok Ads Manager",
        "Google Search Console",
        "Google Business Profile",
        "Semrush",
        "Ahrefs",
        "Screaming Frog",
      ],
    },
    {
      category: "Analytics & CRO",
      tools: [
        "Google Analytics 4",
        "Google Tag Manager",
        "Looker Studio",
        "Meta Pixel",
        "Conversions API",
        "Microsoft Clarity",
        "Hotjar",
      ],
    },
    {
      category: "Web & E-commerce",
      tools: [
        "Next.js",
        "Shopify",
        "WordPress",
        "WooCommerce",
        "Webflow",
        "Vercel",
      ],
    },
    {
      category: "CRM & Lifecycle",
      tools: [
        "HubSpot",
        "Klaviyo",
        "Mailchimp",
        "Brevo",
        "WhatsApp Business",
      ],
    },
    {
      category: "Automation & AI",
      tools: [
        "OpenAI",
        "Claude",
        "Gemini",
        "Make",
        "Zapier",
        "n8n",
        "AI Agents",
      ],
    },
    {
      category: "Creative & Video",
      tools: [
        "Figma",
        "Adobe Creative Cloud",
        "Canva Pro",
        "Premiere Pro",
        "After Effects",
        "CapCut",
      ],
    },
  ].map((group) => (
    <div className="tool-group" key={group.category}>
      <h3>{group.category}</h3>
      <div className="tool-cloud">
        {group.tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </div>
  ))}
</div>
          </div>
        </section>
<section className="section testimonials-section" id="testimonials">
  <div className="container">
    <div className="testimonials-heading reveal-scroll">
      <div>
        <p className="section-tag">
          <span>05</span> CLIENT FEEDBACK
        </p>
        <h2>
          Trusted by businesses
          <br />
          <em>across markets</em>
        </h2>
      </div>

      <p>
        Genuine feedback from clients who trusted MK Digital Labs with their
        digital growth
      </p>
    </div>

    <div className="testimonials-grid reveal-scroll">
      {testimonials.map((testimonial) => (
        <article className="testimonial-card" key={testimonial.name}>
          <div className="testimonial-top">
            <div
              className="testimonial-stars"
              aria-label={`${testimonial.rating} out of 5 stars`}
            >
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  className={index < testimonial.rating ? "active" : ""}
                  key={index}
                  aria-hidden="true"
                >
                  ★
                </span>
              ))}
            </div>

            <span className="testimonial-service">
              {testimonial.service}
            </span>
          </div>

          <blockquote>{testimonial.review}</blockquote>

          <div className="testimonial-client">
            <span className="testimonial-avatar" aria-hidden="true">
              {testimonial.name
                .split(" ")
                .map((word) => word[0])
                .slice(0, 2)
                .join("")}
            </span>

            <div>
              <strong>{testimonial.name}</strong>
              <span>
                {testimonial.company} · {testimonial.location}
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <div className="faq-intro reveal-scroll">
              <p className="section-tag"><span>06</span> FAQ</p>
              <h2>Before we build,<br /><em>let&apos;s make it clear.</em></h2>
              <p>Have a question that is not here? Send us a WhatsApp message and we will point you in the right direction.</p>
              <a className="text-link system-link" href={whatsapp} target="_blank" rel="noreferrer">Ask on WhatsApp <span aria-hidden="true">↗</span></a>
            </div>
            <div className="faq-list reveal-scroll">
              {faqs.map((faq, index) => (
                <article className={`faq-item ${openFaq === index ? "open" : ""}`} key={faq.question}>
                  <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <span>{faq.question}</span><i aria-hidden="true" />
                  </button>
                  <div className="faq-answer"><p>{faq.answer}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-aurora" />
          <div className="container contact-layout reveal-scroll">
            <div className="contact-copy">
              <p className="section-tag"><span>07</span> START A CONVERSATION</p>
              <h2>Your next stage of growth starts with <em>one clear move.</em></h2>
              <p>Tell us what you want to improve. We will review your needs and suggest the most practical next step—without the confusing agency talk.</p>
              <div className="contact-options">
                <a href="mailto:muzammilswatti7@gmail.com"><span>EMAIL</span><strong>muzammilswatti7@gmail.com</strong><i>↗</i></a>
                <a href={whatsapp} target="_blank" rel="noreferrer"><span>WHATSAPP</span><strong>+92 315 3063373</strong><i>↗</i></a>
                <div><span>LOCATION</span><strong>Pakistan · Serving worldwide</strong><i>◎</i></div>
              </div>
            </div>

            <form className="contact-form" onSubmit={(event) => submitForm(event, setFormState)} action="https://formsubmit.co/muzammilswatti7@gmail.com" method="POST">
              <div className="form-head"><div><span>PROJECT INTAKE</span><h3>Tell us about your goal.</h3></div><i><b /> OPEN</i></div>
              <div className="form-row">
                <label><span>Your name</span><input type="text" name="name" placeholder="Enter your name" autoComplete="name" required /></label>
                <label><span>Email address</span><input type="email" name="email" placeholder="name@example.com" autoComplete="email" required /></label>
              </div>
              <label><span>Phone or WhatsApp</span><input type="tel" name="phone" placeholder="Your contact number" autoComplete="tel" required /></label>
              <label><span>What do you need help with?</span><textarea name="message" rows={5} placeholder="Tell us about your business, challenge and goal" required /></label>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Lead From MK Digital Labs" />
              <button className="button button-primary form-submit" type="submit" disabled={formState === "sending"}>
                <span>{formState === "sending" ? "Sending your details..." : formState === "success" ? "Project details received" : "Send your project details"}</span><i>{formState === "success" ? "✓" : "→"}</i>
              </button>
              <div className={`form-status ${formState}`} aria-live="polite">
                {formState === "success" && "Thank you! We will contact you shortly by email or WhatsApp."}
                {formState === "error" && "Something went wrong. Please try again or contact us on WhatsApp."}
                {formState === "idle" && "We normally respond through email or WhatsApp."}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-glow footer-glow-one" />
        <div className="footer-glow footer-glow-two" />
        <div className="container footer-cta reveal-scroll">
          <div>
            <p><span /> READY FOR YOUR NEXT MOVE?</p>
            <h2>Let&apos;s build a brand<br />people <em>remember.</em></h2>
          </div>
          <a className="button button-primary footer-cta-button" href="#contact"><span>Start your growth project</span><i aria-hidden="true">↗</i></a>
        </div>
        <div className="container footer-main">
          <div className="footer-brand-block">
            <a className="brand brand-footer" href="#home" aria-label="MK Digital Labs home">
              <span className="brand-mark" aria-hidden="true"><span><b>M</b><b>K</b></span><i /></span>
              <span className="brand-copy"><strong><b>MK</b> DIGITAL LABS</strong><small>Your growth, our mission</small></span>
            </a>
            <p>Marketing, high-converting websites and intelligent automation—connected into one growth system.</p>
            <div className="social-block">
              <span className="social-label">FIND MK DIGITAL LABS ONLINE</span>
              <div className="social-row" aria-label="MK Digital Labs social platforms">
                {socialPlatforms.map((social) => (
                  <span className={`social-link ${social.className}`} key={social.label} title={`${social.label} — profile link coming soon`}>
                    <i aria-hidden="true">{social.mark}</i><b>{social.label}</b>
                  </span>
                ))}
                <a className="social-link whatsapp-social" href={whatsapp} target="_blank" rel="noreferrer" aria-label="MK Digital Labs on WhatsApp"><i aria-hidden="true">WA</i><b>WhatsApp</b></a>
              </div>
            </div>
          </div>
          <div className="footer-nav"><span>EXPLORE</span><a href="#services">Services</a><a href="#system">Our system</a><a href="#process">Process</a><a href="#faq">FAQ</a></div>
          <div className="footer-nav"><span>CONTACT</span><a href="mailto:muzammilswatti7@gmail.com">Email us</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="#contact">Start a project</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} MK Digital Labs. All rights reserved.</span><a href="/privacy">PRIVACY POLICY</a><span>PAKISTAN <i /> WORLDWIDE</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>

   <a
  className="whatsapp-float"
  href={whatsapp}
  target="_blank"
  rel="noreferrer"
  aria-label="Chat with MK Digital Labs on WhatsApp"
>
  <i aria-hidden="true">
    <svg viewBox="0 0 24 24">
      <path d="M12.04 2a9.84 9.84 0 0 0-8.43 14.91L2 22l5.22-1.57A9.94 9.94 0 1 0 12.04 2Zm0 17.88a8 8 0 0 1-4.08-1.12l-.29-.17-3.1.93.96-3.02-.19-.31a7.87 7.87 0 1 1 6.7 3.69Zm4.37-5.89c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  </i>
  <span>Chat on WhatsApp</span>
</a>
    </>
  );
}

