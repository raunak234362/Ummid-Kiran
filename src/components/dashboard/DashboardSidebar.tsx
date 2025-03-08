import Link from "next/link"
import { PlusCircle, Image } from "lucide-react"

const DashboardSidebar = () => {
  return (
    <aside className="w-full md:w-64 bg-sky-800 text-white p-6">
      <nav className="space-y-2">
        
        <Link href="/dashboard/add-blog" className="flex items-center space-x-2 p-2 rounded hover:bg-sky-700">
          <PlusCircle className="h-5 w-5" />
          <span>Add Blog</span>
        </Link>
        <Link href="/dashboard/add-image" className="flex items-center space-x-2 p-2 rounded hover:bg-sky-700">
          <Image className="h-5 w-5" />
          <span>Add Image</span>
        </Link>
      </nav>
    </aside>
  )
}

export default DashboardSidebar

