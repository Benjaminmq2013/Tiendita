import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ContextStylesProvider } from '../context/styles/stylesContextProvider';
import { Provider } from "react-redux"
import { store } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={ store } >
      <ContextStylesProvider>
        <Component {...pageProps} />
      </ContextStylesProvider>
    </Provider>
  );
}

export default MyApp
