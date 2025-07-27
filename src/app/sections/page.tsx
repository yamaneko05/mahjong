import Breadcrumb from "@/components/Breadcrumb";
import CreateSectionDialog from "@/components/CreateSectionDialog";
import SectionCard from "@/components/SectionCard";

export default function Page() {
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
        <SectionCard
          id={1}
          title={new Date("2025-06-28").toLocaleDateString("ja-JP")}
          rate="1/10(テンピン)"
          startingPoints={25000}
          players={[
            { name: "だいち", result: 5650 },
            { name: "かいと", result: 230 },
            { name: "きむら", result: -1920 },
            { name: "えいご", result: -3960 },
          ]}
        />
        <SectionCard
          id={2}
          title={new Date("2025-06-25").toLocaleDateString("ja-JP")}
          rate="1/10(テンピン)"
          startingPoints={25000}
          players={[
            { name: "えいご", result: 1610 },
            { name: "かいと", result: 390 },
            { name: "だいち", result: 230 },
            { name: "きむら", result: -2230 },
          ]}
        />
      </div>
    </>
  );
}
