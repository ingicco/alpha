import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'content')

export interface PostMeta {
  title: string
  description: string
  date: string
  slug: string
  readingTime: string
  category?: string
  tags?: string[]
}

export interface Post {
  meta: PostMeta
  content: string
}

export function getPostSlugs(directory: string = 'insights'): string[] {
  const fullPath = path.join(contentDirectory, directory)
  
  if (!fs.existsSync(fullPath)) {
    return []
  }
  
  return fs.readdirSync(fullPath)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getPostBySlug(slug: string, directory: string = 'insights'): Post | null {
  try {
    const fullPath = path.join(contentDirectory, directory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const readingTimeResult = readingTime(content)
    
    return {
      meta: {
        ...data,
        slug,
        readingTime: readingTimeResult.text,
      } as PostMeta,
      content,
    }
  } catch {
    return null
  }
}

export function getAllPosts(directory: string = 'insights'): Post[] {
  const slugs = getPostSlugs(directory)
  
  return slugs
    .map((slug) => getPostBySlug(slug, directory))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
}

export function getPageContent(slug: string): Post | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      meta: {
        ...data,
        slug,
        readingTime: '',
      } as PostMeta,
      content,
    }
  } catch {
    return null
  }
}
