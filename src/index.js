import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./app";
import "./style/style.scss";
import roboto from "url:./fonts/Roboto-Light.ttf";
import robotoBlack from "url:./fonts/Roboto-Black.ttf";

ReactDOM.render(
    <Router basename={process.env.BASENAME}>
        <App />
    </Router>,
    document.getElementById("root")
)