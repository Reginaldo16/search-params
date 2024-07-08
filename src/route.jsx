import { createBrowserRouter} from "react-router-dom";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Users } from "./pages/users";
import { UserDetails } from "./pages/userDetails";
import { NotFound } from "./pages/404";


export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,errorElement:<NotFound/>
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "users",
    element: <Users />,
  },

  {
    path:"/users/:username",
    element: <UserDetails/>
  }
 
]);