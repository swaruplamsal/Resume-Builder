"use client";
import { useForm } from "react-hook-form";

export default function ResumeForm({ setData }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => setData(data);

  return (
    <div className="w-full max-w-md animate-fade-in-up">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text-heading mb-2">
          Build Your Resume
        </h2>
        <p className="text-text-muted text-sm">
          Fill in your details below. Your resume will update in real-time.
        </p>
      </div>

      {/* Purpose Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-text-heading mb-2">
          Resume Purpose
        </label>
        <div className="relative">
          <select
            {...register("purpose")}
            className="w-full appearance-none px-4 py-3 bg-white border border-border rounded-xl text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all cursor-pointer"
          >
            <option value="internship">Internship</option>
            <option value="job">Job</option>
            <option value="scholarship">Scholarship</option>
          </select>
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Personal Info Section */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 flex items-center gap-2">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Personal Information
          </h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Full Name
              </label>
              <input
                {...register("name")}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <input
                  {...register("email")}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Phone
                </label>
                <input
                  {...register("phone")}
                  placeholder="+1 234 567 890"
                  className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 flex items-center gap-2">
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
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
            </svg>
            Education
          </h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Degree
              </label>
              <input
                {...register("degree")}
                placeholder="B.Tech in Computer Science"
                className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                College / University
              </label>
              <input
                {...register("college")}
                placeholder="Stanford University"
                className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 flex items-center gap-2">
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
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            Skills
          </h3>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Skills
            </label>
            <input
              {...register("skills")}
              placeholder="React, Node.js, Python, SQL"
              className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
            <p className="mt-1 text-xs text-text-muted">
              Separate skills with commas
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-gradient-to-r from-primary to-primary-hover rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer mt-8"
        >
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
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          Preview Resume
        </button>
      </form>
    </div>
  );
}
