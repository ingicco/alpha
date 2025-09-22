import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { getAllPosts } from '@/lib/mdx'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insights & Market Intelligence',
  description: 'Strategic perspectives on emerging technologies, market dynamics, and regulatory developments from Alpha Group Investment.',
}

export default function InsightsPage() {
  const posts = getAllPosts('insights')

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24">
        <div className="text-center max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl mb-6">
              Insights & <span className="text-accent-600">Market Intelligence</span>
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-xl text-neutral-600 leading-8 mb-10">
              Strategic perspectives on emerging technologies, market dynamics, and regulatory 
              developments shaping the future of institutional finance and digital assets.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Featured Insights */}
      <Section
        eyebrow="Latest Insights"
        title="Market Intelligence & Analysis"
        description="In-depth analysis and strategic perspectives from our investment and advisory teams."
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.meta.slug} delay={index * 100}>
              <article className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
                      {post.meta.category}
                    </span>
                    <span>•</span>
                    <time dateTime={post.meta.date}>
                      {new Date(post.meta.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-primary-900 mb-4 group-hover:text-accent-600 transition-colors">
                    <Link href={`/insights/${post.meta.slug}`}>
                      {post.meta.title}
                    </Link>
                  </h2>
                  
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {post.meta.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{post.meta.readingTime}</span>
                    </div>
                    
                    <Link 
                      href={`/insights/${post.meta.slug}`}
                      className="text-accent-600 font-semibold hover:text-accent-700 transition-colors group-hover:translate-x-1 transform duration-200"
                    >
                      Read More →
                    </Link>
                  </div>
                  
                  {post.meta.tags && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-neutral-200">
                      {post.meta.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-neutral-100 text-neutral-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Categories */}
      <Section background="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">
            Explore by Category
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our insights cover the full spectrum of institutional finance, from traditional 
            investment strategies to cutting-edge digital asset frameworks.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <div className="text-center bg-white rounded-xl shadow-sm border border-neutral-200 p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100 text-accent-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                Investment Thesis
              </h3>
              <p className="text-sm text-neutral-600">
                Strategic investment perspectives and market analysis
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="text-center bg-white rounded-xl shadow-sm border border-neutral-200 p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                Digital Assets
              </h3>
              <p className="text-sm text-neutral-600">
                Blockchain technology and cryptocurrency insights
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="text-center bg-white rounded-xl shadow-sm border border-neutral-200 p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100 text-accent-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                Market Analysis
              </h3>
              <p className="text-sm text-neutral-600">
                Market trends and economic analysis
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="text-center bg-white rounded-xl shadow-sm border border-neutral-200 p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                Regulatory
              </h3>
              <p className="text-sm text-neutral-600">
                Compliance and regulatory developments
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Stay Informed
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Subscribe to receive our latest insights and market intelligence 
              directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-600 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-accent-400 text-primary-900 font-semibold rounded-lg hover:bg-accent-500 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-neutral-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
