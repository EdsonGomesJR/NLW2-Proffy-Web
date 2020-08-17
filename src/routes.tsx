import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login';
import LoginInput from './components/LoginInput';
import SignUp from './pages/SignUp';

function Routes() {

  return (

    <BrowserRouter>
    <Route path="/" exact component={SignUp}/>
    <Route path="/landing" exact component={Landing}/>
    <Route path="/study" component={TeacherForm}/>
    <Route path="/give-classes" component={TeacherList}/>
    </BrowserRouter>
  );
}

export default Routes;