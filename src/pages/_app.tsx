import 'tailwindcss/tailwind.css'
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";


const App = ({ Component, pageProps }: AppProps) => (
  
    <Component {...pageProps} />
  
);

export default App;
