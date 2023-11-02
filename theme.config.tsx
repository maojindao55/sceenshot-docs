import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Captura-De-Pantalla.com</span>,
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  // chat: {
  //   link: 'https://discord.com',
  // },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  search: {
    placeholder: 'Buscar',
  },
  gitTimestamp: `Última actualización: ${new Date().toISOString().slice(0,10)}`,
  darkMode: false,
  footer: {
    text: '© 2023 captura-de-pantalla.com',
  },
}

export default config
