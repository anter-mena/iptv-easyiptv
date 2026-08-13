"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if user has already made a choice
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
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
      className="fixed inset-x-0 bottom-0 z-[10000] border-t border-gray-700 bg-[#333333] p-4 shadow-lg sm:p-5"
      role="region"
      aria-label="Cookie consent"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex-1 text-xs leading-relaxed text-gray-300 sm:text-sm">
          We use cookies to improve your experience and analyse site traffic.{" "}
          <Link
            href="/privacy-policy"
            className="font-semibold text-iptv-green underline underline-offset-4 transition-colors hover:text-white"
            title="Read our Privacy Policy"
          >
            Learn more
            <span className="sr-only"> about our Privacy Policy</span>
          </Link>
        </p>

        <div className="flex w-full shrink-0 items-center justify-end gap-3 sm:w-auto">
          <button
            type="button"
            onClick={handleDecline}
            className="flex min-h-11 items-center justify-center rounded-md border border-gray-600 px-4 text-sm font-medium text-gray-200 transition-colors hover:bg-[#444444] focus:outline-none focus:ring-1 focus:ring-iptv-green/20"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={handleAcceptAll}
            className="flex min-h-11 items-center justify-center rounded-md bg-iptv-green px-6 text-sm font-semibold text-white ring-4 ring-iptv-green/20 transition-colors hover:bg-iptv-green-dark focus:outline-none"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
