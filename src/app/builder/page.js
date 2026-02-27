"use client";
import { useState } from "react";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";

export default function Builder() {
  const [data, setData] = useState(null);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Form Panel */}
          <div className="lg:w-[500px] shrink-0">
            <div className="sticky top-24 bg-surface border border-border rounded-2xl p-8 shadow-sm">
              <ResumeForm setData={setData} />
            </div>
          </div>

          {/* Right: Preview Panel */}
          <div className="flex-1 min-w-0">
            <ResumePreview data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
