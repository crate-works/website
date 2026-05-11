import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts } from '../lib/collections';

export const GET = async (context: APIContext) => {
  const posts = await getPublishedPosts();

  return rss({
    title: 'CrateWorks',
    description: 'Updates from the CrateWorks team — announcements, design notes, release news.',
    site: context.site ?? 'https://crate-works.org',
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      author: post.data.author,
      categories: post.data.tags,
      link: `/blog/${post.id}`,
    })),
    customData: '<language>en-au</language>',
  });
};
