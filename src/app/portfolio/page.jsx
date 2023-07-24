import React from "react";
import Link from "next/link";

import styles from "./page.module.scss";

const Portfolio = () => {
	return (
		<div>
			<h1 className={styles.selectTitle}>選擇類別</h1>
			<div className={styles.items}>
				<Link href="/portfolio/illustrations" className={styles.item}>
					<span className={styles.title}>圖像</span>
				</Link>
				<Link href="/portfolio/websites" className={styles.item}>
					<span className={styles.title}>網頁</span>
				</Link>
				<Link href="/portfolio/application" className={styles.item}>
					<span className={styles.title}>應用程式</span>
				</Link>
			</div>
		</div>
	);
};

export default Portfolio;
