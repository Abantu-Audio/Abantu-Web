import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Abantu Audio',
    template: '%s | Abantu Audio'
  },
  description: 'Listen to your favorite audiobooks on Abantu Audio',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#000000',
}

export default function MobileWebLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen bg-[#121418] flex flex-col">
      <main className="container max-w-lg mx-auto px-4 py-6 flex-grow">
        {children}
      </main>
    </div>
  )
} 