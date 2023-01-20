// Dependencies
import { ThemeProvider } from 'next-themes'

// CSS
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
