import styled from "styled-components";
import { CiAt, CiLock } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { BiSolidError } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleShowHide = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send the form data using Axios
      const response = await axios.post(
        "https://shopify-backend-ah7e.onrender.com/register",
        formData
      );
      console.log("Registration successful", response);
      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed", error);
      setErrorMsg(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <Container>
      <form className="form">
        {errorMsg !== "" && (
          <ErrorContainer>
            <div>
              <span>
                <BiSolidErrorIcon />
              </span>
              <p>{errorMsg}</p>
            </div>
            <button onClick={() => setErrorMsg("")}>
              <FaXmark />
            </button>
          </ErrorContainer>
        )}
        <div className="flex-column">
          <label>Email </label>
        </div>
        <div className="inputForm">
          <CiAt />
          <input
            type="text"
            className="input"
            placeholder="Enter your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex-column">
          <label>Username </label>
        </div>
        <div className="inputForm">
          <FaRegUserCircle />
          <input
            type="text"
            className="input"
            placeholder="Enter your Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button onClick={handleShowHide}>
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="button-submit"
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
        <p className="p">
          Already have an account?{" "}
          <Link className="span" to="/login">
            Sign In
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
  min-height: 87vh;

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
  background-color: #d89d31;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 30%; */
  height: 1%.6rem;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 6px;
  p {
    font-size: 1.2rem;
    margin: 0;
    color: #000000;
  }
  span {
    margin: 0 0.6rem 0 0;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BiSolidErrorIcon = styled(BiSolidError)`
  font-size: 1.3rem;
`;
