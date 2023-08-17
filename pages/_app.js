import React from 'react';
import '../styles/globals.scss';
import Layout from '../components/Layout';
import {DefaultSeo} from 'next-seo';
import Head from 'next/head';
import qualigaplimited from '../public/qualigaplimited.png'


export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta name="google-site-verification" content="yd6XXhS7FbSkgVT3VKVGXgXy5nfxceiRN1zwqsxZTsE" />
    <meta property="og:image" content='https://res.cloudinary.com/ddpnai51v/image/upload/v1692284875/qualigap_limited_logo_pcaavr.png'/>
        <meta name="twitter:image" content='https://res.cloudinary.com/ddpnai51v/image/upload/v1692284875/qualigap_limited_logo_pcaavr.png'/>
        <meta name="keywords" content="Agro supplies,Agricultural equipment,Farming tools,Crop solutions,Agrochemicals,Farm consultation,Agricultural products,Agribusiness solutions,Farming essentials,Crop management,Agro services,Farm technology,Sustainable agriculture,Farm machinery,Crop nutrition,Agro experts,Farm innovation,Agricultural solutions,Farm productivity,Agro marketplace"/>
    </Head>


    <DefaultSeo
                title="Qualigap.com | Best Agro One Stop Shop Nigeria"
                description="Best Agro One-Stop Shop in Nigeria, premium agricultural supplies, equipment, expert advice, consultation, consultancy and innovative solutions. Cultivate and harvest success with our comprehensive range of products and services."
                openGraph={{
                    type: 'website',
                    site_name: 'Qualigap.com',
                    locale: 'en_IE',
                    url: 'https://qualigap.com',
                }}
                twitter={{
                    cardType: 'summary_large_image',
                }}
            />
        <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
    
  );
}
