import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Wishlistcomp from "../components/Wishlistcomp";

const Container = styled.div``;
const Title = styled.h1`
    font-size:20px;
    margin-left:20px;
    margin-top:10px;
`;
const Wishlist = () => {
  return (
    <Container>
        <Navbar/>
        <Title>WISHLIST</Title>
        <Wishlistcomp/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Wishlist
