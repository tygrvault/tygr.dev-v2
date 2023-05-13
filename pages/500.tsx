import { Button, Link, Spacer, Text, useTheme } from "@nextui-org/react";
import { Box } from "components/UI/Box";
import RootLayout from "layouts/RootLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ServerError() {
    const router = useRouter();
    const { isDark } = useTheme();
    const [title, setTitle] = useState("");

    useEffect(() => {
        const titles = [
            "Sorry about this :(",
            "Something went wrong :(",
        ];

        setTitle(titles[Math.floor(Math.random() * titles.length)]);
    }, [])

    return (
        <>
            <RootLayout>
                <Box css={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "60vh",
                    top: "50%",
                    gap: "10px",
                    textAlign: "center",
                }}>
                    <Text
                        color={"#888"}
                        css={{
                            lineHeight: 1,
                            fontSize: "$lg",
                            fontWeight: 550,
                            "@xs": {
                                fontSize: "$xl",
                            }
                        }}
                    >
                        500 - Server Error
                    </Text>
                    <Text
                        css={{
                            lineHeight: 1,
                            fontSize: "$4xl",
                            fontWeight: 700,
                            textAlign: "center",
                            "@xs": {
                                fontSize: "$5xl",
                            }
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        color={"#888"}
                        css={{
                            lineHeight: 1.5,
                            fontSize: "$lg",
                            fontWeight: 550,
                            "@xs": {
                                fontSize: "$xl",
                            }
                        }}
                    >
                        An error occurred while some code tried to run. Wanna try again?
                    </Text>

                    <Spacer y={1} />
                    <Box css={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "1rem",
                    }}>
                        <Button
                            auto size={{ "@initial": "sm", "@xs": "md" }} css={{
                                backgroundColor: isDark ? "#fff" : "#000",
                                color: isDark ? "#000" : "#fff",
                                zIndex: 1,
                                fontWeight: "$semibold",
                                "@xs": {
                                    fontSize: "1rem",
                                }
                            }}
                            onClick={() => router.reload()}
                        >
                            Reload
                        </Button>
                        <Link href="https://github.com/tygerxqt/tygr.dev/issues/new?assignees=tygerxqt&labels=bug&template=bug_report.md&title=%5BBUG%5D+">
                            <Button
                                auto size={{ "@initial": "sm", "@xs": "md" }} css={{
                                    backgroundColor: isDark ? "#fff" : "#000",
                                    color: isDark ? "#000" : "#fff",
                                    zIndex: 1,
                                    fontWeight: "$semibold",
                                    "@xs": {
                                        fontSize: "1rem",
                                    }
                                }}
                            >
                                Create an issue
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </RootLayout>
        </>
    )
}