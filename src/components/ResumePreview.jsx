"use client";

export default function ResumePreview({ data }) {
  const getPurposeContent = (purpose = "internship") => {
    if (purpose === "scholarship") {
      return {
        summaryTitle: "Statement of Purpose",
        educationTitle: "Education",
        skillsTitle: "Technical & Research Skills",
        experienceTitle: "Research / Leadership Experience",
        projectsTitle: "Academic Projects",
        certificationsTitle: "Scholarships / Certifications",
        achievementsTitle: "Honors & Awards",
        languagesTitle: "Languages",
        order: [
          "summary",
          "education",
          "achievements",
          "projects",
          "skills",
          "experience",
          "certifications",
          "languages",
        ],
      };
    }

    if (purpose === "job") {
      return {
        summaryTitle: "Professional Summary",
        educationTitle: "Education",
        skillsTitle: "Technical Skills",
        experienceTitle: "Work Experience",
        projectsTitle: "Projects",
        certificationsTitle: "Certifications",
        achievementsTitle: "Achievements & Awards",
        languagesTitle: "Languages",
        order: [
          "summary",
          "skills",
          "experience",
          "projects",
          "education",
          "certifications",
          "achievements",
          "languages",
        ],
      };
    }

    return {
      summaryTitle: "Career Objective",
      educationTitle: "Education",
      skillsTitle: "Technical Skills",
      experienceTitle: "Internship Experience",
      projectsTitle: "Academic & Personal Projects",
      certificationsTitle: "Coursework / Certifications",
      achievementsTitle: "Achievements & Awards",
      languagesTitle: "Languages",
      order: [
        "summary",
        "education",
        "skills",
        "projects",
        "experience",
        "certifications",
        "achievements",
        "languages",
      ],
    };
  };

  const esc = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const chips = (csv = "") =>
    csv
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

  const buildPrintableResume = (d) => {
    const purposeContent = getPurposeContent(d.purpose);
    const langChips = chips(d.languages);
    const fwChips = chips(d.frameworks);
    const dbChips = chips(d.databases);
    const toolChips = chips(d.tools);
    const langSpokenChips = chips(d.spokenLanguages);

    const chipStyle =
      "display:inline-block;margin:0 6px 6px 0;padding:3px 10px;background:#f3f4f6;color:#374151;border-radius:6px;font-size:12px;";

    const sectionHead = (title) =>
      `<h2 style="font-size:11px;font-weight:700;color:#111827;text-transform:uppercase;letter-spacing:0.12em;border-bottom:1px solid #d1d5db;padding-bottom:4px;margin:0 0 10px 0;">${title}</h2>`;

    const expHtml = [1, 2]
      .filter((n) => d[`exp${n}Company`] || d[`exp${n}Role`])
      .map(
        (n) => `
        <div style="margin-bottom:12px;">
          <div style="display:flex;justify-content:space-between;align-items:baseline;">
            <p style="font-size:15px;font-weight:600;color:#1f2937;margin:0;">${esc(d[`exp${n}Role`] || "")}</p>
            <span style="font-size:12px;color:#6b7280;">${esc(d[`exp${n}Duration`] || "")}</span>
          </div>
          <p style="font-size:13px;color:#4b5563;margin:2px 0 6px 0;">${esc(d[`exp${n}Company`] || "")}</p>
          ${d[`exp${n}Description`] ? `<p style="font-size:13px;color:#374151;white-space:pre-line;margin:0;">${esc(d[`exp${n}Description`])}</p>` : ""}
        </div>`,
      )
      .join("");

    const projHtml = [1, 2, 3]
      .filter((n) => d[`proj${n}Name`])
      .map(
        (n) => `
        <div style="margin-bottom:12px;">
          <div style="display:flex;justify-content:space-between;align-items:baseline;">
            <p style="font-size:15px;font-weight:600;color:#1f2937;margin:0;">${esc(d[`proj${n}Name`] || "")}</p>
            ${d[`proj${n}Link`] ? `<span style="font-size:12px;color:#6b7280;">${esc(d[`proj${n}Link`])}</span>` : ""}
          </div>
          ${d[`proj${n}Tech`] ? `<p style="font-size:12px;color:#6366f1;margin:2px 0;">${esc(d[`proj${n}Tech`])}</p>` : ""}
          ${d[`proj${n}Description`] ? `<p style="font-size:13px;color:#374151;margin:4px 0 0 0;">${esc(d[`proj${n}Description`])}</p>` : ""}
        </div>`,
      )
      .join("");

    const certHtml = [1, 2, 3]
      .filter((n) => d[`cert${n}Name`])
      .map(
        (n) => `
        <div style="margin-bottom:8px;display:flex;justify-content:space-between;align-items:baseline;">
          <div>
            <span style="font-size:14px;font-weight:600;color:#1f2937;">${esc(d[`cert${n}Name`] || "")}</span>
            ${d[`cert${n}Issuer`] ? `<span style="font-size:12px;color:#4b5563;"> — ${esc(d[`cert${n}Issuer`])}</span>` : ""}
          </div>
          ${d[`cert${n}Year`] ? `<span style="font-size:12px;color:#6b7280;">${esc(d[`cert${n}Year`])}</span>` : ""}
        </div>`,
      )
      .join("");

    const skillsSection =
      langChips.length || fwChips.length || dbChips.length || toolChips.length
        ? `<div style="margin-bottom:20px;">
          ${sectionHead(purposeContent.skillsTitle)}
          ${langChips.length ? `<p style="font-size:12px;font-weight:600;color:#374151;margin:0 0 4px 0;">Languages</p><div>${langChips.map((s) => `<span style="${chipStyle}">${esc(s)}</span>`).join("")}</div>` : ""}
          ${fwChips.length ? `<p style="font-size:12px;font-weight:600;color:#374151;margin:8px 0 4px 0;">Frameworks & Libraries</p><div>${fwChips.map((s) => `<span style="${chipStyle}">${esc(s)}</span>`).join("")}</div>` : ""}
          ${dbChips.length ? `<p style="font-size:12px;font-weight:600;color:#374151;margin:8px 0 4px 0;">Databases</p><div>${dbChips.map((s) => `<span style="${chipStyle}">${esc(s)}</span>`).join("")}</div>` : ""}
          ${toolChips.length ? `<p style="font-size:12px;font-weight:600;color:#374151;margin:8px 0 4px 0;">Tools & DevOps</p><div>${toolChips.map((s) => `<span style="${chipStyle}">${esc(s)}</span>`).join("")}</div>` : ""}
        </div>`
        : "";

    const printableSections = {
      summary: d.summary
        ? `<div style="margin-bottom:20px;">${sectionHead(purposeContent.summaryTitle)}<p style="font-size:13px;color:#374151;line-height:1.6;margin:0;">${esc(d.summary)}</p></div>`
        : "",
      education:
        d.degree || d.college
          ? `<div style="margin-bottom:20px;">${sectionHead(purposeContent.educationTitle)}
          <div style="display:flex;justify-content:space-between;align-items:baseline;">
            <div>
              ${d.degree ? `<p style="font-size:15px;font-weight:600;color:#1f2937;margin:0 0 2px 0;">${esc(d.degree)}</p>` : ""}
              ${d.college ? `<p style="font-size:13px;color:#4b5563;margin:0;">${esc(d.college)}</p>` : ""}
            </div>
            <div style="text-align:right;">
              ${d.gradYear ? `<p style="font-size:13px;color:#6b7280;margin:0;">${esc(d.gradYear)}</p>` : ""}
              ${d.gpa ? `<p style="font-size:13px;color:#6b7280;margin:0;">GPA: ${esc(d.gpa)}</p>` : ""}
            </div>
          </div>
        </div>`
          : "",
      skills: skillsSection,
      experience: expHtml
        ? `<div style="margin-bottom:20px;">${sectionHead(purposeContent.experienceTitle)}${expHtml}</div>`
        : "",
      projects: projHtml
        ? `<div style="margin-bottom:20px;">${sectionHead(purposeContent.projectsTitle)}${projHtml}</div>`
        : "",
      certifications: certHtml
        ? `<div style="margin-bottom:20px;">${sectionHead(purposeContent.certificationsTitle)}${certHtml}</div>`
        : "",
      achievements: d.achievements
        ? `<div style="margin-bottom:20px;">${sectionHead(purposeContent.achievementsTitle)}<p style="font-size:13px;color:#374151;white-space:pre-line;margin:0;">${esc(d.achievements)}</p></div>`
        : "",
      languages: langSpokenChips.length
        ? `<div style="margin-bottom:20px;">${sectionHead(purposeContent.languagesTitle)}<div>${langSpokenChips.map((s) => `<span style="${chipStyle}">${esc(s)}</span>`).join("")}</div></div>`
        : "",
    };

    const orderedPrintableSections = purposeContent.order
      .map((key) => printableSections[key])
      .filter(Boolean)
      .join("");

    const contactParts = [
      d.email,
      d.phone,
      d.location,
      d.linkedin,
      d.github,
      d.portfolio,
    ].filter(Boolean);

    const wrapper = document.createElement("div");
    wrapper.style.cssText =
      "position:fixed;left:-10000px;top:0;width:816px;background:#ffffff;color:#111827;font-family:Georgia,'Times New Roman',serif;";

    wrapper.innerHTML = `
      <div style="padding:48px;">
        <div style="text-align:center;border-bottom:2px solid #1f2937;padding-bottom:20px;margin-bottom:22px;">
          <h1 style="font-size:30px;font-weight:700;color:#111827;letter-spacing:0.02em;margin:0 0 6px 0;">${esc(d.name || "")}</h1>
          <p style="font-size:13px;color:#4b5563;margin:0;line-height:1.8;">${contactParts.map(esc).join(" | ")}</p>
        </div>
        ${orderedPrintableSections}
      </div>`;

    return wrapper;
  };

  const downloadPDF = async () => {
    const html2pdf = (await import("html2pdf.js")).default;
    const el = buildPrintableResume(data || {});
    document.body.appendChild(el);
    try {
      await html2pdf()
        .set({
          margin: 0,
          filename: `${data?.name || "resume"}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, backgroundColor: "#ffffff", useCORS: true },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        })
        .from(el)
        .save();
    } finally {
      el.remove();
    }
  };

  if (!data)
    return (
      <div className="flex-1 flex items-center justify-center animate-fade-in">
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
          <h3 className="text-lg font-semibold text-text-heading mb-2">
            No preview yet
          </h3>
          <p className="text-text-muted text-sm max-w-xs">
            Fill in the form and click &quot;Preview Resume&quot; to see your
            resume here.
          </p>
        </div>
      </div>
    );

  const langChips = (data.languages || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const fwChips = (data.frameworks || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const dbChips = (data.databases || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const toolChips = (data.tools || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const langSpokenChips = (data.spokenLanguages || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const purposeContent = getPurposeContent(data.purpose);

  const Section = ({ title }) => (
    <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-300 pb-1 mb-3">
      {title}
    </h2>
  );

  const Chips = ({ items }) => (
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
        >
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className="flex-1 animate-slide-in-right">
      {/* Download Button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-text-heading">Preview</h2>
        <button
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-success to-emerald-600 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          onClick={downloadPDF}
        >
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
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download PDF
        </button>
      </div>

      {/* Resume Paper */}
      <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
        <div
          id="resume"
          className="p-10"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {/* Header */}
          <div className="text-center border-b-2 border-gray-800 pb-5 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 tracking-wide mb-2">
              {data.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-gray-600">
              {[
                data.email,
                data.phone,
                data.location,
                data.linkedin,
                data.github,
                data.portfolio,
              ]
                .filter(Boolean)
                .map((item, i, arr) => (
                  <span key={i} className="flex items-center gap-1">
                    {item}
                    {i < arr.length - 1 && (
                      <span className="text-gray-400 ml-3">|</span>
                    )}
                  </span>
                ))}
            </div>
          </div>

          {purposeContent.order.map((sectionKey) => {
            if (sectionKey === "summary" && data.summary) {
              return (
                <div key={sectionKey} className="mb-6">
                  <Section title={purposeContent.summaryTitle} />
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {data.summary}
                  </p>
                </div>
              );
            }

            if (sectionKey === "education" && (data.degree || data.college)) {
              return (
                <div key={sectionKey} className="mb-6">
                  <Section title={purposeContent.educationTitle} />
                  <div className="flex justify-between items-start">
                    <div>
                      {data.degree && (
                        <p className="text-base font-semibold text-gray-800">
                          {data.degree}
                        </p>
                      )}
                      {data.college && (
                        <p className="text-sm text-gray-600">{data.college}</p>
                      )}
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      {data.gradYear && <p>{data.gradYear}</p>}
                      {data.gpa && <p>GPA: {data.gpa}</p>}
                    </div>
                  </div>
                </div>
              );
            }

            if (
              sectionKey === "skills" &&
              (langChips.length > 0 ||
                fwChips.length > 0 ||
                dbChips.length > 0 ||
                toolChips.length > 0)
            ) {
              return (
                <div key={sectionKey} className="mb-6">
                  <Section title={purposeContent.skillsTitle} />
                  <div className="space-y-2">
                    {langChips.length > 0 && (
                      <div>
                        <span className="text-xs font-semibold text-gray-600 mr-2">
                          Languages:
                        </span>
                        <Chips items={langChips} />
                      </div>
                    )}
                    {fwChips.length > 0 && (
                      <div>
                        <span className="text-xs font-semibold text-gray-600 mr-2">
                          Frameworks & Libraries:
                        </span>
                        <Chips items={fwChips} />
                      </div>
                    )}
                    {dbChips.length > 0 && (
                      <div>
                        <span className="text-xs font-semibold text-gray-600 mr-2">
                          Databases:
                        </span>
                        <Chips items={dbChips} />
                      </div>
                    )}
                    {toolChips.length > 0 && (
                      <div>
                        <span className="text-xs font-semibold text-gray-600 mr-2">
                          Tools & DevOps:
                        </span>
                        <Chips items={toolChips} />
                      </div>
                    )}
                  </div>
                </div>
              );
            }

            if (
              sectionKey === "experience" &&
              [1, 2].some((n) => data[`exp${n}Company`] || data[`exp${n}Role`])
            ) {
              return (
                <div key={sectionKey} className="mb-6">
                  <Section title={purposeContent.experienceTitle} />
                  {[1, 2].map((n) =>
                    data[`exp${n}Company`] || data[`exp${n}Role`] ? (
                      <div key={n} className="mb-4">
                        <div className="flex justify-between items-baseline">
                          <p className="text-base font-semibold text-gray-800">
                            {data[`exp${n}Role`]}
                          </p>
                          <span className="text-xs text-gray-500">
                            {data[`exp${n}Duration`]}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          {data[`exp${n}Company`]}
                        </p>
                        {data[`exp${n}Description`] && (
                          <p className="text-sm text-gray-700 whitespace-pre-line">
                            {data[`exp${n}Description`]}
                          </p>
                        )}
                      </div>
                    ) : null,
                  )}
                </div>
              );
            }

            if (
              sectionKey === "projects" &&
              [1, 2, 3].some((n) => data[`proj${n}Name`])
            ) {
              return (
                <div key={sectionKey} className="mb-6">
                  <Section title={purposeContent.projectsTitle} />
                  {[1, 2, 3].map((n) =>
                    data[`proj${n}Name`] ? (
                      <div key={n} className="mb-4">
                        <div className="flex justify-between items-baseline">
                          <p className="text-base font-semibold text-gray-800">
                            {data[`proj${n}Name`]}
                          </p>
                          {data[`proj${n}Link`] && (
                            <span className="text-xs text-indigo-500">
                              {data[`proj${n}Link`]}
                            </span>
                          )}
                        </div>
                        {data[`proj${n}Tech`] && (
                          <p className="text-xs text-indigo-400 mb-1">
                            {data[`proj${n}Tech`]}
                          </p>
                        )}
                        {data[`proj${n}Description`] && (
                          <p className="text-sm text-gray-700">
                            {data[`proj${n}Description`]}
                          </p>
                        )}
                      </div>
                    ) : null,
                  )}
                </div>
              );
            }

            if (
              sectionKey === "certifications" &&
              [1, 2, 3].some((n) => data[`cert${n}Name`])
            ) {
              return (
                <div key={sectionKey} className="mb-6">
                  <Section title={purposeContent.certificationsTitle} />
                  {[1, 2, 3].map((n) =>
                    data[`cert${n}Name`] ? (
                      <div
                        key={n}
                        className="flex justify-between items-baseline mb-2"
                      >
                        <div>
                          <span className="text-sm font-semibold text-gray-800">
                            {data[`cert${n}Name`]}
                          </span>
                          {data[`cert${n}Issuer`] && (
                            <span className="text-sm text-gray-600">
                              {" "}
                              — {data[`cert${n}Issuer`]}
                            </span>
                          )}
                        </div>
                        {data[`cert${n}Year`] && (
                          <span className="text-xs text-gray-500">
                            {data[`cert${n}Year`]}
                          </span>
                        )}
                      </div>
                    ) : null,
                  )}
                </div>
              );
            }

            if (sectionKey === "achievements" && data.achievements) {
              return (
                <div key={sectionKey} className="mb-6">
                  <Section title={purposeContent.achievementsTitle} />
                  <p className="text-sm text-gray-700 whitespace-pre-line">
                    {data.achievements}
                  </p>
                </div>
              );
            }

            if (sectionKey === "languages" && langSpokenChips.length > 0) {
              return (
                <div key={sectionKey} className="mb-6">
                  <Section title={purposeContent.languagesTitle} />
                  <Chips items={langSpokenChips} />
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
}
