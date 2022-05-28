import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../components/header';
import Footer from '../components/footer';
import LoginHeader from '../components/LoginHeader';
import LoginFooter from '../components/LoginFooter';
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      {router.query && router.query.islogin == "1" ? (
        <div id="content">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>) : router.query && router.query.islogin == "2" ? (<div id="content">
          <div className="login-container">
            <LoginHeader />
            <Component {...pageProps} />
            <LoginFooter />
          </div>
        </div>
        ) : <Component {...pageProps} />
      }
    </Provider>
  )
}
export default appWithTranslation(MyApp)
