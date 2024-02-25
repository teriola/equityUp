function Register() {
    return (
        <>
            <form>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />

                <label htmlFor="username">Username</label>
                <input id="username" type="text" />

                <label htmlFor="password">Password</label>
                <input type="password" />
            </form>
        </>
    );
}
export default Register;