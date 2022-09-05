import "../styles/globals.css";
import App from "next/app";
import MainContainer from "../components/MainContainer";
import axios from "axios";
import { BASE_URL } from "./constanst/API";

function MyApp({ Component, pageProps, painters, fishText, paintings }) {
  return (
    <MainContainer painters={painters}>
      <Component
        {...pageProps}
        painters={painters}
        fishText={fishText}
        paintings={paintings}
      />
    </MainContainer>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const responsePainter = await axios.get(`${BASE_URL}/painters`);
  const responseFishText = await axios.get(`${BASE_URL}/fishText`);
  const responsePaintings = await axios.get(`${BASE_URL}/paintings`);
  const appProps = await App.getInitialProps(appContext);
  return {
    ...appProps,
    painters: responsePainter.data,
    fishText: responseFishText.data,
    paintings: responsePaintings.data,
  };
};
export default MyApp;
