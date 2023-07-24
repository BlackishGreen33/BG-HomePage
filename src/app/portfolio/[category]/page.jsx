import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import styles from "./page.module.scss";
import Button from "@/components/Button/Button";
import { items } from "./data.js";

const getData = (cat) => {
    const data = items[cat];

    if (data) return data;

    return notFound();
};

const Category = ({ params }) => {
    const data = getData(params.category);

    let title;
    if (params.category === "illustrations") title = "圖像";
    if (params.category === "websites") title = "網頁";
    if (params.category === "application") title = "應用程式";

    return (
        <div>
            <h1 className={styles.catTitle}>{title}</h1>

            {data.map((item) => (
                <div className={styles.item} key={item.id}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                        <Button text="查看更多" url="#" />
                    </div>
                    <div className={styles.imgContainer}>
                        <Image
                            className={styles.img}
                            fill={true}
                            src={item.image}
                            alt=""
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Category;
