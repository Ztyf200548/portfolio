import { useLayoutEffect, useRef } from 'react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { ACCOUNT_STATS, CONTACT, img } from '@/data/portfolio';
import { gsap, EASE_OUT } from '@/lib/anim';

export default function AboutSection() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // section headline: big slide up + settle
      gsap.fromTo(
        '.about-head',
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
      // portrait: clip reveal from bottom + slight parallax
      gsap.fromTo(
        '.about-portrait',
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.5,
          ease: EASE_OUT,
          scrollTrigger: { trigger: root.current, start: 'top 65%' },
        },
      );
      gsap.to('.about-portrait img', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      // text block: fade-up
      gsap.fromTo(
        '.about-text',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.12,
          ease: EASE_OUT,
          scrollTrigger: { trigger: root.current, start: 'top 60%' },
        },
      );
      // stat cards stagger
      gsap.fromTo(
        '.about-stat',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: EASE_OUT,
          scrollTrigger: { trigger: root.current, start: 'top 55%' },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="about" className="scroll-mt-16 py-16 md:py-32">
      <div className="mx-auto w-full px-5 md:px-8" style={{ maxWidth: 1700 }}>
        <div className="about-head mb-10 flex items-baseline gap-4 md:mb-16">
          <span className="text-sm tracking-[0.3em] text-primary">01</span>
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">关于我</h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="about-portrait lg:col-span-4">
            <div className="aspect-[3/4] w-full max-w-xs overflow-hidden rounded-sm border border-border md:max-w-sm">
              <img
                src={img('portrait.jpg')}
                alt="周腾峰"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="about-text text-xl font-medium leading-snug text-foreground md:text-2xl">
              建筑学背景出身，却把法律科普做成了
              <span className="text-primary">近千万播放</span>的账号。
            </h3>
            <p className="about-text mt-6 leading-relaxed text-muted-foreground">
              我是周腾峰，湖南工学院建筑学在读（2023–2027）。一次偶然接触法律科普短视频后，
              开始独立运营抖音号「法言有声」——从选题拆解、口播文案、剪辑制作到数据复盘全部一人完成。
              两个月内发布 47 条视频，粉丝破 9600，累计获赞 25.8 万，其中一条网络安全主题作品播放突破 239.5 万。
            </p>
            <p className="about-text mt-4 leading-relaxed text-muted-foreground">
              我相信好的法律内容不是把法条念出来，而是用普通人听得懂的故事，
              把和他们切身利益相关的事讲清楚。
            </p>

            <div className="mt-10 space-y-3 text-sm">
              <div className="about-text flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{CONTACT.phone}</span>
              </div>
              <div className="about-text flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{CONTACT.email}</span>
              </div>
              <div className="about-text flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">微信 {CONTACT.wechat}</span>
              </div>
              <div className="about-text flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">湖南衡阳 · 可到岗广深武厦福</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border">
              {ACCOUNT_STATS.map((s) => (
                <div key={s.label} className="about-stat card-glow bg-card p-4 md:p-6">
                  <div className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
