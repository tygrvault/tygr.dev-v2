import { Divider, Grid, Link, Text, useTheme } from "@nextui-org/react";
import { Box } from "components/UI/Box";
import { Svg } from "components/UI/SVG";
import useSWR from "swr";
import { Status } from "interfaces/Spotify";
import fetcher from "lib/Fetcher";
import ExternalLink from "components/UI/ExternalLink";

export default function Footer() {
    const { isDark } = useTheme();
    const { data } = useSWR<Status>('/api/spotify/status', fetcher);
    return (
        <>
            <Box css={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "700px",
                mx: "auto",
                width: "100%",
            }}>

                <Divider css={{
                    width: "100%",
                    mb: "2rem"
                }} />

                <Box css={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "1rem",
                    mx: "0.5rem",
                    width: "100%",
                }}>
                    {data?.url ? (
                        <>
                            <Svg css={{ height: "1.5rem", width: "1.5rem", mr: "0.5rem" }} viewBox="0 0 168 168">
                                <path
                                    fill="#1ED760"
                                    d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
                                />
                            </Svg>
                            <Box css={{
                                display: "flex",
                                flexDirection: "row",
                            }}>
                                <Text css={{
                                    fontWeight: "$semibold",
                                    color: "#888",
                                }}>
                                    Listenting to: {" "}
                                    <Link href={data.url} css={{
                                        color: isDark ? "#fff" : "#000"
                                    }}>
                                        {data.name} - {data.artists[0].name}
                                    </Link>
                                </Text>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Svg css={{ height: "2rem", width: "2rem", mr: "0.5rem" }} viewBox="0 0 168 168">
                                <path
                                    fill="#1ED760"
                                    d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
                                />
                            </Svg>
                            <Box css={{
                                display: "flex",
                                flexDirection: "row",
                            }}>
                                <Text css={{
                                    fontWeight: "$semibold",
                                }}>
                                    Not Playing {" "}
                                    <Link href={"https://open.spotify.com/user/z4is4ny666qn1njee0k6g77o2"} css={{
                                        color: "#888"
                                    }}>
                                        - Spotify
                                    </Link>
                                </Text>
                            </Box>
                        </>
                    )}
                </Box>

                <Grid.Container gap={2} justify="center">
                    <Grid xs={4} justify={"flex-start"} alignItems={"flex-start"} css={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}>
                        <Link href="/">
                            <Text css={{
                                color: "#888",
                                fontWeight: "$semibold"
                            }}>
                                Home
                            </Text>
                        </Link>
                        <Link href="/projects">
                            <Text css={{
                                color: "#888",
                                fontWeight: "$semibold"
                            }}>
                                Projects
                            </Text>
                        </Link>
                        <Link href="/blog">
                            <Text css={{
                                color: "#888",
                                fontWeight: "$semibold"
                            }}>
                                Blog
                            </Text>
                        </Link>
                    </Grid>
                    <Grid xs={4} justify={"center"} alignItems={"center"} css={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}>
                        <Link href="https://twitter.com/tygerxqt">
                            <Text css={{
                                color: "#888",
                                fontWeight: "$semibold"
                            }}>
                                Twitter
                            </Text>
                        </Link>
                        <Link href="https://instagram.com/tygerxqt">
                            <Text css={{
                                color: "#888",
                                fontWeight: "$semibold"
                            }}>
                                Instagram
                            </Text>
                        </Link>
                        <Link href="https://www.youtube.com/channel/UCDCBrrYkHrt4cFnoA2SKMdA">
                            <Text css={{
                                color: "#888",
                                fontWeight: "$semibold"
                            }}>
                                YouTube
                            </Text>
                        </Link>
                    </Grid>
                    <Grid xs={4} justify={"flex-end"} alignItems={"flex-end"} css={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}>
                        <Link href="/api">
                            <Text css={{
                                color: "#888",
                                fontWeight: "$semibold"
                            }}>
                                API
                            </Text>
                        </Link>
                        <ExternalLink href="https://github.com/tygerxqt/tygr.dev">
                            <Text css={{
                                color: "#888",
                                fontWeight: "$semibold"
                            }}>
                                Source
                            </Text>
                        </ExternalLink>
                        {/* <Link href="/about"> */}
                        <Text css={{
                            color: "#888",
                            fontWeight: "$semibold",
                            textAlign: "right",
                            cursor: "not-allowed"
                        }}>
                            About
                        </Text>
                        {/* </Link> */}
                    </Grid>
                </Grid.Container>
            </Box>
        </>
    )
}