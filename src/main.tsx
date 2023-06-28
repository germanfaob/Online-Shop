import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./globalstyles/theme.ts";
import { GlobalStyles } from "./globalstyles/globalStyles.ts";
import { router } from "./router/Router.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles theme={theme} />
    <RouterProvider router={router} />
  </ThemeProvider>
);
