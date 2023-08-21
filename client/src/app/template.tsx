"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
// import { createWrapper } from "next-redux-wrapper";

const TemplatePage = ({ children }) => {
    return (
        <Provider store={store}>
            <div>{children}</div>
        </Provider>
    );
};

export default TemplatePage;
// const makeStore = () => store;
// const wrapper = createWrapper(makeStore);
// export default wrapper.withRedux(TemplatePage);