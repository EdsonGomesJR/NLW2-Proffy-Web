import React, {
  InputHTMLAttributes,

  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiEyeOff } from 'react-icons/fi';

// import  './styles.css';
import {Container} from './styles';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  inputFourBorders?: boolean;


}

const LoginInput: React.FC<InputProps> = ({ name,icon:Icon, inputFourBorders,...rest }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  if(passwordShown){
     Icon=FiEyeOff;

   }

  const togglePasswordVisiblity = () => {
  
    setPasswordShown(passwordShown ? false : true);

  };

  return (
    //  <div className="input-block">
       
<Container  isFourBordered={inputFourBorders ? true : false}>
    <input
        
          type={passwordShown ? "text" && "e-mail" : "password"}
      
        // Tem que criar uma arrow func se não executa direto!
        {...rest}
      />

 
  { passwordShown ? Icon &&  <Icon  size={24} color={'#8257E5'} onClick={togglePasswordVisiblity}/>
    : Icon && <Icon  size={24}  onClick={togglePasswordVisiblity}/>
  }
</Container>
    //  </div>


 
  );
};

export default LoginInput;
