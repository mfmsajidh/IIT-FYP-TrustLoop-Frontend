import LoginView from "../view/LoginView.jsx";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_CONSTANTS } from "../../../constants/constants.js";
import axios from "axios";
import { UserContext } from "../../../context/UserContext.jsx";

const LoginController = () => {
  const navigate = useNavigate();
  const { signInUser } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // Handle login function API call and validations
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!email || email === "") {
      alert("Invalid email");
      return;
    }

    if (!password || password === "") {
      alert("Invalid password");
      return;
    }

    setIsLoading(true);
    await axios
      .post(`${API_CONSTANTS.baseUrl}/authentication/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.isError) {
          alert(response.data.message);
          return;
        }

        signInUser(response.data.data.token);
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error.response.data.message);
      });
  };

  return (
    <LoginView
      isLoading={isLoading}
      handleLoginSubmit={handleLoginSubmit}
      email={email}
      password={password}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
    />
  );
};

export default LoginController;
