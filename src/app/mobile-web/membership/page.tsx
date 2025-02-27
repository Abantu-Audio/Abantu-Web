import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Membership Plans',
}

export default function MembershipPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Membership Plans</h1>
      <div className="grid gap-4">
        {/* Membership plans will be displayed here */}
      </div>
    </div>
  )
} 