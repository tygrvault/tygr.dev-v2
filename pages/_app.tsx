import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import "@fontsource/jetbrains-mono";
import "@fontsource/inter/variable-full.css";

const theme = {
    theme: {
        colors: {},
        fonts: {
            sans: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans","Droid Sans","Helvetica Neue",sans-serif`,
            mono: "JetBrains Mono, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono'"
        },
        lineHeights: {
            xs: 1,
            sm: 1,
            base: 1,
            md: 1.25,
            lg: 1.75,
            xl: 1.75,
            '2xl': 2,
            '3xl': 2.25,
            '4xl': 2.5,
            '5xl': 1,
            '6xl': 1,
            '7xl': 1,
            '8xl': 1,
            '9xl': 1
        }
    }
};

function App({ Component, pageProps }: { Component: any, pageProps: any }) {
    return (
        <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
                light: createTheme({ ...theme, type: "light" }),
                dark: createTheme({ ...theme, type: "dark" })
            }}
        >
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
        </NextThemesProvider>
    );
}

export default App;
