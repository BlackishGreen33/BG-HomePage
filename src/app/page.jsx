import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>黑魔法研究室</h1>
                <p className={styles.desc}>
                    這個網站主要紀錄一些我的技術研究、以及解決問題時的過程。
                    偶爾也會寫一些東西的使用心得與分享。
                    如果這些文章對你有任何幫助，歡迎在附上原始連結的情況下，轉載到其他地方。
                </p>
                <Button url="/portfolio" text="看看我的作品" />
            </div>
            <div className={styles.item}>
                <Image src={Hero} alt="" className={styles.img} />
            </div>
        </div>
    );
}
