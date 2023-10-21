import React from "react";
import { Link } from "react-router-dom";
export default () => (React.createElement("div", { className: "vw-100 vh-100 primary-color d-flex align-items-center justify-content-center" },
    React.createElement("div", { className: "jumbotron jumbotron-fluid bg-transparent" },
        React.createElement("div", { className: "container secondary-color" },
            React.createElement("h1", { className: "display-4" }, ""),
            React.createElement("p", { className: "lead" }, "A curated list of recipes for the best homemade meal and delicacies."),
            React.createElement("hr", { className: "my-4" }),
            React.createElement(Link, { to: "/recipes", className: "btn btn-lg custom-button", role: "button" }, "View Recipes")))));
