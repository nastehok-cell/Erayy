import { useUser } from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';

const RegisterForm = () => {
  const { postRegister } = useUser();

//Lomakkeen alkuarvot
  const initValues = {
    username: '',
    password: '',
    email: '',
  };
//Suoritetaan kun lomake on lähetetty
  const doRegister = async () => {
  console.log("Sending register:", inputs);

  try {
    const registerResult = await postRegister(inputs);
    console.log("Register result:", registerResult);
  } catch (error) {
    console.error("Register failed:", error);
  }
};
 //Custom-hookit inputeille
  const {inputs, handleInputChange, handleSubmit} = useForm(doRegister, initValues);
  console.log(inputs);

  return (
    <div className="container">
      <form className="formscontainer" onSubmit={handleSubmit}>
             <h2>Register</h2>
             <div className="inputsstyle">
              <label htmlFor='Username'>Username</label>
              <input type="text" name="username" placeholder="Enter Username" onChange={handleInputChange}/>
            </div>
            <div className="inputsstyle">
              <label htmlFor='Email'>Email</label>
              <input type="text" name="email" placeholder="Enter Email" onChange={handleInputChange}/>
            </div>
            <div className="inputsstyle">
              <label htmlFor='Password'>Password</label>
              <input type="password" name="password" placeholder="Enter Password" onChange={handleInputChange}/>
            </div>
            <button className="formsbutton" type="submit">Register</button>

          <div className="register-link">
            <p>Already a member? <a href="/login">Login here</a></p>
          </div>
        </form>
      </div>
    )
}

export default RegisterForm;