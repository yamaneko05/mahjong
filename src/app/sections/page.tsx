import Breadcrumb from "@/components/Breadcrumb";
import CreateSectionDialog from "@/components/dialogs/CreateSectionDialog";
import SectionList from "@/components/lists/SectionList";

export default async function Page() {
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
      <div className="mt-4">
        <SectionList />
      </div>
    </>
  );
}
