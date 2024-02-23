import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Notifications } from "@mantine/notifications";
import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({});

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme}>
    <Notifications zIndex="1000" />
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </MantineProvider>
);
