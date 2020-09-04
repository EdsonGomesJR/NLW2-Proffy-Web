import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 100vh;



@media(min-width: 700px){
  max-width: 100vw;
  max-height: 100vh;
  display: grid;
  grid-template-rows:  100px 1fr 1fr;
  grid-template-areas: 
    "xheader"
    "xmiddle"
    "xfooters"
    ;
}

  
`;
export const HeaderContent = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  background-color: var(--color-primary);
  color: var(--color-text-in-primary);
  align-items:center;
  justify-content: space-between;
  align-items: center;

  @media(min-width: 700px){
    grid-area: xheader;
    height: 100%;
  }

`;

export const UserContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 4.5rem;

img{
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
   
     }
    p{
      margin-left: 2rem;
    }


 @media(min-width: 700px){

  margin-top: 24px;

 

   img{
     width: 6rem;
     height:6rem;
   }
}
`;

export const LogoutContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 4rem;
height: 4rem;
border-radius: 0.5rem;
background-color: var(--color-primary-dark);
margin-right: 4.5rem;

svg{
    width:2rem;
    height: 2rem;
    
  }

  @media(min-width: 700px){
   margin-top: 24px;

  }

`;

export const MiddleContainer = styled.div`
display: flex;
width: 100%;
height: 45rem;
flex-direction: column;
align-items: center;
background-color: var(--color-primary);
color: var(--color-text-in-primary);

@media(min-width: 700px){
  grid-area: xmiddle;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  grid-template-areas:
  "proffyLeft landingImage";
  padding: 2px;
  align-items: flex-start;


}

`;
export const LandingImage = styled.img`
width: 100%;
height: 65%;
background-color: var(--color-primary);


@media(min-width: 700px){
  grid-area:  landingImage;
  width: 100%;
  height: 95%;
 
  
 

}

`;
export const LandingContent = styled.div`
margin-top: 2rem;
display: flex;
align-items: center;
flex-direction: column;
margin-bottom: 1rem;


img{
  width: 35rem;
  height: 10rem;
}

 h2{
text-align: center;
font-family: Poppins;
font-style: normal;
font-weight: 500;
margin-top:1rem;
 }

 @media(min-width: 700px){
   grid-area:  proffyLeft;
   margin-top: 80px;
   align-items: flex-start;

   width: 100%;
   margin-left: 80px;
 
  
  
img{

  width: 70%;
  height: auto;

 
}
h2{
  text-align: left;

  width: 60%;
  line-height: 42px;
  font-size: 34px;

 
}

}
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: 1rem;

  p + p {
    font-weight: bold;
  }


@media(min-width: 700px){
   width: 100%;
   height: 80%;
   grid-area:  xfooters;
   display: grid;
   grid-template-columns: 0.5fr 0.5fr 1fr;
   grid-template-areas: "texts  connections buttons";
}
`;

export const Connections = styled.div`

span{
  color: var(--color-text-complement);
  margin-top:2rem;

  img{
    margin-left: 0.8rem;
  }
}
  @media(min-width: 700px){
    grid-area: connections;
    width: 50%;
    justify-self:right;
    text-align: right;
    text-align-last: right;
    margin-right: 30px;
  
    

    }
   
    
   
  

`;

export const TextsContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
font: 400 2.0rem Poppins;
margin-top: 2rem;

@media(min-width: 700px){
  grid-area: texts;
  margin-bottom: 25px;
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin-left: 80px;
  width: 70%;
  line-height: 30px;
  
}

`;

export const ButtonsContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 2rem;
margin-top: 2rem;

a{
  width: 20rem;
  height: 7.2rem;
  border-radius: 0.8rem;
  margin-right: 1.6rem;
  margin-left: 1.6rem;
  font: 700 2.0rem Archivo;
  text-decoration: none;
  color: var(--color-button-text);
  background: var(--color-primary-lighter);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 4rem;
    margin-right: 1.4rem;
  }
}

a:hover{
  background: var(--color-primary-light);
} 

a:first-child{
  margin-right: 1.6rem;
}
a + a {
  background: var(--color-secundary);
}
a + a:hover{
  background: var(--color-secundary-dark);
}

@media(min-width: 700px){
  grid-area: buttons;
 

  a{
  width: 50%;
  height: 10.5rem;
  margin-right: 80px;
  }
}

`;



