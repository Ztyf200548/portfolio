import { useLayoutEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { CONTACT } from '@/data/portfolio';
import { gsap, EASE_OUT } from '@/lib/anim';

export default function HeroSection() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // mask-reveal the giant title lines (clip from bottom, slight upward settle)
      gsap.fromTo(
        '.hero-line',
        { clipPath: 'inset(100% 0% 0% 0%)', y: 60 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          y: 0,
          duration: 1.6,
          stagger: 0.18,
          ease: EASE_OUT,
          delay: 0.2,
        },
      );
      // eyebrow + intro text fade-up
      gsap.fromTo(
        '.hero-fade',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: EASE_OUT,
          delay: 1.0,
        },
      );
      // CTA buttons
      gsap.fromTo(
        '.hero-cta',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: EASE_OUT,
          delay: 1.4,
        },
      );
      // the floating down arrow
      gsap.fromTo(
        '.hero-arrow',
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 2, ease: 'power2.out' },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, hsl(4 58% 54% / 0.12), transparent 55%)',
        }}
      />

      <div className="relative mx-auto w-full px-0" style={{ maxWidth: 1700 }}>
        <p className="hero-fade px-5 pt-28 text-[10px] tracking-[0.3em] text-primary md:px-8 md:text-xs">
          PORTFOLIO · 2026 · {CONTACT.name}
        </p>

        <h1 className="mt-6 select-none font-bold leading-[0.85] tracking-tight text-primary md:mt-8">
          <span className="hero-line block text-[20vw] md:text-[13rem]">法言</span>
        </h1>

        <h1 className="select-none font-bold leading-[0.85] tracking-tight text-foreground">
          <span className="hero-line block text-[20vw] md:text-[13rem]">有声</span>
        </h1>

        <div className="mt-6 flex items-end justify-between gap-8 px-5 md:mt-8 md:gap-12 md:px-8">
          <h1 className="select-none font-bold leading-[0.9] tracking-tight text-primary">
            <span className="hero-line block text-[6vw] md:text-[5.5rem]">
              把法律讲给普通人听。
            </span>
          </h1>
          <p className="hero-fade hidden max-w-xs pb-3 text-xs leading-relaxed text-muted-foreground md:block">
            {CONTACT.role}。独立运营法律科普抖音号「{CONTACT.douyinName}」，
            从选题到成片一人完成。两个月 47 条视频，粉丝 9674、累计获赞 25.8 万，
            单条最高播放 239.5 万。
          </p>
        </div>

        <div className="mt-8 flex items-center gap-3 px-5 pb-16 md:mt-12 md:gap-4 md:px-8 md:pb-20">
          <button
            onClick={() =>
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="hero-cta rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-[hsl(4_70%_60%)] md:px-7 md:py-3"
          >
            看作品
          </button>
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="hero-cta rounded-full border border-primary/40 px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground md:px-7 md:py-3"
          >
            联系我
          </button>
        </div>
      </div>

      <div className="hero-arrow absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}
