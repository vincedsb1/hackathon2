import { GiRoundStar } from "react-icons/gi";
import { BsBookmarkHeart, BsFillBookmarkHeartFill } from "react-icons/bs";
import {
    useAuthContext,
    useCartContext,
    useProductsContext,
    useWishlistContext,
} from "../../contexts";
import { useLocation, useNavigate } from "react-router";
import { notify } from "../../utils/utils";

const SingleProduct = ({ product }) => {
    const { token } = useAuthContext();
    const { isInCart } = useProductsContext();
    const { addProductToCart, disableCart } = useCartContext();
    const { addProductToWishlist, deleteProductFromWishlist, disableWish } =
        useWishlistContext();
    const navigate = useNavigate();
    const location = useLocation();
    let inCart = isInCart(product._id);

    return (
        <div
            className="flex flex-row xs:flex-row sm:flex-row  bg-white/[0.5] rounded-lg shadow-md border-2 border-black/[0.05] overflow-hidden
      cursor-pointer
      transition-transform
      hover:scale-[1.02] hover:shadow-lg"
        >
            <div
                // className="flex items-center justify-center p-10 xs:p-5 sm:p-10 bg-black/[0.075] h-1/2 xs:h-full sm:h-1/2 xs:w-1/2 w-full sm:w-full"
                className="flex items-center justify-center p-2 xs:p-5 sm:p-6 bg-black/[0.075]  xs:w-1/2 w-full sm:w-full"
                onClick={() => {
                    navigate(`/product/${product._id}`);
                }}
            >
                <img
                    src={product.image}
                    alt=""
                    className="w-full object-cover xs:object-contain sm:object-cover max-w-[180px] max-h-44 h-80"
                />
            </div>

            <div className="p-3 flex flex-col justify-between gap-2 mt-2 h-1/2 xs:h-full sm:h-1/2 xs:w-2/3 w-full sm:w-full">
                <div>
                    <div className=" flex justify-between">
                        <div className="flex flex-col">
                            <span className="text-xl font-medium pb-6">
                                {product.name}
                            </span>
                            <span className="flex items-center gap-1">
                                <span>{product.rating}</span>

                                <GiRoundStar className=" text-yellow-400 mb-1" />
                                <span className="text-xs text-gray-400">
                                    Rating
                                </span>
                            </span>
                        </div>

                        <div className="flex flex-col items-end">
                            <span className="text-amber-600">
                                {product.newPrice} €
                            </span>
                            <span className="text-sm text-gray-600 line-through">
                                {product.price}
                            </span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600">{product.brand}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
