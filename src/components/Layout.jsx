import * as React from "react";
import Box from "@mui/material/Box";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
