import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sign In — ACME",
  description: "Sign in to your ACME account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
