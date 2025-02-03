import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4">
        <nav className="space-y-2">
          <Link href="/dashboard/blog" className="block">Blog</Link>
          <Link href="/dashboard/portfolio" className="block">Portfolio</Link>
          <Link href="/dashboard/profile" className="block">Profile</Link>
          <Link href="/dashboard/skills" className="block">Skills</Link>
        </nav>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
}