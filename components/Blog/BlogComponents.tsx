import { Code, Divider, Text, Link, styled } from "@nextui-org/react";
import { Box } from "components/UI/Box";

const customLink = (props: any) => {
    const href = props.href;

    if (href.startsWith('/')) {
        return (
            <Link href={href} {...props}>
                {props.children}
            </Link>
        );
    }

    if (href.startsWith('#')) {
        return <a {...props} />;
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

const Image = styled("img", {
    height: "auto",
    width: "auto"
});

const MDXDarkComponents = {
    p: (props: any) => (
        <Text {...props} css={{
            letterSpacing: "0px",
            color: "#FFF"
        }} />
    ),
    code: (props: any) => (
        <>
            <Code {...props} css={{
                bg: "#111",
                color: "#FFF",
                fontFamily: "JetBrains Mono",
                px: typeof props.children === 'string' || props.children instanceof String ? "0.25rem" : "0",
            }} />
        </>
    ),
    pre: (props: any) => (
        <>
            <Box {...props} css={{
                padding: "0.75rem",
                margin: "0.5rem 0",
                bg: "#111",
                borderRadius: "0.5rem",
                fontFamily: "JetBrains Mono"
            }} />
        </>
    ),
    blockquote: (props: any) => (
        <>
            <Box {...props} css={{
                padding: "0.5rem",
                margin: "1rem 0",
                marginLeft: "0.5rem",
                bg: "#111",
                borderLeft: "4px solid #fff",
                fontStyle: "italic"
            }} />
        </>
    ),
    img: (props: any) => (
        <>
            <Box css={{
                width: "auto",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                my: "1rem",
            }}>
                <Image src={props.src} alt={props.alt} css={{
                    border: "1px",
                    borderColor: "rgba(255, 255, 255, 0.15)",
                    borderStyle: "solid",
                    borderRadius: "14px"
                }} />
            </Box>
        </>
    ),
    ul: (props: any) => (
        <>
            <Box css={{
                pt: "0.5rem",
                ml: "0.5rem",
                pl: "1rem",
            }} {...props} />
        </>
    ),
    h1: (props: any) => (
        <Text {...props} css={{
            fontSize: "$4xl",
            fontWeight: "$bold",
            lineHeight: "1.25",
            mt: "1.5rem",
            mb: "1rem",
            "@sm": {
                fontSize: "$5xl"
            }
        }} />
    ),
    h2: (props: any) => (
        <Text {...props} css={{
            fontSize: "$3xl",
            fontWeight: "$semibold",
            lineHeight: "1.25",
            mt: "1.5rem",
            mb: "1rem",
            "@sm": {
                fontSize: "$4xl"
            }
        }} />
    ),
    h3: (props: any) => (
        <Text {...props} css={{
            fontSize: "$2xl",
            fontWeight: "$semibold",
            lineHeight: "1.25",
            mt: "1.5rem",
            mb: "1rem",
            "@sm": {
                fontSize: "$3xl"
            }
        }} />
    ),
    h4: (props: any) => (
        <Text {...props} css={{
            fontSize: "$xl",
            fontWeight: "$semibold",
            lineHeight: "1.25",
            mt: "1.5rem",
            mb: "1rem",
            "@sm": {
                fontSize: "$2xl"
            }
        }} />
    ),
    h5: (props: any) => (
        <Text {...props} css={{
            fontSize: "$lg",
            fontWeight: "$semibold",
            lineHeight: "1.25",
            mt: "1.5rem",
            mb: "1rem",
            "@sm": {
                fontSize: "$xl"
            }
        }} />
    ),
    h6: (props: any) => (
        <Text {...props} css={{
            fontSize: "$md",
            fontWeight: "$semibold",
            lineHeight: "1.25",
            mt: "1.5rem",
            mb: "1rem",
            "@sm": {
                fontSize: "$lg"
            }
        }} />
    ),
    hr: (props: any) => (
        <Divider css={{
            my: "0.75rem"
        }} {...props} />
    ),
    a: customLink,
};

const MDXLightComponents = {
    p: (props: any) => (
        <Text {...props} css={{
            letterSpacing: "0px",
            color: "#000"
        }} />
    ),
    code: (props: any) => (
        <>
            <Code {...props} css={{
                bg: "#eee",
                color: "#000",
                fontFamily: "JetBrains Mono",
                px: typeof props.children === 'string' || props.children instanceof String ? "0.25rem" : "0",
            }} />
        </>
    ),
    pre: (props: any) => (
        <>
            <Box {...props} css={{
                padding: "0.75rem",
                margin: "0.5rem 0",
                bg: "#eee",
                borderRadius: "0.5rem",
                fontFamily: "JetBrains Mono"
            }} />
        </>
    ),
    blockquote: (props: any) => (
        <>
            <Box {...props} css={{
                padding: "0.5rem",
                margin: "1rem 0",
                marginLeft: "0.5rem",
                bg: "#eee",
                borderLeft: "4px solid #000",
                fontStyle: "italic"
            }} />
        </>
    ),
    img: (props: any) => (
        <>
            <Box css={{
                width: "auto",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                my: "1rem",
            }}>
                <Image src={props.src} alt={props.alt} css={{
                    border: "1px",
                    borderColor: "rgba(255, 255, 255, 0.15)",
                    borderStyle: "solid",
                    borderRadius: "14px"
                }} />
            </Box>
        </>
    ),
    ul: (props: any) => (
        <>
            <Box css={{
                pt: "0.5rem",
                ml: "0.5rem",
                pl: "1rem",
            }} {...props} />
        </>
    ),
    h1: (props: any) => (
        <Text {...props} css={{
            fontSize: "$4xl",
            fontWeight: "$bold",
            lineHeight: "1.25",
            mt: "1.5rem",
            mb: "1rem",
            "@sm": {
                fontSize: "$5xl"
            }
        }} />
    ),
    h2: (props: any) => (
        <Text {...props} css={{
            fontSize: "$3xl",
            fontWeight: "$semibold",
            lineHeight: "1.25",
            mt: "1.5rem",
            mb: "1rem",
            "@sm": {
                fontSize: "$4xl"
            }
        }} />
    ),
    h3: (props: any) => (
        <Text {...props} css={{
            fontSize: "$2xl",
            fontWeight: "$semibold",
            lineHeight: "1.25",
            mt: "1.5rem",
            mb: "1rem",
            "@sm": {
                fontSize: "$3xl"
            }
        }} />
    ),
    h4: (props: any) => (
        <Text {...props} css={{
            fontSize: "$xl",
            fontWeight: "$semibold",
            lineHeight: "1.25",
            mt: "1.5rem",
            mb: "1rem",
            "@sm": {
                fontSize: "$2xl"
            }
        }} />
    ),
    h5: (props: any) => (
        <Text {...props} css={{
            fontSize: "$lg",
            fontWeight: "$semibold",
            lineHeight: "1.25",
            mt: "1.5rem",
            mb: "1rem",
            "@sm": {
                fontSize: "$xl"
            }
        }} />
    ),
    h6: (props: any) => (
        <Text {...props} css={{
            fontSize: "$md",
            fontWeight: "$semibold",
            lineHeight: "1.25",
            mt: "1.5rem",
            mb: "1rem",
            "@sm": {
                fontSize: "$lg"
            }
        }} />
    ),
    hr: (props: any) => (
        <Divider css={{
            my: "0.75rem"
        }} {...props} />
    ),
    a: customLink,
};

const BlogComponents = {
    Dark: MDXDarkComponents,
    Light: MDXLightComponents,
}

export default BlogComponents;