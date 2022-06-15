import React from "react";
import { auth, db } from "../firebase";
//import "./Signup.css";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import {Form} from "../components/formregistration/FormRegistration";
import {toast} from "react-toastify";


const SignUp = () => {

    const navigate = useNavigate();





    const handleLogin = (email, password, firstname, lastname) => {

        createUserWithEmailAndPassword(auth, email, password, firstname, lastname)
            .then((userCredential) => {
                set(ref(db, 'users/' + userCredential.user.uid), {
                    firstName: firstname,
                    lastName: lastname,
                    email: email,
                });
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
                title="Registration"
                handleClick={handleLogin}
            />
            {/*
            <form className="signupForm" onSubmit={handleSubmit}>
                <input
                    placeholder="first name"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                ></input>
                <input
                    placeholder="last name"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                ></input>
                <input
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                ></input>
                <input
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="password"
                ></input>
                <button>Sign Up</button>
            </form>
            */}
        </main>
    );
};

export default SignUp;