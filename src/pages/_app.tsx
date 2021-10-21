import 'tailwindcss/tailwind.css'
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
  
    <Component {...pageProps} />
  
);

export default App;
