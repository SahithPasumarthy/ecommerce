import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components"
import { midtablet, mobile } from "../responsive";

const Container =styled.div`
    background-color: rgb(174, 174, 40);
    display:flex;
    ${midtablet({ flexDirection: "column" })}
`;
const Left =styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
`;
const Center =styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display: "none" })}

`;
const Title= styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;

`;
const ListItem = styled.p`
    width:50%;
    margin-bottom:10px;
`;

const Right =styled.div`
    flex:1;
    padding:20px;
    ${mobile({ backgroundColor: "rgb(174, 174, 40)" })}

`;

const ContactItem = styled.p`
    margin-bottom:20px;
    display:flex;
    align-items:center;

`;
const Payment = styled.img`
    width:50%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MERCH.</Logo>
            <Desc>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Nulla recusandae veritatis dicta provident, animi incidunt minus et fugit maxime illum quia officia magni voluptatum, 
                quos blanditiis iste alias iusto accusamus.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man</ListItem>
                <ListItem>Woman</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Orders</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Conditions</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>Lorem ipsum dolor sit amet.</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+91 564 564 8941</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>contact@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer
