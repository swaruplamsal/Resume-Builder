"use client";

export default function ResumePreview({ data }) {
  const downloadPDF = async () => {
    const html2pdf = (await import("html2pdf.js")).default;
    const element = document.getElementById("resume");
    html2pdf()
      .set({
        margin: 0,
        filename: `${data?.name || "resume"}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(element)
      .save();
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
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-success rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
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
          <div className="text-center border-b-2 border-[#1f2937] pb-5 mb-6">
            <h1 className="text-3xl font-bold text-[#111827] tracking-wide mb-2">
              {data.name}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-[#4b5563]">
              {data.email && (
                <span className="flex items-center gap-1">{data.email}</span>
              )}
              {data.email && data.phone && (
                <span className="text-[#9ca3af]">|</span>
              )}
              {data.phone && (
                <span className="flex items-center gap-1">{data.phone}</span>
              )}
            </div>
          </div>

          {/* Education */}
          {(data.degree || data.college) && (
            <div className="mb-6">
              <h2 className="text-sm font-bold text-[#111827] uppercase tracking-widest border-b border-[#d1d5db] pb-1 mb-3">
                Education
              </h2>
              <div className="flex justify-between items-start">
                <div>
                  {data.degree && (
                    <p className="text-base font-semibold text-[#1f2937]">
                      {data.degree}
                    </p>
                  )}
                  {data.college && (
                    <p className="text-sm text-[#4b5563]">{data.college}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Skills */}
          {data.skills && (
            <div className="mb-6">
              <h2 className="text-sm font-bold text-[#111827] uppercase tracking-widest border-b border-[#d1d5db] pb-1 mb-3">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.split(",").map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#f3f4f6] text-[#374151] text-sm rounded-md"
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
