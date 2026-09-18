import { createFileRoute, useNavigate, Link } from '@tanstack/react-router'
import { useEffect, useState, useRef } from 'react'
import { useChat } from '@ai-sdk/react'
import { motion } from 'framer-motion'
import { Send, Sparkles, Moon, Sun, ArrowLeft, Loader2 } from 'lucide-react'
import { Starfield } from '@/components/Starfield'

export const Route = createFileRoute('/chat')({
  component: ChatPage,
  errorComponent: ({ error }) => (
    <div className="flex h-screen items-center justify-center bg-background text-foreground">
      <div className="p-8 border border-red-500/30 bg-red-500/10 rounded-xl">
        <h2 className="text-xl font-bold mb-4">Chat Error</h2>
        <pre className="text-sm opacity-80 whitespace-pre-wrap">{error.message}</pre>
        <pre className="text-xs opacity-50 mt-4">{error.stack}</pre>
      </div>
    </div>
  ),
})

interface BirthDetails {
  name: string
  dob: string
  tob: string
  pob: string
}

function ChatPage() {
  const navigate = useNavigate()
  const [mounted, setMounted] = useState(false)
  const [birthDetails, setBirthDetails] = useState<BirthDetails | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const stored = localStorage.getItem('astroveda_birth_details')
    if (stored) {
      setBirthDetails(JSON.parse(stored))
    } else {
      navigate({ to: '/onboarding' })
    }
  }, [navigate])

  const { messages, input, handleInputChange, handleSubmit, isLoading, append, error } = useChat({
    api: '/api/chat',
    body: {
      birthDetails,
    },
  })

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (!mounted || !birthDetails) {
    return (
      <div className="flex h-screen bg-background items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <Starfield count={150} className="fixed inset-0 z-0 opacity-20 pointer-events-none" />

      {/* Sidebar - Cosmic Profile */}
      <aside className="hidden md:flex w-80 flex-col border-r border-primary/10 bg-card/50 backdrop-blur-md relative z-10">
        <div className="p-6 border-b border-primary/10 flex items-center justify-between">
          <Link to="/" className="text-primary hover:text-gold-soft transition-colors flex items-center gap-2">
            <ArrowLeft size={16} />
            <span className="font-display uppercase tracking-widest text-xs">Home</span>
          </Link>
          <Sparkles className="text-primary/50" size={18} />
        </div>
        
        <div className="p-8 flex-1 overflow-y-auto">
          <p className="eyebrow text-primary/80 mb-2">Cosmic Profile</p>
          <h2 className="font-display text-3xl mb-8 capitalize">{birthDetails.name}</h2>
          
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Sun size={14} className="text-gold-soft" /> Date of Birth
              </div>
              <div className="font-medium text-lg">{birthDetails.dob}</div>
            </div>
            
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Moon size={14} className="text-primary" /> Time of Birth
              </div>
              <div className="font-medium text-lg">{birthDetails.tob}</div>
            </div>
            
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Sparkles size={14} className="text-primary/70" /> Place of Birth
              </div>
              <div className="font-medium text-lg">{birthDetails.pob}</div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-primary/10">
          <button 
            onClick={() => {
              localStorage.removeItem('astroveda_birth_details')
              navigate({ to: '/onboarding' })
            }}
            className="w-full text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors text-left"
          >
            Update Coordinates
          </button>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col relative z-10">
        <header className="p-4 border-b border-primary/10 bg-card/30 backdrop-blur-md md:hidden flex justify-between items-center">
          <div className="font-display text-lg text-primary">AstroVeda</div>
          <Link to="/onboarding" className="text-xs uppercase tracking-widest text-muted-foreground">
            Profile
          </Link>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-8 scroll-smooth">
          <div className="max-w-3xl mx-auto space-y-8 pb-8">
            {(messages || []).length === 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Sparkles className="text-primary" size={32} />
                </div>
                <h3 className="font-display text-3xl mb-4">The stars are ready.</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Ask about your career, relationships, life purpose, or upcoming planetary periods.
                </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {[
                    "What does my career path look like?",
                    "When might I get married?",
                    "What are my strengths and challenges?",
                    "What should I focus on in my current life phase?"
                  ].map((suggestion, i) => (
                    <button
                      key={i}
                      onClick={() => append({ role: 'user', content: suggestion })}
                      className="p-4 border border-primary/10 rounded-xl bg-card/20 hover:bg-card/40 hover:border-primary/30 transition-all text-sm text-left backdrop-blur-sm"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {(messages || []).map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl p-6 ${
                    m.role === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                      : 'bg-card/50 border border-primary/20 backdrop-blur-md rounded-tl-sm'
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">
                    {m.content}
                  </p>
                </div>
              </motion.div>
            ))}
            
            {isLoading && (messages || [])[(messages || []).length - 1]?.role === 'user' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-card/50 border border-primary/20 backdrop-blur-md rounded-2xl rounded-tl-sm p-6 flex items-center gap-3">
                  <Loader2 className="animate-spin text-primary" size={20} />
                  <span className="text-muted-foreground text-sm">Consulting the cosmos...</span>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center"
              >
                <div className="bg-red-500/10 border border-red-500/30 text-red-500 rounded-lg p-4 text-sm max-w-md text-center">
                  Failed to connect to the cosmos. Ensure Ollama is running and the llama3.1 model is installed.
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="p-4 sm:p-8 bg-gradient-to-t from-background via-background to-transparent border-t border-primary/10 mt-auto">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto relative group">
            <input
              className="w-full bg-card/50 backdrop-blur-xl border border-primary/20 rounded-full pl-6 pr-14 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-lg shadow-black/20"
              value={input}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  if (!isLoading && input.trim()) {
                    // Create a synthetic form submission event
                    const form = e.currentTarget.form;
                    if (form) form.requestSubmit();
                  }
                }
              }}
              placeholder="Ask the cosmos..."
            />
            <button
              type="submit"
              disabled={isLoading || !(input || '').trim()}
              className="absolute right-2 top-2 bottom-2 aspect-square bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-gold-soft transition-colors disabled:opacity-50 disabled:hover:bg-primary"
            >
              <Send size={18} className="ml-[-2px]" />
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
