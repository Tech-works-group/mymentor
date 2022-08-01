import '@nextcss/reset';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import '../styles/globals.css'
import Layout from '../common/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
  )
}

export default MyApp
