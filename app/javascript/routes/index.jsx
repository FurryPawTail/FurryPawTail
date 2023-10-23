import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../components/user/registrations/Signup";
import Dashboard from "../components/Dashboard";
import NavigationBar from "../components/NavigationBar";

export default (
  <div>
    <NavigationBar />
    <Routes>
      <Route path={'/'} element={<Dashboard />} />
      <Route path={'/signup/sign_up'} element={<Signup />} />
    </Routes>
  </div>
  

);
