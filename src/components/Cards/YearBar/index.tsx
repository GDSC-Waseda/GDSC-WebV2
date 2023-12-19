import React from "react";
import { YearBarProps } from "~/types/index";

export const YearBar: React.FC<YearBarProps> = ({
  years,
  selectedYear,
  onYearChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onYearChange(event.target.value);
  };

  return (
    <div className="year-bar">
      {years.length > 3 ? (
        <select value={selectedYear} onChange={handleChange}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      ) : (
        years.map((year) => (
          <div
            key={year}
            className={`year-item ${year === selectedYear ? "selected" : ""}`}
            onClick={() => onYearChange(year)}
          >
            {year}
          </div>
        ))
      )}
    </div>
  );
};

export default YearBar;
