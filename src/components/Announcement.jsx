import styled from "styled-components"
import { mobile, tablet } from "../responsive";

const Container = styled.div`
    height:30px;
    background-color:black;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
    ${mobile({fontSize:"10px"})}
`;

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over 399rs!!
    </Container>
  )
}

export default Announcement