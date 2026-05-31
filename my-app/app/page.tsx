import styles from './page.module.css'
import Image from 'next/image'

// 今は使わないので一旦コメントアウト（後で復活させるときのために残しています）
// import { getNewsList } from '@/app/_libs/microcms'
// import { TOP_NEWS_LIMIT } from '@/app/_constants'

import NewsList from '@/app/_components/NewsList'
import ButtonLink from '@/app/_components/ButtonLink'

export const revalidate = 60

// ★ デザイン確認用のダミーデータ（microCMSの代わりに表示）
const DUMMY_NEWS = [
  {
    id: '1',
    title: '公式ホームページをリニューアルしました。',
    description: '弊社のコーポレートサイトを全面的に刷新いたしました。',
    content: 'ここに詳細なテキストが入ります。',
    createdAt: '2026-05-30T00:00:00.000Z',
    updatedAt: '2026-05-30T00:00:00.000Z',
    publishedAt: '2026-05-30T00:00:00.000Z',
    revisedAt: '2026-05-30T00:00:00.000Z',
    category: { id: 'news', name: 'お知らせ', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' }
  },
  {
    id: '2',
    title: '新サービス「WritePilot」のベータ版をリリース！',
    description: 'AIを活用した新しいCMSプラットフォームの開発を開始しました。',
    content: 'ここに詳細なテキストが入ります。',
    createdAt: '2026-05-25T00:00:00.000Z',
    updatedAt: '2026-05-25T00:00:00.000Z',
    publishedAt: '2026-05-25T00:00:00.000Z',
    revisedAt: '2026-05-25T00:00:00.000Z',
    category: { id: 'press', name: 'プレスリリース', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' }
  },
  {
    id: '3',
    title: 'システムメンテナンスのお知らせ（6月1日）',
    description: '深夜2:00〜4:00の間、サーバーのメンテナンスを実施します。',
    content: 'ここに詳細なテキストが入ります。',
    createdAt: '2026-05-20T00:00:00.000Z',
    updatedAt: '2026-05-20T00:00:00.000Z',
    publishedAt: '2026-05-20T00:00:00.000Z',
    revisedAt: '2026-05-20T00:00:00.000Z',
    category: { id: 'info', name: '障害・メンテナンス', createdAt: '', updatedAt: '', publishedAt: '', revisedAt: '' }
  }
];

export default async function Home() {
  // APIは叩かず、上のダミーデータをそのまま横流しする
  const contents = DUMMY_NEWS;

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt="メインビジュアル"
          width={4000}
          height={1200}
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        {/* ダミーデータをコンポーネントに渡す */}
        <NewsList news={contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  )
}