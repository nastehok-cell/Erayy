import type { UserWithNoPassword } from '../types/DBTypes';
import { fetchData } from './fetchData';
import type { Credentials } from '../types/LocalTypes';

//kirjautuminen
const useAuthentication = () => {
  const postLogin = async (inputs: Credentials) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };

    return await fetchData<{ token: string; user: UserWithNoPassword }>(
  import.meta.env.VITE_AUTH_API + '/auth/login',
  fetchOptions
);

  };

  return { postLogin };
};

//AI:n tuottama useUser() hook
//Hakee käyttäjätiedot tokenin avulla
const useUser = () => {
  const getUserByToken = async (token: string): Promise<UserWithNoPassword | null> => {
    if (!token) return null;

    const options: RequestInit = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const result = await fetchData<{ user: UserWithNoPassword }>(
      import.meta.env.VITE_AUTH_API + '/users/token',
      options
    );

    return result.user;
  };
//Rekisteröi uuden käyttäjän
  const postRegister = async (inputs: Record<string, string>) => {
    const options: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs),
    };
    return await fetchData(import.meta.env.VITE_AUTH_API + '/users', options);
  };

  return { getUserByToken, postRegister };
};



export { useAuthentication, useUser};
