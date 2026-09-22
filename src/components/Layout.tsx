import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CONTACT } from '@/data/portfolio';

const NAV = [
  { id: 'about', label: '关于' },
  { id: 'work', label: '作品' },
  { id: 'skills', label: '能力' },
  { id: 'contact', label: '联系' },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export const Layout = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/85 backdrop-blur-md border-b border-border'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div
          className="mx-auto flex items-center justify-between px-5 md:px-8"
          style={{ maxWidth: 1700, height: 64 }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-baseline gap-2 text-sm font-semibold tracking-wide"
          >
            <span className="text-foreground">周腾峰</span>
            <span className="text-xs text-muted-foreground">/ ZTF</span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`px-4 py-2 text-sm transition-colors ${
                  active === n.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="ml-4 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-[hsl(4_70%_60%)]"
            >
              联系我
            </button>
          </nav>
          <button
            onClick={() => scrollTo('contact')}
            className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground transition-colors duration-300 hover:bg-[hsl(4_70%_60%)] md:hidden"
          >
            联系我
          </button>
        </div>
      </header>

      <Outlet />
    </div>
  );
};
