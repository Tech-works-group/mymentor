import "@nextcss/reset";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthenticationProvider } from "../context/AuthenticationContext";

import "../styles/globals.css";
import Layout from "../common/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthenticationProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthenticationProvider>
    </>
  );
}

export default MyApp;
