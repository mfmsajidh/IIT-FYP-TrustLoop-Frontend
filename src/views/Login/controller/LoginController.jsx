import LoginView from "../view/LoginView.jsx";

const LoginController = () => {

    const handleLoginSubmit = () => {
        console.log("Login Submit")
    }

    return <LoginView handleLoginSubmit={handleLoginSubmit}/>
}

export  default  LoginController
