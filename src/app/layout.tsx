import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: {
    default: "Found a Car | Discover Your New Vehicle",
    template: "%s | Found a Car",
  },
  description: "Find and explore brand-new cars quickly and easily.",
  keywords: [
    "cars",
    "vehicles",
    "new cars",
    "car search",
    "vehicle models",
    "automobile",
  ],
  authors: [{ name: "André Simão", url: "https://www.linkedin.com/in/andre-simao-dev/" }],
  applicationName: "Found a Car",
  generator: "Next.js",
  openGraph: {
    title: "Found a Car | Discover Your New Vehicle",
    description: "Find and explore brand-new cars quickly and easily.",
    url: "https://foundacar.com",
    siteName: "Found a Car",
    images: [
      {
        url: "https://i.ibb.co/nMBqsgJ/SiteImg.png", 
        width: 1200,
        height: 630,
        alt: "Found a Car - Discover Your New Vehicle",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Found a Car | Discover Your New Vehicle",
    description: "Find and explore brand-new cars quickly and easily.",
    images: [
      "https://i.ibb.co/nMBqsgJ/SiteImg.png", 
    ],
    creator: "@Andre&Silva", 
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#edeef2]">
        {children}

        {/* Footer */}
        <footer className="text-black w-full text-center h-10 flex justify-center items-center mt-10">
          <Link
            href="https://www.linkedin.com/in/andre-simao-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developed by{" "}
            <span className="text-Primary font-extrabold">André Simão</span>
          </Link>
        </footer>
      </body>
    </html>
  );
}
