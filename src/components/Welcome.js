import styled from "styled-components";
import Image from '../logo512.png';

export default function Welcome(props) {

    const {reqApi} = props;
  
    return (
        <ContentLogo>
        <WelcomeText>Bienvenido, para buscar frases haz clic sobre la imagen.</WelcomeText>
         <ImageLogo src={Image} alt="Logo Simpson" onClick={reqApi}  />
         </ContentLogo>
    );
  
};

const ImageLogo = styled.img `
width: 450px;
height: auto;

&:hover {cursor: pointer;}
`;

const ContentLogo = styled.div `
width: 100%;
text-align: center;
`;

const WelcomeText = styled.p `
color: #2a9d8f;
text-align: center;
font-weight: 900;
padding: 50px 0 10px;
font-size:25px;
`;