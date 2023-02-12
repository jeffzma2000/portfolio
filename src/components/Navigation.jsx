import * as React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "../layouts/Layout.jsx";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<>Hey there</>} />
          <Route path={"/about"} element={<>I'm Jif</>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Navigation;
