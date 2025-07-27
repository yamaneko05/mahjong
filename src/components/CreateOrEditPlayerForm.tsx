import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function CreateOrEditPlayerForm({ name }: { name?: string }) {
  return (
    <>
      <div>
        <Label htmlFor={"name"}>名前</Label>
        <Input id={"name"} defaultValue={name} className="mt-2" />
      </div>
    </>
  );
}
