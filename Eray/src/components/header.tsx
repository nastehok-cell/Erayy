import { Link } from "react-router";
import {useEffect} from 'react';
import {useUserContext} from '../hooks/ContextHooks';
import { BookOpenText } from "lucide-react";


const Header = () => {
  const {user, handleAutoLogin} = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);
  return (
        <nav className="navigation">
          <div className="navdiv">
          <div className="Logo"><li><Link to="/"><BookOpenText size={24} /> Eray</Link></li></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                {user && <li><Link to="/profile">Profile</Link></li>}
                {!user && <li><Link to="/login">Login</Link></li>}
                {user && <li><Link to="/logout">Logout</Link></li>}
            </ul>
          </div>
        </nav>
  );
};

export default Header;

