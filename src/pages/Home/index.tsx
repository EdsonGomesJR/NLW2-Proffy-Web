import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg'
import { Container, Connections,HeaderContent,MiddleContainer, LandingImage,LogoutContainer,UserContent,LandingContent, ButtonsContainer, TextsContainer, Footer } from './styles';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'



const Home: React.FC = () => {
  return (
   <Container className="container">
      <HeaderContent >
    <UserContent>
       <img src="https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-1/p160x160/13615253_912784575513789_1088737632155292071_n.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=z-Vusu1X-x8AX_TIgyF&_nc_ht=scontent.fsjk1-1.fna&_nc_tp=6&oh=e23c85804b303472180be7498c48e6f3&oe=5F505410" alt="imagem"/>
        <p>Nome</p> 
        </UserContent>
        <LogoutContainer>
          <FiPower/>
        </LogoutContainer>
    
     
     </HeaderContent>
        <MiddleContainer>
         <LandingContent>
         <img src={logoImg} alt="proffy"/>
       <h2>Sua Plataforma de estudos online.</h2>
         </LandingContent>
      
       <LandingImage src={landingImg} alt="Plataforma de Estudos"/>

      </MiddleContainer>
     

     
    <Footer>
     

      <TextsContainer>
        <p>Seja bem vindo!</p>
        <p>O que deseja fazer?</p>
      
    </TextsContainer>

    <ButtonsContainer>
      <Link to="/study">
        <img src={studyIcon} alt="Estudar"/>
        Estudar
      </Link>
      <Link to="/give-classes">
        <img src={giveClassesIcon} alt="Dar Aulas"/>
        Dar Aulas
      </Link>
    
    </ButtonsContainer>
<Connections>
    <span>
          Total de 11312 conexões já realizadas
            <img src={purpleHeartIcon} alt="Coração Roxo"/>
      </span>
</Connections>
    
   </Footer>  

   </Container>
  );
}

export default Home;