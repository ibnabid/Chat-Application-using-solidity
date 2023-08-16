import "../styles/globals.css";


//internal import
import {ChatAppProvider} from '../Context/ChatAppContext';
import {NavBar} from '../Components/index';
const MyApp = ({ Component, pageProps }) =>(
  <div>
  <ChatAppProvider>
    <Component {...pageProps} />
  </ChatAppProvider>
  </div>
  );
export default MyApp;
