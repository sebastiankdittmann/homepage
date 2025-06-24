import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

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
  title: "Seb Codes 💻",
  description: "Learn with me! 🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Disable hydrationWarning due to usage of next-theme package: https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}>
        <Provider>
          <Header/>
          <main>
            {children}
          </main>
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}

function Header() {
    return (
        <header>
            <div className="text-lg font-bold pl-5">
              <a href="/" className="hover:dark:text-amber-100 hover:text-gray-100">Seb codes</a>
            </div>
            <nav>
                <ul className="flex space-x-4 pr-5">
                    <li><a href="/about" className="hover:underline">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

function Footer() {
  const links = [
    { name: 'linkedin', url: 'https://www.linkedin.com/in/sebastian-dittmann-ba676b104/' },
    { name: 'github', url: 'https://github.com/sebastiankdittmann' },
  ];

  return (
    <footer>
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
