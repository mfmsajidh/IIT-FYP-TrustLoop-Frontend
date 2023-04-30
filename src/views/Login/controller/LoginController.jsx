import LoginView from "../view/LoginView.jsx";

const LoginController = () => {

    // Handle login function API call and validations
    const handleLoginSubmit = () => {
        console.log("Login Submit")
    }

    return <LoginView handleLoginSubmit={handleLoginSubmit}/>
}

export  default  LoginController
