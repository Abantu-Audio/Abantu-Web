import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Wishlist',
}

export default function WishlistPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Wishlist</h1>
      <div className="divide-y">
        {/* Wishlist items will be populated here */}
      </div>
    </div>
  )
} 