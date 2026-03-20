import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatBlogDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Career insights, corporate tips, and professional development advice from Grad2Office.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featuredPost, ...otherPosts] = posts;
  const topicCount = new Set(posts.flatMap((post) => post.tags)).size;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,168,56,0.2),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_30%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent mb-4">
              Grad2Office Journal
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Career notes for the first years that matter.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Practical guidance on workplace communication, early-career momentum,
              and the unspoken rules graduates usually learn too late.
            </p>
          </div>

          {featuredPost && (
            <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,0.55fr)]">
              <article className="rounded-[2rem] border border-white/15 bg-white/10 p-8 md:p-10 backdrop-blur-sm shadow-[0_24px_80px_-40px_rgba(0,0,0,0.55)]">
                {featuredPost.image && (
                  <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-white/10">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.imageAlt || featuredPost.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-200">
                  <span className="rounded-full bg-white/10 px-3 py-1 font-medium text-white">
                    Featured article
                  </span>
                  <time dateTime={featuredPost.date}>
                    {formatBlogDate(featuredPost.date)}
                  </time>
                  <span>&middot;</span>
                  <span>{featuredPost.readingTime}</span>
                </div>

                <Link href={"/blog/" + featuredPost.slug} className="group block mt-6">
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-100">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={"/blog/" + featuredPost.slug}
                  className="mt-8 inline-flex items-center text-sm font-semibold text-white hover:text-accent transition-colors"
                >
                  Read featured article
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>

              <aside className="rounded-[2rem] border border-white/15 bg-primary-dark/35 p-6 md:p-8 backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                  Why this blog exists
                </p>
                <p className="mt-4 text-sm leading-7 text-gray-200">
                  This is where Grad2Office turns lived corporate experience into
                  practical, readable guidance for graduates and early-career
                  professionals.
                </p>

                <dl className="mt-8 space-y-5 border-t border-white/10 pt-6">
                  <div className="flex items-end justify-between gap-4">
                    <dt className="text-sm text-gray-300">Articles</dt>
                    <dd className="text-3xl font-semibold text-white">{posts.length}</dd>
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <dt className="text-sm text-gray-300">Topics covered</dt>
                    <dd className="text-3xl font-semibold text-white">{topicCount}</dd>
                  </div>
                </dl>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center text-sm font-semibold text-white hover:text-accent transition-colors"
                >
                  Ask about mentoring
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </aside>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-[#faf7f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="rounded-[2rem] bg-white px-8 py-16 text-center shadow-[0_24px_80px_-48px_rgba(21,42,69,0.5)] ring-1 ring-primary/10">
              <p className="text-muted text-lg">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div>
              <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent mb-3">
                    All articles
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    Practical reads, not generic career filler.
                  </h2>
                </div>
                <p className="max-w-2xl text-sm leading-7 text-muted">
                  Every post is built to help graduates translate academic
                  performance into workplace credibility, confidence, and clearer
                  professional judgment.
                </p>
              </div>

              {otherPosts.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {otherPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="group flex h-full flex-col rounded-[1.75rem] bg-white p-8 shadow-[0_24px_80px_-48px_rgba(21,42,69,0.55)] ring-1 ring-primary/10 transition-transform hover:-translate-y-1"
                    >
                      {post.image && (
                        <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-[1.4rem] bg-surface">
                          <Image
                            src={post.image}
                            alt={post.imageAlt || post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                        <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                        <span>&middot;</span>
                        <span>{post.readingTime}</span>
                      </div>

                      <Link href={"/blog/" + post.slug} className="mt-4 block">
                        <h3 className="text-2xl font-bold text-primary leading-snug group-hover:text-accent transition-colors">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="mt-4 text-muted leading-8">{post.excerpt}</p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={"/blog/" + post.slug}
                        className="mt-auto inline-flex items-center pt-8 text-sm font-semibold text-primary group-hover:text-accent transition-colors"
                      >
                        Read article
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="rounded-[1.75rem] bg-white px-8 py-10 shadow-[0_24px_80px_-48px_rgba(21,42,69,0.55)] ring-1 ring-primary/10">
                  <p className="text-muted">
                    More articles are on the way. Start with the featured post above.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
