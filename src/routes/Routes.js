import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard  from "../components/Dashboard/Dashboard";
import ProductContainer from "../components/Product/ProductContainer";

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
                { path: "product", element: <ProductContainer />  }
            //     { path: "archive", element: <ProtectedRoute><ArciveContainer /> </ProtectedRoute> },
            //     { path: "trash", element: <ProtectedRoute><TrashContainer /></ProtectedRoute> }
            ],
        }
    ])
    return (
        <RouterProvider router={AppRoutes} ></RouterProvider>
    )
}
