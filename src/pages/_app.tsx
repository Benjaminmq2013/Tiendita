import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ContextStylesProvider } from '../context/styles/stylesContextProvider';
import { CartContextProvider } from '../context/cart/CartContextProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <ContextStylesProvider>
        <Component {...pageProps} />
      </ContextStylesProvider>
    </CartContextProvider>
  )
}

export default MyApp
