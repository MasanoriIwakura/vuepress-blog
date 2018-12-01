module.exports = {
  title: 'Iwakura Vue Blog',
  description: '〜頑張ってアウトプットします宣言〜',
  ga: 'UA-104484317-2',
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  extend: '',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#3eaf7c' }
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Profile', link: '/profile/' },
      { text: 'Diary', link: '/dialy/' }
    ],
    lastUpdated: 'Last Updated'
  }
}