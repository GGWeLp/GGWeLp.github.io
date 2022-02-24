import "./LoginPage.css"
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    return (
        <body>
        <div className="container">
        <div class="forms"/>
            <div class="form login"/>
                <span class="title">Login</span>

                <form action="#">
                    <div class="input-field">
                        <input type="text" placeholder="Enter your email" required/>
                        <i class="uil uil-envelope icon"></i>
                    </div>
                    <div class="input-field">
                        <input type="password" class="password" placeholder="Enter your password" required/>
                        <i class="uil uil-lock icon"></i>
                        <i class="uil uil-eye-slash showHidePw"></i>
                    </div>

                    <div class="checkbox-text">
                        <div class="checkbox-content">
                            <input type="checkbox" id="logCheck"/>
                            <label for="logCheck" class="text">Remember me</label>
                        </div>
                        
                        <a href="#" class="text">Forgot password?</a>
                    </div>

                    <div class="input-field button">
                        <input type="button" value="Login Now"/>
                    </div>
                </form>

                <div class="login-signup">
                    <span class="text">Not a member?
                        <a href="#" class="text signup-link">Signup now</a>
                    </span>
                </div>
            </div>
        </body>

        
function LoginPage(props) {
    const navigate = useNavigate();
    useEffect(async () => {
  
    }, [])
  
  
    const urlparams = new URLSearchParams(window.location.search);
    const roomId = urlparams.get("id");
    const isRedirected = sessionStorage.getItem('redirected');
    return (
      <div className="Login">
        <button onClick={() => {
          sessionStorage.setItem('userName', document.getElementById('userName').value);
          navigate({pathname: "/Login", search: "?id=" + roomId});
        }}>{isRedirected? 'Login': 'Re'}</button>
        <input id="userName"/>
      </div>
    );
  }


    )
}


export default LoginPage;