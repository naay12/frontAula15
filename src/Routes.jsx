import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home";

import FormularioPage from "./pages/form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/form/:id",
    element: <FormularioPage />,
  },
]);

function Routes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routes;