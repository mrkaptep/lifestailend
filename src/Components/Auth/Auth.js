import React, {useState, useContext} from 'react';
import {AuthContext} from '../../Context/AuthContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './Auth.scss';

library.add(
    faUserCircle,
    faUser,
    faLock,
    faEnvelope
)

const Auth = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const {login, register} = useContext(AuthContext)
    
        return (
            <div className="container">
                <div className="loginFormBox">
                    <div className="loginBodyForm">
                    
                        <div className="loginGroup">
                            <div className="fa-text"><FontAwesomeIcon icon={["fa", "user"]}/></div>
                            <input
                                placeholder="Enter Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="loginGroup">
                            <div className="fa-text"><FontAwesomeIcon icon={["fa", "lock"]}/></div>
                            <input
                                placeholder="Enter Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="lognButtonGroup">
                            <button 
                            className="loginButton"
                            onClick={() =>login({username, password, email})}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
            
        )
}

export default Auth;