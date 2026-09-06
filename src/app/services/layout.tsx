import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From custom home theater design to smart home integration, outdoor entertainment, and lighting control.",
  alternates: { canonical: "https://www.signaturetheaters.com/services" },
  openGraph: {
    url: "https://www.signaturetheaters.com/services",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
