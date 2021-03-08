import React from 'react';
import { Switch, Route, useParams} from "react-router-dom";
import Auth from './Components/Auth/Auth';
import Main from './Components/Main/Main';
import Post from './Components/Posts/Post';
import Goals from './Components/Goals/Goals';
import EditGoals from './Components/EditGoal/EditGoal';
import EditPost from './Components/EditPost/EditPost';
import Tailend from './Components/Tailend/Tailend';
import FamilyTime from './Components/FamilyTime/FamilyTime';
import Months from './Components/Months/Months';
import UploadS3 from './Components/UploadS3/UploadS3';
import Home from './Components/Home/Home';
import Auth2 from './Components/Auth/Auth2'


export default(

    <Switch>
        <Route exact path="/" component={Auth}/>
        <Route exact path="/Home" component={Home}/>
        <Route path="/Auth2" component={Auth2}/>
        <Route path="/Main" component={Main}/>
        <Route exact path="/Post" component={Post}/>
        <Route path="/Post/Edit" component={EditPost}/>
        <Route exact path="/Goals" component={Goals}/>
        <Route exact path="/Goals/Edit" component={EditGoals}/>
        <Route path="/Goals/Edit/:goal_id" component={EditGoals}/>
        <Route path="/Tailend" component={Tailend}/>
        <Route path="/Family" component={FamilyTime}/>
        <Route path="/Months" component={Months}/>
        <Route path="/UploadS3" component={UploadS3}/>

    </Switch>
)