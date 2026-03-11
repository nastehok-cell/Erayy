// Profile.tsx
import Upload from '../components/Upload';
import {useUserContext} from '../hooks/ContextHooks';
//Renderöi profiili-sivun, jossa käyttäjän tiedot
const Profile = () => {
    const {user} = useUserContext();

    return (
        <div className="profile-container">
            {user && (
                <>
                    <div className="user-container">
                        <h2>Profile</h2>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>

                    <div className="right-container">
                        <Upload />
                    </div>
                </>
             )}
        </div>
    );
};

export default Profile;