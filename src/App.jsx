import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";

import Layout from "./components/Layout";
import theme from "./styles/theme";
import Feature1 from "./components/feature1/Feature1";
import Feature2 from "./components/feature2/Feature2";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Feature1 />
            </Layout>
          }
        />
        <Route
          path="/another-feature"
          element={
            <Layout>
              <Feature2 />
            </Layout>
          }
        />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

export default Root;
