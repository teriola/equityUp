import RegisterStyles from './Register.module.css';
import { useForm } from 'react-hook-form';

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onRegister = ({ email, username, password, rePassword }) => {
        console.log({ email, username, password, rePassword });
    }

    return (
        <>
            <form className={RegisterStyles.form} onSubmit={handleSubmit(onRegister)}>

                {/* EMAIL */}
                <div className={RegisterStyles.control}>
                    <label htmlFor="email">Email</label>
                    <input {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Invalid email'
                        }

                    })} type="email" id="email" />
                    {errors.email && <p className={RegisterStyles.error}>{errors.email.message}</p>}
                </div>

                {/* USERNAME */}
                <div className={RegisterStyles.control}>
                    <label htmlFor="username">Username</label>
                    <input {...register('username', {
                        required: 'Username is required',
                        minLength: {
                            value: 3,
                            message: 'Username must be at least 3 characters long'
                        }
                    })} type="text" id="username" />
                    {errors.username && <p className={RegisterStyles.error}>{errors.username.message}</p>}
                </div>

                {/* PASSWORD */}
                <div className={RegisterStyles.control}>
                    <label htmlFor="password">Password</label>
                    <input {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters long'
                        },
                    })} type="password" id="password" />
                    {errors.password && <p className={RegisterStyles.error}>{errors.password.message}</p>}
                </div>

                {/* REPEAT PASSWORD */}
                <div className={RegisterStyles.control}>
                    <label htmlFor="rePassword">Re-Password</label>
                    <input {...register('rePassword', {
                        required: 'Re-Password is required',
                        minLength: {
                            value: 6,
                            message: 'Re-Password must be at least 6 characters long'

                        }
                    })} type="password" id="rePassword" />
                    {errors.rePassword && <p className={RegisterStyles.error}>{errors.rePassword.message}</p>}
                </div>
                <button>Register</button>
            </form>
        </>
    );
}
export default Register;