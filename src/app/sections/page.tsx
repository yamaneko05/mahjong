import Breadcrumb from "@/components/Breadcrumb";
import CreateSectionDialog from "@/components/dialogs/CreateSectionDialog";
import SectionCard from "@/components/cards/SectionCard";
import { getSections } from "../actions";

export default async function Page() {
  const sections = await getSections();

  return (
    <>
      <Breadcrumb
        items={[
          { title: "ホーム", path: "/" },
          { title: "セクション一覧", path: "/sections" },
        ]}
      />
      <div className="mt-4 flex flex-row-reverse">
        <CreateSectionDialog />
      </div>
      <div className="mt-4 space-y-8">
        {sections.map((section) => (
          <SectionCard key={section.id} section={section} />
        ))}
      </div>
    </>
  );
}
