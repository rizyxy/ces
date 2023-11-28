import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Layout from "./page/layout";
import Home from "./page/home";
import Payment from "./page/payment";

const App = () => {
    return(<BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index path="/home" element={<Home />} />
                <Route path="/payment" element={<Payment />} />
            </Route>
        </Routes>
    </BrowserRouter>)
};

export default App;