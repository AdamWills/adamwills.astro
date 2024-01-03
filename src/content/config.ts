// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const listCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.coerce.string()),
    updated: z.date(),
  }),
});

const articleCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    updated: z.date(),
  }),
});

export const collections = {
  lists: listCollection,
  articles: articleCollection,
};
