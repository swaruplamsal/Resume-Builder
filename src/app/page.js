import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-20 pb-28">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-8">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Fast & Free Resume Builder
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-text-heading tracking-tight leading-tight mb-6">
              Build a stunning resume{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                in minutes
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-10 max-w-2xl mx-auto">
              Create professional, ATS-friendly resumes with our easy-to-use
              builder. Fill in your details, preview instantly, and download as
              PDF.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/builder"
                className="px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-primary to-primary-hover rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              >
                Start Building
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
              Everything you need
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Simple tools to help you create the perfect resume for any
              opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl border border-border bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up delay-100">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">
                Easy Editor
              </h3>
              <p className="text-text-muted leading-relaxed">
                Simple form-based editor. Just fill in your details and watch
                your resume come to life.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl border border-border bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up delay-200">
              <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">
                Live Preview
              </h3>
              <p className="text-text-muted leading-relaxed">
                See changes in real-time as you type. What you see is exactly
                what you get.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl border border-border bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up delay-300">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">
                PDF Download
              </h3>
              <p className="text-text-muted leading-relaxed">
                Download your finished resume as a clean, professional PDF ready
                to send.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
              How it works
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Three simple steps to your professional resume.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Fill in Details",
                desc: "Enter your personal info, education, and skills in our guided form.",
              },
              {
                step: "02",
                title: "Preview Resume",
                desc: "See a live preview of your resume update as you fill in each field.",
              },
              {
                step: "03",
                title: "Download PDF",
                desc: "Happy with the result? Download your resume as a polished PDF.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-text-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2cpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to build your resume?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
                It only takes a few minutes. Start now and land your dream
                opportunity.
              </p>
              <Link
                href="/builder"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-primary bg-white rounded-xl hover:bg-surface-hover transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get Started Free
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
