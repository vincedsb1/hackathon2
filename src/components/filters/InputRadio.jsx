import React from "react";
import { useProductsContext } from "../../contexts";
// import { gendersList } from "../../utils/constants";

const InputRadio = ({ data, name }) => {
  const {
    applyFilters,
    filters: { gendersList },
  } = useProductsContext();

  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        className="accent-current cursor-pointer"
        name={name}
        value={data}
        onChange={(e) => applyFilters(name, data)}
        checked={data === gendersList}
      />{" "}
      {data} Go
    </label>
  );
};

export default InputRadio;
