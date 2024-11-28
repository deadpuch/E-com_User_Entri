import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Mobile/Home";
import { Product } from "../pages/Mobile/Product";
import { UsermobileLayout } from "../layout/UsermobileLayout";
import { Profile } from "../pages/Mobile/Profile";
import { ErrorPage } from "../pages/shared/ErrorPage";
import { ProductDetail } from "../pages/Mobile/ProductDetail";

export const RouterPath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route errorElement={<ErrorPage />} />

        <Route element={<UsermobileLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="profile" element={<Profile />} />
          <Route path="productDetails/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
