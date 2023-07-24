"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import styles from "./page.module.scss";

const Register = () => {
	const [error, setError] = useState(null);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const name = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;

		try {
			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					password,
				}),
			});
			res.status === 201 && router.push("/dashboard/login?success=Account 已被創立");
		} catch (err) {
			setError(err);
			console.log(err);
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>創建帳號</h1>
			<h2 className={styles.subtitle}>請登入以查看控制面板</h2>
			<form onSubmit={handleSubmit} className={styles.form}>
				<input
					type="text"
					placeholder="使用者"
					required
					className={styles.input}
				/>
				<input
					type="text"
					placeholder="電子郵件"
					required
					className={styles.input}
				/>
				<input
					type="password"
					placeholder="密碼"
					required
					className={styles.input}
				/>
				<button className={styles.button}>註冊</button>
				{error && "Something went wrong!"}
			</form>
			<span className={styles.or}>- 或者 -</span>
			<Link className={styles.link} href="/dashboard/login">
				您已有帳戶？
			</Link>
		</div>
	);
};

export default Register;
