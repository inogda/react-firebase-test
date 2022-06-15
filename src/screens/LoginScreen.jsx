import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
//import "./Login.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {Form} from '../components/formlogin/FormLogin';
import {toast} from "react-toastify";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                navigate("/");
            })
            .catch((error) => {
                //const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage, {
                    position: toast.POSITION.TOP_RIGHT
                })
                //debugger
            });

    }

    return (
        <main className="main">
            <Form
                title="Login"
                handleClick={handleLogin}
            />
        </main>
    );
};

export default Login;