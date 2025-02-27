// Marketing layout for home pages
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto">
        {children}
      </div>
    </div>
  )
} 