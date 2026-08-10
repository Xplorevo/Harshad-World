// Lightweight GA4 event tracking helper (gtag.js is loaded in index.html).
type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (name: string, params: EventParams = {}) => {
  if (typeof window === "undefined") return;
  const payload = {
    page_path: window.location.pathname,
    page_location: window.location.href,
    ...params,
  };
  if (typeof window.gtag === "function") {
    window.gtag("event", name, payload);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(["event", name, payload]);
  }
};

/** CTA click tracking: label identifies the button, location the section. */
export const trackCta = (
  cta: "book_appointment" | "startup_collaboration" | "whatsapp_chat" | "email_contact",
  location: string,
  extra: EventParams = {},
) => trackEvent("cta_click", { cta_id: cta, cta_location: location, ...extra });
