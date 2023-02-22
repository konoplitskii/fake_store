import React, {useEffect, useState} from 'react';
import './Auth.css';
import Login from "./Login";
import Registration from "./Registration";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="auth">
            {
                isLogin
                    ? <Login setIsLogin={setIsLogin}/>
                    : <Registration setIsLogin={setIsLogin}/>
            }
        </div>
    );
};

export default Auth;