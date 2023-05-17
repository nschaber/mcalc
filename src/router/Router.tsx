import {createHashRouter, Outlet} from "react-router-dom";
import App from "../app/App.tsx";
import Error from "../app/Error.tsx";
import Root from "../pages/Root.tsx";
import Calculator from "../pages/Calculator.tsx";
import {CalculatorProvider} from "../provider/CalculatorProvider.tsx";
import CheckOut from "../pages/CheckOut.tsx";

export const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Root />,
            },
            {
                path: "mb",
                element: <CalculatorProvider type={"mb"} name={"Megabar"}>
                    <Outlet/>
                </CalculatorProvider>,
                children: [
                    {
                        index: true,
                        element: <Calculator />
                    },
                    {
                        path: "checkout",
                        element: <CheckOut />
                    }
                ]
            },
            {
                path: "bb",
                element: <CalculatorProvider type={"bb"} name={"Bierburg"}>
                    <Outlet/>
                </CalculatorProvider>,
                children: [
                    {
                        index: true,
                        element: <Calculator />
                    },
                    {
                        path: "checkout",
                        element: <CheckOut />
                    }
                ]
            },
        ],
    },
]);