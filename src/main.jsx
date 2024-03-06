import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ConfigProvider } from "antd";
import { AppProvider, useAppContext } from "./contexts/app/app-context.jsx";
import { grey, red } from "@ant-design/colors";

const MyApp = () => {
  const { direction } = useAppContext();
  const [currentTheme, setCurrentTheme] = useState("light");
  const lightTheme = {
    headerBg: red[8],
  };
  const darkTheme = {
    headerBg: grey[8],
  };

  return (
    <ConfigProvider
      direction={direction}
      theme={{
        token: currentTheme === "light" ? lightTheme : darkTheme,
      }}
    >
      <App />
    </ConfigProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <MyApp />
  </AppProvider>
);
