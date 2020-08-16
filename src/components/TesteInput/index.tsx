import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FiMail, FiEye } from 'react-icons/fi';




const eye = <FontAwesomeIcon icon={faEye} />;
const slashEye = <FontAwesomeIcon icon={faEyeSlash} />;


const TesteInput: React.FC = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const { register, handleSubmit } = useForm();
  
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return<div className="Main">
  <input
    name="username"
    type="text"
    placeholder="Username"
    ref={register({ required: "This is required." })}
  />
  <div className="pass-wrapper">
    <input
      placeholder="Password"
      name="password"
      type={passwordShown ? "text" : "password"}
      ref={register({ required: "This is required." })}
    />
    {passwordShown
    ? <i onClick={togglePasswordVisiblity}>{slashEye}</i>
    : <i onClick={togglePasswordVisiblity}>{eye}</i>}
    
  </div>
  <button type="submit" >
    Submit
  </button>
</div>
}

export default TesteInput;