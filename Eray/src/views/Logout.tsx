import {useUserContext} from '../hooks/ContextHooks';

//Renderöi Logout sivun ja kirjaa käyttäjän pois
const Logout = () => {
  const {handleLogout} = useUserContext();

  return (
    <>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Logout;