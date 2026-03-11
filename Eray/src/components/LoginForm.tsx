import useForm from '../hooks/formHooks';
import type { Credentials } from '../types/LocalTypes';
import {useUserContext} from '../hooks/ContextHooks';
import { Link } from 'react-router-dom';

//Hakee useUsercontexista handleLogin-funktion
const LoginForm = () => {
  const {handleLogin} = useUserContext();

//Lomakkeen alkuarvot
  const initValues: Credentials = {
    username: '',
    password: '',
  };
//Suoritetaan kun lomake on toimitettu
  const doLogin = async () => {
    handleLogin(inputs as Credentials);
  };

  //Custom-hookit inputeille
    const {inputs, handleInputChange, handleSubmit} = useForm(doLogin, initValues);
    console.log(inputs);


return (
      <div className="container">
          <form className="formscontainer" onSubmit={handleSubmit}>
             <h2>Login</h2>
             <div className="inputsstyle">
              <label htmlFor='Username'>Username</label>
              <input type="text" name="username" placeholder="Enter Username" onChange={handleInputChange}/>
            </div>
            <div className="inputsstyle">
              <label htmlFor='Password'>Password</label>
              <input type="password" name="password" placeholder="Enter Password" onChange={handleInputChange}/>
            </div>
            <button className="formsbutton" type="submit">Login</button>

          <div className="register-link">
            <p>Not a member yet? <Link to="/register">Register here</Link></p>
          </div>
        </form>
      </div>
        
    )
};
export default LoginForm;