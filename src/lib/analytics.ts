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

export type CtaId =
  | "book_appointment"
  | "startup_collaboration"
  | "whatsapp_chat"
  | "email_contact";

/** CTA click tracking: label identifies the button, location the section. */
export const trackCta = (cta: CtaId, location: string, extra: EventParams = {}) =>
  trackEvent("cta_click", { cta_id: cta, cta_location: location, ...extra });

export type ConversionId =
  | "appointment_form_submit"
  | "collaboration_contact_submit"
  | "whatsapp_open_success"
  | "email_copied";

/**
 * Downstream conversion after a CTA click (form submitted, mail client opened,
 * WhatsApp actually launched). Sent as a distinct GA4 event so clicks and
 * conversions can be compared in the same report.
 */
export const trackConversion = (
  conversion: ConversionId,
  location: string,
  extra: EventParams = {},
) =>
  trackEvent("cta_conversion", {
    conversion_id: conversion,
    cta_location: location,
    ...extra,
  });

/**
 * Confirms an outbound handoff (mailto:, tel:, wa.me, booking page) actually
 * opened: the browser blurs / hides the tab when the external app takes over.
 * Fires the conversion once, or never if the handoff silently failed.
 */
export const trackOutboundConversion = (
  conversion: ConversionId,
  location: string,
  extra: EventParams = {},
  timeoutMs = 2500,
) => {
  if (typeof window === "undefined") return;
  let done = false;

  const finish = (success: boolean) => {
    if (done) return;
    done = true;
    window.removeEventListener("blur", onBlur);
    document.removeEventListener("visibilitychange", onVisibility);
    window.clearTimeout(timer);
    if (success) trackConversion(conversion, location, extra);
  };

  const onBlur = () => finish(true);
  const onVisibility = () => {
    if (document.visibilityState === "hidden") finish(true);
  };

  window.addEventListener("blur", onBlur, { once: true });
  document.addEventListener("visibilitychange", onVisibility);
  const timer = window.setTimeout(() => finish(false), timeoutMs);
};
