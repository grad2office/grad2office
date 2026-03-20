import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Smitha",
  description: "Learn about Smitha, the founder of Grad2Office, and her 24+ years of corporate leadership experience.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Smitha</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            24+ years of corporate leadership, now dedicated to empowering the next generation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted leading-relaxed mb-6">
              Smitha is a seasoned corporate leader with over 24 years of experience in the
              technology industry, having built and led high-performing teams across complex,
              fast-paced business environments.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-6">
              After years of mentoring young professionals inside the corporate world, she
              recognized a powerful gap — graduates were entering the workplace with degrees,
              but without the practical skills, confidence, and mindset needed to succeed.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-6">
              That insight led to the creation of <strong className="text-primary">Grad2Office</strong>,
              a purpose-driven initiative designed to bridge the gap between education and
              real-world corporate life.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Through mentoring, training, and real-life guidance, Smitha helps students and
              early-career professionals navigate corporate culture, communicate with confidence,
              and build careers they can be proud of.
            </p>

            <blockquote className="bg-surface border-l-4 border-accent rounded-r-xl p-8 my-10">
              <p className="text-xl italic text-primary leading-relaxed mb-4">
                &ldquo;I am here to ensure that no graduate enters the workforce feeling
                invisible. Your career trajectory is decided in your first 90 days —
                let us make them count.&rdquo;
              </p>
              <cite className="not-italic font-semibold text-accent">— Smitha, Founder of Grad2Office</cite>
            </blockquote>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-6">Her Mission</h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              Her mission is simple: to turn graduates into workplace-ready professionals
              who do not just survive — but thrive. Every program, every workshop, every
              mentoring session is designed with one goal: making you corporate-confident
              from Day 1.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-6">What Sets Her Apart</h2>
            <ul className="space-y-4 text-lg text-muted">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>24+ years leading teams at top technology companies</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Hands-on experience mentoring hundreds of early-career professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Deep understanding of what hiring managers and leaders look for</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Practical, no-fluff approach focused on real-world results</span>
              </li>
            </ul>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Work With Smitha
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
