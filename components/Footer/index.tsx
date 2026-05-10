import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-emerald-700 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
        <div>
          <p className="text-lg font-semibold">
            DAV Tax<span className="text-emerald-300">.</span>
          </p>
          <p className="mt-1 text-sm text-emerald-200">Professional Tax Preparation</p>
        </div>

        <div className="flex flex-col items-center gap-3 text-sm text-emerald-100 sm:items-end">
          <div className="flex items-center gap-2">
            <Phone className="size-4" />
            <span>(000) 000-0000</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="size-4" />
            <span>contact@davtax.com</span>
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-600 px-4 py-4 text-center text-xs text-emerald-300">
        © {new Date().getFullYear()} DAV Tax. All rights reserved.
      </div>
    </footer>
  );
}
