import 'tailwindcss/tailwind.css'
import { AppProps } from "next/app";
import '../styles/globals.css'
import Header from '../utils/config'
import NextNprogress from 'nextjs-progressbar';

const App = ({ Component, pageProps }: AppProps) => (
  <div className="h-full w-full">
    <Header title={pageProps.title} />       
    <NextNprogress
        color="#c5cec3"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
  </div>
    
  
);

export default App;
