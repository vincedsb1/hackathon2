import { useProductsContext } from "../../contexts";

const CheckboxStorage = ({ data }) => {
    const {
        applyFilters,
        filters: { storage },
    } = useProductsContext();

    const checkboxHandler = (e) => {
        let catArr = storage;

        console.log("checkboxHandler");
        console.log(storage);

        if (e.target.checked) {
            catArr.push(e.target.value);
        } else {
            catArr = catArr.filter((cat) => cat !== e.target.value);
        }

        applyFilters("storage", catArr);
    };

    const labelText = `${data} Go`;

    return (
        <label className="capitalize cursor-pointer">
            <input
                className="accent-[--primary-text-color] me-2 cursor-pointer"
                type="checkbox"
                name="storage"
                checked={storage.includes(data)}
                value={data}
                onChange={checkboxHandler}
            />
            {labelText}
        </label>
    );
};

export default CheckboxStorage;
