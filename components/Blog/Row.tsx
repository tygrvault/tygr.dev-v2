import { Card, Text, useTheme } from "@nextui-org/react";
import { Box } from "components/UI/Box";
import { Post } from "contentlayer/generated";
import { useRouter } from "next/router";

export default function BlogRow({ post }: { post: Post }) {
    const { isDark } = useTheme();
    const router = useRouter();
    return (
        <>
            <Card
                isPressable
                isHoverable
                disableRipple
                css={{
                    $$cardColor: isDark ? "#000" : "#fff",
                    borderStyle: "solid",
                    borderColor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)",
                }}
                onPress={() => router.push(post.url)}
            >
                <Card.Body css={{
                    p: "1rem",
                    gap: "0.5rem",
                }}>
                    <Box css={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        gap: "0.75rem"
                    }}>
                        <Text
                            weight="bold"
                            css={{
                                margin: "0",
                                lineHeight: "1",
                                fontSize: "$2xl",
                                "@xs": {
                                    fontSize: "$3xl",
                                },
                                "@sm": {
                                    fontSize: "$4xl",
                                },
                            }}
                        >
                            {post.title}
                        </Text>
                        <Text color="#888" css={{
                            fontWeight: "normal",
                            textAlign: "right"
                        }}>
                            {post.readingTime}
                        </Text>
                    </Box>
                    <Text
                        color={"#888"}
                        css={{
                            margin: "0",
                            lineHeight: "1.2",
                            fontSize: "$lg",
                            "@xs": {
                                fontSize: "$xl",
                            },
                            "@sm": {
                                fontSize: "$2xl",
                            },
                        }}
                    >
                        {post.summary}
                    </Text>
                </Card.Body>
            </Card>
        </>
    )
}