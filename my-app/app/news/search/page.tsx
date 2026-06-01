import { getNewsList } from '@/app/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import SearchField from '@/app/_components/SearchField';

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  const keyword = params.q?.trim();

  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: keyword || undefined,
  });

  return (
    <>
      <SearchField />
      {news.length === 0 ? (
        <p style={{ marginTop: 32, color: '#2a4436', fontWeight: 700 }}>
          該当するニュースはありません。
        </p>
      ) : (
        <NewsList news={news} />
      )}
    </>
  );
}