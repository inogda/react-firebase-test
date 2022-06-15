import {useEffect, useState} from 'react';
import {onAuthStateChanged} from "firebase/auth";
import {auth, db} from "./firebase";
import {onValue, ref} from "firebase/database";
import {setUser} from "./store/slices/userSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function OnAuthUser(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);

    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                const starCountRef = ref(db, "users/" + user.uid);
                onValue(starCountRef, (snapshot) => {
                    if (snapshot.exists()) {
                        var data = snapshot.val();

                        setFirstname(data.firstName);
                        setLastname(data.lastName);

                        dispatch(setUser({
                            email: user.email,
                            firstname: data.firstName,
                            lastname: data.lastName,
                            id: user.uid,
                            token: user.accessToken,
                        }));

                    }else{
                        dispatch(setUser({
                            email: user.email,
                            firstname: '',
                            lastname: '',
                            id: user.uid,
                            token: user.accessToken,
                        }));
                    }
                });
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
                navigate("/login");
            }
        });
        // console.log(currentUser);
    }, [currentUser, dispatch, navigate]);


    return {
        currentUser,
        firstname,
        lastname,
    };
}

export default OnAuthUser;




