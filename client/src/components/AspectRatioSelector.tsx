import React from "react";
import { aspectRatios, type AspectRatio } from "../assets/assets";
import { RectangleHorizontal, RectangleVertical, Square } from "lucide-react";

const AspectRatioSelector = ({
  value,
  onChange,
}: {
  value: AspectRatio;
  onChange: (ratio: AspectRatio) => void;
}) => {
  const iconMap = {
    "19:9": <RectangleHorizontal className="size-6" />,
    "1:1": <Square className="size-6" />,
    "9:16": <RectangleVertical className="size-6" />,
  } as Record<AspectRatio, React.ReactNode>;

  return (
    <div className="space-y-3 dark">
      <label className="block text-sm font-medium text-zinc-200">
        Aspect Ratio
      </label>
      <div className="flex flex-wrap gap-2">
        {aspectRatios.map((ratio) => {
          const selected = value === ratio;
          return (
            <button
              key={ratio}
              type="button"
              onClick={() => onChange(ratio)}
              className={`flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm 
                transition border-white/10 ${
                  selected ? " bg-white/10" : "hover:bg-white/6"
                }`}
            >
              {iconMap[ratio]}
              <span className="tracking-widest">{ratio}</span>
            </button>
          );
        })}

        {/* <button
          type="button"
          className="flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm transition border-white/10 hover:bg-white/6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-square size-6"
            aria-hidden="true"
          >
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          </svg>
          <span className="tracking-widest">1:1</span>
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm transition border-white/10 hover:bg-white/6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-rectangle-vertical size-6"
            aria-hidden="true"
          >
            <rect width="12" height="20" x="6" y="2" rx="2"></rect>
          </svg>
          <span className="tracking-widest">9:16</span>
        </button> */}
      </div>
    </div>
  );
};

export default AspectRatioSelector;
