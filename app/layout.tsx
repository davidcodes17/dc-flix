import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "./font";
import { Providers } from "@/provides";

export const metadata: Metadata = {
  title: "DC Flix",
  description: "Built by DC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
