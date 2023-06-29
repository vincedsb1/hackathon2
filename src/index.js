import React from "react";
import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import App from "./App";
import { makeServer } from "./server";
import {
  AuthContextProvider,
  CartContextProvider,
  ProductsContextProvider,
  WishlistContextProvider,
} from "./contexts";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript



// Call make Server
makeServer();

root.render(

  <React.StrictMode>
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <Router>
              <App />
            </Router>
          </WishlistContextProvider>
        </CartContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  // document.getElementById("root")
);
