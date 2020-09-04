import React from 'react';
import {Link} from 'react-router-dom';
import doneIcon from '../../assets/images/icons/feito.svg';
import './styles.css';

interface  CompletedProps {
  title: string;
  description: string;
  buttonText: string;
  backTo?: string;
}
const Completed: React.FC<CompletedProps> = (props) => {
  return (
    <div id="content" className="container">
      <div className="background">
       <div className="texts">
            <img src={doneIcon} alt="Feito"/>
           <h1>{props.title}</h1>
            <span>{props.description}
            </span>

       </div>
       <Link  to={"/" + props.backTo}>
      {props.buttonText}
       </Link>
      </div>
    </div>
  );
}

export default Completed;