import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, TrendingUp, Users, Dumbbell } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { StatsStrip } from "@/components/stats-strip";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { ProjectSlider } from "@/components/project-slider";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBand } from "@/components/cta-band";
import { Badge } from "@/components/ui/badge";
import { services, testimonials } from "@/lib/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "PeakEdge Sports Performance — Athletic Training & Coaching",
  description:
    "Austin's premier sports performance training facility. Strength & conditioning, speed & agility, sport-specific coaching, youth development, injury prevention and team camps for athletes of every level.",
};

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Certified coaching staff",
    text: "Every PeakEdge coach is CSCS or USAW certified with college or professional-level playing and coaching experience.",
  },
  {
    icon: TrendingUp,
    title: "Science-based programming",
    text: "Timing gates, force plates and video analysis. Your program is built on your data — and we prove progress every four weeks.",
  },
  {
    icon: Users,
    title: "Small group ratios",
    text: "Never more than 8 athletes per coach, so every set, sprint and rep gets real coaching attention.",
  },
  {
    icon: Dumbbell,
    title: "Pro-grade facility",
    text: "12,000 sq ft of strength, turf, sled and recovery space plus an outdoor field — everything you need to train like a pro.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PeakEdge Sports Performance",
  description:
    "Sports performance training facility in Austin, TX offering strength & conditioning, speed & agility training, sport-specific coaching, youth athletic development, injury prevention programs, nutrition & recovery coaching and team training camps.",
  url: "https://peakedge-sports-performance.amsitservices.com",
  telephone: "+1-555-016-4471",
  email: "hello@peakedge-sports-performance.amsitservices.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2400 Performance Way",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78702",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 30.2672, longitude: -97.7431 },
  openingHours: "Mo-Fr 06:00-20:00",
  priceRange: "$$",
  foundingDate: "2014",
  areaServed: "Greater Austin, TX",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative px-4 pb-10 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Badge className="glass border-accent/30 bg-white/60 px-3 py-1 text-xs font-semibold text-primary">
              Austin&rsquo;s premier performance facility &bull; Est. 2014
            </Badge>
            <h1 className="mt-5 font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
              Train harder. Get faster.{" "}
              <span className="text-primary">Perform at your peak.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              PeakEdge Sports Performance builds stronger, faster, more resilient
              athletes through science-based strength, speed and sport-specific
              training — in Austin, TX.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-gradient rounded-full text-base")}>
                Start Your Assessment <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "glass rounded-full border-primary/20 text-base text-primary"
                )}
              >
                Explore Programs
              </Link>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[
                ["12+", "years coaching"],
                ["800+", "athletes trained"],
                ["40+", "college scholarships"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-3xl font-bold uppercase text-primary">{v}</dd>
                  <dd className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="glass-card relative overflow-hidden rounded-3xl p-2">
              <Image
                src="/images/hero-athlete.jpg"
                alt="Athlete training with a resistance sled in dramatic morning light at PeakEdge Sports Performance"
                width={1024}
                height={640}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full rounded-2xl object-cover"
                priority
              />
              <div className="glass-strong absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl px-5 py-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/90 text-accent-foreground">
                  <i className="fa-solid fa-bolt text-lg" aria-hidden />
                </span>
                <p className="text-sm font-medium leading-snug text-foreground">
                  &ldquo;Dropped my 40 from 4.8 to 4.62 in one offseason.&rdquo;
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    — Jordan P., college football signee
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      {/* Services grid */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we do"
            title="Seven programs, one goal: your peak"
            subtitle="From first steps to college scholarships — every athlete gets a program built on their sport, their body and their goals."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="glass-card group flex h-full flex-col rounded-3xl p-7"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-accent/90 group-hover:text-accent-foreground">
                    <ServiceIcon name={s.icon} className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold uppercase text-foreground">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why us */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <div className="glass-card relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/about-coaches.jpg"
                  alt="The PeakEdge coaching staff standing on the training field at sunrise"
                  width={1024}
                  height={768}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <SectionHeading
                align="left"
                eyebrow="Why PeakEdge"
                title="The coaches champions trust"
                subtitle="We have trained everyone from 8-year-old soccer players to pro combine hopefuls. That experience shows up in every program we write."
              />
              <Stagger className="mt-8 grid gap-5 sm:grid-cols-2" stagger={0.07}>
                {whyUs.map((w) => (
                  <StaggerItem key={w.title}>
                    <div className="glass-card h-full rounded-2xl p-5">
                      <w.icon className="size-6 text-accent" />
                      <h3 className="mt-3 font-display text-base font-bold uppercase text-foreground">{w.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Results"
            title="Case studies from the training floor"
            subtitle="Schools, clubs and individual athletes — see how PeakEdge programs turn hard work into measurable results."
          />
          <div className="mt-12">
            <ProjectSlider />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Word of mouth"
            title="What athletes and parents say"
            subtitle={`Rated ${testimonials.length ? "4.9" : ""} out of 5 across 312 reviews — because we coach every athlete like they are our own.`}
          />
          <div className="mt-12">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently asked questions"
            subtitle="Straight answers about programs, pricing, ages and what to expect on day one."
          />
          <div className="mt-10">
            <FaqAccordion />
          </div>
          <Reveal className="mt-8 text-center text-sm text-muted-foreground">
            Have a different question?{" "}
            <Link href="/contact" className="font-semibold text-accent hover:underline">
              Ask us directly
            </Link>
            .
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
