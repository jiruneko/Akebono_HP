import Image from 'next/image';
import { getMembersList } from '@/app/_libs/microcms';
import { MEMBERS_LIST_LIMIT } from '@/app/_constants';
import styles from './page.module.css';

export default async function Page() {
  const data = await getMembersList({ limit: MEMBERS_LIST_LIMIT });

  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul className={styles.list}>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.item}>
              <div className={styles.imageWrap}>
                <Image
                  src={member.image.url}
                  alt={member.name}
                  width={member.image.width}
                  height={member.image.height}
                  className={styles.image}
                />
              </div>

              <div className={styles.body}>
                <p className={styles.position}>{member.position}</p>
                <h2 className={styles.name}>{member.name}</h2>
                <p className={styles.profile}>{member.profile}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}