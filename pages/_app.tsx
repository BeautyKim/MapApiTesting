import SearchBar from '@/components/SearchBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <SearchBar />
  <Component {...pageProps} />
  </>

  )   
}
export default MyApp
