import { Link, LinkProps } from "@nextui-org/react";
import React from "react";

export default function ExternalLink({ children, ...props }: LinkProps) {
    return (
        <>
            <Link target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </Link>
        </>
    )
}