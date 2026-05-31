import Image from "next/image";
import Category from "../Category";
import Date from "../Date";
import styles from "./index.module.css";
import { News } from "@/app/_libs/microcms";
import Link from "next/link";

// type News = {
//     id: string;
//     title: string;
//     category: {
//         name: string;
//     };
//     publishedAt: string;
//     createdAt: string;
// };

type Props = {
    news: News[];
};

export default function NewsList({ news }: Props) {
    if (news.length === 0) {
    }
    return (
        <ul>
            {news.map((article) => (
                <li key={article.id} className={styles.list}>
                    <Link href={`/news/${article.id}`} className={styles.link}>
                        <Image
                        className={styles.image}
                        src="/no-image.png"
                        alt="No Image"
                        width={1200}
                        height={630}
                        />
                        <dl className={styles.content}>
                            <dt className={styles.title}>{article.title}</dt>
                            <dd className={styles.meta}>
                            {/* <span className={styles.tag}>{article.category.name}</span>
                            <span className={styles.data}>
                                <Image
                                src="./clock.svg"
                                alt=""
                                width={16}
                                height={16}
                                priority
                                />
                                {article.publishedAt}
                            </span> */}
                            <Category category={article.category} />
                            <Date date={article.publishedAt ?? article.createdAt} />
                            </dd>
                        </dl>
                        </Link>
                </li>
            ))}
        </ul>
    )
}