import "@/styles/globals.css";
import {Metadata} from "next";
import {Providers} from "./providers";
import {Navbar, NavbarBrand} from "@nextui-org/react";

export const metadata: Metadata = {
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({children,}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="zh" suppressHydrationWarning>
        <head>
            <title>Next Server Monitor</title>
        </head>
        <body>
        <Providers>
            <Navbar isBordered >
                <NavbarBrand>
                    Next Server Monitor
                </NavbarBrand>
            </Navbar>
            {children}
        </Providers>
        </body>
        </html>
    );
}
