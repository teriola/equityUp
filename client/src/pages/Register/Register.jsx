import RegisterStyles from './Register.module.css';

function Register() {
    return (
        <>
            <form className={RegisterStyles.form}>
                <div className={RegisterStyles.control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>
                <div className={RegisterStyles.control}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" required />
                </div>
                <div className={RegisterStyles.control}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                </div>
                <div className={RegisterStyles.control}>
                    <label htmlFor="rePassword">Re-Password</label>
                    <input type="password" id="rePassword" required />
                </div>
                <button>Register</button>
            </form>
        </>
    );
}
export default Register;