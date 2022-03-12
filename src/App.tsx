import React from "react";
import {Route, Routes} from "react-router-dom";

import TopBar from "./modules/TopBar/TopBar";
import pages from "./pages/pages";

import "./App.css";

const App = () => {
    return (
        <>
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
        </>
    );
}

export default App;
