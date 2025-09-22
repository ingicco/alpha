import type { MDXComponents } from 'mdx/types'
import { Prose } from './components/Prose'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => <Prose>{children}</Prose>,
    ...components,
  }
}
