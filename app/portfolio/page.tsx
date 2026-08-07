import Link from "next/link";

const work = [
  {
    type: "WEB + FUNNELS",
    title: "Lead Generation System",
    text: "A high-converting web experience designed to attract the right audience, qualify leads and move prospects into action.",
    tag: "CONVERT",
    color: "lime",
  },
  {
    type: "E-COMMERCE",
    title: "Commerce Growth Engine",
    text: "A premium store experience that makes discovery simple, strengthens trust and creates a smoother path to purchase.",
    tag: "SELL",
    color: "cyan",
  },
  {
    type: "AUTOMATION + AI",
    title: "Smart Operations Hub",
    text: "A connected system that brings leads, follow-ups, reporting and everyday operations into one clear workflow.",
    tag: "SCALE",
    color: "purple",
  },
  {
    type: "BRAND + CREATIVE",
    title: "Authority Launch Kit",
    text: "A sharp identity and creative direction built to help an ambitious business look established from day one.",
    tag: "POSITION",
    color: "blue",
  },
];

export default function PortfolioPage() {
  return (
    <main className="work-page">
      <style>{`
        :root { color-scheme: dark; }
        * { box-sizing: border-box; }
        .work-page {
          min-height: 100vh;
          overflow: hidden;
          color: #f7f7f8;
          background:
            radial-gradient(circle at 9% 78%, rgba(34, 224, 203, .12), transparent 24%),
            radial-gradient(circle at 84% 18%, rgba(119, 73, 255, .15), transparent 30%),
            #08090d;
          font-family: Arial, Helvetica, sans-serif;
        }
        .shell { width: min(1240px, calc(100% - 32px)); margin: 0 auto; }
        .nav {
          position: sticky; top: 14px; z-index: 20; margin-top: 18px;
          display: flex; align-items: center; justify-content: space-between; gap: 18px;
          padding: 11px 12px 11px 16px; border: 1px solid rgba(255,255,255,.12);
          border-radius: 23px; background: rgba(11,12,18,.83); backdrop-filter: blur(16px);
        }
        .brand { display: flex; gap: 11px; align-items: center; color: #fff; text-decoration: none; min-width: max-content; }
        .brand-mark {
          display: grid; place-items: center; width: 47px; height: 47px; border-radius: 14px;
          font-weight: 900; color: #d5ff42; background: linear-gradient(145deg,#26351b,#11170f);
          border: 1px solid #a7e72d; box-shadow: inset 0 0 17px rgba(172,255,51,.16);
        }
        .brand-name { font-size: 15px; font-weight: 900; letter-spacing: .5px; }
        .brand-sub { margin-top: 3px; color: #90919b; font-size: 10px; letter-spacing: 3px; }
        .nav-links { display: flex; gap: 23px; align-items: center; }
        .nav-links a { color: #c0c0c8; text-decoration: none; font-size: 13px; font-weight: 700; }
        .nav-links a:hover, .nav-links .active { color: #c8ff35; }
        .nav-cta {
          padding: 14px 19px; border-radius: 13px; color: #101306; background: #baff26;
          text-decoration: none; font-size: 13px; font-weight: 900; white-space: nowrap;
        }
        .hero { position: relative; padding: 110px 0 70px; }
        .hero::after {
          content: ""; position: absolute; right: 6%; top: 35px; width: 460px; height: 460px;
          border: 1px solid rgba(177,255,47,.13); border-radius: 50%; pointer-events: none;
        }
        .eyebrow {
          display: inline-flex; align-items: center; gap: 9px; padding: 10px 15px; border-radius: 99px;
          color: #d1d2d7; border: 1px solid #30303a; background: rgba(22,22,29,.72);
          font-size: 12px; letter-spacing: 2px; font-weight: 700;
        }
        .dot { width: 8px; height: 8px; border-radius: 99px; background: #baff26; box-shadow: 0 0 15px #baff26; }
        h1 { max-width: 850px; margin: 22px 0 20px; font-size: clamp(50px, 8vw, 105px); line-height: .94; letter-spacing: -5px; }
        .gradient { background: linear-gradient(90deg,#c9ff35,#46dff4 48%,#9b7dff); -webkit-background-clip: text; color: transparent; }
        .intro { max-width: 650px; color: #b6b6c0; font-size: 18px; line-height: 1.7; }
        .hero-stats { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 32px; }
        .stat { padding: 13px 16px; border: 1px solid #30313a; border-radius: 12px; color: #d6d6dd; font-size: 12px; letter-spacing: 1px; }
        .stat b { color: #baff26; margin-right: 7px; }
        .section-head { display: flex; justify-content: space-between; align-items: end; gap: 20px; margin-bottom: 22px; }
        .section-head h2 { margin: 0; font-size: clamp(32px,5vw,55px); letter-spacing: -2px; }
        .section-head p { max-width: 350px; margin: 0; color: #a3a4ad; line-height: 1.6; }
        .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 17px; padding-bottom: 100px; }
        .project {
          position: relative; min-height: 420px; overflow: hidden; padding: 27px; display: flex; flex-direction: column;
          border: 1px solid #292a32; border-radius: 22px; background: linear-gradient(145deg, rgba(24,25,31,.98), rgba(11,12,16,.98));
          transition: transform .3s ease, border-color .3s ease;
        }
        .project:hover { transform: translateY(-7px); border-color: #7ae4e1; }
        .project::before { content: ""; position: absolute; width: 290px; height: 290px; right: -70px; top: -70px; border-radius: 50%; opacity: .25; filter: blur(4px); }
        .lime::before { background: #baff26; } .cyan::before { background: #32dff4; } .purple::before { background: #9b7dff; } .blue::before { background: #438cff; }
        .project-top { position: relative; display: flex; justify-content: space-between; color: #a9abb4; font-size: 11px; letter-spacing: 1.8px; font-weight: 800; }
        .project-no { color: #fff; }
        .project-visual {
          position: relative; width: 100%; height: 154px; margin: 24px 0;
          border: 1px solid rgba(255,255,255,.13); border-radius: 15px; background: rgba(6,8,11,.44);
          display: flex; align-items: end; gap: 8px; padding: 17px;
        }
        .bar { flex: 1; border-radius: 4px 4px 1px 1px; background: linear-gradient(#c7ff33, #45d6ec); box-shadow: 0 0 15px rgba(61,228,240,.35); }
        .bar:nth-child(1){height:28%}.bar:nth-child(2){height:44%}.bar:nth-child(3){height:38%}.bar:nth-child(4){height:63%}.bar:nth-child(5){height:78%}.bar:nth-child(6){height:100%}
        .project h3 { position: relative; max-width: 420px; margin: 0 0 12px; font-size: 30px; letter-spacing: -1.2px; }
        .project p { position: relative; max-width: 430px; margin: 0; color: #b3b4be; font-size: 15px; line-height: 1.65; }
        .project-tag { position: relative; margin-top: auto; padding-top: 24px; color: #c9ff35; font-size: 12px; font-weight: 900; letter-spacing: 1.4px; }
        .cta { padding: 74px 20px; text-align: center; border-top: 1px solid #272832; background: rgba(12,13,18,.75); }
        .cta h2 { max-width: 850px; margin: auto; font-size: clamp(38px,6vw,72px); line-height: .98; letter-spacing: -3px; }
        .cta p { color: #aaaab5; font-size: 17px; margin: 18px auto 28px; }
        .button { display: inline-block; padding: 16px 22px; border-radius: 13px; background: #baff26; color: #111508; text-decoration: none; font-size: 14px; font-weight: 900; }
        @media (max-width: 900px) { .nav-links { display: none; } .hero { padding: 82px 0 54px; } .grid { grid-template-columns: 1fr; } }
        @media (max-width: 540px) {
          .shell { width: min(100% - 20px, 1240px); } .nav { top: 7px; padding: 9px 10px; border-radius: 18px; }
          .brand-mark { width: 39px; height: 39px; font-size: 13px; } .brand-name { font-size: 12px; } .brand-sub { font-size: 8px; letter-spacing: 2px; }
          .nav-cta { padding: 11px 12px; font-size: 10px; } h1 { letter-spacing: -3px; } .intro { font-size: 16px; }
          .hero::after { width: 280px; height: 280px; right: -100px; } .project { min-height: 380px; } .section-head { display:block; } .section-head p { margin-top: 10px; }
        }
      `}</style>

      <div className="shell">
        <nav className="nav">
          <Link href="/" className="brand">
            <span className="brand-mark">MK</span>
            <span><span className="brand-name">MK DIGITAL LABS</span><br /><span className="brand-sub">GROWTH SYSTEMS STUDIO</span></span>
          </Link>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/#services">Services</Link>
            <Link href="/portfolio" className="active">Work</Link>
            <Link href="/#process">Process</Link>
            <Link href="/#contact">Contact</Link>
          </div>
          <Link href="/#contact" className="nav-cta">Book a free strategy call ↗</Link>
        </nav>

        <section className="hero">
          <div className="eyebrow"><span className="dot" /> SELECTED GROWTH SYSTEMS</div>
          <h1>Built to <span className="gradient">convert, connect</span> and scale.</h1>
          <p className="intro">Every project is designed as a connected system—not just a beautiful page. Strategy, creative, technology and automation work together to create measurable momentum.</p>
          <div className="hero-stats">
            <span className="stat"><b>01</b> ATTRACT</span><span className="stat"><b>02</b> CONVERT</span><span className="stat"><b>03</b> SCALE</span>
          </div>
        </section>

        <section>
          <div className="section-head">
            <h2>Systems with a purpose.</h2>
            <p>Explore the kinds of growth experiences we build for ambitious businesses.</p>
          </div>
          <div className="grid">
            {work.map((item, index) => (
              <article className={`project ${item.color}`} key={item.title}>
                <div className="project-top"><span>{item.type}</span><span className="project-no">0{index + 1}</span></div>
                <div className="project-visual"><span className="bar" /><span className="bar" /><span className="bar" /><span className="bar" /><span className="bar" /><span className="bar" /></div>
                <h3>{item.title}</h3><p>{item.text}</p><div className="project-tag">SYSTEM MODE: {item.tag} →</div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="cta">
        <h2>Ready to build your <span className="gradient">growth system?</span></h2>
        <p>Tell us where you want to go. We&apos;ll map the clearest way to get there.</p>
        <Link href="/#contact" className="button">Build my growth engine →</Link>
      </section>
    </main>
  );
}