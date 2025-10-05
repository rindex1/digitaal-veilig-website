import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DigitaalVeilig - Jouw digitale schild tegen datalekken en online misbruik',
  description: 'Bescherm jezelf tegen digitale risico\'s zoals datalekken, hacks, identiteitsdiefstal en online misbruik. Word lid van DigitaalVeilig voor professionele monitoring en juridische bescherming.',
  keywords: 'digitale veiligheid, datalekken, online misbruik, identiteitsdiefstal, consumentenbescherming, cybersecurity',
  authors: [{ name: 'DigitaalVeilig by varangian' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
