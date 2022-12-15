import React from "react";

import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";
import "./index.css";
import Dashboard from "./pages/dashboard";
import ManagementPost from "./pages/managementPost";
import Settings from "./pages/settings";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Navbar>
                        <Outlet />
                    </Navbar>
                }
            >
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/management-post" element={<ManagementPost />} />
                <Route path="/settings" element={<Settings />} />
            </Route>
        </Routes>
    );
}

export default App;
