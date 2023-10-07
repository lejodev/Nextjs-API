import React from 'react'
import Providers from './Providers'

export default function RootLayout({
  children, }: {
    children: React.ReactNode
  }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

