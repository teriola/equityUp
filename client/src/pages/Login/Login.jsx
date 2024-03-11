import { useAuth } from '../../contexts/AuthContext';
import { loginUser } from '../../services/authService';
import LoginStyles from './Login.module.css';
import { useForm } from 'react-hook-form';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setUser } = useAuth();

    const onLogin = ({ email, password }) => {
        loginUser(email, password).then((userData) => {
            setUser(userData);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <>
            <form className={LoginStyles.form} onSubmit={handleSubmit(onLogin)}>

                {/* EMAIL */}
                <div className={LoginStyles.control}>
                    <label htmlFor="email">Email</label>
                    <input {...register('email', {
                        required: 'Email is required',
                        maxLength: {
                            value: 30,
                            message: 'Email is too long'
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Invalid email'
                        }
                    })} type="email" id="email" />
                    {errors.email && <p className={LoginStyles.error}>{errors.email.message}</p>}
                </div>

                {/* PASSWORD */}
                <div className={LoginStyles.control}>
                    <label htmlFor="password">Password</label>
                    <input {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters long'
                        },
                        maxLength: {
                            value: 18,
                            message: 'Password must be at most 18 characters long'
                        }
                    })} type="password" id="password" />
                    {errors.password && <p className={LoginStyles.error}>{errors.password.message}</p>}
                </div>

                <button>Login</button>
            </form>
        </>
    );
}

export default Login;