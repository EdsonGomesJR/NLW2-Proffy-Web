import  styled from 'styled-components';
import LoginInput from '../../components/LoginInput';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const LogoImage = styled.div`
  img{
    width: 100%;
    height: 30rem;
    background-color: var(--color-primary);
  }
`;

export const Header = styled.div`
  display: flex;
  align-self: flex-start;
  margin-left: 3rem;
  margin-top: 2rem;
  
`;

export const ForgetPasswordContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  legend{
  text-align: center;
  margin-top: 4rem;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 24px;
  color: #32264D;
  margin-bottom: 1.2rem;
  }

  p{
    text-align: center;
  }
 

`;


export const LoginInput2 = styled(LoginInput)`
position: relative;
padding: 0.5rem;
width: 100%;
height: 100%;
left: 10px;
bottom: 2px;


`;

export const Button = styled.button`

  width: 45rem;
  height: 7rem;
  margin-top: 3.5rem;
  background-color: var(--color-secundary);
  color: var(--color-button-text);
  font-family: Archivo;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  border-radius: 8px;
  border: 0px;
  cursor: pointer;

`;