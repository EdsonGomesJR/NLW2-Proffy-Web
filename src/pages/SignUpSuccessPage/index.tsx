import React from 'react';


import Completed from '../../components/Completed';

const SignUpSuccessPage: React.FC = () => {
  return <Completed title="Cadastro Concluído" 
  description={"Agora você faz parte da plataforma da Proffy \nTenha uma ótima experiência."} 
  buttonText="Fazer login" />;
}

export default SignUpSuccessPage;