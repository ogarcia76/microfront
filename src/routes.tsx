import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"


export const AppRoutes = () => {
    return (
        <BrowserRouter> 
            <Routes>
                <Route key="oneApp" path="/one" element={<App />} />
                <Route key="button" path="/button" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}