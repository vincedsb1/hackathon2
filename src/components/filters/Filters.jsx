import { AiOutlineClose } from "react-icons/ai";
import Checkbox from "./Checkbox";
import InputRange from "./InputRange";
import { useProductsContext } from "../../contexts";
import {
    checkboxCategories,
    storageList,
    memoryList,
} from "../../utils/constants";
import CheckboxMemory from "./CheckboxMemory";
import CheckboxStorage from "./CheckboxStorage";

const FilterHeading = ({ text }) => <h2 className="text-xl mb-4">{text}</h2>;
const Filters = ({ isFilterOpen, setIsFilterOpen }) => {
    const { clearFilters } = useProductsContext();

    return (
        <aside
            className={`filtersContainer fixed  top-0 h-screen z-10 flex flex-col p-3 gap-3 overflow-auto
    transition-all ease-in-out duration-300  ${
        isFilterOpen ? "left-0 " : "-left-96"
    }
    `}
        >
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Filtrer les produits</h1>
                <AiOutlineClose
                    className="text-xl cursor-pointer"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                />
            </div>
            <button
                className="py-0.5 px-2 w-16 text-center bg-black/[0.2]  text-sm font-semibold shadow-sm rounded-md hover:bg-gray-800 hover:text-white transition-colors "
                onClick={clearFilters}
            >
                Vider
            </button>
            <section className="py-3">
                <FilterHeading text="Prix" />
                <InputRange />
            </section>
            <section className="py-3">
                <FilterHeading text="IOS" />
                <div className="flex flex-col gap-2">
                    {checkboxCategories.map((data, index) => (
                        <Checkbox data={data} key={index} />
                    ))}
                </div>
            </section>

            <section className="py-3 flex flex-col gap-2">
                <FilterHeading text="Capacité de stockage" />
                {storageList.map((data, index) => (
                    <CheckboxStorage data={data} key={index} />
                ))}
            </section>
            <section className="py-3">
                <FilterHeading text="Mémoire" />
                <div className="flex flex-col gap-2">
                    {memoryList.map((ram, index) => (
                        <CheckboxMemory data={ram} key={index} />
                    ))}
                </div>
            </section>
        </aside>
    );
};

export default Filters;
