import 'tailwindcss/tailwind.css'
import { AppProps } from "next/app";
import '../styles/globals.css'
import Header from '../utils/config'
import ThemeProvider from '../core/hooks/Theme';

const App = ({ Component, pageProps }: AppProps) => (
  <div className="h-full w-full">
    <Header title={pageProps.title} /> <ThemeProvider> <Component {...pageProps} /> </ThemeProvider>
  </div>
    
  
);

export default App;
