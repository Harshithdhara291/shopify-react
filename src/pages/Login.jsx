import styled from "styled-components";
import { CiAt, CiLock } from "react-icons/ci";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { BiSolidError } from "react-icons/bi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowHide = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("login")
    try {
      const response = await axios.post(
        "https://shopify-backend-ah7e.onrender.com/login",
        {
          email: email,
          password: password,
        }
      );
      console.log("Login successful", response.data);
      localStorage.setItem("jwtToken",response.data.token)
      setLoading(false);
      setErrorMsg("");
      navigate("/");
    } catch (error) {
      console.error("Login failed", error.response.data);
      setLoading(false);
      setErrorMsg(error.response.data.message);
    }
  };

  const jwtToken = localStorage.getItem('jwtToken')

  if (jwtToken !== null) {
    return <Navigate to="/" />
  }

  return (
    <Container>
      <form className="form" onSubmit={handleLogin}>
      {errorMsg!=='' && <ErrorContainer>
          <span><BiSolidErrorIcon/></span>
            <p>{errorMsg}</p>
          </ErrorContainer>}
        <div className="flex-column">
          <label>Email </label>
        </div>
        <div className="inputForm">
          <CiAt />
          <input
            type="text"
            className="input"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex-column">
          <label>Password </label>
        </div>
        <div className="inputForm">
          <CiLock />
          <div className="input-field">
            <input
              type={showPassword ? "text" : "password"}
              className="input"
              placeholder="Enter your Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button onClick={handleShowHide}>
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
        </div>
        <button type="submit" className="button-submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
        <p className="p">
          Dont have an account?{" "}
          <Link className="span" to="/register">
            Sign Up
          </Link>
        </p>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    padding: 30px;
    width: 450px;
    border-radius: 10px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    border: 2px solid #000000a0;
  }

  ::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .form button {
    align-self: flex-end;
  }

  .flex-column > label {
    color: #151717;
    font-weight: 600;
  }

  .inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.2s ease-in-out;
  }

  .input {
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    width: 85%;
    height: 100%;
  }

  .input:focus {
    outline: none;
  }

  .inputForm:focus-within {
    border: 1.5px solid #2d79f3;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
  }

  .flex-row > div > label {
    font-size: 14px;
    color: black;
    font-weight: 400;
  }

  .span {
    font-size: 14px;
    margin-left: 5px;
    color: #2d79f3;
    font-weight: 500;
    cursor: pointer;
  }

  .button-submit {
    margin: 20px 0 10px 0;
    background-color: #151717;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    cursor: pointer;
  }

  .button-submit:hover {
    background-color: #252727;
  }

  .p {
    text-align: center;
    color: black;
    font-size: 14px;
    margin: 5px 0;
  }

  .btn {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    gap: 10px;
    border: 1px solid #ededef;
    background-color: white;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .btn:hover {
    border: 1px solid #2d79f3;
  }
  .input-field{
    display: flex;
    width: 100%;
    button{
      background: none;
      border: none;
    }
  }
`;

const ErrorContainer = styled.div`
  background-color: #ff4040;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding: 1.4rem;
  border-radius: 6px;
  p{
    font-size: 1.2rem;
    margin: 0;
    color: #000000;
  }
  span{
    margin: 0 .6rem 0 0;
  }
`

const BiSolidErrorIcon = styled(BiSolidError)`
  font-size: 1rem; 
`;