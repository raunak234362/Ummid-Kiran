import Link from "next/link";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <header className="bg-white shadow">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex space-x-4">
                <Link href="/landing/about" className="px-3 py-2">About</Link>
                <Link href="/landing/mission" className="px-3 py-2">Mission</Link>
                <Link href="/landing/vision" className="px-3 py-2">Vision</Link>
                <Link href="/landing/contact" className="px-3 py-2">Contact</Link>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </div>
    )
  }