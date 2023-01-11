import React from "react";

const FilterComponent = ({
  className = "",
  list = [],
  optionKey = null,
  optionValue = null,
  name = null,
  onChange = () => {},
  value = null,
}) => {
  return (
    <div className={`btn-group gap-0 ${className}`}>
      <input
        type="radio"
        name={name}
        data-title="All"
        value={"ALL"}
        className="btn btn-sm sm:btn-md"
        checked={value === "ALL"}
        onChange={onChange}
      />

      {list && list.length
        ? list.map((item) => (
            <input
              key={item[optionKey]}
              type="radio"
              name={name[optionKey]}
              data-title={item[optionValue]}
              value={item[optionValue]}
              className="btn btn-sm sm:btn-md"
              onChange={onChange}
              checked={value === item[optionKey]}
            />
          ))
        : ""}
    </div>
  );
};

export default FilterComponent;
