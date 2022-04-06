import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter as Router} from "react-router-dom";

import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <React.StrictMode>
        <Router basename="/video-app">
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
