import { useTheme as useNextTheme } from 'next-themes'
import { Button, Dropdown, useTheme } from '@nextui-org/react'
import { BsSunFill, BsMoonFill, BsFillTvFill } from "react-icons/bs";

export default function ThemeSwitch() {
    const { setTheme, theme } = useNextTheme();
    const { isDark } = useTheme();

    const Icon = () => {
        switch (theme) {
            case "dark":
                return <BsMoonFill />
            case "light":
                return <BsSunFill />
            case "system":
                return <BsFillTvFill />
            default:
                return <BsFillTvFill />
        }
    }

    return (
        <>
            <Dropdown>
                <Dropdown.Trigger css={{
                    background: isDark ? "white" : "black",
                    color: isDark ? "black" : "white",
                    minWidth: "24px",
                    minHeight: "24px",
                    padding: "0.875rem",
                }}>
                    <Button>
                        <Icon />
                    </Button>
                </Dropdown.Trigger>
                <Dropdown.Menu
                    aria-label="Theme Menu"
                    onAction={(key) => {
                        setTheme(key as string);
                    }}
                    css={{
                        minWidth: "24px",
                    }}
                >
                    <Dropdown.Item key="dark">
                        <BsMoonFill />
                    </Dropdown.Item>
                    <Dropdown.Item key="light">
                        <BsSunFill />
                    </Dropdown.Item>
                    <Dropdown.Item key="system">
                        <BsFillTvFill />
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}