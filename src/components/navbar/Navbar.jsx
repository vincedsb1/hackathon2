import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsBookmarkHeart } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { RxHamburgerMenu } from "react-icons/rx";
import defaultUser from "../../assets/defaultUser.png";
import MenuDropdown from "./MenuDropdown";
import Logo from "./Logo";
import {
    useAuthContext,
    useCartContext,
    useWishlistContext,
} from "../../contexts";

import Search from "../filters/Search";

const Navbar = () => {
    const { token } = useAuthContext();
    const { cart } = useCartContext();
    const { wishlist } = useWishlistContext();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [colorChange, setColorChange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", changeNavbarColor);

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    return (
        <nav
            className={`flex flex-col sm:flex-row py-3 max-w-screen mb-3 fixed left-0 right-0 px-[4%] md:px-[10%] bg-[--theme-color] ${
                colorChange ? "shadow-sm  drop-shadow-sm" : ""
            } z-10 transition delay-75 ease-in-out`}
        >
            <div className="flex justify-between w-full items-center">
                <section className="relative flex items-center">
                    <Link to="/profile">
                        <img
                            className="rounded-full border-2  bg-yellow-300 me-3 hover:bg-yellow-500 cursor-pointer"
                            src={defaultUser}
                            alt="userProfileImage"
                            width={40}
                        />
                    </Link>

                    <Logo />
                </section>
                <div className="flex flex-row justify-end">
                    <Link to="/addproduct">
                    <div className="flex flex-row text-4xl text-green-500 items-center pr-2">
                        <AiOutlinePlusCircle />
                    </div>
                    </Link>
                    <div className="hidden w-60 sm:block relative">
                        <Search />
                    </div>
                </div>
            </div>

            <section className="mt-4 sm:hidden relative">
                <section className="flex items-center">
                    <section className="md:hidden cursor-pointer relative">
                        <RxHamburgerMenu
                            className="text-lg"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                        {isMenuOpen && <MenuDropdown navigate={navigate} />}
                    </section>
                </section>
                <Search />
            </section>
        </nav>
    );
};

export default Navbar;
