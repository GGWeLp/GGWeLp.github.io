import "./Register.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Register(props) {
    const navigate = useNavigate();
    useEffect(async () => {
  
    }, [])
  
  
    const urlparams = new URLSearchParams(window.location.search);
    const roomId = urlparams.get("id");
    const isRedirected = sessionStorage.getItem('redirected');
//     return (
//       <div className="Register">
//         <button onClick={() => {
//           sessionStorage.setItem('userName', document.getElementById('userName').value);
//           navigate({pathname: "/app", search: "?id=" + roomId});
//         }}>{isRedirected? 'Login Now': 'Sign Up'}</button>
//         <input id="userName"/>
//       </div>
//     );
//   }

// function Register(props) {
//     const navigate = useNavigate();
//     useEffect(async () => {

//     }, [])


//     const urlparams = new URLSearchParams(window.location.search);
//     const roomId = urlparams.get("id");
//     const isRedirected = sessionStorage.getItem('redirected');

//     <div className="Register">
//         <button onClick={() => {
//             navigate({ pathname: "/Register", search: "?id=" + roomId });
//         }}>{isRedirected ? 'Login Now' : 'Signup Now'}</button>
//         <input id="userName" />
//     </div>

    const Register = () => {
        return (
            <body>
                <div className="container">
                    <div class="form" />
                    <span class="title">Registration Form</span>

                    <form action="#">
                        <div class="input-field">
                            <input type="text" placeholder="Enter your name" required />
                            <i class="uil uil-user"></i>
                        </div>
                        <div class="input-field">
                            <input type="text" placeholder="Enter your email" required />
                            <i class="uil uil-envelope icon"></i>
                        </div>
                        <div class="input-field">
                            <input type="password" class="password" placeholder="Create a password" required />
                            <i class="uil uil-lock icon"></i>
                        </div>
                        <div class="input-field">
                            <input type="password" class="password" placeholder="Confirm a password" required />
                            <i class="uil uil-lock icon"></i>
                            <i class="uil uil-eye-slash showHidePw"></i>
                        </div>

                        <div class="checkbox-text">
                            <div class="checkbox-content">
                                <input type="checkbox" id="sigCheck" />
                                <label for="sigCheck" class="text">Remember me</label>
                            </div>

                            <a href="#" class="text">Forgot password?</a>
                        </div>

                        <div class="input-field button">
                            <input type="button" value="Login Now" />
                        </div>
                    </form>

                    <div class="login-signup">
                        <span class="text">Not a member?
                            <a href="#" class="text login-link">Signup now</a>
                        </span>
                    </div>
                </div>

                

                <div className="Register">
                    <button onClick={() => {
                        sessionStorage.setItem('userName', document.getElementById('userName').value);
                        navigate({ pathname: "/app", search: "?id=" + roomId });
                    }}>{isRedirected ? 'Login Now' : 'Sign Up'}</button>
                    <input id="userName" />
                </div>
            </body>
        )
    }
}
export default Register;