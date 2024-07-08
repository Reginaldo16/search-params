import { NavLink } from "react-router-dom";
const active = "text-red-500"
const inactive="text-white"


export const NavBar = () =>{
    return (
        <nav className="space-x-2">
            <NavLink to={"/"}
                className={({ isActive }) =>
                    `${isActive ? active : inactive}`
                  }
                >
                  HOME
            </NavLink>

            <NavLink to={"/contact"}
                className={({ isActive }) =>
                    `${isActive ? active : inactive}`
                  }
                >
                   CONTACT
            </NavLink>


            <NavLink to={"/users"}
                className={({ isActive }) =>
                    `${isActive ? active : inactive}`
                  }
                >
                   USERS
            </NavLink>
        </nav>
    )
}