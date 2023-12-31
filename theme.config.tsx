import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      title : 'Captura De Pantalla',
      titleTemplate: '%s en Windows?',
      description: 'Utilice los atajos de teclado o “Recortes” para tomar una captura de pantalla de toda la pantalla o de una sola ventana.'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
      <meta name="google-site-verification" content="TukPLuA56hCEMKGkBKTRJaDbmlgA2NohniSEOH-SkNs" />
    </>
  ),
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
