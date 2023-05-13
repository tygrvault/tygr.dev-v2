import { Text, Image, Card, Divider, Tooltip, useTheme, Modal, Button } from "@nextui-org/react";
import { Box } from "components/UI/Box";
import Repo from "interfaces/Repo";
import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import ExternalLink from "components/UI/ExternalLink";
import remarkGfm from "remark-gfm";
import ReadmeComponents from "./ReadmeComponents";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export default function ProjectCard({ data }: {
    data: Repo;
}) {
    const { isDark } = useTheme();
    const [visable, setVisable] = useState(false);

    return (
        <>
            <Card
                isPressable
                isHoverable
                disableRipple
                css={{
                    $$cardColor: isDark ? "#111" : "#eee",
                    borderStyle: "solid",
                    borderColor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)",
                }}
                onPress={(e) => setVisable(true)}

            >
                <Card.Body css={{
                    p: 0,
                    position: "relative",
                }}>
                    <Image src={data.image} showSkeleton width={1250} css={{ w: "auto", h: "auto" }} alt={"Project Banner"} />

                    <Box css={{
                        px: "1rem",
                        border: "0px",
                        borderTop: "1px",
                        borderColor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)",
                        borderStyle: "solid",
                    }}>
                        <Box css={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}>
                            <Text weight={"bold"} css={{
                                fontSize: "$3xl",
                                "@sm": {
                                    fontSize: "$4xl",
                                }
                            }}>
                                {data.name}
                            </Text>
                            {data.owner.login === "lofustudio" && (
                                <div>
                                    <Tooltip content={`Made by Lofu Studio`} placement={"bottom"} color={"invert"}>
                                        <Image src={`./assets/${data.owner.login}/dark.png`} width={"32px"} height={"32px"} alt={"Lofu Logo"} />
                                    </Tooltip>
                                </div>
                            )}
                            {data.owner.login === "nord-studio" && (
                                <div>
                                    <Tooltip content={`Made by Nord Studio`} placement={"bottom"} color={"invert"}>
                                        <Image src={`./assets/${data.owner.login}/dark.png`} width={"32px"} height={"32px"} alt={"Nord Logo"} />
                                    </Tooltip>
                                </div>
                            )}
                        </Box>
                    </Box>
                    <Divider />
                    <Box css={{
                        px: "12px",
                        py: "6px",
                    }}>
                        <Text size="$xl" weight="semibold" color={"#888"}>
                            {data.description.replace(/\p{Emoji}/gu, "")}
                        </Text>
                    </Box>
                </Card.Body>
            </Card>

            {/* Modal */}

            <Modal
                open={visable}
                noPadding={true}
                onClose={() => setVisable(false)}
                width={"900px"}
                css={{
                    mx: "0.5rem",
                    border: "1px",
                    borderRadius: "14px",
                    borderColor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)",
                    borderStyle: "solid",
                    background: isDark ? "#111" : "#eee",
                    "@sm": {
                        mx: "1rem"
                    }
                }}
            >
                <Modal.Header>
                    <Box css={{
                        position: "relative",
                        width: "1200px",
                        w: "auto",
                        h: "auto",

                    }}>
                        <Image src={data.image} showSkeleton alt={"Project Banner"} />
                        <Box css={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            right: "0",
                            bottom: "0",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            p: "1rem",
                        }}>
                            <div />
                            <Button onPress={() => setVisable(false)} css={{
                                background: "white",
                                color: "black",
                                minWidth: "24px",
                                minHeight: "24px",
                                fontSize: "1rem",
                                px: "0.5rem"
                            }}>
                                <GrFormClose size={"24px"} />
                            </Button>
                        </Box>

                    </Box>
                </Modal.Header>
                <Modal.Body css={{
                    border: "0",
                    borderTop: "1px",
                    borderColor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)",
                    borderStyle: "solid",
                }}>
                    <Box css={{
                        display: "flex",
                        flexDirection: "column",
                        mx: "0.75rem",
                        my: "0.75rem"
                    }}>
                        <Box css={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            textAlign: "center",
                            justifyContent: "space-between",
                        }}>
                            <Text weight={"bold"} css={{
                                fontSize: "$3xl",
                                "@sm": {
                                    fontSize: "$4xl",
                                }
                            }}>
                                {data.name}
                            </Text>
                            <Box css={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}>
                                <ExternalLink href={data.html_url} css={{
                                    display: "flex",
                                    alignItems: "center",
                                }}>
                                    <AiFillGithub color={"#888"} size={"28px"} />
                                </ExternalLink>
                                {data.homepage && (
                                    <ExternalLink href={data.homepage} css={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}>
                                        <BiLinkExternal color={"#888"} size={"28px"} />
                                    </ExternalLink>
                                )}
                            </Box>
                        </Box>
                        <Text size={"$xl"} weight={"semibold"} color={"#888"}>
                            {data.description}
                        </Text>
                    </Box>
                    <Divider />
                    <Box css={{
                        px: "0.75rem",
                        pb: "0.75rem",
                        "@sm": {
                            px: "1rem",
                            pb: "1rem",
                        }
                    }}>
                        <MDXRemote {...data.source} components={isDark ? ReadmeComponents.Dark : ReadmeComponents.Light} />
                    </Box>
                </Modal.Body>
            </Modal>
        </>
    )
}
