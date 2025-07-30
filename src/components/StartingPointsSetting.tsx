import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function StartingPointsSetting() {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-gray-900">持ち点</legend>
      <RadioGroup defaultValue={"25000"} className="mt-2">
        {[25000, 30000, 35000].map((startingPoints) => (
          <div key={startingPoints} className="flex items-center space-x-3">
            <RadioGroupItem
              value={startingPoints.toString()}
              id={startingPoints.toString()}
            />
            <Label htmlFor={startingPoints.toString()}>
              {startingPoints.toLocaleString("ja-JP")}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
