import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: {
    default: "PandaEC | Mercado en línea",
    template: "%s | PandaEC",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <TooltipProvider delayDuration={0} disableHoverableContent>
        <html lang="en">
          <body className={`${GeistSans.className} h-dvh`}>{children}</body>
        </html>
      </TooltipProvider>
    </ClerkProvider>
  );
}
