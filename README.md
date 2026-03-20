# Grad2Office Website

From Graduation to Corporate Confidence.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Blog**: Markdown files with gray-matter + remark
- **Deployment**: Vercel (free plan)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Blog Posts

Blog posts are written in Markdown and stored in `content/blog/`.

### Adding a New Blog Post

1. Add your blog image to `public/blog/`.
   Example: `public/blog/my-post-cover.png`
2. Create a new `.md` file in `content/blog/`
3. Add frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2026-03-20"
excerpt: "A brief summary of the post."
author: "Smitha"
tags: ["Tag1", "Tag2"]
image: "/blog/my-post-cover.png"
imageAlt: "A descriptive alt text for the blog cover image"
---

Your content here...
```

4. Write your article content in Markdown. If you want an image inside the article body as well, use standard Markdown image syntax:

```markdown
![A descriptive alt text](/blog/my-post-cover.png)
```

5. The post will automatically appear on the `/blog` page, and the `image` frontmatter will be used as the featured image on the listing and blog detail page.

### Blog Image Notes

- Store blog images inside `public/blog/`.
- Use a wide cover image if possible. `1600x900` works well for featured cards and article headers.
- Keep `imageAlt` descriptive so the image is accessible.

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub
3. Click "Import Project" and select this repository
4. Vercel will auto-detect Next.js — click "Deploy"
5. Your site will be live at `your-project.vercel.app`

### Custom Domain (Optional)

In Vercel dashboard > Settings > Domains, add your custom domain.

## Project Structure

```
src/
  app/
    page.tsx          # Home page
    about/page.tsx    # About Smitha
    programs/page.tsx # Programs details
    contact/page.tsx  # Contact form
    blog/
      page.tsx        # Blog listing
      [slug]/page.tsx # Individual blog post
    layout.tsx        # Root layout (header + footer)
    globals.css       # Global styles + Tailwind
  components/
    Header.tsx        # Navigation bar
    Footer.tsx        # Site footer
  lib/
    blog.ts           # Markdown parsing utilities
content/
  blog/               # Markdown blog posts go here
    *.md
public/
  blog/               # Blog cover images referenced from markdown/frontmatter
    *
```
