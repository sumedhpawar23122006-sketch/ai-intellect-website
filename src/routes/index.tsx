import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import {
  Search,
  Palette,
  Globe,
  Share2,
  TrendingUp,
  PenTool,
  Camera,
  Layers,
  BarChart3,
  Users,
  Sparkles,
  Instagram,
} from "lucide-react";
import logoAsset from "@/assets/ai-logo.png";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Intellect | Digital Marketing Agency" },
      {
        name: "description",
        content:
          "AI Intellect drives business growth through data-driven digital strategy, SEO, branding, web design, social media, content marketing, and paid advertising.",
      },
      { property: "og:title", content: "AI Intellect | Digital Marketing Agency" },
      {
        property: "og:description",
        content:
          "AI Intellect drives business growth through data-driven digital strategy, SEO, branding, web design, social media, content marketing, and paid advertising.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  const delayClass = delay ? `delay-${delay}` : "";
  return (
    <div ref={ref} className={`reveal-3d ${delayClass} ${className}`.trim()}>
      {children}
    </div>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="water-glass flex h-11 w-11 items-center justify-center rounded-xl p-1.5">
        <img
          src={logoAsset.url}
          alt="AI Intellect logo"
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
      <span className="text-lg font-semibold tracking-tight text-foreground">
        AI Intellect
      </span>
    </div>
  );
}

const services = [
  {
    title: "SEO",
    description: "Boost organic visibility and rank higher where your customers search.",
    icon: Search,
  },
  {
    title: "Branding",
    description: "Build a memorable identity that resonates and builds trust.",
    icon: Palette,
  },
  {
    title: "Web Design & Development",
    description: "Create fast, responsive websites that convert visitors into leads.",
    icon: Globe,
  },
  {
    title: "Social Media Management",
    description: "Plan, publish, and grow engaged communities across key platforms.",
    icon: Share2,
  },
  {
    title: "Performance Marketing",
    description: "Campaigns optimized for measurable revenue, not vanity metrics.",
    icon: TrendingUp,
  },
  {
    title: "Graphic Design",
    description: "Bold visuals and brand assets crafted for every touchpoint.",
    icon: PenTool,
  },
  {
    title: "Content Creation",
    description: "Scroll-stopping photo, video, and copy made for your audience.",
    icon: Camera,
  },
  {
    title: "Creative Template Design & Editing",
    description: "Reusable, on-brand templates plus polished post-production editing.",
    icon: Layers,
  },
];

const reasons = [
  {
    title: "Strategic Growth",
    description:
      "Every decision is backed by analytics, testing, and continuous optimization to ensure measurable outcomes.",
    icon: BarChart3,
  },
  {
    title: "Experienced Team",
    description:
      "A collective of specialists across SEO, creative, paid media, and web technology working as your extended team.",
    icon: Users,
  },
  {
    title: "Custom Solutions",
    description:
      "No cookie-cutter playbooks. We design tailored strategies aligned with your unique goals and market.",
    icon: Sparkles,
  },
];

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Hero */}
      {/* Ambient iridescent blobs */}
      <div className="blob-field" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
        <span className="blob blob-4" />
        <span className="blob blob-5" />
      </div>


      <section className="galaxy-bg starfield relative flex min-h-screen items-center justify-center">
        <div className="section-container relative z-10 py-24 text-center">
          <div className="animate-fade-in-up mx-auto flex max-w-4xl flex-col items-center">
            <div className="mb-8 flex items-center justify-center gap-3">
              <div className="water-glass flex h-16 w-16 items-center justify-center rounded-2xl p-2">
                <img
                  src={logoAsset.url}
                  alt="AI Intellect logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                AI Intellect
              </span>
            </div>
            <h1 className="glow-text text-5xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              Driving Business Growth
              <span className="mt-2 block overflow-visible bg-gradient-to-r from-electric via-violet to-electric bg-clip-text pb-2 text-transparent">
                Through Digital Strategy
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              We combine creativity, technology, and data to help brands grow
              smarter in a digital-first world.
            </p>
          </div>
        </div>

        {/* Floating accent orbs */}
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-electric/10 blur-3xl animate-float" />
        <div className="pointer-events-none absolute right-1/4 top-1/4 h-48 w-48 rounded-full bg-violet/10 blur-3xl animate-float delay-500" />
      </section>

      {/* Services */}
      <section className="relative z-10 py-24 sm:py-32">
        <div className="section-container">
          <Reveal className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-electric">
              What We Do
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Services That Move the Needle
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From search to social, creative to conversion — we handle the full
              digital marketing spectrum.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={((index % 3) * 100) as 0 | 100 | 200 | 300 | 400 | 500 | 600}
              >
                <div className="glass-card tilt-3d group h-full rounded-2xl p-7 transition-all duration-300 hover:border-electric/50 hover:bg-card/90 hover:shadow-[0_0_32px_-8px_var(--color-glow)]">
                  <div className="water-glass flex h-12 w-12 items-center justify-center rounded-xl text-electric transition-transform duration-300 group-hover:scale-110">
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 py-24 sm:py-32">
        <div className="section-container">
          <Reveal className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-electric">
              Why AI Intellect
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Built for Results
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <Reveal
                key={reason.title}
                delay={((index % 3) * 100) as 0 | 100 | 200 | 300 | 400 | 500 | 600}
              >
                <div className="tilt-3d relative h-full rounded-2xl border border-border/60 bg-gradient-to-b from-card/80 to-card/40 p-8">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />
                  <div className="water-glass flex h-12 w-12 items-center justify-center rounded-full text-electric">
                    <reason.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative z-10 py-24 sm:py-32">
        <div className="section-container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-electric">
              About Us
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              At AI Intellect, our mission is to help businesses grow their digital
              presence with clarity, confidence, and creativity. We believe every
              brand has the potential to lead its market — and we provide the
              strategy, tools, and execution to make that happen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 py-24 sm:py-32">
        <div className="section-container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-electric">
              Get in Touch
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Let&apos;s Connect
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ready to grow? Reach out on Instagram and start the conversation.
            </p>
            <a
              href="https://instagram.com/ai.intellect_"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-border/60 bg-card/60 px-8 py-4 text-lg font-medium text-foreground transition-all duration-300 hover:border-electric/50 hover:bg-card/90 hover:text-electric hover:shadow-[0_0_24px_-6px_var(--color-glow)]"
            >
              <Instagram size={22} className="text-electric" />
              <span>@ai.intellect_</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/40 py-12">
        <div className="section-container flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Logo />
          <a
            href="https://instagram.com/ai.intellect_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-electric"
          >
            <Instagram size={16} />
            <span>@ai.intellect_</span>
          </a>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Intellect. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
