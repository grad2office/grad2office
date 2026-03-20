import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatBlogDate, getAllPosts, getPostBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: post.image
      ? {
          images: [
            {
              url: post.image,
              alt: post.imageAlt || post.title,
            },
          ],
        }
      : undefined,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllPosts().filter((entry) => entry.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,168,56,0.22),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_30%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors text-sm mb-6"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Blog
          </Link>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent mb-4">
                Grad2Office Journal
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {post.title}
              </h1>
              <p className="mt-6 text-lg md:text-xl leading-8 text-gray-200">
                {post.excerpt}
              </p>

              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <aside className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm shadow-[0_24px_80px_-48px_rgba(0,0,0,0.45)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Article details
              </p>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-gray-300">Written by</dt>
                  <dd className="mt-1 text-base font-semibold text-white">{post.author}</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Published</dt>
                  <dd className="mt-1 text-base font-semibold text-white">
                    {formatBlogDate(post.date)}
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-300">Reading time</dt>
                  <dd className="mt-1 text-base font-semibold text-white">{post.readingTime}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fcfaf6] py-16 md:py-20">
        <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(30,58,95,0.08),transparent)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_280px] xl:items-start">
            <article className="rounded-[2rem] bg-white px-6 py-10 shadow-[0_30px_100px_-55px_rgba(21,42,69,0.55)] ring-1 ring-primary/10 md:px-12 md:py-14">
              {post.image && (
                <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-[1.75rem] bg-surface shadow-[0_24px_80px_-48px_rgba(21,42,69,0.45)]">
                  <Image
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 70vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div
                className="blog-prose"
                dangerouslySetInnerHTML={{ __html: post.htmlContent || "" }}
              />
            </article>

            <aside className="rounded-[1.75rem] bg-primary px-6 py-8 text-white shadow-[0_24px_80px_-48px_rgba(21,42,69,0.8)] xl:sticky xl:top-24">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Need help applying this?
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-tight">
                Turn these ideas into a practical career plan.
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-200">
                Smitha works with graduates and early-career professionals on
                communication, workplace visibility, and smoother first-job
                transitions.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary-dark hover:bg-accent-light transition-colors"
              >
                Book a conversation
              </Link>
            </aside>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent mb-3">
                    Continue reading
                  </p>
                  <h2 className="text-3xl font-bold text-primary">
                    More guidance from the Grad2Office journal.
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  View all articles
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {relatedPosts.map((entry) => (
                  <article
                    key={entry.slug}
                    className="group flex h-full flex-col rounded-[1.75rem] bg-white p-8 shadow-[0_24px_80px_-48px_rgba(21,42,69,0.55)] ring-1 ring-primary/10"
                  >
                    {entry.image && (
                      <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-[1.4rem] bg-surface">
                        <Image
                          src={entry.image}
                          alt={entry.imageAlt || entry.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                      <time dateTime={entry.date}>{formatBlogDate(entry.date)}</time>
                      <span>&middot;</span>
                      <span>{entry.readingTime}</span>
                    </div>
                    <Link href={"/blog/" + entry.slug} className="mt-4 block">
                      <h3 className="text-2xl font-bold text-primary leading-snug group-hover:text-accent transition-colors">
                        {entry.title}
                      </h3>
                    </Link>
                    <p className="mt-4 text-muted leading-8">{entry.excerpt}</p>
                    <Link
                      href={"/blog/" + entry.slug}
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
            </div>
          )}
        </div>
      </section>
    </>
  );
}
