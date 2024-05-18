import { AppProps } from "next/app"
import '../main.css'
import '../coreui.css'
import '../layout.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
  };
  
  export default MyApp;