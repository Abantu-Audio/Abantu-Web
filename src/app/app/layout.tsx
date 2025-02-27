import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Abantu Audio Player',
    template: '%s | Abantu Audio'
  },
  description: 'Listen to your favorite audiobooks on Abantu Audio',
  robots: {
    index: false,
    follow: false,
  }
}

// Layout specific to the web app
export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      <aside className="hidden md:flex w-64 border-r">
        {/* Sidebar navigation */}
      </aside>
      <main className="flex-1 overflow-auto">
        <nav className="h-14 border-b px-4 flex items-center justify-between">
          {/* Top navigation */}
        </nav>
        {children}
      </main>
    </div>
  )
} 