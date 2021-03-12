import { useState, useContext} from "react";
import './Header.scss';
import {AuthContext} from '../../Context/AuthContext';
import Auth from '../Auth/Auth';
import AuthRegister from '../Auth/AuthRegister';
// import useVisiblityToggler from '../useVisibiltyToggler';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faUser, faLock, faEnvelope, faPowerOff, } from "@fortawesome/free-solid-svg-icons";

library.add(
   faUser,
   faLock,
   faPowerOff,
   faEnvelope
)

const Header = (props) => {
const [loginVisible, setLoginVisible] = useState(false)
const [registerVisible, setRegisterVisible] = useState(false)   
const {user, userInfo, logout} = useContext(AuthContext)
// const [AuthComponent, loginVisiblity] = useVisiblityToggler(<Auth/>, false);
// const [AuthRegisterComponent, registerVisiblity] = useVisiblityToggler(<AuthRegister/>, false);

console.log(userInfo);
   return(
      <div className="headerComp">
         <header className="header">
            {/* <img className="imgLogo" src="https://i1.wp.com/www.bonsaisanctum.com/wp-content/uploads/2020/04/bonsai-tree-symbol.jpg?fit=1024%2C675&ssl=1"/> */}
            <div className="logo">
               Life's Tail End
            </div>
            {user 
               ? 
               <div className="logout">
                  <button className="logoutButton" onClick={() => {
                     setLoginVisible(false)
                     setRegisterVisible(false)
                     logout()}}
                  >
                     Logout
                  </button>
               </div>
            :
            <div className="authNav">
                  <button className="buttonAuth" 
                     onClick={() => setLoginVisible(!loginVisible)}>Login</button>
                     <div className="loginVisibiltyLocation">
                        {loginVisible ? <Auth/> : null}
                     </div>
                  <button className="buttonAuth"
                  onClick={() => setRegisterVisible(!registerVisible)}>Register</button>
                  <div className="regVisibiltyLocation">
                        {registerVisible ? <AuthRegister/> : null}
                     </div>
               </div>
            }
         </header>
      </div>
   )
}

export default Header;