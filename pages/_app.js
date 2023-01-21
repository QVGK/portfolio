// Dependencies
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics'

// CSS
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp
