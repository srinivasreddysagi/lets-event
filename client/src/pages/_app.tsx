import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/index.scss";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Layout from "../components/layouts/Layout";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </>
    );
};

export default MyApp;