import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBand } from "@/components/cta-band";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent membership pricing for sports performance training at PeakEdge Sports Performance — foundations, performance and elite 1-on-1 programs plus custom team and school rates.",
};

const plans = [
  {
    name: "Foundations",
    price: "$129",
    unit: "per month",
    features: [
      "Full movement and strength assessment",
      "2 coached group sessions per week",
      "Speed & agility fundamentals",
      "Program access via our app",
      "Quarterly re-testing",
      "No long-term contract",
    ],
    cta: "Start training",
    featured: false,
  },
  {
    name: "Performance",
    price: "$249",
    unit: "per month",
    features: [
      "Everything in Foundations",
      "3–4 coached sessions per week",
      "Sport-specific programming",
      "Timing-gate speed testing every 4 weeks",
      "Monthly 1-on-1 coach check-in",
      "Recovery zone access",
    ],
    cta: "Go performance",
    featured: true,
  },
  {
    name: "Elite 1-on-1",
    price: "$499",
    unit: "per month",
    features: [
      "Fully personalized 1-on-1 coaching",
      "Unlimited session scheduling",
      "Weekly video technique reviews",
      "Nutrition & recovery coaching included",
      "Combine / pro-day prep available",
      "Direct coach access 7 days a week",
    ],
    cta: "Go elite",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Pricing"
            title="Clear prices, zero surprises"
            subtitle="Every membership starts with a free assessment. Choose the level that fits your goals — most athletes start with Performance."
          />
        </div>
      </section>

      <section className="px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-6 lg:grid-cols-3" stagger={0.09}>
            {plans.map((p) => (
              <StaggerItem key={p.name} className="h-full">
                <div
                  className={cn(
                    "glass-card relative flex h-full flex-col rounded-3xl p-8",
                    p.featured && "border-accent/60 shadow-xl shadow-primary/10"
                  )}
                >
                  {p.featured ? (
                    <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground shadow-md">
                      <Sparkles className="size-3.5" /> Most popular
                    </span>
                  ) : null}
                  <h2 className="font-display text-xl font-bold uppercase text-foreground">{p.name}</h2>
                  <p className="mt-4">
                    <span className="font-display text-4xl font-bold text-primary">{p.price}</span>
                    <span className="ml-2 text-sm text-muted-foreground">{p.unit}</span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "mt-8 w-full rounded-full",
                      p.featured ? "btn-gradient" : "glass border-primary/20 text-primary"
                    )}
                  >
                    {p.cta} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-12">
            <div className="glass-card rounded-3xl p-8 text-center">
              <h3 className="font-display text-2xl font-bold uppercase text-foreground">
                Teams, schools & clubs — custom rates
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Team Training Camps start at $1,800 for a full week (10–60 athletes), and
                schools can book seasonal programs, facility time or multi-team contracts.
                We will build a package around your roster and budget.
              </p>
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "btn-gradient mt-6 rounded-full")}
              >
                Get a team quote <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Pricing questions"
            title="What affects your final price"
          />
          <Reveal className="mt-10">
            <FaqAccordion />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Want a firm number for your goals?"
        subtitle="Book a free assessment and we will recommend the right program and price — with no pressure and no obligation."
      />
    </>
  );
}
