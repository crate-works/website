import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const governance = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/governance' }),
  schema: z.object({
    title: z.string(),
    order: z.number().int().nonnegative().optional(),
    description: z.string().optional(),
  }),
});

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    summary: z.string(),
    repo: z.url(),
    site: z.url().optional(),
    status: z.enum(['stable', 'beta', 'preview']).optional(),
    order: z.number().int().nonnegative().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('CrateWorks'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { governance, tools, posts };
