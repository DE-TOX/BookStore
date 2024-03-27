import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import ProductContainer from "../components/Product/ProductContainer";
import ProductDetails from "../components/Product/ProductDetail";
import Cart from "../components/Cart/Cart";
import Success from "../pages/Success";

export const Routers = () => {
    const AppRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/dashboard",
            element: <Dashboard />,

            children: [
                {
                    path: "product",
                    element: <ProductContainer />
                },
                {
                    // path: "details",
                    path: ":id",
                    element: <ProductDetails />
                },
                {
                    path: "cart",
                    element: <Cart />
                },
                {
                    path: "success",
                    element: <Success />
                }
            ],
        }
    ])
    return (
        <RouterProvider router={AppRoutes} ></RouterProvider>
    )
}
