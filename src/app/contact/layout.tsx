import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to start your custom home theater or smart home project. Based in Midland, TX.",
  alternates: { canonical: "https://www.signaturetheaters.com/contact" },
  openGraph: {
    url: "https://www.signaturetheaters.com/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
