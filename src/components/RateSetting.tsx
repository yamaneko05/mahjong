import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function RateSetting() {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-gray-900">レート</legend>
      <RadioGroup defaultValue={"ノーレート"} className="mt-2">
        {[
          "ノーレート",
          "1/20(テンゴ)",
          "1/10(テンピン)",
          "1/5(テンリャンピン)",
        ].map((rate) => (
          <div key={rate} className="flex items-center space-x-3">
            <RadioGroupItem value={rate} id={rate} />
            <Label htmlFor={rate}>{rate}</Label>
          </div>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
