import React from "react";
import { Route, Routes } from "react-router-dom";

import { LoginPage } from "./pages/login";
import { RouterLayout } from "./common/RouterLayout";
import { HomePage } from "./pages/home";

export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route path="/out" element={<div><h1>ESTAMOS FUERA DEL LAYOUT</h1></div>} />
        </Routes>

    );
};
