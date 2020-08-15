import React, {
  InputHTMLAttributes,
  useEffect,
  useCallback,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import  './styles.css';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const LoginInput: React.FC<InputProps> = ({ name, icon: Icon,...rest }) => {

  
  return (
    <div className="input-block">

        <input
        // Tem que criar uma arrow func se não executa direto!
        {...rest}
      />
      {Icon && <Icon size={24} />}

    </div>


 
  );
};

export default LoginInput;
