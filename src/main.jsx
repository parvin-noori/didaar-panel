import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ConfigProvider } from "antd";
import { AppProvider, useAppContext } from "./contexts/app/app-context.jsx";

const MyApp = () => {
    const { direction } = useAppContext();
  
    return (
      <ConfigProvider direction={direction}>
        <App />
      </ConfigProvider>
    );
  };

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
     <MyApp />
  </AppProvider>
);

