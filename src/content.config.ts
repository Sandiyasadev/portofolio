import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        category: z.string(),
        date: z.string(),
        readTime: z.string(),
        featured: z.boolean().default(false),
        thumbnail: z.string().optional(),
    }),
});

const caseStudies = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
    schema: z.object({
        title: z.string(),
        industry: z.string(),
        function: z.string(),
        metric: z.string(),
        metricDetail: z.string(),
        excerpt: z.string(),
        tools: z.array(z.string()),
        thumbnail: z.string().optional(),
    }),
});

const workflows = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/workflows" }),
    schema: z.object({
        title: z.string(),
        category: z.string(),
        complexity: z.enum(['Beginner', 'Intermediate', 'Advanced']),
        description: z.string(),
        tools: z.array(z.string()),
        thumbnail: z.string().optional(),
    }),
});

const services = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        features: z.array(z.string()),
    }),
});

export const collections = { blog, caseStudies, workflows, services };
