import { z, defineCollection } from "astro:content";

const blog = defineCollection({
    // type: 'content',
    schema: z.object({
        title: z.string().max(50,"Máximo de caracteres para el título"),
        description: z.string(),
        date: z.date(),
        active: z.boolean(),
        author: z.string(),
        image: z.string().optional(),
        category: z.string(),
        // TODO: tags: z.array(z.string()),
    }),
});

export const collections = { blog };
