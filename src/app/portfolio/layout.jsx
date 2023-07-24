import React from "react";
import styles from "./page.module.scss";

export const metadata = {
    title: "作品 | 墨綠B.G.",
    description: "作品頁面",
};

const Layout = ({ children }) => {
    return (
        <div>
            <h1 className={styles.mainTitle}>我的作品</h1>
            {children}
        </div>
    );
};

export default Layout;
