import type { Metadata } from "next";
import { LegalNotice } from "@/components/legal-notice";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales/" },
};

export default function LegalPage() {
  return <LegalNotice />;
}
