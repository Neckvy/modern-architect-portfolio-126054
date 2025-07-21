'use client';
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// PUBLIC_INTERFACE
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /**
   * Root layout: Defines top-level structure, navigation with active route highlighting, and responsive design.
   */
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <title>Architect Portfolio - Modern Design & Architecture</title>
        <meta name="description" content="Professional portfolio of a freelance architect specializing in modern, sustainable design for residential, commercial, and public projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {/* Header with Navigation */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-accent-200 shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
            <div className="flex items-center justify-between h-16">
              {/* Logo/Brand */}
              <div className="flex-shrink-0">
                <Link 
                  href="/" 
                  className="text-xl font-bold text-primary-800 hover:text-primary-600 transition-colors duration-200"
                >
                  ARCHITECT PORTFOLIO
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <ul className="flex items-center space-x-8">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`nav-link text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                          pathname === item.href
                            ? 'text-primary-800 bg-accent-100 shadow-sm'
                            : 'text-secondary-600 hover:text-primary-700 hover:bg-accent-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Navigation Button */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-secondary-600 hover:text-primary-700 hover:bg-accent-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                  aria-expanded="false"
                  aria-label="Toggle navigation menu"
                >
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-accent-200">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      pathname === item.href
                        ? 'text-primary-800 bg-accent-100'
                        : 'text-secondary-600 hover:text-primary-700 hover:bg-accent-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="min-h-screen bg-gradient-to-br from-white via-accent-25 to-accent-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-primary-800 text-accent-100 py-8 mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm">
              © 2024 Architect Portfolio. Crafting inspiring spaces with modern design.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
