import React, {useState, useContext} from 'react';
import {AuthContext} from '../../Context/AuthContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './AuthRegister.scss';

library.add(
   faUserCircle,
   faUser,
   faLock,
   faEnvelope
)

const AuthRegister = (props) => {
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const [email, setEmail] = useState("")
   const {login, register} = useContext(AuthContext)


   return (
      <div className="container">
         <div className="form-box">
            <div className="body-form">
               <div className="login-group">
                  <div className="fa-text"><FontAwesomeIcon icon={["fa", "user"]}/>
                  </div>
                  <input
                     placeholder="Enter Username"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                  />
               </div>
               <div className="login-group">
                  <div className="fa-text"><FontAwesomeIcon icon={["fa", "lock"]}/>
                  </div>
                  <input
                     placeholder="Enter Password"
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>
               <div className="login-group">
                  <div className="fa-text"><FontAwesomeIcon icon={["fa", "envelope"]}/>
                  </div>  
                  <input
                     placeholder="Enter Email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </div>
               <div className="buttonGroup">
                  <button className="register" onClick={() =>register({username, password, email})}>Register</button>
               </div>
            </div>
         </div>
      </div>
      
   )
}

export default AuthRegister;