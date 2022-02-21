import React from "react";
import {Route, Routes} from "react-router-dom";

import TopBar from "./modules/TopBar/TopBar";
import Home from "./pages/Home/Home";
import pages from "./pages/pages";

import "./App.css";

function App() {
    return (
        <>
            <TopBar/>
            <Home/>
            <Routes>
                {pages.map((page, index) => {
                    return (
                        <Route
                            path={page.path}
                            element={page.component}
                            key={"page_" + index}
                        >
                        </Route>
                    );
                })}
            </Routes>
        </>
    );
}

export default App;
