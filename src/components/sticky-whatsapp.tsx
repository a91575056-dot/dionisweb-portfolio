import { MessageCircle } from "lucide-react";

import { getWhatsAppLink } from "@/data/site";

export function StickyWhatsApp() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-3 bottom-3 z-50 inline-flex size-13 items-center justify-center rounded-full border border-emerald-200 bg-emerald-500 text-white shadow-[0_16px_45px_-18px_rgba(16,185,129,0.7)] transition-transform duration-300 hover:scale-[1.02] hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 sm:right-4 sm:bottom-4 lg:right-6 lg:bottom-6"
    >
      <span className="flex size-9 items-center justify-center rounded-full bg-white/16">
        <MessageCircle className="size-[1.125rem]" />
      </span>
    </a>
  );
}
