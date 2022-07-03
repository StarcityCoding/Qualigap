import React from 'react';
import { NotificationsProvider } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';
import '../styles/globals.scss';
import { Layout } from '../components';


function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider>
      <NotificationsProvider>
        <Layout>
      <Component {...pageProps} />
    </Layout>

      </NotificationsProvider>
    </MantineProvider>
    
  );
}

export default MyApp;
