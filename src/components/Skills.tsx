// src/components/Skills.tsx
import React, { useEffect, useRef } from "react";
import "../Skills.css";

type Skill = {
  name: string;
  desc: string;
  pct: number;
};

const skills: Skill[] = [
  { name: "HTML", desc: "Building the structure of websites", pct: 90  },
  { name: "CSS", desc: "Styling and designing websites", pct: 85 },
  { name: "React.js", desc: "Building dynamic and responsive UI", pct: 80 },
  { name: "JavaScript", desc: "Making websites interactive", pct: 85 },
  { name: "Bootstrap", desc: "Responsive & mobile-first", pct: 75 },
  { name: "Next.js", desc: "SSR & SSG", pct: 70 },
  { name: "Node.js", desc: "Server-side JavaScript", pct: 65 },
];

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>(".card"));
    if (cards.length === 0) return;

    const observers: IntersectionObserver[] = [];

    cards.forEach((card, index) => {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // add visible for CSS reveal
              entry.target.classList.add("visible");

              // animate progress
              const progress = entry.target.querySelector<HTMLElement>(".progress");
              const fill = progress?.querySelector<HTMLElement>("i");
              const pctAttr = progress?.getAttribute("data-fill");
              const pct = pctAttr ? Number(pctAttr) : 0;

              if (fill) {
                setTimeout(() => {
                  fill.style.width = `${pct}%`;
                }, 120 + index * 80); // small stagger
              }

              // stop observing after reveal
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.16 }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading" style={{ textAlign: "center", marginTop: 28 , fontSize: "2.9rem"}}>
        MY SKILLS
      </h2>

      <div ref={containerRef} className="cards-grid" style={{ marginTop: 20 }}>
        {skills.map((s) => (
          <article key={s.name} className="card reveal" aria-label={`${s.name} skill card`}>
            <div className="card-row">
              <div className="icon" aria-hidden>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M7 7h10M7 12h10M7 17h10" />
                </svg>
              </div>

              <div style={{ flex: 1 }}>
                <h4>{s.name}</h4>
                <small>{s.desc}</small>

                <div className="progress-wrap">
                  <div className="progress" data-fill={s.pct}>
                    <i style={{ width: "0%" }} />
                  </div>
                  <div className="percent">{s.pct}%</div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
