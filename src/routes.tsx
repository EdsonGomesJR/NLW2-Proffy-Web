import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login';
import LoginInput from './components/LoginInput';
import SignUp from './pages/SignUp';
import Completed from './components/Completed';
import SignUpSuccessPage from './pages/SignUpSuccessPage';
import PasswordRecoverySuccessPage from './pages/PasswordRecoverySuccessPage';
import PasswordForgetPage from './pages/PasswordForget';

function Routes() {

  return (

    <BrowserRouter>
    <Route path="/" exact component={Login}/>
    <Route path="/login"  component={Login}/>
    <Route path="/signup"  component={SignUp}/>
    <Route path="/landing" component={Landing}/>
    <Route path="/study" component={TeacherForm}/>
    <Route path="/give-classes" component={TeacherList}/>
    <Route path="/password-forget" component={PasswordForgetPage}/>

    </BrowserRouter>
  );
}

export default Routes;