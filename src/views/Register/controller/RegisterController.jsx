import RegisterView from "../view/RegisterView.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {API_CONSTANTS} from "../../../constants/constants.js";

const RegisterController = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleRegisterSubmit = async (e) => {
        e.preventDefault()
        if(!name || name === ''){
            alert("Invalid Name")
            return
        }
        if (!email || email === '') {
            alert("Invalid email")
            return
        }

        if (!password || password === '') {
            alert("Invalid password")
            return
        }

        setIsLoading(true)
        try {
            setIsLoading(false)
            const response = await axios.post(`${API_CONSTANTS.baseUrl}/authentication/register`, {
                email: email,
                password: password,
                name: name
            })

            if(response.data.isError) {
                alert(response.data.message)
            }

            navigate('/signIn', { replace: true })

        } catch (error) {
            setIsLoading(false)
            alert(error.response.data.message)
        }
    }

    return <RegisterView
        handleRegisterSubmit={handleRegisterSubmit}
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        isLoading={isLoading}
        email={email}
        password={password}
        name={name}
    />
}

export  default  RegisterController
