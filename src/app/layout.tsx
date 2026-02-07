import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Kan ik mijn was buiten drogen vandaag? | DroogWeerVandaag.nl",
  description: "Wetenschappelijk onderbouwde wasdroogvoorspeller met verdampingsfysica en real-time weerdata. De slimste manier om te weten of je was buiten kan drogen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
