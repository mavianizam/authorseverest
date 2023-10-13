import '@/styles/globals.css'
import Layout from './comps/layout';
import Head from "next/head";
import Script from "next/script";
import { useEffect } from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false;

const ZENDESK_KEY = "f081cf71-6296-44b5-9b54-ee7d398318cf";
import Zendesk, { ZendeskAPI } from "@/pages/zendesk";


export default function App({ Component, pageProps }) {

  const handleLoaded = () => {
    ZendeskAPI("messenger", "open");
    zE(function () {
      $zopim(function () {
        $zopim.livechat.setOnUnreadMsgs(unread);

        function unread(number) {
          if (number >= 1) {
            $zopim.livechat.window.show();
          }
        }
      });
    });
  };

  return (

    <>
      {/* <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} /> */}
      <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=c8eb3388-cbdb-40d3-a5f4-e2624762999d"> </script>
     


      <Head>

        <title>Authors Everest</title>
        <meta name="description" content="Free Web tutorials"></meta>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous" />

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" integrity="sha512-3P8rXCuGJdNZOnUx/03c1jOTnMn3rP63nBip5gOP2qmUh5YAdVAvFZ1E+QLZZbC1rtMrQb+mah3AfYW11RUrWA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous" />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout>

        <Component {...pageProps} />
      </Layout>
    </>
  );
}
