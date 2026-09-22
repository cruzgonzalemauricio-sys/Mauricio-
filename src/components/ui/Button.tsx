import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 whitespace-nowrap";

const variants: Record<string, string> = {
  primary:
    "bg-ink text-cream-soft hover:bg-ink-soft shadow-[0_10px_30px_-12px_rgba(42,50,71,0.55)] hover:-translate-y-0.5",
  secondary:
    "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-cream-soft",
  ghost:
    "text-ink hover:text-camel-deep underline underline-offset-8 decoration-camel/50 hover:decoration-camel-deep",
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
