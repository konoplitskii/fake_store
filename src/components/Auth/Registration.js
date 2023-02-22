import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {closeModal} from "../../store/slices/modal/slice";
import axios from "axios";

const Registration = ({setIsLogin}) => {
    const dispatch = useDispatch();
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const registrationHandler = () => {
        axios({
            url: "https://fakestoreapi.com/users",
            method: "POST",
            data:{
                username:userName,
                password,
            }
        }).then(res => {
            console.log('res',res);
            dispatch(closeModal({content: '', show: false}))
        }).catch(error => {
            console.log('error',error.response.data)
            setError(error.response.data)
        })
    }

    return (
        <div>
            <h2>Registration</h2>
            <div className="field">
                <input
                    type="text"
                    autoComplete="off"
                    value={userName}
                    onChange={(e)=> setUserName(e.target.value)}
                />
            </div>
            <div className="field">
                <input
                    type="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
            </div>
            <button
                className="change"
                onClick={()=> setIsLogin(true)}
            >
                Login
            </button>
            {
                error
                    ? <div className="error">Error field send responce</div>
                    : null
            }
            <div className="auth-action">
                <button className="btn primary" onClick={registrationHandler}>Submit</button>
                <button className="btn" onClick={() => {
                    dispatch(closeModal({content: '', show: false}))
                }}>Close</button>
            </div>
        </div>
    );
};

export default Registration;