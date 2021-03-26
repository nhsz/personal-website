import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { Layout } from '../components';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
