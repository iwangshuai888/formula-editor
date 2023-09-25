const path = require('path')

module.exports = {
  title: 'Formula Editor',
  description: 'A relatively complete formula editor',
  themeConfig: {
    repo: 'https://github.com/idealworld/formula-editor',
    sidebar: [
      {
        text: 'Introduction',
        children: [
          { text: 'Getting Started', link: '/index' }
        ]
      },
      {
        text: 'Demo',
        children: [
          { text: 'Editor', link: '/editor-demo' },
        ]
      }
    ]
  },
  vite: {
    resolve: {
      alias: {
        'formula-editor': path.resolve(__dirname, '../../src')
      },
      dedupe: ['vue', 'codemirror', 'element-plus', 'eslint-linter-browserify', 'vue-codemirror6', /@codemirror\/.+/, /@lezer\/.+/, /@element-plus\/.+/],
    }
  }
}
