import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome</h1>
      <nav className="space-y-4">
        <Link href="/dashboard" className="block text-blue-500 hover:underline">
          Dashboard
        </Link>
        <Link href="/landing" className="block text-blue-500 hover:underline">
          Landing Page
        </Link>
      </nav>
    </main>
  )
}