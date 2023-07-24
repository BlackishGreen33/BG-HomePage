import React from "react";
import Image from "next/image";

import styles from "./page.module.scss";
import Button from "@/components/Button/Button";

export const metadata = {
	title: "聯絡 - 墨綠B.G.",
	description: "聯絡頁面",
};

const Contact = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>與聯絡我</h1>
			<div className={styles.content}>
				<div className={styles.imgContainer}>
					<Image
						src="/contact.png"
						alt=""
						fill={true}
						className={styles.image}
					/>
				</div>
				<form className={styles.form}>
					<input type="text" placeholder="姓名" className={styles.input} />
					<input type="text" placeholder="電子郵件" className={styles.input} />
					<textarea
						className={styles.textArea}
						placeholder="訊息"
						cols="30"
						rows="10"
					></textarea>
					<Button url="#" text="送出" />
				</form>
			</div>
		</div>
	);
};

export default Contact;
