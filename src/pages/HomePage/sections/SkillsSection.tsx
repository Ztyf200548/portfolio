import { useLayoutEffect, useRef } from 'react';
import { SKILLS } from '@/data/portfolio';
import { gsap, EASE_OUT } from '@/lib/anim';

export default function SkillsSection() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-head',
        { y: 80, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.3,
          ease: EASE_OUT,
          scrollTrigger: { trigger: root.current, start: 'top 75%' },
        },
      );
      gsap.fromTo(
        '.skill-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: EASE_OUT,
          scrollTrigger: { trigger: '.skill-grid', start: 'top 75%' },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="skills" className="scroll-mt-16 border-t border-border py-32">
      <div className="mx-auto w-full px-8" style={{ maxWidth: 1700 }}>
        <div className="skill-head mb-16 flex items-baseline gap-4">
          <span className="text-sm tracking-[0.3em] text-primary">03</span>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">我能做什么</h2>
        </div>

        <div className="skill-grid grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {SKILLS.map((s) => (
            <div
              key={s.title}
              className="skill-card card-glow group bg-card p-10 transition-colors duration-300 hover:bg-[hsl(4_30%_12%)]"
            >
              <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
