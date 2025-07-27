import { Checkbox } from "./ui/checkbox";

export default function PlayersSetting() {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-gray-900">
        プレイヤー
      </legend>
      <p className="mt-1 text-sm text-gray-600">
        3人もしくは4人を選択してください。
      </p>
      <div className="mt-2 space-y-2">
        {["えいご", "おうた", "かいと", "きむら", "だいち"].map((player) => (
          <div key={player} className="flex items-center space-x-3">
            <Checkbox id={`players-${player}`} />
            <div className="text-sm">
              <label
                htmlFor={`players-${player}`}
                className="font-medium text-gray-900"
              >
                {player}
              </label>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
