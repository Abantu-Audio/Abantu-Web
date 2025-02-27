import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Library | Abantu Audio',
  description: 'Access your audiobook library and continue listening to your stories.',
}

export default function WebApp() {
  return (
    <div className="p-6">
      <div className="grid gap-6">
        <section>
          <h1 className="text-2xl font-semibold mb-4">Continue Listening</h1>
          {/* Continue listening section */}
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">Your Library</h2>
          {/* Library grid */}
        </section>
      </div>
    </div>
  )
} 