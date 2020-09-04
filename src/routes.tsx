import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login';

import SignUp from './pages/SignUp';
import Completed from './components/Completed';
import SignUpSuccessPage from './pages/SignUpSuccessPage';
import PasswordRecoverySuccessPage from './pages/PasswordRecoverySuccessPage';
import PasswordForgetPage from './pages/PasswordForget';
import HomePage from './pages/Home';

function Routes() {

  return (

    <BrowserRouter>
    <Route path="/" exact component={HomePage}/>
    <Route path="/login"  component={Login}/>
    <Route path="/signup"  component={SignUp}/>
    <Route path="/completed"  component={Completed}/>
    <Route path="/signup-success"  component={SignUpSuccessPage}/>
    <Route path="/password-recovered" component={PasswordRecoverySuccessPage}/>
    <Route path="/landing" component={Landing}/>
    <Route path="/give-classes" component={TeacherForm}/>
    <Route path="/study" component={TeacherList}/>
    <Route path="/password-forget" component={PasswordForgetPage}/>

    </BrowserRouter>
  );
}

export default Routes;