"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { MotionConfig } from "framer-motion";
import { content, DEFAULT_LANG, type Content, type Lang } from "@/lib/content";
import type { Localized } from "@/lib/data";

const STORAGE_KEY = "lang";

/* Tiny external store: the server (and first client render) always use the
 * default language, then the saved choice is applied after hydration. */
const listeners = new Set<() => void>();
let current: Lang | null = null;

function readStored(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "fr" || saved === "en") return saved;
  } catch {
    /* storage unavailable (private mode, blocked cookies…) */
  }
  return DEFAULT_LANG;
}

function getSnapshot(): Lang {
  if (current === null) current = readStored();
  return current;
}

function getServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function setStoredLang(lang: Lang) {
  current = lang;
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l());
}

interface LanguageContextValue {
  lang: Lang;
  t: Content;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** Pick the right side of a { fr, en } value. */
  l: (value: Localized | string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => setStoredLang(next), []);
  const toggle = useCallback(
    () => setStoredLang(lang === "fr" ? "en" : "fr"),
    [lang]
  );
  const l = useCallback(
    (value: Localized | string) =>
      typeof value === "string" ? value : value[lang],
    [lang]
  );

  return (
    <LanguageContext.Provider
      value={{ lang, t: content[lang], setLang, toggle, l }}
    >
      {/* Respect the OS "reduce motion" setting for every framer-motion animation. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
