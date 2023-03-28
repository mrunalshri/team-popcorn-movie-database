import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/header";
import NavLinks from "../Components/navLinks/navlinks";
import { WatchListProvider } from "../watchList_context";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <NavLinks />
      <WatchListProvider>
        <Outlet />
      </WatchListProvider>
    </>
  );
};
