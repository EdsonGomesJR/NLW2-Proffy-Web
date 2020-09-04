import React from 'react';

import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css';
interface PageHeaderProps {
  title: string;
  description?: string;
  pageTitle?: string;
  image?: string;
  imageText?: string;

}
const PageHeader: React.FC<PageHeaderProps> = (props) =>{
  return (
  <header className="page-header">
    <div className="top-bar-container">
      <Link to="/">
      <img src={backIcon} alt="voltar"/>
      </Link>
      <p>{props.pageTitle}</p>
      <img src={logoImg} alt="logo"/>
    </div>
    <div className="header-content">
      <strong>{props.title}</strong>

     <div className="header-sub-content">
     {props.description &&  <p>{props.description}
     
     </p>}
       
    <div className="emoji-content">
    {props.image && <img src={props.image} alt="emoji"/>}
    {props.imageText && <p>{props.imageText}</p>}
   </div>
 </div>
    

  
  
 
    
   
  
    {props.children}
    </div>
 
  
  </header>

      
  );
}

export default PageHeader;