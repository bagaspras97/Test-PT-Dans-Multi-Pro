import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {

    const accessToken = localStorage.getItem('access_token')
    const navigate = useNavigate()

    const handleLogout = () => {
        setIsLoggedIn(false)
        localStorage.removeItem('access_token')
        navigate('/login')
    }


    return (
        <div className='py-2 bg-blue-500 flex justify-between items-center'>
            <div className='text-lg hover:cursor-pointer' onClick={() => navigate('/')}>
                <span className='text-white px-1'>GitHub</span>
                <span className='text-slate-400'>Jobs</span>
            </div>
            {(isLoggedIn || accessToken) && (
                <div>
                    <button
                        className='bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-white'
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    )
}

export default Navbar