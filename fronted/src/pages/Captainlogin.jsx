import { useState } from 'react'
import { Link } from 'react-router-dom';

const Captainlogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    // const [captainData, setCaptainData] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData)
        // setCaptainData(formData)
        setFormData({
            email: '',
            password: ''
        });
    };

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img
                    src="https://www.svgrepo.com/show/505031/uber-driver.svg"
                    className='w-16 mb-2'
                    alt="Uber Logo"
                />
                <form onSubmit={submitHandler}>
                    <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
                    <input
                        className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7'
                        required
                        type="email"
                        name="email"
                        placeholder='email@example.com'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input
                        className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        required
                        type="password"
                        name="password"
                        placeholder='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className='w-full bg-black mb-5 py-3 text-white rounded mt-5 font-semibold'
                    >
                        Login
                    </button>
                </form>
                <p className='text-center'>
                    Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link>
                </p>
            </div>
            <div>
                <Link to='/login' className='flex justify-center w-full bg-[#d5662d] py-3 text-white rounded font-semibold'>
                    Sign in as User
                </Link>
            </div>
        </div>
    );
}

export default Captainlogin