import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      title : 'TabSider extension for Google Chrome and Edge - A sidebar tool for efficient tab management.',
      titleTemplate: '%s | TabSider.com',
      description: 'TabSider is a sidebar extension for Google Chrome and Edge that helps you manage your tabs efficiently. It allows you to group tabs, search, and switch between them quickly.',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
      <meta name="google-site-verification" content="TukPLuA56hCEMKGkBKTRJaDbmlgA2NohniSEOH-SkNs" />
    </>
  ),
  logo: <span>TabSider.com</span>,
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  // chat: {
  //   link: 'https://discord.com',
  // },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  search: {
    placeholder: 'Search',
  },
  gitTimestamp: `updated: ${new Date().toISOString().slice(0,10)}`,
  darkMode: false,
  footer: {
    text: '© 2024 TabSider.com',
  },
}

export default config
