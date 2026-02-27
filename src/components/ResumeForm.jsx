"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const RESUME_STORAGE_KEY = "resume-builder-form-data";
const defaultFormValues = {
  purpose: "internship",
};

const hasResumeContent = (values) =>
  Object.entries(values || {}).some(
    ([key, value]) =>
      key !== "purpose" && String(value ?? "").trim().length > 0,
  );

const getPurposeLabels = (purpose = "internship") => {
  if (purpose === "scholarship") {
    return {
      summary: "Statement of Purpose",
      experience: "Research / Leadership Experience",
      projects: "Academic Projects",
      certifications: "Scholarships / Certifications",
      achievements: "Honors & Awards",
    };
  }

  if (purpose === "job") {
    return {
      summary: "Professional Summary",
      experience: "Work Experience",
      projects: "Projects",
      certifications: "Certifications",
      achievements: "Achievements & Awards",
    };
  }

  return {
    summary: "Career Objective",
    experience: "Internship Experience",
    projects: "Academic & Personal Projects",
    certifications: "Coursework / Certifications",
    achievements: "Achievements & Awards",
  };
};

const inputClass =
  "w-full px-4 py-3 bg-white border border-border rounded-xl text-sm placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";

const textareaClass =
  "w-full px-4 py-3 bg-white border border-border rounded-xl text-sm placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none";

const SectionHeader = ({ icon, title }) => (
  <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 flex items-center gap-2">
    {icon}
    {title}
  </h3>
);

export default function ResumeForm({ setData }) {
  const { register, handleSubmit, watch, reset, getValues } = useForm({
    defaultValues: defaultFormValues,
  });

  const selectedPurpose = watch("purpose") || "internship";
  const purposeLabels = getPurposeLabels(selectedPurpose);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(RESUME_STORAGE_KEY);
      if (!raw) {
        return;
      }

      const parsed = JSON.parse(raw);
      const merged = { ...defaultFormValues, ...parsed };
      reset(merged);

      if (hasResumeContent(merged)) {
        setData(merged);
      }
    } catch {
      reset(defaultFormValues);
    }
  }, [reset, setData]);

  useEffect(() => {
    const subscription = watch((value) => {
      const merged = { ...defaultFormValues, ...value };
      try {
        window.localStorage.setItem(RESUME_STORAGE_KEY, JSON.stringify(merged));
      } catch {}

      if (hasResumeContent(merged)) {
        setData(merged);
      } else {
        setData(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, setData]);

  const onSubmit = () => {
    const currentData = { ...defaultFormValues, ...getValues() };
    try {
      window.localStorage.setItem(
        RESUME_STORAGE_KEY,
        JSON.stringify(currentData),
      );
    } catch {}
    setData(currentData);
  };

  return (
    <div className="w-full max-w-2xl animate-fade-in-up">
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

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
        {/* Personal Information */}
        <div>
          <SectionHeader
            title="Personal Information"
            icon={
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
            }
          />
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Full Name
              </label>
              <input
                {...register("name")}
                placeholder="John Doe"
                className={inputClass}
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
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Phone
                </label>
                <input
                  {...register("phone")}
                  placeholder="+1 234 567 890"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Location
              </label>
              <input
                {...register("location")}
                placeholder="San Francisco, CA"
                className={inputClass}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  LinkedIn
                </label>
                <input
                  {...register("linkedin")}
                  placeholder="linkedin.com/in/johndoe"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  GitHub
                </label>
                <input
                  {...register("github")}
                  placeholder="github.com/johndoe"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Portfolio / Website
              </label>
              <input
                {...register("portfolio")}
                placeholder="johndoe.dev"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div>
          <SectionHeader
            title={purposeLabels.summary}
            icon={
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
                  d="M4 6h16M4 12h16M4 18h10"
                />
              </svg>
            }
          />
          <textarea
            {...register("summary")}
            rows={3}
            placeholder="Passionate software engineer with 2+ years of experience building scalable web applications..."
            className={textareaClass}
          />
        </div>

        {/* Education */}
        <div>
          <SectionHeader
            title="Education"
            icon={
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
            }
          />
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Degree
              </label>
              <input
                {...register("degree")}
                placeholder="B.Tech in Computer Science"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                College / University
              </label>
              <input
                {...register("college")}
                placeholder="Stanford University"
                className={inputClass}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  GPA / CGPA
                </label>
                <input
                  {...register("gpa")}
                  placeholder="3.8 / 4.0"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Graduation Year
                </label>
                <input
                  {...register("gradYear")}
                  placeholder="2025"
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <SectionHeader
            title="Technical Skills"
            icon={
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
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            }
          />
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Programming Languages
              </label>
              <input
                {...register("languages")}
                placeholder="Python, JavaScript, Java, C++"
                className={inputClass}
              />
              <p className="mt-1 text-xs text-text-muted">
                Separate with commas
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Frameworks & Libraries
              </label>
              <input
                {...register("frameworks")}
                placeholder="React, Next.js, Node.js, Express, FastAPI"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Databases
              </label>
              <input
                {...register("databases")}
                placeholder="PostgreSQL, MongoDB, Redis, MySQL"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Tools & DevOps
              </label>
              <input
                {...register("tools")}
                placeholder="Git, Docker, AWS, Linux, CI/CD"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <SectionHeader
            title={purposeLabels.experience}
            icon={
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
          />
          <div className="space-y-4">
            {[1, 2].map((n) => (
              <div
                key={n}
                className="p-4 bg-gray-50 border border-border rounded-xl space-y-3"
              >
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Experience {n}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Company
                    </label>
                    <input
                      {...register(`exp${n}Company`)}
                      placeholder="Google"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Role / Title
                    </label>
                    <input
                      {...register(`exp${n}Role`)}
                      placeholder="Software Engineer Intern"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Duration
                  </label>
                  <input
                    {...register(`exp${n}Duration`)}
                    placeholder="Jun 2024 – Aug 2024"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Responsibilities / Achievements
                  </label>
                  <textarea
                    {...register(`exp${n}Description`)}
                    rows={3}
                    placeholder="• Developed REST APIs using Node.js serving 10k+ daily users"
                    className={textareaClass}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <SectionHeader
            title={purposeLabels.projects}
            icon={
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
                  d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
                />
              </svg>
            }
          />
          <div className="space-y-4">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="p-4 bg-gray-50 border border-border rounded-xl space-y-3"
              >
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Project {n}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Project Name
                    </label>
                    <input
                      {...register(`proj${n}Name`)}
                      placeholder="E-Commerce Platform"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      GitHub / Live Link
                    </label>
                    <input
                      {...register(`proj${n}Link`)}
                      placeholder="github.com/user/project"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Tech Stack
                  </label>
                  <input
                    {...register(`proj${n}Tech`)}
                    placeholder="React, Node.js, MongoDB"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Description
                  </label>
                  <textarea
                    {...register(`proj${n}Description`)}
                    rows={2}
                    placeholder="Built a full-stack e-commerce app with real-time inventory tracking..."
                    className={textareaClass}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <SectionHeader
            title={purposeLabels.certifications}
            icon={
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
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            }
          />
          <div className="space-y-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="p-4 bg-gray-50 border border-border rounded-xl space-y-3"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Certification Name
                    </label>
                    <input
                      {...register(`cert${n}Name`)}
                      placeholder="AWS Solutions Architect"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Issuing Organization
                    </label>
                    <input
                      {...register(`cert${n}Issuer`)}
                      placeholder="Amazon Web Services"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Year
                  </label>
                  <input
                    {...register(`cert${n}Year`)}
                    placeholder="2024"
                    className={inputClass}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <SectionHeader
            title={purposeLabels.achievements}
            icon={
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
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            }
          />
          <textarea
            {...register("achievements")}
            rows={3}
            placeholder="• Winner of XYZ Hackathon 2024&#10;• Dean's List — 4 consecutive semesters"
            className={textareaClass}
          />
        </div>

        {/* Spoken Languages */}
        <div>
          <SectionHeader
            title="Languages"
            icon={
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
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
            }
          />
          <input
            {...register("spokenLanguages")}
            placeholder="English (Fluent), Spanish (Intermediate)"
            className={inputClass}
          />
          <p className="mt-1 text-xs text-text-muted">Separate with commas</p>
        </div>

        {/* Submit */}
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
