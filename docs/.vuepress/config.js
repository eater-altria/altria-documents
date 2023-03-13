module.exports = {
  title: 'Altria\'s Documents Page',
  description: 'This is Altria\'s Documents Page. All of these are written by Chinese or English. Welcome everyone!',
  theme: 'reco',
  base: '/altria-documents-dist/',
  locales: {
    '/zh-CN/': {
      lang: 'zh-CN',
      title: '阿尔托莉雅的文档',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Altria\'s Documents Page',
    }
  },
  themeConfig: {
    subSidebar: 'auto',
    sidebar: {
      '/zh-CN/': [
        '/zh-CN/chat-gpt/'
      ]
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Altria\'s Github', link: 'https://github.com/eater-altria' },
    ]
  }
}