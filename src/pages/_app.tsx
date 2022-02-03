import 'tailwindcss/tailwind.css'
import { AppProps } from "next/app";
import '../styles/globals.css'
import Header from '../utils/config'

const App = ({ Component, pageProps }: AppProps) => (
  <div className="h-full w-full">
    <Header title={pageProps.title} /> <Component {...pageProps} />
  </div>
    
  
);

export default App;
