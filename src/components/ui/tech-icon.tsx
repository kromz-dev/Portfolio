import { Network, Mail, LayoutGrid } from "lucide-react";

const tagToSlug: Record<string, string> = {
  "React": "react",
  "FastAPI": "fastapi",
  "PostgreSQL": "postgresql",
  "Docker Compose": "docker",
  "Docker": "docker",
  "Caddy": "caddy",
  "Python": "python",
  "SQLite": "sqlite",
  "GitHub Actions": "githubactions",
  "Next.js": "nextdotjs",
  "Tailwind CSS": "tailwindcss",
  "LXC": "linux",
  "n8n": "n8n",
  "Jellyfin": "jellyfin",
  "Tailscale": "tailscale",
  "Proxmox": "proxmox",
  "TypeScript": "typescript",
  "JavaScript": "javascript",
  "HTML": "html5",
  "CSS": "css",
  "Git": "git",
  "Linux": "linux",
  "Windows": "lucide:windows",
  "Windows 10/11": "lucide:windows",
  "Bash": "gnubash",
  "Reverse proxy": "caddy",
  "SSH": "gnubash",
  "DNS": "cloudflare",
  "DHCP": "linux",
  "VPN": "wireguard",
  "VLAN": "lucide:network",
  "Emails :": "lucide:mail",
  "Email:": "lucide:mail",
  "Emails": "lucide:mail",
  "Email": "lucide:mail"
};

export function TechIcon({ name }: { name: string }) {
  // Extract all potential tech names (handle "HTML / CSS", "React / Next.js")
  const parts = name.split("/").map(p => p.trim());
  
  const slugs = parts.map(part => {
    return tagToSlug[part] || tagToSlug[part.split(" ")[0]];
  }).filter(Boolean);

  if (slugs.length === 0) return null;

  return (
    <span className="inline-flex items-center gap-2 mr-2">
      {slugs.map((slug, i) => {
        if (slug === "lucide:network") {
          return <Network key={`${slug}-${i}`} size={22} className="opacity-90 shrink-0" />;
        }
        if (slug === "lucide:mail") {
          return <Mail key={`${slug}-${i}`} size={22} className="opacity-90 shrink-0" />;
        }
        if (slug === "lucide:windows") {
          return <LayoutGrid key={`${slug}-${i}`} size={22} className="opacity-90 shrink-0" />;
        }

        // Enforce white color for logos that are black by default so they are visible on dark background
        const needsWhite = ["nextdotjs", "github", "githubactions", "caddy"].includes(slug);
        const url = `https://cdn.simpleicons.org/${slug}${needsWhite ? '/ffffff' : ''}`;
        
        return (
          <img 
            key={`${slug}-${i}`}
            src={url} 
            alt={`${slug} logo`} 
            width={22} 
            height={22} 
            className="opacity-100 object-contain shrink-0" 
            loading="lazy"
          />
        );
      })}
    </span>
  );
}
