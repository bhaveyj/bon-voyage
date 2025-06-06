import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/home" element = {<Home />} />
                <Route path = "/login" element = {<Login />} />
                <Route path = "/register" element = {<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
