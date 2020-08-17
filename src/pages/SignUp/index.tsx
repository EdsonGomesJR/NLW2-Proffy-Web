import React, { InputHTMLAttributes, Component, useState } from 'react';
import loginTheme from '../../assets/images/loginTheme.svg'; 
import eyeIcon from '../../assets/images/icons/eye.svg';
import './styles.css';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';
import { IconBaseProps } from 'react-icons';
import LoginInput from '../../components/LoginInput';
import { FiMail, FiEye } from 'react-icons/fi';
import TesteInput from '../../components/TesteInput';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import backIcon from '../../assets/images/icons/back.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  icon?: React.ComponentType<IconBaseProps>;



}

const SignUp: React.FC<InputProps> = ({icon:Icon, hidden, ...rest}) => {
    const [email, setEmail] = useState('');

  return (
  

    <div id="page-login-proffy" className="container">
      <div className="logo-img">
        
       <img   src={loginTheme} alt="Login"/>
      </div>

      <div className="page-login-form">
      
       
        <form>
          <main>
          <div className="header">
        <img src={backIcon} alt="goback"/>
        </div>
            <legend>Cadastro</legend>
            <p>Preencha os dados abaixo
              {<br/>}
               para começar.</p>
            <div className="input-form">
          

            <LoginInput name="Name" placeholder="Nome"/>
            <LoginInput name="LastName" placeholder="Sobrenome"/>
             <LoginInput  
             type="e-mail" 
             name="E-mail" 
             value={email}
             onChange={e => setEmail(e.target.value)}
             placeholder="E-mail" />
              <LoginInput 
              
              placeholder="Senha" name="login-input" icon={FiEye}
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