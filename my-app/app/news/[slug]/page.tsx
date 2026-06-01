import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Article from '@/app/_components/Article';
import styles from './page.module.css';

// microCMSからデータを取得する関数をインポート
import { getNewsDetail } from '@/app/_libs/microcms';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ dk?: string }>;
};

// メタデータをmicroCMSのタイトルと連動させる（Next.js 16仕様）
export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  try {
    const data = await getNewsDetail(resolvedParams.slug, {
      draftKey: resolvedSearchParams.dk,
    });
    return {
      title: `${data.title} | SIMPLE`,
      description: data.description,
    };
  } catch {
    return {
      title: 'ニュース記事 | SIMPLE',
    };
  }
}

export default async function Page({ params, searchParams }: Props) {
  // 1. Next.js 16 の仕様に従い、Promise を await で展開
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  // 2. URLの末尾（slug）を使って、microCMSからリアルタイムに記事データを取得
  let data;
  try {
    data = await getNewsDetail(resolvedParams.slug, {
      draftKey: resolvedSearchParams.dk, // 下書きプレビュー用のキー
    });
  } catch (error) {
    console.error('microCMSからのデータ取得に失敗しました:', error);
    // 該当する記事がない、または通信エラーの場合は404ページへ飛ばす
    notFound();
  }

  return (
    <div className={styles.container}>
      {/* 
        microCMSから取得した本物のデータ（タイトル「1」、中身「1」など）が
        そのままArticleコンポーネントに渡り、画面に反映されます！
      */}
      <Article data={data} />
    </div>
  );
}