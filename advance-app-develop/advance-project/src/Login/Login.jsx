import React, { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/context";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSignUpClick = () => {
    document.querySelector(".container").classList.add("sign-up-mode");
  };

  const handleSignInClick = () => {
    document.querySelector(".container").classList.remove("sign-up-mode");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setPop(true);
    console.log(pop);
    localStorage.setItem("name", email.split("@")[0]);
    if (email.includes("@admin")) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  const [formData, setFormData] = useState({
    // role: 'user',
    email: "",
    name: "",
    password: "",
    // confirmPassword: '',
  });

  const [pop, setPop] = useContext(UserContext);
  const [name, setName] = useState("");

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   setPop(true);
  //   console.log(pop);
  //   localStorage.setItem("name",name)
  //   if(name.includes("@admin")){
  //     navigate("/dashboard")
  //   }else{
  //     navigate("/")
  //   }
  // };
  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));

    // if (field === "email") {
    //   validateEmail();
    // } else if (field === "name") {
    //   validateUsername();
    // } else if (field === "mobile") {
    //   validatePhoneNumber();
    // } else if (field === "password") {
    //   validatePassword();
    // validateConfirmPassword();
    // }
    //  else if (field === 'confirmPassword') {
    //   validateConfirmPassword();
    // }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:8081/api/v1/auth/register", formData)
      .then((r) => {
        alert("User registered Successfully");
      });

    const requiredFields = [
      "email",
      "name",
      "mobile",
      "password",
      // , 'confirmPassword'
    ];
    // const emptyFields = requiredFields.filter((field) => !formData[field]);

    // if (emptyFields.length > 0) {
    //   setErrors((prevErrors) => ({
    //     ...prevErrors,
    //     ...Object.fromEntries(
    //       emptyFields.map((field) => [field, "This field is required"])
    //     ),
    //   }));
    // } else {
    //   // Implement your sign-up logic here
    //   // Check if there are no errors
    //   const errorValues = Object.values(errors);
    //   if (errorValues.every((error) => error === "")) {
    //     // Your sign-up logic goes here
    //     // If successful, you can show a success message or navigate to another page
    //   }
    // }
    // navigate("/login");
  };
  const [formData2, setFormData2] = useState({
    email: "",
    password: "",
  });

  const handleInputChange2 = (field, value) => {
    setFormData2((prevFormData2) => ({
      ...prevFormData2,
      [field]: value,
    }));
  };

  const handleLogin = (e) => {
    if (formData2.email.includes("@admin")) {
      navigate("/dashboard");
    } else {
      e.preventDefault();
      console.log(formData2);
      axios
        .post("http://localhost:8081/api/v1/auth/authenticate", formData)
        .then((r) => {
          console.log(r);

          alert("Verified User");
        });
      setPop(true);
      localStorage.setItem("logged", "true");

      localStorage.setItem("name", formData2.email);
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleLogin} className="sign-in-form">
            <h2 className="title">Login</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="email"
                placeholder="Email id"
                onChange={(e) => handleInputChange2("email", e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => handleInputChange2("password", e.target.value)}
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
              />
            </div>
            <input
              type="submit"
              className="btn"
              value="Sign up"
              onClick={handleSignUp}
            />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Login
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
