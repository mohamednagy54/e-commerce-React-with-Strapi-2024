import BottomHeader from "./components/Header/BottomHeader";
import TopHeader from "./components/Header/TopHeader";
import MiddleHeader from "./components/Header/MiddleHeader";
import { ColorModeContext, useMode } from "./Theme";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Scroll/ScrollToTop";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <TopHeader />
        <MiddleHeader />
        <BottomHeader />

        <Box
          bgcolor={
            // @ts-ignore
            theme.palette.bg.main
          }
        >
          <Hero />
          <Main />
        </Box>

        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
