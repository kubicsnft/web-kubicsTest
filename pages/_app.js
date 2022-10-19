import '../styles/globals.css'
import '../styles/tggleSwitch.css'
import '../styles/barraScroll.css'
import '../styles/theme.css'
import '../styles/Roadmap.css'
import { LangProvider } from '../context/langContext';
import { MyProvider } from '../context/MyProvider'



function MyApp({ Component, pageProps }) {
  return (
    <LangProvider >
      <MyProvider >

        <Component {...pageProps} />

      </MyProvider>
    </LangProvider>
  )

}

export default MyApp
