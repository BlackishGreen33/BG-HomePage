import React from "react";
import Image from "next/image";

import styles from "./page.module.scss";
import Button from "@/components/Button/Button";

export const metadata = {
    title: "關於 | 墨綠B.G.",
    description: "關於頁面",
};

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    fill={true}
                    alt=""
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>軟工黑魔法</h1>
                    <h2 className={styles.imgDesc}>
                        手工打造美妙的數位媒體體驗
                    </h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>蛤 我誰?</h1>
                    <p className={styles.desc}>
                        一個在學的軟體工程師。目前任職武漢市擇木而犀網路科技有限公司Web前端組，
                        同時也是 i
                        華大網路文化工作室網路技術部門部長。主要技術棧是 React
                        框架， 目前正在學習 Next.js、Sass、TailwindCSS 與
                        TypeScript。 對 Node.js 有基本的了解，能使用它寫後端 API
                        ； 對 Vue.js 還沒有太深接觸， 對 React Native
                        有初步的了解。
                        <br />
                        <br />
                        平常會在 Facebook 發一些廢文，有興趣可以看看。 YouTube
                        頻道上偶爾也會上一些廢片 ，
                        Twitch也不定時會開台，歡迎追隨。
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>我能做甚麼?</h1>
                    <p className={styles.desc}>
                        目前不定時可接案，畢竟一邊還在學習。
                        <br />
                        <br /> - 動態網頁
                        <br />
                        <br /> - 瀏覽器插件
                        <br />
                        <br /> - 小程序
                        <br />
                        <br /> - 移動端應用
                    </p>
                    <Button url="/contact" text="聯絡我" />
                </div>
            </div>
        </div>
    );
};

export default About;
