import React from 'react';


import Completed from '../../components/Completed';

const PasswordRecoverySuccessPage: React.FC = () => {
  return (<Completed title="Redefinição enviada!" backTo="login"
  description={"Boa, agora é só checar o e-mail que foi enviado para você" + 
  "\nredefinir sua senha e aproveitar os estudos."} 
  buttonText="Voltar ao login"/>);
}

export default PasswordRecoverySuccessPage;