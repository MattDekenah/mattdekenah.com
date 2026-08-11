import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Free-text page copy — the hero blurb and the professional profile.
// Each entry's markdown body is rendered as-is.
const site = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/site" }),
  schema: z.object({
    interests: z.string().optional(),
  }),
});

// One entry per role. `order` drives the sequence on the page — it is explicit
// rather than date-derived because the original site lists Pain Concern (a
// concurrent role) after NHS Lothian rather than in strict date order.
const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    company: z.string(),
    dates: z.string(),
    location: z.string(),
    logo: z.string().optional(),
    logoAlt: z.string().optional(),
    responsibilities: z.array(z.string()).default([]),
    technologies: z.string().optional(),
    achievements: z.array(z.string()).default([]),
  }),
});

// One entry per institution. Each bullet carries its own icon so the
// trophy/book/clock/users markers from the original are preserved.
const educationBullet = z.object({
  icon: z
    .enum(["trophy", "book", "clock", "users"])
    .default("trophy"),
  text: z.string(),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
  schema: z.object({
    order: z.number(),
    institution: z.string(),
    qualification: z.string(),
    dates: z.string(),
    location: z.string(),
    logo: z.string().optional(),
    logoAlt: z.string().optional(),
    bullets: z.array(educationBullet).default([]),
  }),
});

export const collections = { site, experience, education };
