import { useState, useContext} from "react";
import './Header.scss';
import {AuthContext} from '../../Context/AuthContext';
import Auth from '../Auth/Auth';
import AuthRegister from '../Auth/AuthRegister';
import {Link} from "react-router-dom";
import useVisiblityToggler from '../useVisibiltyToggler';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(
   faUser,
   faLock,
   faEnvelope
)

const Header = (props) => {

const {user, userInfo} = useContext(AuthContext)
const [AuthComponent, loginVisiblity] = useVisiblityToggler(<Auth/>, true);
const [AuthRegisterComponent, registerVisiblity] = useVisiblityToggler(<AuthRegister/>, true);

console.log(userInfo);
   return(
      <header className="header">
         {/* <img className="imgLogo" src="https://i1.wp.com/www.bonsaisanctum.com/wp-content/uploads/2020/04/bonsai-tree-symbol.jpg?fit=1024%2C675&ssl=1"/> */}
         <div className="logo">
            Life's Tail End
         </div>
         {user 
            ? 
            <div>
               <Link to="/">Main</Link>
               <Link to="/Home">Home</Link>
               <Link to="/post">Post</Link>
               <Link to="/post/edit">Edit Post</Link>
               <Link to="/goals">Goals</Link>
               <Link to="/goals/edit">Edit Goals</Link>
               <Link to="/tailend">Tailend</Link>
               <Link to="/family">Family</Link>
               <Link to="/Uploads3">Upload S3</Link>
            </div>
         :
         <div className="authNav">
               <button className="buttonAuth" 
                  onClick={loginVisiblity}>Login</button>
                  <div className="loginVisibiltyLocation">
                     {AuthComponent}
                  </div>
               <button className="buttonAuth"
               onClick={registerVisiblity}>Register</button>
               <div className="regVisibiltyLocation">
                     {AuthRegisterComponent}
                  </div>
            </div>
         }
      </header>
   )
}

export default Header;