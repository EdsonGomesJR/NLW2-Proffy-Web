import React, { InputHTMLAttributes } from 'react';
import   './styles.css';
import { IconBaseProps } from 'react-icons';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  icon?: React.ComponentType<IconBaseProps>;

}

const Input: React.FC<InputProps> = ({label, name, icon:Icon,...rest}) => {
  return (      
  <div id="content" className="input-block">
  
  <label htmlFor={name}>{label}</label>
 
   <input type="text" id={name} {...rest} />
</div>
 );
}

export default Input;