import type { Metadata } from "next";
import Image from "next/image";
import { Award, Users, Dumbbell, HeartHandshake } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { StatsStrip } from "@/components/stats-strip";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "PeakEdge Sports Performance is Austin's premier sports performance training facility — certified coaches, science-based programming and a pro-grade facility for athletes of every level.",
};

const values = [
  {
    icon: Dumbbell,
    title: "Coaching craft",
    text: "Every coach is CSCS or USAW certified with college or pro-level experience. We coach technique, not just sets and reps.",
  },
  {
    icon: Users,
    title: "Athletes first",
    text: "Founded in 2014 by performance coaches who wanted a facility that treats every athlete — from 8 to 80 — like an elite.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term health",
    text: "We train for decades of sport, not one season. Load management and injury prevention are built into every program.",
  },
  {
    icon: Award,
    title: "Proven results",
    text: "800+ athletes trained, 40+ college scholarships earned and a 4.9-star rating across 312 reviews.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Our story</p>
            <h1 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-5xl">
              A decade of building faster, stronger athletes.
            </h1>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                PeakEdge Sports Performance started in 2014 with one squat rack, one turf lane
                and a simple promise: every athlete gets pro-level coaching. Twelve years
                later, that promise has built more than 800 successful athletes — from
                first-time youth players to college scholarship signees.
              </p>
              <p>
                We are still coach-owned, still small-group focused, and still stand behind
                every program we write. When you train at PeakEdge, you train with the
                coaches who will actually coach you.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-card overflow-hidden rounded-3xl">
              <Image
                src="/images/about-coaches.jpg"
                alt="The PeakEdge Sports Performance coaching team on the training field"
                width={1024}
                height={768}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we stand for"
            title="The values under every program"
            subtitle="Four principles that have carried us through a decade of seasons, injuries and championships."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {values.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <div className="glass-card h-full rounded-3xl p-7">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground">
                    <v.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold uppercase text-foreground">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="glass-card overflow-hidden rounded-3xl">
              <Image
                src="/images/extra-gym-wide.jpg"
                alt="Wide view of the PeakEdge performance gym with athletes training across multiple stations"
                width={1024}
                height={640}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="The people"
              title="Meet the coaches on your program"
              subtitle="Our staff averages 8 years with PeakEdge — they know your sport, your body and your goals."
            />
            <Stagger className="mt-8 space-y-4" stagger={0.08}>
              {[
                ["Dana Whitfield", "Founder & Head Strength Coach — CSCS, 15 years, former D1 athlete"],
                ["Marcus Chen", "Director of Speed — USATF certified, 9 years, 30+ sub-4.5 athletes"],
                ["Alicia Gomez", "Youth Development Lead — Youth Fitness Specialist, 7 years"],
                ["Travis Boone", "Recovery & Nutrition Coach — MS Nutrition, 6 years"],
              ].map(([name, role]) => (
                <StaggerItem key={name}>
                  <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                      {name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div>
                      <p className="font-display text-base font-bold text-foreground">{name}</p>
                      <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <CtaBand
        title="Train with coaches who care"
        subtitle="Join 800+ athletes who train at PeakEdge. Book your free assessment today — your peak is waiting."
      />
    </>
  );
}
