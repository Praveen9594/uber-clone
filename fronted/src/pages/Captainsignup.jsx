import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Captainsignup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: ''
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
            password: '',
            firstname: '',
            lastname: ''
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
                    <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
                    <div className='flex gap-4 mb-5'>
                        <input
                            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                            required
                            type="text"
                            name="firstname"
                            placeholder='First name'
                            value={formData.firstname}
                            onChange={handleChange}
                        />
                        <input
                            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base'
                            required
                            type="text"
                            name="lastname"
                            placeholder='Last name'
                            value={formData.lastname}
                            onChange={handleChange}
                        />
                    </div>

                    <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
                    <input
                        className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-5'
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
                    Already have an account? <Link to='/captain-login' className='text-blue-600'>Captain Login Here</Link>
                </p>
            </div>
            <div>
                <p className='text-[11px] text-gray-400 leading-tight '>This site is protected by reCAPTCHA and the <span className='underline font-bold'>Google Privacy Policy </span>and <span className='underline font-bold'>Terms of Service apply</span>.</p>
            </div>
        </div>
    );
}

export default Captainsignup