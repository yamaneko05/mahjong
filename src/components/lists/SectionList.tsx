"use client";

import { useSections } from "@/app/hooks/sectionHooks";
import SectionCard from "@/components/cards/SectionCard";

export default function SectionList() {
  const { data: sections } = useSections();

  return (
    <div className="space-y-8">
      {sections?.map((section) => (
        <SectionCard key={section.id} section={section} />
      ))}
    </div>
  );
}
