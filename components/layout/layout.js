import React, { Fragment } from "react";
import MainNavigation from "./main-navigation";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main className="min-h-screen">{props.children}</main>
      <footer className="py-5 w-full bg-primary-1 mt-10 ">
        <div className="flex items-center justify-center text-white lg:text-lg">
          Copyright © 2022 Nieve Christian Academy
        </div>
      </footer>
    </Fragment>
  );
}

export default Layout;
