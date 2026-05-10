import { FileText, Briefcase, Building2, Check, ArrowRight, Home, Users, CalendarCheck, DollarSign, Laptop, Car, Coffee, Calculator, TrendingUp, Receipt, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: FileText,
    title: "W-2 Individual Return",
    price: "$100",
    tagline: "Perfect for employees with a straightforward return.",
    description:
      "If you receive a W-2 from your employer, this is the service for you. We handle your federal and state return from start to finish — making sure you get every deduction you're entitled to and that everything is filed correctly and on time.",
    highlights: [
      { icon: Home, label: "Homeowner deductions" },
      { icon: Users, label: "Dependents & credits" },
      { icon: CalendarCheck, label: "Filed on time" },
      { icon: DollarSign, label: "Maximize your refund" },
    ],
    includes: [
      "Federal tax return filing",
      "State tax return filing",
      "Standard & itemized deduction review",
      "Child tax credit & dependent review",
      "Education credits (if applicable)",
      "Direct deposit setup for your refund",
      "Copy of your completed return",
    ],
    note: "Have multiple W-2s? No problem — same flat rate.",
  },
  {
    icon: Briefcase,
    title: "Self-Employed / 1099",
    price: "$120",
    tagline: "Freelancers, contractors & gig workers covered.",
    description:
      "Working for yourself means more deductions — and more complexity. We handle your Schedule C, track down every business expense you can write off, and make sure your self-employment taxes are calculated correctly so there are no surprises.",
    highlights: [
      { icon: Laptop, label: "Remote & freelance work" },
      { icon: Car, label: "Mileage & vehicle" },
      { icon: Coffee, label: "Home office deduction" },
      { icon: Calculator, label: "Quarterly tax estimates" },
    ],
    includes: [
      "Federal & state return filing",
      "Schedule C (business income & expenses)",
      "Home office deduction (if applicable)",
      "Vehicle & mileage deductions",
      "Equipment & software write-offs",
      "Health insurance deduction",
      "Quarterly estimated tax guidance",
      "Copy of your completed return",
    ],
    note: "Uber, DoorDash, freelance, Etsy — all covered under this plan.",
  },
  {
    icon: Building2,
    title: "Small Business",
    price: "$150",
    tagline: "LLCs and small businesses filed right.",
    description:
      "Running a small business comes with real tax obligations — and real opportunities to save. We'll go through your income, expenses, and structure to make sure your return is filed properly and your business stays in good standing with the IRS.",
    highlights: [
      { icon: TrendingUp, label: "Profit & loss reporting" },
      { icon: Receipt, label: "Expense tracking" },
      { icon: Clock, label: "Year-round support" },
      { icon: ShieldCheck, label: "IRS compliant filing" },
    ],
    includes: [
      "Federal & state business return",
      "LLC / sole proprietor filing",
      "Business income & expense reporting",
      "Startup cost deductions",
      "Asset depreciation (if applicable)",
      "Owner draw vs. salary guidance",
      "Year-round filing questions via email",
      "Copy of your completed return",
    ],
    note: "Not sure if your business qualifies? Book a free consultation and we'll figure it out together.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-14 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Services & Pricing
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Transparent, flat-rate pricing — no hidden fees, no surprises.
          You know exactly what you&apos;re paying before we start.
        </p>
      </div>

      <div className="space-y-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="inline-flex rounded-lg bg-emerald-50 p-3 dark:bg-emerald-950/40">
                      <Icon className="size-6 text-emerald-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{service.title}</h2>
                      <p className="text-sm text-muted-foreground">{service.tagline}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>

                  <div className="mt-10 grid grid-cols-2 gap-3">
                    {service.highlights.map((h) => {
                      const HIcon = h.icon;
                      return (
                        <div
                          key={h.label}
                          className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3"
                        >
                          <HIcon className="size-5 shrink-0 text-emerald-600" />
                          <span className="text-sm font-medium">{h.label}</span>
                        </div>
                      );
                    })}
                  </div>

                  {service.note && (
                    <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                      * {service.note}
                    </p>
                  )}
                </div>

                <div className="lg:w-72">
                  <div className="rounded-xl border border-border bg-background p-6">
                    <div className="mb-4 text-center">
                      <span className="text-4xl font-bold">{service.price}</span>
                      <span className="ml-1 text-muted-foreground">flat rate</span>
                    </div>
                    <ul className="mb-6 space-y-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                    >
                      <Link href="/booking">
                        Get Started
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-14 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-800 dark:bg-emerald-950/30">
        <h3 className="text-xl font-bold">Not sure which service you need?</h3>
        <p className="mt-2 text-muted-foreground">
          Book a free consultation and we&apos;ll figure out exactly what you need — no commitment required.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-6 bg-emerald-600 text-white hover:bg-emerald-700"
        >
          <Link href="/booking">Book a Free Consultation</Link>
        </Button>
      </div>
    </div>
  );
}
