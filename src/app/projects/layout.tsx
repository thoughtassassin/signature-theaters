import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse our portfolio of custom home theater and smart home installations across Texas and beyond.",
  alternates: { canonical: "https://www.signaturetheaters.com/projects" },
  openGraph: {
    url: "https://www.signaturetheaters.com/projects",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
