import { createBrowserRouter} from "react-router-dom";

import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Users } from "./pages/users";


export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "users",
    element: <Users />,
  },
 
]);