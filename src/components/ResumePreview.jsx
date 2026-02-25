"use client";

export default function ResumePreview({ data }) {
  const escapeHtml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const buildPrintableResume = (resumeData) => {
    const skills = (resumeData.skills || "")
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);

    const printableWrapper = document.createElement("div");
    printableWrapper.style.position = "fixed";
    printableWrapper.style.left = "-10000px";
    printableWrapper.style.top = "0";
    printableWrapper.style.width = "816px";
    printableWrapper.style.background = "#ffffff";
    printableWrapper.style.color = "#111827";
    printableWrapper.style.fontFamily = "Georgia, 'Times New Roman', serif";

    printableWrapper.innerHTML = `
      <div style="padding: 48px;">
        <div style="text-align: center; border-bottom: 2px solid #1f2937; padding-bottom: 20px; margin-bottom: 24px;">
          <h1 style="font-size: 32px; font-weight: 700; color: #111827; letter-spacing: 0.02em; margin: 0 0 8px 0;">
            ${escapeHtml(resumeData.name || "")}
          </h1>
          <p style="font-size: 14px; color: #4b5563; margin: 0; line-height: 1.6;">
            ${escapeHtml(resumeData.email || "")}${
              resumeData.email && resumeData.phone ? " | " : ""
            }${escapeHtml(resumeData.phone || "")}
          </p>
        </div>

        ${
          resumeData.degree || resumeData.college
            ? `
          <div style="margin-bottom: 24px;">
            <h2 style="font-size: 12px; font-weight: 700; color: #111827; text-transform: uppercase; letter-spacing: 0.12em; border-bottom: 1px solid #d1d5db; padding-bottom: 4px; margin: 0 0 12px 0;">
              Education
            </h2>
            ${
              resumeData.degree
                ? `<p style="font-size: 16px; font-weight: 600; color: #1f2937; margin: 0 0 4px 0;">${escapeHtml(
                    resumeData.degree
                  )}</p>`
                : ""
            }
            ${
              resumeData.college
                ? `<p style="font-size: 14px; color: #4b5563; margin: 0;">${escapeHtml(
                    resumeData.college
                  )}</p>`
                : ""
            }
          </div>
        `
            : ""
        }

        ${
          skills.length
            ? `
          <div style="margin-bottom: 24px;">
            <h2 style="font-size: 12px; font-weight: 700; color: #111827; text-transform: uppercase; letter-spacing: 0.12em; border-bottom: 1px solid #d1d5db; padding-bottom: 4px; margin: 0 0 12px 0;">
              Skills
            </h2>
            <div>
              ${skills
                .map(
                  (skill) =>
                    `<span style="display: inline-block; margin: 0 8px 8px 0; padding: 4px 12px; background: #f3f4f6; color: #374151; border-radius: 6px; font-size: 13px;">${escapeHtml(
                      skill
                    )}</span>`
                )
                .join("")}
            </div>
          </div>
        `
            : ""
        }
      </div>
    `;

    return printableWrapper;
  };

  const downloadPDF = async () => {
    const html2pdf = (await import("html2pdf.js")).default;
    const printableElement = buildPrintableResume(data || {});

    document.body.appendChild(printableElement);
    try {
      await html2pdf()
        .set({
          margin: 0,
          filename: `${data?.name || "resume"}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, backgroundColor: "#ffffff", useCORS: true },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        })
        .from(printableElement)
        .save();
    } finally {
      printableElement.remove();
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
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              {data.email && (
                <span className="flex items-center gap-1">{data.email}</span>
              )}
              {data.email && data.phone && (
                <span className="text-gray-400">|</span>
              )}
              {data.phone && (
                <span className="flex items-center gap-1">{data.phone}</span>
              )}
            </div>
          </div>

          {/* Education */}
          {(data.degree || data.college) && (
            <div className="mb-6">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-300 pb-1 mb-3">
                Education
              </h2>
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
              </div>
            </div>
          )}

          {/* Skills */}
          {data.skills && (
            <div className="mb-6">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-300 pb-1 mb-3">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.split(",").map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                  >
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
