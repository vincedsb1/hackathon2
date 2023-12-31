import { useProductsContext } from "../../contexts";

const Checkbox = ({ data, isRam }) => {
    const {
        applyFilters,
        filters: { categories },
    } = useProductsContext();

    const checkboxHandler = (e) => {
        let catArr = categories;

        if (e.target.checked) {
            catArr.push(e.target.value);
        } else {
            catArr = catArr.filter((cat) => cat !== e.target.value);
        }

        applyFilters("categories", catArr);
    };

    const labelText = isRam ? `${data} Go` : data;

    return (
        <label className="capitalize cursor-pointer">
            <input
                className="accent-[--primary-text-color] me-2 cursor-pointer"
                type="checkbox"
                name="categories"
                checked={categories.includes(data)}
                value={data}
                onChange={checkboxHandler}
            />
            {labelText}
        </label>
    );
};

export default Checkbox;
