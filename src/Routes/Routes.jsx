import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";
import Signup from "../Components/SignUp";
import Signin from "../Components/SignIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PlantsDetails from "../Components/PlantsDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/plants',
                Component: Plants
            },
            {
                path: '/myProfile',
                element:(
                    <PrivateRoute>
                        <MyProfile></MyProfile>
                    </PrivateRoute>)
            },
            {
                path: '/Signup',
                Component: Signup
            },
            {
                path: '/signin',
                Component: Signin
            },
            {
                path :'/plantDetails/:id',
                element:(
                    <PrivateRoute>
                        <PlantsDetails></PlantsDetails>
                    </PrivateRoute>
                )
            }
        ]
    }
])