import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
  <div className="h-full w-full">
      <Component {...pageProps} />
  </div>
    
  
);

export default App;
