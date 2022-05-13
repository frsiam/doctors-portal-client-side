import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        if (user) {
            console.log(user)
            console.dir(user)
        }
    }, [user])

    const onSubmit = data => console.log(data);

    return (
        <div className='flex justify-center h-[calc(100vh-70px)] items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="text-2xl font-bold">Please Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: 'error message' // JS only: <p>error message</p> TS only support string
                                }
                            })} type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                <span class="label-text-alt">Alt label</span>
                            </label>
                            {/* Password input field */}
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                <span class="label-text-alt">Alt label</span>
                            </label>
                        </div>

                        <input {...register("firstName", { required: true })} />
                        {errors.firstName?.type === 'required' && "First name is required"}

                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && "Last name is required"}

                        <input type="submit" />
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;