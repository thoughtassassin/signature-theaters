import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Premium displays, projectors, Dolby Atmos audio, Savant/Control4 automation, and luxury theater seating.",
  alternates: { canonical: "https://www.signaturetheaters.com/products" },
  openGraph: {
    url: "https://www.signaturetheaters.com/products",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
