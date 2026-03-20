import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore Grad2Office programs: College Workshops and 1-on-1 Mentoring.",
};

const programs = [
  {
    title: "College Workshops",
    subtitle: "Prepare graduating batches for Day 1 on the job.",
    description:
      "On-site immersive workshop experiences designed for colleges and universities. We bring real corporate scenarios into the classroom, preparing students for what no syllabus covers — professional etiquette, workplace communication, and career strategy.",
    features: [
      "Half-day and full-day workshop formats",
      "Interactive role-playing and case studies",
      "Corporate communication masterclass",
      "Resume and LinkedIn optimization",
      "Mock interviews with real feedback",
    ],
    cta: "For Institutions",
  },
  {
    title: "1-on-1 Mentoring",
    subtitle: "Personalized guidance for your unique career path.",
    description:
      "Personalized sessions with Smitha to solve specific career hurdles and growth blocks. Whether you are preparing for your first interview, struggling in a new role, or planning your next career move, get tailored advice that works.",
    features: [
      "60-minute deep-dive sessions",
      "Customized career action plan",
      "Communication and confidence coaching",
      "Salary negotiation and review preparation",
      "Follow-up support via email",
    ],
    cta: "Book a Consult",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Structured programs designed to transform graduates into corporate-ready professionals.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {programs.map((program, i) => (
            <div
              key={program.title}
              className={"flex flex-col md:flex-row gap-10 items-start " + (i % 2 === 1 ? "md:flex-row-reverse" : "")}
            >
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-primary mb-2">
                  {program.title}
                </h2>
                <p className="text-accent font-medium mb-4">{program.subtitle}</p>
                <p className="text-muted leading-relaxed mb-6">
                  {program.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  {program.cta}
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="flex-1 bg-surface rounded-2xl p-8">
                <h3 className="font-semibold text-primary mb-4">What You Get</h3>
                <ul className="space-y-3">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-muted">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
