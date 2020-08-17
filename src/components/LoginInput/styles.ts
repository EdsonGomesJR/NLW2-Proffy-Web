import Tooltip from '../Tooltip';
import styled, { css } from 'styled-components';

export const Container = styled.div`
position: relative;
align-items: center;
width: 45rem;
height: 8rem;
font-family: Poppins;
font-size: 1.8rem;
line-height: 24px;
background: #FAFAFC;
border: 1px solid #E6E6F0;
outline: 0;

& + div {
  margin-top: 0;
}
:first-child{
  border-radius: 8px 8px 0px 0px;
}

:last-child{
  border-radius: 0px 0px 8px 8px;

}
:focus-within::after{
    height: calc(100% - 2.6rem);
    width: 3px;
    margin-top: 1.3rem;

    content: '';
    background: var(--color-primary-light);
    position: absolute;
    left: -0.2rem;
    
  
}

input {
  flex: 1;
  margin-top: 4px;
  background: transparent;
  border: 0;
  outline: 0;
 
  ::placeholder{
   margin-top: 1rem;
   padding: 0.5rem;
  }
}

svg{
  position: relative;
  color: #9C98A6;
  cursor: pointer;
  top: 0.5rem;
  

  
}


`;
