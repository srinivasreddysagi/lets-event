"use client";

import React, { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/index.scss";

interface Props {
    children: React.ReactElement;
}

const RootLayout: FC<Props> = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;