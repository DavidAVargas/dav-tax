import { ShieldCheck, MapPin, Globe, BookOpen, ArrowRight, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const credentials = [
  {
    icon: ShieldCheck,
    title: "IRS PTIN Holder",
    description: "Registered with the IRS as an authorized tax preparer — federally recognized to prepare returns for individuals and businesses.",
  },
  {
    icon: BookOpen,
    title: "Pursuing AFSP Certification",
    description: "Currently completing the IRS Annual Filing Season Program (AFSP) — an additional credential that demonstrates ongoing tax education and professional commitment. Expected June 2026.",
  },
  {
    icon: BookOpen,
    title: "Enrolled Agent (EA) Candidate",
    description: "Actively studying for the EA — the highest credential awarded by the IRS to tax professionals. A rigorous 3-part exam with a 60–70% pass rate.",
  },
  {
    icon: MapPin,
    title: "Based in Dallas-Fort Worth, TX",
    description: "Proudly serving the DFW area and clients remotely across the United States.",
  },
  {
    icon: Globe,
    title: "Remote-First",
    description: "Everything is done online. No office visits, no waiting rooms — just fast, professional service from anywhere.",
  },
  {
    icon: Languages,
    title: "Bilingual — English & Spanish",
    description: "Serving both English and Spanish-speaking clients. No language barrier, no miscommunication — just clear, honest help.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="mb-14 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Me</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A real person, not a big firm — and that&apos;s exactly the point.
        </p>
      </div>

      <div className="mb-14 rounded-2xl border border-border bg-card p-8 sm:p-10">
        <h2 className="mb-6 text-2xl font-bold">Why I Started DAV Tax</h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            For a long time, I was one of those people who just handed their documents to someone
            and hoped for the best. And every time, it was the same story —{" "}
            <strong className="text-foreground">
              overcomplicated explanations, surprise fees, and that feeling like you were being
              charged more simply because you didn&apos;t know enough to push back.
            </strong>{" "}
            That bothered me.
          </p>
          <p>
            Once I started my own small business, it got worse. Finding a preparer who wouldn&apos;t
            immediately upcharge me just because I had an LLC felt impossible. So I made a decision:{" "}
            <strong className="text-foreground">I was going to learn it myself.</strong>
          </p>
          <p>
            I got certified with the IRS, studied the tax code, and dug into everything from
            W-2s to self-employment to small business filings. And what I found surprised me —{" "}
            <strong className="text-foreground">
              it&apos;s really not as complicated as people make it seem.
            </strong>{" "}
            It just requires someone who actually knows what they&apos;re doing and isn&apos;t
            trying to make it feel harder than it is to justify a higher bill.
          </p>
          <p>
            That&apos;s when I realized I wasn&apos;t the only one dealing with this.{" "}
            <strong className="text-foreground">
              There are a lot of people out there who just want their taxes done — quickly,
              honestly, and without the runaround.
            </strong>{" "}
            No five consultations before you know what you&apos;re paying. No sitting in a
            waiting room. No inflated fees because you have a side hustle or a small business.
            Just a real person who knows the work, does it right, and treats you fairly.
            That&apos;s what DAV Tax is.
          </p>
        </div>
      </div>

      <div className="mb-14">
        <h2 className="mb-6 text-2xl font-bold">Credentials & Coverage</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((cred) => {
            const Icon = cred.icon;
            return (
              <div
                key={cred.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/40">
                  <Icon className="size-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{cred.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cred.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-14 rounded-2xl border border-border bg-card p-8 sm:p-10">
        <h2 className="mb-4 text-2xl font-bold">What You Can Expect</h2>
        <ul className="space-y-3 text-muted-foreground">
          {[
            "Flat-rate pricing — you know the cost before we start, no surprises",
            "No unnecessary back-and-forth or multiple consultations just to get started",
            "100% online — send your documents, we handle the rest",
            "A real person reviewing your return, not automated software flying blind",
            "Quick turnaround so you're not waiting around for weeks",
            "Available to clients across most of the United States",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-800 dark:bg-emerald-950/30">
        <h3 className="text-xl font-bold">Ready to get your taxes done?</h3>
        <p className="mt-2 text-muted-foreground">
          Book a free consultation — no commitment, no fees upfront. Just a quick call to get you sorted.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-6 bg-emerald-600 text-white hover:bg-emerald-700"
        >
          <Link href="#booking">
            Book a Free Consultation
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
