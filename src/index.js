import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./app";
import "./style/style.scss";

ReactDOM.render(
    <Router basename={process.env.REACT_APP_BASENAME}>
        <App />
    </Router>,
    document.getElementById("root")
)