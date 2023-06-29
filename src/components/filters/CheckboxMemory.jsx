import { useProductsContext } from "../../contexts";

const CheckboxMemory = ({ data }) => {
    const {
        applyFilters,
        filters: { memory },
    } = useProductsContext();

    const checkboxHandler = (e) => {
        let catArr = memory;

        console.log("checkboxHandler");
        console.log(e.target.value);
        console.log(catArr);

        if (e.target.checked) {
            catArr.push(e.target.value);
        } else {
            catArr = catArr.filter((cat) => cat !== e.target.value);
        }

        console.log(catArr);
        console.log(e.target.name);

        applyFilters("memory", catArr);
    };

    const labelText = `${data} Go`;

    return (
        <label className="capitalize cursor-pointer">
            <input
                className="accent-[--primary-text-color] me-2 cursor-pointer"
                type="checkbox"
                name="memory"
                checked={memory.includes(data)}
                value={data}
                onChange={checkboxHandler}
            />
            {labelText}
        </label>
    );
};

export default CheckboxMemory;
