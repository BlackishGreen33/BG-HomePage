"use client";

import React from "react";
import Link from "next/link";

import styles from "./navbar.module.scss";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
    {
        id: 1,
        title: "主頁",
        url: "/",
    },
    {
        id: 2,
        title: "作品",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "博客",
        url: "https://blackishgreen.vercel.app/",
    },
    {
        id: 4,
        title: "關於",
        url: "/about",
    },
    {
        id: 5,
        title: "聯絡",
        url: "/contact",
    },
    {
        id: 6,
        title: "控制面板",
        url: "https://bg-personalblog.sanity.studio/desk",
    },
];

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                墨綠B.G.
            </Link>
            <div className={styles.links}>
                <DarkModeToggle />
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {link.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
