import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {


    const navigate = useNavigate();

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '853036717517-u6ro832gnsq9trog22bp0hpei87t2frn.apps.googleusercontent.com',
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        )
    }, [])

    const handleCallbackResponse = (response) => {
        setIsLoggedIn(true)
        localStorage.setItem('access_token', response.credential)
        navigate('/')
    }


    return (
        <div className='flex justify-center mt-2' id='signInDiv'></div>

    )
}

export default Login