import React, { Suspense } from "react";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      Layout
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
