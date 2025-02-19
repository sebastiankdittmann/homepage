import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sebastian Dittmann",
  description: "Learn about me! 🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { name: 'linkedin', url: 'https://www.linkedin.com/in/sebastian-dittmann-ba676b104/' },
    { name: 'github', url: 'https://github.com/sebastiankdittmann' },
  ];

  return (
      <footer className="mt-12 text-center">
        <div className="flex justify-center space-x-4 tracking-tight">
          {links.map((link) => (
              <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
              >
                {link.name}
              </a>
          ))}
        </div>
      </footer>
  );
}
