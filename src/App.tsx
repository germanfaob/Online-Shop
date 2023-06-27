import { ThemeProvider } from "styled-components";
import { theme } from "./globalstyles/theme";
import { GlobalStyles } from "./globalstyles/globalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <h1>Hello World</h1>
    </ThemeProvider>
  );
}

export default App;
