/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://alpha-investments.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/legal/disclaimer', '/legal/privacy'],
      },
    ],
    additionalSitemaps: [
      'https://alpha-investments.vercel.app/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    const customConfig = {
      loc: path,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }

    // Higher priority for main pages
    if (path === '/') {
      customConfig.priority = 1.0
      customConfig.changefreq = 'weekly'
    } else if (['/about', '/advisory', '/investment', '/digital-assets'].includes(path)) {
      customConfig.priority = 0.9
      customConfig.changefreq = 'monthly'
    } else if (path.startsWith('/insights')) {
      customConfig.priority = 0.8
      customConfig.changefreq = 'weekly'
    }

    return customConfig
  },
}
