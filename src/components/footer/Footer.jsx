import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>©2023 墨綠B.G. 版權所有</div>
            <div className={styles.social}>
                <Link href="https://www.facebook.com/blackishgreen.su">
                    <Image
                        src="/1.png"
                        width={15}
                        height={15}
                        className={styles.icon}
                        alt="Facebook"
                    />
                </Link>
                <Link href="https://instagram.com/blackish_green03?igshid=MzNlNGNkZWQ4Mg==">
                    <Image
                        src="/2.png"
                        width={15}
                        height={15}
                        className={styles.icon}
                        alt="Instagram"
                    />
                </Link>
                <Link href="https://twitter.com/BG64990782">
                    <Image
                        src="/3.png"
                        width={15}
                        height={15}
                        className={styles.icon}
                        alt="Twitter"
                    />
                </Link>
                <Link href="https://www.youtube.com/channel/UC5oJQszET21NGInQ1rJiF3g">
                    <Image
                        src="/4.png"
                        width={15}
                        height={15}
                        className={styles.icon}
                        alt="YouTube"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Footer;
