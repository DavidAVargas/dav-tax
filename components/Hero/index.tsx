import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 text-center sm:px-6 sm:py-32">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 dark:border-emerald-800 dark:bg-emerald-950/40">
        <ShieldCheck className="size-4 text-emerald-600" />
        <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
          IRS Certified Tax Professional
        </span>
      </div>

      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Professional Tax Filing —{" "}
        <span className="text-emerald-600">Online, Fast & Simple</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        No office visits, no hassle, no surprises. Whether it&apos;s last
        minute or planned ahead, get your taxes filed from the comfort of home
        by a trusted IRS-certified preparer — with no high upfront costs.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Button
          asChild
          size="lg"
          className="bg-emerald-600 text-white hover:bg-emerald-700"
        >
          <Link href="/booking">
            Book a Free Consultation
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/services">View Services</Link>
        </Button>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
        <div className="flex flex-col items-center gap-1">
          <span className="text-2xl font-bold text-foreground">W-2</span>
          <span>Individual Returns</span>
        </div>
        <div className="h-10 w-px bg-border" />
        <div className="flex flex-col items-center gap-1">
          <span className="text-2xl font-bold text-foreground">1099</span>
          <span>Self-Employed</span>
        </div>
        <div className="h-10 w-px bg-border" />
        <div className="flex flex-col items-center gap-1">
          <span className="text-2xl font-bold text-foreground">LLC</span>
          <span>Small Business</span>
        </div>
      </div>
    </section>
  );
}
