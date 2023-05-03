import RegisterView from "../view/RegisterView.jsx";
import { useNavigate } from "react-router-dom";
import { useCallback, useMemo, useState } from "react";
import axios from "axios";
import { API_CONSTANTS } from "../../../constants/constants.js";
import StellarUtil from "../../../utils/stellarUtil.js";

const RegisterController = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const keypair = useMemo(() => StellarUtil.createKeypair(), []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!name || name === "") {
      alert("Invalid Name");
      return;
    }
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
      .post(`${API_CONSTANTS.baseUrl}/authentication/register`, {
        email: email,
        password: password,
        name: name,
        publicKey: keypair.publicKey,
        secret: keypair.secret,
      })
      .then(async (response) => {
        if (response.data.isError) {
          alert(`${response.data.message}`);
          return;
        }

        await StellarUtil.createWallet(keypair.publicKey);
        navigate("/signin", { replace: true });
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error.response.data.message);
      });
  };

  return (
    <RegisterView
      handleRegisterSubmit={handleRegisterSubmit}
      handleNameChange={handleNameChange}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      isLoading={isLoading}
      email={email}
      password={password}
      name={name}
      keypair={keypair}
    />
  );
};

export default RegisterController;
