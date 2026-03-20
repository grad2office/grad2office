import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Grad2Office. Start your journey from graduation to corporate confidence.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Ready to start your journey? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Let us Connect
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                Whether you are a student preparing for your first job, a college looking
                to empower graduating batches, or an early-career professional seeking
                guidance — we are here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <a href="mailto:grad2office@gmail.com" className="text-muted hover:text-accent transition-colors">
                      grad2office@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Instagram</h3>
                    <a
                      href="https://instagram.com/grad2office"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors"
                    >
                      @grad2office
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-surface rounded-2xl p-8">
                <h3 className="font-semibold text-primary mb-3">For Institutions</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Looking to bring Grad2Office workshops to your college or university?
                  Email us with your institution details and batch size, and we will
                  create a customized proposal for you.
                </p>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent mb-4">
                Reach Out Directly
              </p>
              <p className="text-muted leading-relaxed mb-8">
                We are keeping communication simple at the moment. Email us
                directly with a short note about what you need, and we will take
                it from there.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Your name and background",
                  "Whether you are a student, early-career professional, or institution",
                  "What kind of support or workshop you are looking for",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/15 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm leading-7 text-muted">{item}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-white p-6 ring-1 ring-primary/10">
                <h3 className="font-semibold text-primary mb-2">Best way to contact us</h3>
                <a
                  href="mailto:grad2office@gmail.com"
                  className="inline-flex items-center text-lg font-semibold text-primary hover:text-accent transition-colors"
                >
                  grad2office@gmail.com
                </a>
                <p className="text-sm text-muted leading-relaxed mt-3">
                  For workshops, include your institution name, graduating batch
                  size, and preferred timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
