import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Kan ik mijn was buiten drogen vandaag? | kanmijnwasbuiten.nl",
  description: "Check direct of je was vandaag buiten kan drogen. Slimme droogscore per Nederlandse stad, gebaseerd op temperatuur, wind en luchtvochtigheid.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "kanmijnwasbuiten.nl",
  "url": "https://kanmijnwasbuiten.nl",
  "description": "Check direct of je was vandaag buiten kan drogen. Slimme droogscore per Nederlandse stad.",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="dark" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
