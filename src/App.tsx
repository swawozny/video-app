import React from "react";
import {Route, Routes} from "react-router-dom";

import TopBar from "./modules/TopBar/TopBar";
import Footer from "./modules/Footer/Footer";
import pages from "./pages/pages";

import "./App.css";

const App = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <TopBar/>
            <Routes>
                {pages.map((page, index) => {
                    return (
                        <Route
                            path={page.path}
                            element={<page.component/>}
                            key={"page_" + index}
                        >
                        </Route>
                    );
                })}
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
