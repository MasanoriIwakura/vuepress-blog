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
  head: [
    ['meta', { name: 'google-site-verification', content: 'NTxNDXJuTwVCZflAjyI1VJj_H2YVQsMuJajvbjdhX1o'}],
    ['script', {'async src': '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'}],
    ['script', {}, '(adsbygoogle=window.adsbygoogle || []).push({google_ad_client:"ca-pub-6478454960724435",enable_page_level_ads:true});']
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Profile', link: '/profile/' },
      { text: 'Diary', link: '/dialy/' }
    ],
    sidebar: 'auto',
    lastUpdated: 'Last Updated'
  }
}