import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { CTAButton } from '@/components/CTAButton'
import { Prose } from '@/components/Prose'
import { getPostBySlug, getPostSlugs } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getPostSlugs('insights')
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug, 'insights')
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: 'article',
      publishedTime: post.meta.date,
      tags: post.meta.tags,
    },
  }
}

export default function InsightPage({ params }: Props) {
  const post = getPostBySlug(params.slug, 'insights')

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Article Header */}
      <Section className="pt-24">
        <Container size="md">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-sm text-neutral-500 mb-6">
              <Link 
                href="/insights"
                className="text-accent-600 hover:text-accent-700 font-medium"
              >
                ← Back to Insights
              </Link>
              <span>•</span>
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
            
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl mb-6">
              {post.meta.title}
            </h1>
            
            <p className="text-xl text-neutral-600 leading-8 mb-8">
              {post.meta.description}
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.meta.readingTime}</span>
              </div>
              
              {post.meta.tags && (
                <div className="flex flex-wrap gap-2">
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
          </div>
        </Container>
      </Section>

      {/* Article Content */}
      <Section>
        <Container size="md">
          <Prose size="lg">
            <MDXRemote source={post.content} />
          </Prose>
        </Container>
      </Section>

      {/* Article Footer */}
      <Section background="muted">
        <Container size="md">
          <div className="text-center">
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Interested in Learning More?
              </h3>
              <p className="text-neutral-600 mb-6">
                Connect with our team to discuss how these insights apply to your 
                organization's investment strategy and advisory needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="/contact" variant="outline">
                  Start a Conversation
                </CTAButton>
                <CTAButton href="/insights" variant="outline">
                  Read More Insights
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Articles */}
      <Section>
        <Container size="md">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary-900 mb-8">
              Continue Reading
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Link 
                href="/insights"
                className="block bg-white rounded-xl shadow-sm border border-neutral-200 p-6 hover:shadow-lg transition-shadow group"
              >
                <h4 className="text-lg font-semibold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors">
                  All Insights
                </h4>
                <p className="text-neutral-600 text-sm">
                  Explore our complete collection of market intelligence and strategic perspectives.
                </p>
              </Link>
              
              <Link 
                href="/advisory"
                className="block bg-white rounded-xl shadow-sm border border-neutral-200 p-6 hover:shadow-lg transition-shadow group"
              >
                <h4 className="text-lg font-semibold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors">
                  Advisory Services
                </h4>
                <p className="text-neutral-600 text-sm">
                  Learn how our advisory mandates can help implement these insights.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
