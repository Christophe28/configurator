import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./app";
import "./style/style.scss";

// console.log(process.env.REACT_APP_BASENAME)
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
)