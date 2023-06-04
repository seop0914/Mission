import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullLayout from "../components/Layout/FullLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ToDo from "../pages/ToDo/ToDo";
import Community from "../pages/Community/Community";
import Notice from "../pages/Notice/Notice";
import AddPost from "../pages/AddPost/AddPost";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<FullLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<ToDo />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/community/new" element={<AddPost />} />
                    <Route path="/notice" element={<Notice />} />
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
