import Footer from "../components/Global/Footer";
import Nav from "../components/Global/Nav";
import { Box } from "../components/UI/Box";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Nav />
            <Box
                css={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "auto",
                    mb: "1rem",
                }}
            >
                <Box css={{
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "1400px",
                    mb: "3rem",
                    px: "0.75rem",
                    "@sm": {
                        px: "1.5rem",
                        mx: "1.5rem",
                    }
                }}>
                    {children}
                </Box>
                <Footer />
            </Box>
        </>
    )
}