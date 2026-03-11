import { Routes, Route } from 'react-router-dom';
import Home from "./views/Home";
import Category from "./views/Category";
import Profile from "./views/Profile";
import Login from "./views/Login";
import Header from './components/header';
import Register from './views/Register';
import {UserProvider} from './contexts/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import Logout from "./views/Logout"

const App = () => {
   return (
    <>
        <UserProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Category />} />
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </UserProvider>
    </>
    );
};

export default App;