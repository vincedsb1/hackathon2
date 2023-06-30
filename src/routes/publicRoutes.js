import Mockman from "mockman-js";

import { Login, ProductDetails, ProductListing, Signup, AddProduct, Irc } from "../pages";

const authRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/connexion",
    element: <Signup />,
  },
];

const contentRoutes = [
  {
    path: "/products",
    element: <ProductListing />,
  },

  {
    path: "/product/:productId",
    element: <ProductDetails />,
  },

  {
    path: "/addproduct",
    element: <AddProduct />,
  },

  {
    path: "/irc",
    element: <Irc />,
  },

  {
    path: "/mockman",
    element: <Mockman />,
  },
];
export { authRoutes, contentRoutes };
