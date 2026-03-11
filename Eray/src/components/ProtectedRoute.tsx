import {Navigate} from 'react-router-dom';
import {useUserContext} from '../hooks/ContextHooks';

//Komponentti näyttää sivun kirjautuneille ja ohjaa ei-kirjautuneet Home-sivulle
const ProtectedRoute = ({children}: {children: React.ReactNode}) => {
    const {user} = useUserContext();
    if (!user) {
        return <Navigate to="/" />;
    }
    return children;
};

export default ProtectedRoute;