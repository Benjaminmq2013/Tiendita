import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ContextStylesProvider } from '../context/styles/stylesContextProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextStylesProvider>
      <Component {...pageProps} />
    </ContextStylesProvider>
  )
}

export default MyApp
