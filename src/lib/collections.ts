import { getCollection } from 'astro:content';

type Ordered = { data: { order?: number } };
type Dated = { data: { pubDate: Date } };
type Draftable = { data: { draft?: boolean } };

export const byOrder = <T extends Ordered>(a: T, b: T): number => (a.data.order ?? Number.POSITIVE_INFINITY) - (b.data.order ?? Number.POSITIVE_INFINITY);

const byPubDateDesc = <T extends Dated>(a: T, b: T): number => b.data.pubDate.getTime() - a.data.pubDate.getTime();

const publishedOnly = <T extends Draftable>(entry: T): boolean => entry.data.draft !== true;

export const getPublishedPosts = async () => (await getCollection('posts')).filter(publishedOnly).sort(byPubDateDesc);

const postDateFmt = new Intl.DateTimeFormat('en-AU', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export const formatPostDate = (date: Date): string => postDateFmt.format(date);
