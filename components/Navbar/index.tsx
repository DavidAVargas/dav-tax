"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Booking", href: "/booking" },
];

const MOBILE_MENU_ID = "mobile-nav-menu";
const FOCUSABLE_SELECTOR = "a[href], button:not([disabled])";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setMobileOpen(false);
    toggleButtonRef.current?.focus();
  };

  useEffect(() => {
    if (!mobileOpen) return;

    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");

    const getFocusable = () => {
      const items = menuRef.current
        ? Array.from(menuRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
        : [];
      return toggleButtonRef.current ? [toggleButtonRef.current, ...items] : items;
    };

    getFocusable()[1]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            DAV Tax<span className="text-emerald-600">.</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button asChild className="bg-emerald-700 text-white hover:bg-emerald-800">
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Button
              ref={toggleButtonRef}
              size="icon"
              variant="ghost"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls={MOBILE_MENU_ID}
            >
              {mobileOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        <div
          id={MOBILE_MENU_ID}
          ref={menuRef}
          hidden={!mobileOpen}
          className="border-t border-border/40 bg-background px-4 py-4 -mx-4 sm:-mx-6 md:hidden"
        >
          <div className="flex flex-col gap-4 px-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 bg-emerald-700 text-white hover:bg-emerald-800"
            >
              <Link href="/booking" onClick={closeMenu}>
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
