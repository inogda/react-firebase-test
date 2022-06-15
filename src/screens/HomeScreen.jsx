import React from "react";
import OnAuthUser from "../onAuthUser";
import Header from "../components/header/Header";

function Home() {

    // проверка авторизации пользователя
    const { currentUser, firstname, lastname, } = OnAuthUser();

    // получаем пользователя из state
    //const {onauth, email, firstname, lastname} = useAuth();
    //const { token, id} = useSelector(state => state.user);
    //const { flag } = useSelector(state => state.flag);

    //debugger


    if (!currentUser) return <div className="mainContainer"> Загрузка </div>

    let inicial = 'U';
    if (firstname && lastname){
        inicial = firstname[0] + lastname[0];
    }

    return (
        <>
            <Header
                inicial={inicial}
            />

            <h1>Home</h1>
            {currentUser && <p>Welcome,  {currentUser.email} {firstname} {lastname}</p>}

        </>
    );
}

export default Home;