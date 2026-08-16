import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { QuoteForm } from "@/components/quote-form";
import { ContactForm } from "@/components/contact-form";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Contact & Free Assessment",
  description:
    "Book a free assessment at PeakEdge Sports Performance in Austin, TX — strength & conditioning, speed & agility, sport-specific coaching, youth development and team camps.",
};

export default function ContactPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Contact us"
            title="Let&rsquo;s build your training plan"
            subtitle="Book your free assessment or just ask a question. Real coaches answer — usually within the hour during business time."
          />
        </div>
      </section>

      <section className="px-4 py-10 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass-card rounded-3xl p-7 sm:p-9">
              <h2 className="font-display text-2xl font-bold uppercase text-foreground">Request a free assessment</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your sport and goals — strength, speed, sport-specific or a team camp.
              </p>
              <div className="mt-7">
                <QuoteForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6 lg:col-span-2">
            <Reveal delay={0.05}>
              <div className="glass-card rounded-3xl p-7">
                <h2 className="font-display text-xl font-bold uppercase text-foreground">Reach us directly</h2>
                <ul className="mt-5 space-y-4 text-sm text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Call or text</p>
                      <a href="tel:+15550164471" className="hover:text-accent">(555) 016-4471</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:hello@peakedge-sports-performance.amsitservices.com" className="hover:text-accent">
                        hello@peakedge-sports-performance.amsitservices.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">The facility</p>
                      <p>2400 Performance Way, Austin, TX 78702</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Clock className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Hours</p>
                      <p>Mon–Fri 6am–8pm &bull; Sat 8am–noon &bull; Camps by booking</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-card relative overflow-hidden rounded-3xl p-2">
                <Image
                  src="/images/extra-field-sprint.jpg"
                  alt="Athlete sprinting across the outdoor training field at PeakEdge Sports Performance"
                  width={1024}
                  height={640}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-44 w-full rounded-2xl object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass-card rounded-3xl p-7">
                <h3 className="font-display text-lg font-bold uppercase text-foreground">Prefer email?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Use the quick form below and we will reply within one business day.
                </p>
                <div className="mt-5">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Season starts soon?"
        subtitle="That is exactly when athletes join PeakEdge. Book your assessment now and walk into the season faster and stronger."
        image="/images/cta-training.jpg"
      />
    </>
  );
}
