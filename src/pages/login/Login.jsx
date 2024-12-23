import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    //* creating two useState
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //* navigate
    const navigate = useNavigate();

    //* Login Handle Function 
    const loginHandle = async () => {

        const res = await fetch(`${import.meta.env.VITE_BACKEND_HOST_URL}/api/auth/login`, {
            method : 'POST',
            headers : {
                'content-type': 'application/json'
            },
            body : JSON.stringify({email,password})
        });

         //* receiving response 
        const loginData = await res.json();
        // console.log(loginData.success);
        // console.log(loginData.token)

        //* condition
        if(loginData.error){
            toast.error(loginData.error);
        }else{
            navigate('/')
            toast.success('login successfully')
            localStorage.setItem('token', loginData.token)
        }

        setEmail("");
        setPassword("");

    }

    return (
        <div className=' flex justify-center items-center h-screen'>

            {/* main div  */}
            <div className=' bg-[#d2cbbf] shadow-md px-10 py-10 rounded-xl '>

                {/* Top Heading  */}
                <div className="">
                    <h1 className='text-center text-black text-xl mb-4 font-bold'>Login</h1>
                </div>

                {/* Input 1 Email  */}
                <div>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name='email'
                        className=' bg-[#beb9b1] border border-green-700 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black outline-none'
                        placeholder='Email'
                    />
                </div>

                {/* Input 2 Password  */}
                <div>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className='bg-[#beb9b1] border border-green-700 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black outline-none'
                        placeholder='Password'
                    />
                </div>

                {/* Button For Login  */}
                <div className=' flex justify-center mb-3'>
                    <button
                    onClick={loginHandle}
                        className=' bg-green-700 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>

                {/* Link for Signup  */}
                <div>
                    <h2 className='text-black'>Don't have an account <Link className=' text-red-700 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login