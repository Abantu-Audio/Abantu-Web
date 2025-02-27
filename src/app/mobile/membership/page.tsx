import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Get the most out of Abantu',
}

const benefits = [
  'Receive 1 book credit per month',
  '20% discount on all books',
  'Unlimited access to our Abantu+ Catalog'
]

export default function MembershipPage() {
  return (
    <div className="min-h-full flex flex-col bg-[#121418]">
      {/* Header Section */}
      <div className="p-6 space-y-2 mt-12">
        <h1 className="text-4xl font-black text-white font-armin">Get the most out of Abantu</h1>
        <p className="text-gray-300 font-armin font-normal">Upgrade now. Cancel anytime.</p>
      </div>

      {/* Content Section */}
      <div className="px-4 space-y-12">
        {/* Current Plan Card */}
        <Card className="p-6 bg-white/5 backdrop-blur-lg border-0">
          <div className="space-y-1">
            <p className="text-sm text-gray-300 font-armin font-normal">Current Membership</p>
            <p className="text-xl font-semibold text-white font-armin">Free Member</p>
          </div>
        </Card>

        {/* Pro Plan Card */}
        <Card className="p-6 bg-white/5 backdrop-blur-lg border-0">
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-ultrabold text-[#724EEA] font-armin">Abantu Pro</h2>
              <p className="text-sm text-white font-armin font-normal">Auto renews at $14.99/month</p>
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#724EEA]" />
                  <span className="text-white text-base font-armin font-regular">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Terms and Action */}
            <div className="space-y-6">
              <p className="text-sm text-gray-300 font-armin font-normal">
                By signing up, you agree to Abantu Conditions of Use. 
                Automatically renewed until cancelled. Cancel anytime
              </p>
              
              <div className="flex justify-center gap-4 text-sm text-[#634EEA] font-armin font-normal">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:underline">Terms of Service</a>
              </div>

              <Button 
                className="w-full h-[50px] text-white bg-gradient-to-r from-[#BE6C71] to-[#724EEA] hover:opacity-90 rounded-full font-armin font-semibold"
              >
                Upgrade to Abantu Pro
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
} 