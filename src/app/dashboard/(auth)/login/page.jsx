"use client";

import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import styles from "./page.module.scss";

const Login = ({ url }) => {
	const session = useSession();
	const router = useRouter();
	const params = useSearchParams();
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	useEffect(() => {
		setError(params.get("error"));
		setSuccess(params.get("success"));
	}, [params]);

	if (session.status === "loading") {
		return <p>載入中...</p>;
	}

	if (session.status === "authenticated") {
		router?.push("/dashboard");
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;

		signIn("credentials", {
			email,
			password,
		});
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{success ? success : "歡迎回來"}</h1>
			<h2 className={styles.subtitle}>請登入以查看控制面板</h2>

			<form onSubmit={handleSubmit} className={styles.form}>
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
				<button className={styles.button}>登入</button>
				{error && error}
			</form>
			<button
				onClick={() => {
					signIn("google");
				}}
				className={styles.button + " " + styles.google}
			>
				使用 Google 帳號登入
			</button>
			<span className={styles.or}>- 或者 -</span>
			<Link className={styles.link} href="/dashboard/register">
				新建帳號
			</Link>
			{/* <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Login with Github
      </button> */}
		</div>
	);
};

export default Login;
