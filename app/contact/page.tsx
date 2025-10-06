'use client'

import { useState } from 'react'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'

const interests = [
  'Investment Opportunities',
  'Advisory Services',
  'Tokenization Projects',
  'Institutional Partnerships',
  'Ecosystem Collaboration',
  'General Inquiry'
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: '',
    honeypot: '' // Spam protection
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check honeypot
    if (formData.honeypot) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Try API route first, fallback to mailto
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          organization: '',
          interest: '',
          message: '',
          honeypot: ''
        })
      } else {
        throw new Error('API submission failed')
      }
    } catch (error) {
      // Fallback to mailto
      const subject = encodeURIComponent(`Alpha Group Investment Inquiry - ${formData.interest}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Organization: ${formData.organization}\n` +
        `Interest: ${formData.interest}\n\n` +
        `Message:\n${formData.message}`
      )
      
      window.location.href = `mailto:contact@agi3.ae?subject=${subject}&body=${body}`
      setSubmitStatus('success')
    }
    
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-20 pb-12">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <Reveal delay={200}>
              <p className="text-4xl md:text-5xl lg:text-6xl text-primary-900 font-light leading-tight mb-8">
                Let's build what comes next.
              </p>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Have a project that aligns with our thesis?<br />
                Reach out to explore investment, advisory, or ecosystem collaboration.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section className="pt-8 pb-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <h2 className="text-2xl font-bold text-primary-900 mb-6">
                  Ready to Build the Future?
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  AGI³ is ready to discuss how we can support your vision through 
                  investment, advisory, or ecosystem collaboration.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-primary-900">Email</h3>
                      <p className="text-neutral-600">contact@agi3.ae</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-primary-900">Response Time</h3>
                      <p className="text-neutral-600">Within 24 hours for all inquiries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-primary-900">Confidentiality</h3>
                      <p className="text-neutral-600">All communications are strictly confidential</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
                {submitStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-neutral-600">
                      We've received your message and will respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-primary-900 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-primary-900 mb-2">
                        Interest *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      >
                        <option value="">Select your interest</option>
                        {interests.map((interest) => (
                          <option key={interest} value={interest}>
                            {interest}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                        placeholder="Tell us about your needs and how we can help..."
                      />
                    </div>
                    
                    {/* Honeypot field for spam protection */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Start the Conversation'}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

    </>
  )
}