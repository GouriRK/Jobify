import { useState, useEffect } from "react";
import { Logo, Formrow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: "",
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  //global state and useNavigate.

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h4>Register</h4>
        <Formrow type="text" name="name" defaultValue="gauri" />
        <Formrow
          type="text"
          name="lastName"
          labelText="lastname"
          defaultValue="shirodkar"
        />
        <Formrow type="text" name="location" defaultValue="earth" />
        <Formrow type="email" name="email" defaultValue="gauri@gmail.com" />
        <Formrow type="password" name="password" defaultValue="secret123" />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
