import { useLayoutEffect, useRef } from 'react';
import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react';
import { CONTACT } from '@/data/portfolio';
import { gsap, EASE_OUT } from '@/lib/anim';

export default function ContactSection() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-head',
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: EASE_OUT,
          scrollTrigger: { trigger: root.current, start: 'top 65%' },
        },
      );
      gsap.fromTo(
        '.contact-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: EASE_OUT,
          scrollTrigger: { trigger: '.contact-grid', start: 'top 80%' },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="contact"
      className="relative flex min-h-screen scroll-mt-16 items-center overflow-hidden border-t border-border"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="red-drift absolute inset-[-20%]"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 30% 40%, hsl(4 58% 54% / 0.22), transparent 60%), radial-gradient(ellipse 50% 60% at 75% 70%, hsl(8 60% 40% / 0.18), transparent 65%)',
          }}
        />
      </div>

      <div className="relative mx-auto w-full px-5 md:px-8" style={{ maxWidth: 1700 }}>
        <p className="contact-head mb-6 text-sm tracking-[0.3em] text-primary">04</p>
        <h2 className="contact-head max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl">
          一起做<span className="text-primary">有用的内容</span>。
        </h2>
        <p className="contact-head mt-6 max-w-lg text-base text-muted-foreground md:mt-8 md:text-lg">
          正在寻找新媒体运营 / 短视频内容方向的实习机会。可每周到岗 5 天、持续 6 个月以上，随时入职。
        </p>

        <div className="contact-grid mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:mt-16 md:grid-cols-3">
          <a
            href={`tel:${CONTACT.phone}`}
            className="contact-card group card-glow bg-card p-6 transition-colors duration-300 hover:bg-[hsl(4_30%_12%)] md:p-8"
          >
            <Phone className="h-5 w-5 text-primary" />
            <div className="mt-6 text-xs tracking-wider text-muted-foreground">电话</div>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-lg font-medium text-foreground">{CONTACT.phone}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="contact-card group card-glow bg-card p-6 transition-colors duration-300 hover:bg-[hsl(4_30%_12%)] md:p-8"
          >
            <Mail className="h-5 w-5 text-primary" />
            <div className="mt-6 text-xs tracking-wider text-muted-foreground">邮箱</div>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-lg font-medium text-foreground">{CONTACT.email}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </a>

          <a
            href={CONTACT.douyin}
            target="_blank"
            rel="noreferrer"
            className="contact-card group card-glow bg-card p-6 transition-colors duration-300 hover:bg-[hsl(4_30%_12%)] md:p-8"
          >
            <MessageCircle className="h-5 w-5 text-primary" />
            <div className="mt-6 text-xs tracking-wider text-muted-foreground">
              抖音 · {CONTACT.douyinName}
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-lg font-medium text-foreground">查看主页</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </a>
        </div>

        <p className="mt-12 text-xs text-muted-foreground md:mt-20">
          © 2026 周腾峰 · 法言有声 · Built with React + Vite
        </p>
      </div>
    </section>
  );
}
