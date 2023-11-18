import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ConfigProvider, App } from "antd";
import { GlobalStyles, theme } from "./constant/theme";
import Router from "./Router";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorLink: theme.secondary,
          colorSuccess: theme.secondary,
          colorPrimary: theme.green,
          fontFamily: theme.fontFamily,
          borderRadius: theme.borderRadius,
        },
      }}
    >
      <GlobalStyles />
      <App>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </App>
    </ConfigProvider>
  </React.StrictMode>
);


