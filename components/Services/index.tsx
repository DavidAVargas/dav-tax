import { FileText, Briefcase, Building2 } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "W-2 Individual Returns",
    description:
      "Standard employee tax returns filed accurately and on time. Simple, straightforward, and stress-free.",
    details: ["Federal & state filing", "Deductions maximized", "Fast turnaround"],
  },
  {
    icon: Briefcase,
    title: "Self-Employed (1099)",
    description:
      "Freelancers, contractors, and gig workers — we handle Schedule C, deductions, and quarterly estimates.",
    details: ["Schedule C filing", "Business deductions", "Quarterly tax guidance"],
  },
  {
    icon: Building2,
    title: "Small Business",
    description:
      "LLCs and small businesses handled with care. Get your books filed right without the CPA price tag.",
    details: ["LLC & S-Corp returns", "Business expenses", "Year-round support"],
  },
];

export function Services() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What We Handle
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            From simple W-2s to small business returns — we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-lg bg-emerald-50 p-3 dark:bg-emerald-950/40">
                  <Icon className="size-6 text-emerald-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <ul className="space-y-1.5">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm">
                      <span className="size-1.5 rounded-full bg-emerald-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
