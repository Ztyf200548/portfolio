import { useLayoutEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, img } from '@/data/portfolio';
import { gsap, EASE_OUT } from '@/lib/anim';

export default function ProjectsSection() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.work-head',
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
        '.work-row',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: EASE_OUT,
          scrollTrigger: { trigger: '.work-list', start: 'top 75%' },
        },
      );
      // thumbnail parallax
      gsap.to('.work-thumb img', {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: '.work-list',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="work" className="scroll-mt-16 py-32">
      <div className="mx-auto w-full px-8" style={{ maxWidth: 1700 }}>
        <div className="work-head mb-16 flex items-end justify-between">
          <div className="flex items-baseline gap-4">
            <span className="text-sm tracking-[0.3em] text-primary">02</span>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">精选作品</h2>
          </div>
          <p className="text-sm text-muted-foreground">抖音号「法言有声」部分代表作品</p>
        </div>

        <div className="work-list border-t border-border">
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className="work-row group relative grid grid-cols-12 items-center gap-6 border-b border-border py-10 transition-colors duration-300 hover:bg-card"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="text-sm font-medium text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="col-span-10 md:col-span-7">
                <h3 className="text-2xl font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary md:text-3xl">
                  {p.title}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span>{p.topic}</span>
                  <span className="text-border">·</span>
                  <span>{p.published}</span>
                  {p.highlight && (
                    <>
                      <span className="text-border">·</span>
                      <span className="text-primary">爆款</span>
                    </>
                  )}
                </div>
              </div>

              <div className="col-span-8 flex gap-8 md:col-span-3">
                <div>
                  <div className="text-lg font-semibold text-foreground">{p.plays}</div>
                  <div className="mt-0.5 text-[10px] tracking-wider text-muted-foreground">播放</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-foreground">{p.likes}</div>
                  <div className="mt-0.5 text-[10px] tracking-wider text-muted-foreground">点赞</div>
                </div>
              </div>

              <div className="work-thumb col-span-4 hidden md:col-span-1 md:block">
                <div className="aspect-[3/4] w-16 overflow-hidden rounded-sm border border-border">
                  <img
                    src={img(p.cover)}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-muted-foreground md:block">
                <ArrowUpRight className="h-5 w-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
