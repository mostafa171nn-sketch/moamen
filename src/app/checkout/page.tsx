import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/95 via-black/50 to-primary">
      <Navbar />
      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32 max-w-2xl">
        <div className="bg-glass-bg-light backdrop-blur-2xl rounded-3xl border border-glass-border shadow-2xl shadow-accent-gold/10 p-12 lg:p-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-black text-white mb-4">
              Secure Booking
            </h1>
            <p className="text-xl text-white/80 max-w-lg mx-auto">
              Complete your exclusive reservation with confidence.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Event Details</h3>
              <div className="grid md:grid-cols-2 gap-6 text-lg">
                <div>
                  <span className="text-white/70">Event</span>
                  <p className="font-semibold text-white mt-1">Amr Diab Exclusive Night</p>
                </div>
                <div>
                  <span className="text-white/70">Tickets</span>
                  <p className="font-semibold text-white mt-1">2 x $250</p>
                </div>
                <div className="md:col-span-2">
                  <span className="text-white/70">Total</span>
                  <p className="text-3xl font-black text-accent-gold mt-1">$500</p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-white/90 font-medium mb-3">Full Name</label>
                <input
                  type="text"
                  className="w-full p-5 lg:p-6 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-accent-gold focus:outline-none focus:ring-4 focus:ring-accent-gold/20 transition-all duration-300 text-lg backdrop-blur-xl"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-white/90 font-medium mb-3">Email</label>
                <input
                  type="email"
                  className="w-full p-5 lg:p-6 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-accent-gold focus:outline-none focus:ring-4 focus:ring-accent-gold/20 transition-all duration-300 text-lg backdrop-blur-xl"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-white/90 font-medium mb-3">Phone</label>
                <input
                  type="tel"
                  className="w-full p-5 lg:p-6 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-accent-gold focus:outline-none focus:ring-4 focus:ring-accent-gold/20 transition-all duration-300 text-lg backdrop-blur-xl"
                  placeholder="+20 123 456 7890"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-accent-gold to-yellow-400 text-primary font-bold text-xl py-6 px-8 rounded-3xl hover:scale-105 hover:shadow-2xl hover:shadow-accent-gold/50 transition-all duration-500 uppercase tracking-wide shadow-lg"
              >
                Confirm & Pay Securely
              </button>
            </form>

            <div className="text-center pt-8 border-t border-white/20">
              <p className="text-white/70 text-sm">
                Secure payment powered by world-class encryption. Your privacy guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

