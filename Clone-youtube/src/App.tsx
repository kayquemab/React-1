import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import './App.css';
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./shared/themes";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

