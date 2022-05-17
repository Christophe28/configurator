import React from "react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./app";
import "./style/style.scss";

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
)