import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Home } from "../pages/Web/Home";
import { Product } from "../pages/Web/Product";
import { UsermobileLayout } from "../layout/UsermobileLayout";
import { Profile } from "../pages/Web/Profile";
import { ErrorPage } from "../pages/shared/ErrorPage";
import { ProductDetail } from "../pages/Web/ProductDetail";
import { Cart } from "../pages/Web/Cart";
import { About } from "../pages/Web/About";
import { UserEditLayout } from "../layout/UserEditLayout";
import { ProfileEdit } from "../pages/Web/ProfileEdit";


export const RouterPath = () => {
  const params = useParams();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UsermobileLayout />} errorElement={<ErrorPage />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />

          <Route path="user-profile" element={<UserEditLayout />}>
            <Route index element={<ProfileEdit />} />
          </Route>

          <Route path="productDetails/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
