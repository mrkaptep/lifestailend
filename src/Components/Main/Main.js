import React, {useState, useContext} from 'react';
import {AuthContext} from '../../Context/AuthContext';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPowerOff} from "@fortawesome/free-solid-svg-icons";
// import './Main.css';

library.add(
   faPowerOff,
)

const Main = (props) => {
   const {logout, getUser} = useContext(AuthContext)
   return (
      <div>
         This is the Main component
         <button onClick={() => logout()}><FontAwesomeIcon icon={["fa", "power-off"]}/></button>
      </div>
   )




}

export default Main;