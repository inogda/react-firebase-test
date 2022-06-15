import React, { useState} from 'react';
import "./Header.css"
import {signOut} from "firebase/auth";
import {auth} from "../../firebase";

function Header(props) {

    const { inicial } = props;


    const [viewLogaut, setViewLogaut] = useState(false);

    const vLogaut = (e) => {
        if(viewLogaut) {
            setViewLogaut(false);
        } else {
            setViewLogaut(true);
        }
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header-row">
                    <div className="header-row__left">
                        <a href={()=> false} className="header-menu">
                            <img src="/img/Vector.svg" alt="" />
                        </a>
                        <div className="header-logo">
                            <a href="/" className="a-btn a-btn-active">Voypost</a>
                        </div>
                    </div>
                    <div className="header-row__right">
                        <a href={()=> false} onClick={vLogaut}  title="Home" className="avatar">
                            {inicial}
                        </a>
                        <ul className="header-menu-right">

                            {viewLogaut &&
                            <li className="header-menu-right__li">
                                <button onClick={() => signOut(auth)}>
                                    Logout
                                </button>

                            </li>
                            }

                        </ul>

                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;