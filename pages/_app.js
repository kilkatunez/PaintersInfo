import '../styles/globals.css'
import App from 'next/app'
import MainContainer from "../components/MainContainer";

function MyApp({Component, pageProps, painters,fishText,paintings}) {
  return (
    <MainContainer painters={painters}>
      <Component {...pageProps  }  painters={painters} fishText={fishText} paintings={paintings}/>
    </MainContainer>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const responsePainter = await fetch(`http://localhost:4200/painters`)
  const responseFishText =await  fetch('http://localhost:4200/fishText')
  const responsePaintings =await fetch ('http://localhost:4200/paintings')
  const painters = await responsePainter.json()
  const fishText = await responseFishText.json()
  const paintings = await responsePaintings.json()
  const appProps = await App.getInitialProps(appContext)
  return {
    ...appProps, painters, fishText, paintings
  }
}
export default MyApp
