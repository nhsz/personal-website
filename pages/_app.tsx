import splitbee from '@splitbee/web';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Layout } from '../components';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => splitbee.init(), []);

  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
