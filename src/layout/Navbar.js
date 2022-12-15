import React from "react";
import { NavLink } from "react-router-dom";
import { listNavigation } from "../constants/const";

const Navbar = ({ children }) => {
    return (
        <div className="flex">
            <div className="h-screen w-[200px] p-4 text-right border-r-4 border-solid border-[#0B0C11]">
                {listNavigation.map((navigationItem) => (
                    <NavLink
                        to="dashboard"
                        key={navigationItem.id}
                        className="flex col justify-end mb-4 font-semibold border-b border-solid border-[#B9B5B5]"
                    >
                        {navigationItem.text}
                    </NavLink>
                ))}
            </div>
            <div className="p-4">{children}</div>
        </div>
    );
};

export default Navbar;
