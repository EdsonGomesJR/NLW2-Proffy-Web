import React, { InputHTMLAttributes, Component, useState } from 'react';
import loginTheme from '../../assets/images/loginTheme.svg'; 

import './styles.css';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';
import { IconBaseProps } from 'react-icons';
import LoginInput from '../../components/LoginInput';
import { FiEye } from 'react-icons/fi';



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  icon?: React.ComponentType<IconBaseProps>;



}

const Login: React.FC<InputProps> = ({icon:Icon, hidden, ...rest}) => {
    const [email, setEmail] = useState('');

  return (
  

    <div id="page-login-proffy" className="container">
      <div className="logo-img">
       <img  src={loginTheme} alt="Login"/>
      </div>

      <div className="page-login-form">
        <form>
          <main>
            <legend>Fazer Login</legend>
            <div className="input-form">

             <LoginInput  
             type="e-mail" 
             name="E-mail" 
             value={email}
             onChange={e => setEmail(e.target.value)}
             placeholder="E-mail" />
              <LoginInput 
              
              placeholder="Senha" name="signup-password" icon={FiEye}
        /> 
           
            </div>
            <div className="remember-me">
              <label className="label-container">
                <input type="checkbox"className="checkbox"/>
                <span className="checkmark">  Lembrar-me </span>
        
              </label>
             <a href="/">Esqueci minha senha</a>
            </div>
            <button disabled={email.endsWith('.com')  ? false : true } type="submit">Entrar</button>
          </main>
          
        </form>
        
      <footer className="page-login-footer">
          <p>Não tem conta? {<br/>}
          <a href="/">Cadastre-se</a>
          </p>
          
          <p>É de graça!
            <img src={purpleHeart} alt="purple-heart"/>
          </p>
        </footer> 
      </div>
    </div>
 
  );
}

export default Login;