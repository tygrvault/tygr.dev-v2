import { Button, Image, Link, Modal, Navbar, Text, useTheme } from "@nextui-org/react";
import React from "react";
import { BsFillTvFill } from "react-icons/bs";

export default function Nav() {
    const { type, isDark } = useTheme();

    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    return (
        <>
            <Navbar isBordered variant="floating" css={{
                backgroundColor: type === "dark" ? "$dark" : "$light",
            }}>
                <Navbar.Toggle showIn="xs" />
                <Navbar.Brand>
                    <Link href="/">
                        <Image src={`/assets/tygerxqt/${type}.png`} alt="logo" width="36px" height="36px" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Content
                    enableCursorHighlight
                    activeColor="primary"
                    hideIn="xs"
                >
                    <Navbar.Link href="/">
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/projects">
                        Projects
                    </Navbar.Link>
                    <Navbar.Link href="/blog">
                        Blog
                    </Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    {/* Disabled to flashing bug */}
                    {/* <ThemeSwitch /> */}

                    <Button onPress={handler} css={{
                        background: isDark ? "white" : "black",
                        color: isDark ? "black" : "white",
                        minWidth: "24px",
                        minHeight: "24px",
                        padding: "0.875rem",
                    }}>
                        <BsFillTvFill />
                    </Button>
                    <Modal
                        closeButton
                        aria-labelledby="modal-title"
                        open={visible}
                        onClose={closeHandler}
                        css={{
                            margin: "0.75rem",
                        }}
                    >
                        <Modal.Header>
                            <Text h3>Head&apos;s up!</Text>
                        </Modal.Header>
                        <Modal.Body>
                            <Text size="$xl" weight="normal" color={"#888"} css={{
                                lineHeight: "1.25",
                                textAlign: "center",
                            }}>
                                This feature has been temporarily disabled due to a flashing bug that could cause harm to users with photosensitive epilepsy. <br /> <br />
                                I am working on a fix and will re-enable this feature as soon as possible. <br /> <br />
                                The site will use your system theme by default.
                            </Text>
                        </Modal.Body>
                        <Modal.Footer />
                    </Modal>

                    {/* Logged out */}
                    {/* <Tooltip content="Login to Pixel" placement="bottom" color="invert" css={{
                        alignContent: "center",
                    }}>
                        <Button ripple={false} css={{
                            background: isDark ? "white" : "black",
                            color: isDark ? "black" : "white",
                            minWidth: "24px",
                            minHeight: "24px",
                        }}>
                            <BsPersonFill />
                        </Button>
                    </Tooltip> */}

                    {/* Logged in */}
                    {/* <Dropdown placement="bottom-right">
                        <Navbar.Item>
                            <Dropdown.Trigger>
                                <Avatar
                                    bordered
                                    as="button"
                                    color="primary"
                                    size="md"
                                    src="https://avatars.githubusercontent.com/u/59417077?v=4"
                                />
                            </Dropdown.Trigger>
                        </Navbar.Item>
                        <Dropdown.Menu
                            aria-label="User menu actions"
                            color="primary"
                            onAction={(actionKey) => console.log({ actionKey })}
                        >
                            <Dropdown.Item key="profile">
                                Profile
                            </Dropdown.Item>
                            <Dropdown.Item key="account">
                                Account
                            </Dropdown.Item>
                            <Dropdown.Item key="configurations" withDivider>
                                Pixel Subscription
                            </Dropdown.Item>
                            <Dropdown.Item key="analytics" withDivider>
                                Privacy & Safety
                            </Dropdown.Item>
                            <Dropdown.Item key="system">
                                Connections
                            </Dropdown.Item>
                            <Dropdown.Item key="help_and_feedback" withDivider>
                                Help & Feedback
                            </Dropdown.Item>
                            <Dropdown.Item key="logout" withDivider color="error">
                                Log Out
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                </Navbar.Content>
                <Navbar.Collapse>
                    <Navbar.CollapseItem
                        key={"home"}
                        activeColor="primary"
                    >
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href="/"
                        >
                            Home
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem
                        key={"projects"}
                        activeColor="primary"
                    >
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href="/projects"
                        >
                            Projects
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem
                        key={"blog"}
                        activeColor="primary"
                    >
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href="/blog"
                        >
                            Blog
                        </Link>
                    </Navbar.CollapseItem>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}