import "../css/globals.css";

export const metadata = {
  title: "Auburn Hacks 2024",
  description: "Get excited for Auburn Hacks 2024! Pre-register today!",
  keywords: ["auburn", "hacks", "hackathon", "auburn hacks 2024", "mlh"],
  authors: [{ name: "Cady Pridgeon" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "Auburn Hacks 2024",
    description: "Get excited for Auburn Hacks 2024! Pre-register today!",
    url: "https://auburnhacks.com",
    siteName: "Auburn Hacks",
    images: [
      {
        url: "https://auburnhacks.com/images/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auburn Hacks 2024",
    description: "Get excited for Auburn Hacks 2024! Pre-register today!",
    images: ["https://auburnhacks.com/images/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
