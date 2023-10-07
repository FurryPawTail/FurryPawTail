import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
export default (React.createElement(Router, null,
    React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(Home, null) }))));
