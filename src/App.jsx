import { RouterProvider } from "react-router-dom";
import { route } from "./route";




export const App = () => {
  return (
    <>
     
      <RouterProvider router={route} />
    </>
  );
};

export default App
