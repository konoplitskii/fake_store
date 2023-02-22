import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {closeModal} from "../../store/slices/modal/slice";
import axios from "axios";

const Login = ({setIsLogin}) => {
    const dispatch = useDispatch();
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const loginHandler = () => {
        axios({
            url: "https://fakestoreapi.com/auth/login",
            method: "POST",
            data:{
                username:userName,
                password,
            }
        }).then(res => {
            localStorage.setItem('userToken', res.data.token);
            dispatch(closeModal({content: '', show: false}))
        }).catch(error => {
            console.log('error',error.response.data)
            setError(error.response.data)
        })
    }

    return (
        <div>
            <h2>Login</h2>
            <div className="field">
                <input
                    type="text"
                    autoComplete="off"
                    value={userName}
                    onChange={(e)=> {
                        setError('');
                        setUserName(e.target.value);
                    }}
                />
            </div>
            <div className="field">
                <input
                    type="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e)=> {
                        setError('');
                        setPassword(e.target.value)
                    }}
                />
            </div>
            {/*<button*/}
            {/*    className="change"*/}
            {/*    onClick={()=> setIsLogin(false)}*/}
            {/*>*/}
            {/*    Register*/}
            {/*</button>*/}
            {
                error
                    ? <div className="error">{error}</div>
                    : null
            }
            <div className="auth-action">
                <button className="btn primary"  onClick={loginHandler}>Submit</button>
                <button className="btn" onClick={() => {
                    dispatch(closeModal({content: '', show: false}))
                }}>Close</button>
            </div>
        </div>
    );
};

export default Login;