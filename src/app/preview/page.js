import Link from "next/link";

export default function Preview() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="text-center p-12">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary-light/50 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-primary/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-text-heading mb-2">
          Preview Page
        </h3>
        <p className="text-text-muted text-sm max-w-xs mb-6">
          Use the builder to create and preview your resume.
        </p>
        <Link
          href="/builder"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary to-primary-hover rounded-xl hover:shadow-lg transition-all duration-300"
        >
          Go to Builder
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
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
