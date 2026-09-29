import { type ComponentType, type SVGProps } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/data";

export interface Social {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
}

/** GitHub always; LinkedIn only once siteConfig.linkedinUrl is filled in. */
export const socials: Social[] = [
  { label: "GitHub", href: siteConfig.githubUrl, icon: GithubIcon },
  ...(siteConfig.linkedinUrl
    ? [{ label: "LinkedIn", href: siteConfig.linkedinUrl, icon: LinkedinIcon }]
    : []),
];
