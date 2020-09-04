import React from 'react';
import loginTheme from '../../assets/images/loginTheme.svg'; 
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import LoginInput from '../../components/LoginInput';

 import { Container ,LoginInput2,LogoImage, ForgetPasswordContent, Header, Button } from './styles';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';

const PasswordForget: React.FC = () => {
  return (
<Container className="container">

  <LogoImage>
    <img src={loginTheme} alt="Tema"/>
  </LogoImage>
  <ForgetPasswordContent>
    <Header>
      <Link to="/login">
      <img src={backIcon} alt="Voltar"/>
      </Link>
    </Header>
    <form>
      <main>
      <legend>Eita, esqueceu sua senha?</legend>
      <p>Não esquenta, vamos dar um jeito nisso.</p>
      </main>
      <LoginInput2 inputFourBorders={true} type="e-mail" name="e-mail" placeholder="E-mail"/>
    
      
       
      <Button type="submit">Enviar</Button>
    </form>
  </ForgetPasswordContent>


</Container>

  );
}

export default PasswordForget;