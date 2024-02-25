import LoginStyles from './Login.module.css';
import { useForm } from 'react-hook-form';

function Login() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async ({ email, password }) => {
        try {
            // const user = await login(email, password);

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <form className={LoginStyles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            {/* {errors.email?.type === 'required' && <span className="text-sm absolute -top-6 left-2 text-red-500">Email is required</span>}
            {errors.email?.type === 'pattern' && <span className="text-sm absolute -top-6 left-2 text-red-500">Ivalid email</span>} */}
            <input
                className={LoginStyles.inputField}
                name="email"
                placeholder="Email"
                {...register('email', { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
                // aria-invalid={errors.email ? 'true' : 'false'} 
                />
            {/* {errors.password?.type === 'required' && <span className="text-sm absolute top-9 left-2 text-red-500">Password is required</span>}
            {errors.password?.type === 'minLength' && <span className="text-sm absolute top-9 left-2 text-red-500">Password is too short</span>} */}
            <input
                className={LoginStyles.inputField}
                name="password"
                type="password"
                placeholder="Password"
                {...register('password', { required: true, minLength: 6 })}
                // aria-invalid={errors.password ? 'true' : 'false'} 
                />
            {/* <span className="text-sm absolute top-24 left-2 text-red-500">{errors.server && errors.server.message}</span> */}
            <input
                className={LoginStyles.submitBtn}
                type="submit"
                // disabled={isSubmitting || isLoading}
                // value={isLoading ? "Logging in..." : "Login"} 
                />
        </form>
    );
}

export default Login;