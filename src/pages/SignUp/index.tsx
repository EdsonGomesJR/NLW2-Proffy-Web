import React, { InputHTMLAttributes, Component, useState } from 'react';
import loginTheme from '../../assets/images/loginTheme.svg'; 

import './styles.css';

import { IconBaseProps } from 'react-icons';
import LoginInput from '../../components/LoginInput';
import {  FiEye } from 'react-icons/fi';

import backIcon from '../../assets/images/icons/back.svg';
import { Link } from 'react-router-dom';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  icon?: React.ComponentType<IconBaseProps>;



}

const SignUp: React.FC<InputProps> = ({icon:Icon, hidden, ...rest}) => {
    const [email, setEmail] = useState('');

  return (
  

    <div id="page-signup-proffy" className="container">
      <div className="logo-img">
       <img   src={loginTheme} alt="Signup"/>
      </div>

      <div className="page-signup-form">
      
       
        <form>
          <main>
          <div className="header">
            <Link to="/login">
            <img src={backIcon} alt="goback"/>
            </Link>
        
        </div>
            <legend>Cadastro</legend>
            <p>Preencha os dados abaixo
              {<br/>}
               para começar.</p>
            <div className="input-form">
          

            <LoginInput name="Name" placeholder="Nome" type="text"/>
            <LoginInput name="LastName" placeholder="Sobrenome" type="text"/>
             <LoginInput  
             type="e-mail" 
             name="E-mail" 
             value={email}
             onChange={e => setEmail(e.target.value)}
             placeholder="E-mail" />
              <LoginInput 
              
              placeholder="Senha" name="signup-input" icon={FiEye}
        /> 
                
            </div>
          
            <button  type="submit">Concluir cadastro</button>
          </main>
          
        </form>
   
        </div>
    </div>
 
  );
}

export default SignUp;