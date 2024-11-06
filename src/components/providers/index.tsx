import React from 'react'

import LayoutProvider from './layout-provider'
import { ThemeProvider } from './theme-provider'

export default function MainProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LayoutProvider>{children}</LayoutProvider>
    </ThemeProvider>
  )
}
