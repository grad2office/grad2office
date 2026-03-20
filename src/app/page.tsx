import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              From Graduation to Corporate Confidence
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Bridge the Gap Between{" "}
              <span className="text-accent">Academic Knowledge</span> &amp;
              Professional Success
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Most graduates focus on what they know. We teach you how to apply
              it in a high-pressure corporate environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
              >
                View Our Programs
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Corporate Roadmap */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              The Corporate Roadmap
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Your journey from academic success to corporate excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Academic Success",
                desc: "You have got the degree. You have the technical foundation and domain expertise.",
                icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
              },
              {
                step: "02",
                title: "The Transition",
                desc: "We help you unlearn student habits and build a corporate mindset that gets you noticed.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                step: "03",
                title: "Corporate Ready",
                desc: "Master communication, visibility, and professional etiquette to thrive from Day 1.",
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-surface rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl font-bold text-accent/20 mb-4">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Specialized Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "College Workshops",
                desc: "On-site immersive experiences to prepare graduating batches for Day 1 on the job. Real scenarios, real skills.",
                cta: "For Institutions",
                href: "/contact",
              },
              {
                title: "1-on-1 Mentoring",
                desc: "Personalized sessions with Smitha to solve specific career hurdles and growth blocks. Tailored advice for your journey.",
                cta: "Book a Consult",
                href: "/contact",
              },
            ].map((program) => (
              <div
                key={program.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <h3 className="text-xl font-bold text-primary mb-3">
                  {program.title}
                </h3>
                <p className="text-muted flex-1 mb-6 leading-relaxed">{program.desc}</p>
                <Link
                  href={program.href}
                  className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
                >
                  {program.cta}
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Meet Smitha
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Smitha is a seasoned corporate leader with over 24 years of
                experience in the technology industry, having built and led
                high-performing teams across complex, fast-paced business
                environments.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                After years of mentoring young professionals inside the corporate
                world, she recognized a powerful gap — graduates were entering the
                workplace with degrees, but without the practical skills,
                confidence, and mindset needed to succeed.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
              >
                Read More About Smitha
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-surface rounded-2xl p-8">
              <blockquote className="text-lg italic text-primary leading-relaxed">
                &ldquo;I am here to ensure that no graduate enters the workforce
                feeling invisible. Your career trajectory is decided in your
                first 90 days — let us make them count.&rdquo;
              </blockquote>
              <p className="mt-4 font-semibold text-accent">— Smitha</p>
              <p className="text-sm text-muted">Founder, Grad2Office</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Bridge the Gap?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us today to start your journey from graduation to corporate
            confidence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </>
  );
}
