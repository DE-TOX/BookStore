import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import ProductContainer from "../components/Product/ProductContainer";
import ProductDetails from "../components/Product/ProductDetail";
import Cart from "../components/Cart/Cart";

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
                    path: "details",
                    element: <ProductDetails />
                },
                {
                    path: "cart",
                    element: <Cart />
                }
            ],
        }
    ])
    return (
        <RouterProvider router={AppRoutes} ></RouterProvider>
    )
}
