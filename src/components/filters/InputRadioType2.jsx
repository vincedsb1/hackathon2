import React from "react";
import { useProductsContext } from "../../contexts";

const InputRadioType2 = ({ data }) => {
  const {
    applyFilters,
    filters: { category },
  } = useProductsContext();
  return (
    <label
      className={`p-2 rounded-md  shadow-sm text-center capitalize ${
        category === data
          ? "bg-[--primary-text-color] text-white "
          : "bg-black/[0.1] hover:bg-[--primary-text-color] hover:text-white"
      } cursor-pointer`}
    >
      {data}
      <input
        type="radio"
        name="category"
        value={data}
        className="invisible"
        checked={category === data}
        onChange={(e) => applyFilters(e.target.name, e.target.value)}
      />
    </label>
  );
};

export default InputRadioType2;