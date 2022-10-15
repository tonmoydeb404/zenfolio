import React from "react";

const FilterComponent = ({
  className = "",
  list = [],
  name = null,
  onChange = () => {},
  value = null,
}) => {
  return (
    <div className={`btn-group ${className}`}>
      <input
        type="radio"
        name={name}
        data-title="All"
        value={"ALL"}
        className="btn"
        checked={value === "ALL"}
        onChange={onChange}
      />

      {list && list.length
        ? list.map((item) => (
            <input
              key={item.name}
              type="radio"
              name={name.name}
              data-title={item.name}
              value={item.name}
              className="btn"
              onChange={onChange}
              checked={value === item.name}
            />
          ))
        : ""}
    </div>
  );
};

export default FilterComponent;
