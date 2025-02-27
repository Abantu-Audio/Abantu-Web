import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checkout',
}

export default function CheckoutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <div className="rounded-lg border p-4 space-y-4">
        {/* Checkout form will be added here */}
      </div>
    </div>
  )
} 