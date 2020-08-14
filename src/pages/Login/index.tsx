import React from 'react';
import loginTheme from '../../assets/images/loginTheme.svg'; 
import eyeIcon from '../../assets/images/icons/eye.svg';
import './styles.css';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';
const Login: React.FC = () => {
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
              <input type="text" placeholder="E-mail"/>
              <input type="password" placeholder="Senha"/>  
              <img src={eyeIcon}  alt="password"/>
            </div>
            <div className="remember-me">
              <label className="label-container">
                <input type="checkbox"className="checkbox"/>
                <span className="checkmark">  Lembrar-me </span>
        
              </label>
             <a href="/">Esqueci minha senha</a>
            </div>
            <button type="submit">Entrar</button>
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