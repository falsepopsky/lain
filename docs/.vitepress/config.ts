import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'lain',
  description: 'web scraping tools for anime sites',
  cleanUrls: true,

  themeConfig: {
    nav: [{ text: 'Guide', link: '/guide' }],
    sidebar: [
      {
        text: 'Guide',
        collapsed: false,
        items: [{ text: 'Quick Start', link: '/guide' }],
      },
      {
        text: '@untidy/animeflv',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/animeflv/' },
          { text: 'Cheerio', link: '/animeflv/cheerio' },
          { text: 'URL', link: '/animeflv/url' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/falsepopsky/lain' }],
    search: {
      provider: 'local',
    },
  },
});
