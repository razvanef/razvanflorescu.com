import '../styles/globals.scss'
import '../node_modules/line-awesome/dist/line-awesome/css/line-awesome.min.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
