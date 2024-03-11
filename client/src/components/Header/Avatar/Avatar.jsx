import AvatarStyles from './Avatar.module.css';

function Avatar({ auth }) {
    return (
        <div className={AvatarStyles.avatarContainer}>
            <img className={AvatarStyles.avatarImage} src={auth.profilePicture} alt="Avatar image" />
        </div >
    );
}

export default Avatar;