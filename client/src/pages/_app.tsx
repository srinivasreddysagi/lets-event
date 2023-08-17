import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/index.scss";
import { Provider } from "react-redux";
import { store } from "../store/store";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
};

export default MyApp;