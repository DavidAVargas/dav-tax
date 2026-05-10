import { CalendarClock } from "lucide-react";

export default function BookingPage() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-32 text-center sm:px-6">
      <div className="mb-6 inline-flex rounded-full bg-emerald-50 p-5 dark:bg-emerald-950/40">
        <CalendarClock className="size-10 text-emerald-600" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Booking Coming Soon</h1>
      <p className="mt-4 max-w-md text-lg text-muted-foreground">
        Online scheduling is on the way. Check back soon — it won&apos;t be long.
      </p>
    </div>
  );
}
