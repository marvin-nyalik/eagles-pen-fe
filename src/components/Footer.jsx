import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.primary.white,
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
    </Box>
  );
}
