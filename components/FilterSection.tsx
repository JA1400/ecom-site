import React from "react";
import { X } from "lucide-react";

const FilterSection = ({ selectedRanges }: { selectedRanges: number[] }) => {
  return (
    <div className="w-full bg-[#e8f3fe] p-4 rounded-md flex flex-col gap-2.5">
      <p className="font-bold text-sm">Active Filters:</p>
      <ul className="s-filter-list">
        {selectedRanges.map((s) => (
          <li key={s}>
            <p>{s}</p> <X color="white" size={14} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSection;
