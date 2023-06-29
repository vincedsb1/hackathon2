import { useProductsContext } from "../contexts/index";
import {
    filterByCheckbox,
    filterByMemory,
    filterByStorage,
    filterByPriceRange,
    filterByRating,
    filterBySearch,
    sortByPrice,
} from "../utils/filterUtils";

const useFilter = () => {
    const { allProducts, filters } = useProductsContext();
    const {
        categories,
        priceRange,
        rating,
        sortBy,
        searchText,
        storage,
        memory,
    } = filters;

    let filteredData = filterBySearch(searchText, allProducts);
    filteredData = filterByMemory(memory, filteredData);
    filteredData = filterByStorage(storage, filteredData);
    filteredData = filterByPriceRange(priceRange, filteredData);
    filteredData = filterByCheckbox(categories, filteredData);
    filteredData = filterByRating(rating, filteredData);
    filteredData = sortByPrice(sortBy, filteredData);

    return filteredData;
};

export { useFilter };
