import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitText from './components/SplitText/SplitText.jsx';
import AnimatedContent from './components/AnimatedContent/AnimatedContent.jsx';
import useSmoothScroll from './hooks/useSmoothScroll.js';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App() {
  const markRef = useRef(null);

  useSmoothScroll();

  useGSAP(
    () => {
      const mark = markRef.current;
      if (!mark) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from(
        mark.querySelectorAll('.mark-circle'),
        { scale: 0.6, opacity: 0, transformOrigin: '50% 50%', duration: 1, stagger: 0.12 },
        0
      )
        .from(
          mark.querySelector('.mark-leaf'),
          { scale: 0.7, opacity: 0, transformOrigin: '50% 50%', duration: 1.1 },
          0.2
        )
        .from(
          mark.querySelectorAll('.flourish path'),
          { strokeDasharray: 400, strokeDashoffset: 400, duration: 1.4, ease: 'power2.inOut' },
          0.4
        )
        .from(mark.querySelector('.hero-mark p'), { opacity: 0, y: 14, duration: 0.7 }, 0.85);

      gsap.to(mark, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: mark,
          start: 'top center',
          end: 'bottom top',
          scrub: true
        }
      });
    },
    { scope: markRef }
  );

  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={() => document.getElementById('main-content')?.focus()}
      >
        Skip to content
      </a>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="nav-wordmark" href="#intro" aria-label="FiveFolds home">FiveFolds</a>
          <div className="nav-links">
            <a href="#intro">Intro</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero section-shell" id="intro" aria-labelledby="hero-title">
          <div className="hero-copy">
            <svg className="section-flourish" viewBox="0 0 240 12" aria-hidden="true">
              <path d="M0 6h240" />
              <circle cx="120" cy="6" r="3" />
            </svg>
            <p className="eyebrow">Independent development group</p>
            <h1 id="hero-title">
              <SplitText
                text="FiveFolds"
                tag="span"
                splitType="chars"
                delay={45}
                duration={1}
                ease="power4.out"
                effect="rise"
                trigger="load"
                textAlign="left"
              />
              <span className="title-dot">.</span>
            </h1>
            <AnimatedContent distance={24} duration={1} delay={0.75} trigger="mount" threshold={0.1}>
              <p className="hero-tagline">Small team, sharp tools. We build software we actually run.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Projects <span aria-hidden="true">↓</span></a>
                <a className="button button-secondary" href="#contact">Contact <svg className="inline-arrow" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 10 10 2M4 2h6v6" /></svg></a>
              </div>
            </AnimatedContent>
          </div>
          <div className="hero-mark" aria-hidden="true" ref={markRef}>
            <span className="mark-circle mark-circle-one"></span>
            <span className="mark-circle mark-circle-two"></span>
            <span className="mark-leaf"></span>
            <svg className="flourish" viewBox="0 0 240 88" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 66C43 72 49 21 90 29C129 37 125 77 166 69C193 64 199 43 236 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M224 14C229 14 233 14 236 14C235 18 234 21 232 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p>made with care</p>
          </div>
        </section>

        <section className="section-shell projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <AnimatedContent distance={28} duration={0.9} threshold={0.2}>
              <svg className="section-flourish" viewBox="0 0 240 12" aria-hidden="true">
                <path d="M0 6h240" />
                <circle cx="120" cy="6" r="3" />
              </svg>
              <p className="eyebrow">Selected work</p>
              <h2 id="projects-title">Things we keep <em>close</em>.</h2>
            </AnimatedContent>
          </div>
          <AnimatedContent className="project-grid" distance={44} duration={0.9} stagger={0.12} threshold={0.15}>
            <article className="project-card project-card-green">
              <div className="card-topline"><span className="card-index">01</span><span className="card-dot" aria-hidden="true"></span></div>
              <h3>Mochi</h3>
              <p>A self-hosted AI agent that runs across Telegram, WhatsApp and Discord owner DMs, with conversation history, stored facts, reminders and voice handling. Sandboxed egress guards restrict what it can reach.</p>
              <p className="stack">TypeScript <span>·</span> Go <span>·</span> Docker Compose</p>
              <a className="project-link" href="https://git.yuk1n0w.dev/yuk1n0w/Mochi" target="_blank" rel="noopener">View repository <span className="link-arrow" aria-hidden="true">↗</span></a>
            </article>
            <article className="project-card project-card-orange">
              <div className="card-topline"><span className="card-index">02</span><span className="card-dot" aria-hidden="true"></span></div>
              <h3>Ancord</h3>
              <p>A Discord client for Android and macOS built on React Native. Direct messages, guild channels, forums, member lists and voice rooms, with credential-vault sign-in and a Jest suite covering roughly 180 files.</p>
              <p className="stack">React Native <span>·</span> TypeScript <span>·</span> Jest</p>
              <a className="project-link" href="https://git.yuk1n0w.dev/yuk1n0w/Ancord" target="_blank" rel="noopener">View repository <span className="link-arrow" aria-hidden="true">↗</span></a>
            </article>
            <article className="project-card project-card-blue">
              <div className="card-topline"><span className="card-index">03</span><span className="card-dot" aria-hidden="true"></span></div>
              <h3>GoFiveChat</h3>
              <p>An Android IRC client built with a collaborator, aimed at people who still think IRC got it right the first time.</p>
              <p className="stack">Android</p>
            </article>
          </AnimatedContent>
        </section>

        <section className="about-section section-shell" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <AnimatedContent distance={28} duration={0.9} threshold={0.2}>
              <svg className="section-flourish" viewBox="0 0 240 12" aria-hidden="true">
                <path d="M0 6h240" />
                <circle cx="120" cy="6" r="3" />
              </svg>
              <p className="eyebrow">A little context</p>
              <h2 id="about-title">Built for our <em>own</em> corners of the internet.</h2>
            </AnimatedContent>
          </div>
          <div className="about-copy">
            <AnimatedContent distance={28} duration={0.9} threshold={0.2}>
              <p>We’re <strong>makeify</strong> and <a href="https://yuk1n0w.dev/" target="_blank" rel="noopener">yuk1n0w</a>, two developers who work remotely together. We build developer tools and self-hosted software, and everything we ship is something we run ourselves.</p>
            </AnimatedContent>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
          <AnimatedContent distance={28} duration={0.9} threshold={0.2}>
            <svg className="section-flourish" viewBox="0 0 240 12" aria-hidden="true">
              <path d="M0 6h240" />
              <circle cx="120" cy="6" r="3" />
            </svg>
            <p className="eyebrow">Say hello</p>
            <h2 id="contact-title">Have a useful corner<br />to build?</h2>
          </AnimatedContent>
          <AnimatedContent distance={28} duration={0.9} delay={0.15} threshold={0.2}>
            <a className="button button-primary contact-button" href="mailto:dev@fivefolds.net">dev@fivefolds.net <svg className="inline-arrow" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 10 10 2M4 2h6v6" /></svg></a>
          </AnimatedContent>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <span>© 2026 FiveFolds</span>
        <span className="footer-rule" aria-hidden="true"></span>
        <span aria-hidden="true">✳</span>
      </footer>
    </>
  );
}
