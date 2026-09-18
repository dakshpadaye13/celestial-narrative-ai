import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Starfield } from '@/components/Starfield'
import { OrchidLight } from '@/components/ui/orchid-light'
import { Sparkles, Mail, User, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

function LoginPage() {
  const navigate = useNavigate()

  const handleDummyLogin = (provider: string) => {
    console.log(`Logging in with ${provider}...`)
    // Simulate network delay
    setTimeout(() => {
      navigate({ to: '/onboarding' })
    }, 800)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 pb-12">
      <Starfield count={150} className="z-0 opacity-40" />
      <OrchidLight className="top-1/4 left-1/4 opacity-30 blur-[100px]" />
      
      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-card/50 backdrop-blur-xl border border-primary/20 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Sparkles className="text-primary" size={24} />
            </div>
            <h1 className="font-display text-3xl text-foreground mb-2">Welcome Back</h1>
            <p className="text-muted-foreground mb-8 text-sm">
              Access your cosmic profile and continue your journey.
            </p>

            <div className="w-full space-y-4">
              {/* Dummy Login Option 1 */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleDummyLogin('Google')}
                className="w-full relative group flex items-center justify-center gap-3 bg-background/50 border border-primary/20 text-foreground px-6 py-4 rounded-xl overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mail size={18} className="text-primary/70 group-hover:text-primary transition-colors" />
                <span className="font-medium text-sm">Continue with Google</span>
              </motion.button>

              {/* Dummy Login Option 2 */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleDummyLogin('Apple')}
                className="w-full relative group flex items-center justify-center gap-3 bg-background/50 border border-primary/20 text-foreground px-6 py-4 rounded-xl overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <User size={18} className="text-primary/70 group-hover:text-primary transition-colors" />
                <span className="font-medium text-sm">Continue with Apple</span>
              </motion.button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-primary/10"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-widest">
                  <span className="bg-card px-2 text-muted-foreground/70">Or</span>
                </div>
              </div>

              {/* Dummy Login Option 3 */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleDummyLogin('Guest')}
                className="w-full group relative inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 font-medium rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(200,160,100,0.4)] transition-all"
              >
                <span className="relative z-10 flex items-center gap-2 text-sm">
                  Continue as Guest
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-soft to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
            
            <p className="text-xs text-muted-foreground/60 mt-8">
              By continuing, you agree to our cosmic terms of service.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
