import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { CtaBand } from "@/components/cta-band";
import { services, serviceBySlug } from "@/lib/services";
import { cn } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.name,
    description: service.description,
    openGraph: {
      title: `${service.name} | PeakEdge Sports Performance`,
      description: service.description,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.name }],
    },
  };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              <ArrowLeft className="size-4" /> All programs
            </Link>
            <div className="mt-5 flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ServiceIcon name={service.icon} className="size-6" />
              </span>
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent-foreground">
                From {service.priceFrom}
              </span>
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {service.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-gradient rounded-full")}>
                Book a free assessment <ArrowRight className="size-4" />
              </Link>
              <Link
                href="tel:+15550164471"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "glass rounded-full border-primary/20 text-primary"
                )}
              >
                Call (555) 016-4471
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-card overflow-hidden rounded-3xl">
              <Image
                src={service.image}
                alt={`${service.name} training at PeakEdge Sports Performance`}
                width={1024}
                height={640}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_20rem]">
          <Reveal className="glass-card rounded-3xl p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold uppercase text-foreground">How it works</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-foreground/80">
              {service.longDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <h2 className="mt-10 font-display text-2xl font-bold uppercase text-foreground">
              What is included
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.05}>
              <div className="glass-card rounded-3xl p-7">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  Typical starting price
                </p>
                <p className="mt-2 font-display text-4xl font-bold text-primary">{service.priceFrom}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Every athlete starts with a free assessment. We build your program from your
                  data and give you a clear price before you commit to anything.
                </p>
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg" }), "btn-gradient mt-6 w-full rounded-full")}
                >
                  Get my program plan
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass-card rounded-3xl p-7">
                <h3 className="font-display text-base font-bold uppercase text-foreground">The facility</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  2400 Performance Way, Austin, TX 78702 — 12,000 sq ft of strength, turf and
                  recovery space with timing gates and an outdoor training field.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Related programs"
            title="You might also need"
            align="left"
          />
          <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {related.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <Link
                  href={`/services/${s.slug}`}
                  className="glass-card group flex h-full flex-col rounded-3xl p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ServiceIcon name={s.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold uppercase text-foreground">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    View program <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand
        title={`Ready to start ${service.name.toLowerCase()}?`}
        subtitle="Book your free assessment and our coaches will build a program around your sport, your body and your goals."
      />
    </>
  );
}
