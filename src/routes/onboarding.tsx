import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { PublicLayout } from '@/components/PublicLayout'
import { Starfield } from '@/components/Starfield'
import { OrchidLight } from '@/components/ui/orchid-light'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { ArrowRight, Sparkles } from 'lucide-react'

export const Route = createFileRoute('/onboarding')({
  component: OnboardingPage,
})

function OnboardingPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    tob: '',
    pob: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Save to localStorage for the chat to pick up
    localStorage.setItem('astroveda_birth_details', JSON.stringify(formData))
    
    // Simulate a slight calculation delay for premium feel
    setTimeout(() => {
      navigate({ to: '/chat' })
    }, 1500)
  }

  return (
    <PublicLayout>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 pb-12">
        <Starfield count={150} className="z-0 opacity-40" />
        <OrchidLight className="top-1/4 left-1/4 opacity-30 blur-[100px]" />
        
        <div className="relative z-10 w-full max-w-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-card/50 backdrop-blur-xl border border-primary/20 p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-primary" size={24} />
                <h1 className="font-display text-3xl sm:text-4xl text-foreground">Celestial Coordinates</h1>
              </div>
              <p className="text-muted-foreground mb-8 text-sm sm:text-base">
                To map your cosmic blueprint, please provide the exact coordinates of your arrival in this world.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm uppercase tracking-widest text-primary/80 font-medium">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-primary/20 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="e.g. Elena Rossi"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="dob" className="text-sm uppercase tracking-widest text-primary/80 font-medium">Date of Birth</label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      required
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full bg-background/50 border border-primary/20 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="tob" className="text-sm uppercase tracking-widest text-primary/80 font-medium">Time of Birth</label>
                    <input
                      type="time"
                      id="tob"
                      name="tob"
                      required
                      value={formData.tob}
                      onChange={handleChange}
                      className="w-full bg-background/50 border border-primary/20 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="pob" className="text-sm uppercase tracking-widest text-primary/80 font-medium">Place of Birth</label>
                  <input
                    type="text"
                    id="pob"
                    name="pob"
                    required
                    value={formData.pob}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-primary/20 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="e.g. New York, USA"
                  />
                </div>

                <motion.div
                  className="pt-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-medium rounded-full overflow-hidden hover:shadow-[0_0_20px_rgba(200,160,100,0.4)] transition-all disabled:opacity-70"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? 'Aligning Stars...' : 'Generate Cosmic Profile'} 
                      {!isSubmitting && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-soft to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </PublicLayout>
  )
}
