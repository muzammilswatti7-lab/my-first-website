"use client";

import { FormEvent, useMemo, useState } from "react";

const topics = [
  {
    id: "marketing",
    label: "Digital Marketing",
    icon: "01",
    response:
      "We build performance marketing systems across Meta Ads, Google Ads, retargeting, campaign creative and conversion-focused funnels.",
  },
  {
    id: "website",
    label: "Website Services",
    icon: "02",
    response:
      "We create fast, mobile-friendly business websites, landing pages and e-commerce experiences designed to build trust and generate action.",
  },
  {
    id: "automation",
    label: "AI & Automation",
    icon: "03",
    response:
      "We connect CRM, WhatsApp follow-ups, lead qualification and AI workflows so your team can respond faster and operate efficiently.",
  },
  {
    id: "tracking",
    label: "Tracking & Analytics",
    icon: "04",
    response:
      "We configure GA4, Google Tag Manager, Meta Pixel, Conversion API and reporting systems to show what is driving real growth.",
  },
  {
    id: "growth",
    label: "Complete Growth System",
    icon: "05",
    response:
      "We connect strategy, marketing, websites, tracking and automation into one growth system built around your business.",
  },
] as const;

const goals = [
  "Generate qualified leads",
  "Increase online sales",
  "Improve tracking",
  "Automate follow-ups",
];

type TopicId = (typeof topics)[number]["id"];

export default function GrowthAssistant() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<TopicId | null>(null);
  const [goal, setGoal] = useState("");
  const [question, setQuestion] = useState("");

  const activeTopic = useMemo(
    () => topics.find((topic) => topic.id === selected),
    [selected]
  );

  const whatsappMessage = encodeURIComponent(
    `Hello MK Digital Labs, I am interested in ${
      activeTopic?.label ?? "business growth services"
    }. My goal is ${goal || "to discuss my project"}.${
      question ? ` My question: ${question}` : ""
    }`
  );

  const whatsappUrl = `https://wa.me/923153063373?text=${whatsappMessage}`;

  function resetChat() {
    setSelected(null);
    setGoal("");
    setQuestion("");
  }

  function sendQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="assistant-root">
      {open && (
        <section className="assistant-panel" aria-label="MK Growth Assistant">
          <header className="assistant-header">
            <div className="assistant-avatar">MK</div>
            <div>
              <strong>MK Growth Assistant</strong>
              <span><i /> Business guidance available</span>
            </div>
            <button
              className="close-button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
            >
              ×
            </button>
          </header>

          <div className="assistant-body">
            <div className="message assistant-message">
              <small>MK DIGITAL LABS</small>
              <p>
                Welcome! I can help you find the right growth solution for your
                business. What would you like to improve?
              </p>
            </div>

            {!activeTopic && (
              <div className="topic-grid">
                {topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => setSelected(topic.id)}
                    className="topic-button"
                  >
                    <span>{topic.icon}</span>
                    {topic.label}
                  </button>
                ))}
              </div>
            )}

            {activeTopic && (
              <>
                <div className="message user-message">
                  <p>{activeTopic.label}</p>
                </div>

                <div className="message assistant-message">
                  <small>RECOMMENDED DIRECTION</small>
                  <p>{activeTopic.response}</p>
                </div>

                {!goal ? (
                  <div className="goal-area">
                    <p className="question-label">
                      What is your main business goal?
                    </p>
                    {goals.map((item) => (
                      <button
                        className="goal-button"
                        key={item}
                        onClick={() => setGoal(item)}
                      >
                        {item}
                        <span>→</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className="message user-message">
                      <p>{goal}</p>
                    </div>

                    <div className="message assistant-message">
                      <small>NEXT STEP</small>
                      <p>
                        Great choice. Share a few project details and our team
                        will recommend the clearest strategy for your business.
                      </p>
                    </div>

                    <form className="assistant-form" onSubmit={sendQuestion}>
                      <input
                        value={question}
                        onChange={(event) => setQuestion(event.target.value)}
                        placeholder="Tell us about your business..."
                        aria-label="Tell us about your business"
                      />
                      <button type="submit" aria-label="Continue on WhatsApp">
                        ↗
                      </button>
                    </form>

                    <a
                      className="whatsapp-button"
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Continue on WhatsApp
                      <span>→</span>
                    </a>
                  </>
                )}

                <button className="restart-button" onClick={resetChat}>
                  ← Explore other services
                </button>
              </>
            )}
          </div>

          <footer className="assistant-footer">
            Secure business enquiry • MK Digital Labs
          </footer>
        </section>
      )}

      <button
        className={`assistant-launcher ${open ? "launcher-open" : ""}`}
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close growth assistant" : "Open growth assistant"}
      >
        <span className="launcher-mark">{open ? "×" : "MK"}</span>
        {!open && (
          <span className="launcher-copy">
            <strong>Growth Assistant</strong>
            <small>Let&apos;s plan your growth</small>
          </span>
        )}
      </button>

      <style jsx>{`
        .assistant-root {
          position: fixed;
          right: 22px;
          bottom: 92px;
          z-index: 999;
          font-family: Inter, Arial, sans-serif;
        }

        .assistant-panel {
          width: min(390px, calc(100vw - 24px));
          max-height: min(650px, calc(100vh - 135px));
          margin-bottom: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          color: #f7f8fa;
          border: 1px solid rgba(198, 255, 61, 0.24);
          border-radius: 22px;
          background: #10141c;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.48);
          animation: assistantIn 240ms ease-out;
        }

        .assistant-header {
          padding: 15px;
          display: flex;
          align-items: center;
          gap: 11px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
          background:
            radial-gradient(circle at 10% 0%, rgba(198, 255, 61, 0.14), transparent 45%),
            #151a23;
        }

        .assistant-avatar,
        .launcher-mark {
          display: grid;
          place-items: center;
          color: #101508;
          background: linear-gradient(135deg, #d2ff58, #aaf126);
          font-weight: 900;
        }

        .assistant-avatar {
          width: 43px;
          height: 43px;
          border-radius: 13px;
        }

        .assistant-header > div:nth-child(2) {
          flex: 1;
          display: grid;
          gap: 5px;
        }

        .assistant-header strong {
          font-size: 14px;
        }

        .assistant-header span {
          color: #9fa8b6;
          font-size: 10px;
        }

        .assistant-header i {
          width: 6px;
          height: 6px;
          margin-right: 5px;
          display: inline-block;
          border-radius: 50%;
          background: #baff2c;
          box-shadow: 0 0 10px #baff2c;
        }

        .close-button {
          width: 33px;
          height: 33px;
          color: #c9ced7;
          border: 0;
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.06);
          font-size: 22px;
          cursor: pointer;
        }

        .assistant-body {
          padding: 15px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #394253 transparent;
        }

        .message {
          width: fit-content;
          max-width: 90%;
          margin-bottom: 12px;
          padding: 12px 13px;
          border-radius: 14px;
        }

        .message p {
          margin: 0;
          font-size: 13px;
          line-height: 1.55;
        }

        .message small {
          display: block;
          margin-bottom: 6px;
          color: #baff2c;
          font-size: 8px;
          letter-spacing: 1.3px;
        }

        .assistant-message {
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: #191f2a;
          border-bottom-left-radius: 5px;
        }

        .user-message {
          margin-left: auto;
          color: #101508;
          background: #baff2c;
          border-bottom-right-radius: 5px;
          font-weight: 700;
        }

        .topic-grid {
          display: grid;
          gap: 8px;
        }

        .topic-button,
        .goal-button {
          width: 100%;
          padding: 11px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #e9edf4;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 11px;
          background: #171d27;
          text-align: left;
          font-size: 12px;
          cursor: pointer;
          transition: 180ms ease;
        }

        .topic-button:hover,
        .goal-button:hover {
          border-color: rgba(198, 255, 61, 0.55);
          background: #1d2530;
          transform: translateX(3px);
        }

        .topic-button span {
          min-width: 28px;
          height: 28px;
          display: grid;
          place-items: center;
          color: #baff2c;
          border-radius: 8px;
          background: rgba(198, 255, 61, 0.08);
          font-size: 10px;
          font-weight: 800;
        }

        .question-label {
          margin: 14px 0 9px;
          color: #abb3c0;
          font-size: 11px;
        }

        .goal-button {
          justify-content: space-between;
          margin-bottom: 7px;
        }

        .goal-button span {
          color: #baff2c;
        }

        .assistant-form {
          display: flex;
          gap: 7px;
          margin-top: 12px;
        }

        .assistant-form input {
          min-width: 0;
          flex: 1;
          padding: 12px;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 11px;
          outline: none;
          background: #0d1118;
          font-size: 12px;
        }

        .assistant-form input:focus {
          border-color: #baff2c;
        }

        .assistant-form button {
          width: 43px;
          color: #101508;
          border: 0;
          border-radius: 11px;
          background: #baff2c;
          font-weight: 900;
          cursor: pointer;
        }

        .whatsapp-button {
          margin-top: 9px;
          padding: 12px 14px;
          display: flex;
          justify-content: space-between;
          color: #07140d;
          border-radius: 11px;
          background: #25d366;
          text-decoration: none;
          font-size: 12px;
          font-weight: 900;
        }

        .restart-button {
          margin-top: 14px;
          padding: 0;
          color: #aab2bf;
          border: 0;
          background: transparent;
          font-size: 10px;
          cursor: pointer;
        }

        .assistant-footer {
          padding: 10px;
          color: #747e8d;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          text-align: center;
          font-size: 9px;
        }

        .assistant-launcher {
          min-height: 58px;
          margin-left: auto;
          padding: 7px 15px 7px 7px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          border: 1px solid rgba(198, 255, 61, 0.35);
          border-radius: 18px;
          background: #131923;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
          cursor: pointer;
        }

        .launcher-mark {
          width: 44px;
          height: 44px;
          border-radius: 13px;
        }

        .launcher-copy {
          display: grid;
          gap: 3px;
          text-align: left;
        }

        .launcher-copy strong {
          font-size: 12px;
        }

        .launcher-copy small {
          color: #9ca5b3;
          font-size: 9px;
        }

        .launcher-open {
          padding: 7px;
          border-radius: 15px;
        }

        @keyframes assistantIn {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 600px) {
          .assistant-root {
            right: 12px;
            bottom: 78px;
          }

          .assistant-panel {
            max-height: calc(100vh - 115px);
          }

          .launcher-copy {
            display: none;
          }

          .assistant-launcher {
            min-height: auto;
            padding: 6px;
          }
        }
      `}</style>
    </div>
  );
}