import { Card, Text } from "@nextui-org/react";
import { Box } from "components/UI/Box";
import { Post } from "contentlayer/generated";
import { useRouter } from 'next/router'

export default function BlogCard({ post }: { post: Post }) {
    const router = useRouter();
    return (
        <>
            <Card
                isPressable
                isHoverable
                disableRipple
                css={{
                    w: "100%",
                    minHeight: "550px",
                    borderStyle: "solid",
                    borderColor: "rgba(0, 0, 0, 0.15)",
                    margin: 0
                }}
                onPress={() => router.push(post.url)}
            >
                <Card.Body css={{ padding: 0 }}>
                    <Card.Image
                        src={post.image}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt={post.title}
                    />
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#11111190",
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1,
                    }}
                >
                    <Box css={{
                        w: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <Box css={{
                            w: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "0.75rem"
                        }}>
                            <Text color={"#fff"} size={"$2xl"} weight={"bold"}>
                                {post.title}
                            </Text>
                            <Text color={"#fff"} size={"$lg"} css={{ textAlign: "right" }}>
                                {post.readingTime}
                            </Text>
                        </Box>
                        <Box css={{
                            w: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                            <Text color={"#fff"} size={"$lg"}>
                                {post.summary}
                            </Text>
                        </Box>
                    </Box>
                </Card.Footer>
            </Card>
        </>
    )
}