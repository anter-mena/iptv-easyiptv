"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if user has already made a choice
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie("analytics_consent", "true", 365);
    setCookie("marketing_consent", "true", 365);
    setCookie("functional_consent", "true", 365);

    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieTimestamp", new Date().toISOString());

    setIsVisible(false);
  };

  const handleDecline = () => {
    // Only essential cookies
    setCookie("analytics_consent", "false", 365);
    setCookie("marketing_consent", "false", 365);
    setCookie("functional_consent", "true", 365);

    localStorage.setItem("cookieConsent", "declined");
    localStorage.setItem("cookieTimestamp", new Date().toISOString());

    setIsVisible(false);
  };

  // Helper function to set cookies
  const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  };

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[10000] p-4 lg:p-6"
      role="region"
      aria-label="Cookie consent"
    >
      <div className="pointer-events-auto mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-xl sm:flex-row sm:items-center lg:p-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-iptv-green/10">
          <Cookie size={19} className="text-iptv-green" strokeWidth={1.75} />
        </div>

        <p className="flex-1 text-[0.825rem] leading-relaxed text-muted-foreground">
          We use cookies to improve your experience and analyse site traffic. By
          continuing, you agree to our{" "}
          <a
            href="/privacy-policy"
            className="font-semibold text-foreground underline decoration-foreground/25 underline-offset-4 transition-all hover:decoration-foreground"
          >
            Privacy Policy
          </a>
          .
        </p>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={handleDecline}
            className="px-2 text-[13px] font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="h-10 rounded-2xl bg-iptv-green px-5 text-[13px] font-bold text-white shadow-sm transition-all hover:bg-iptv-green-dark hover:shadow-md"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
