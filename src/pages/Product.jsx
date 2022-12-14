import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile, tablet } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection:"column" })}
`;
const ImgContainer = styled.div`
    flex:1;
`;
const Image = styled.img`
    width: 90%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "50vh" })}
`;
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const FilterContainer = styled.div`
    display: flex;
    width:50%;
    margin: 30px 0px;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left:10px;
    padding: 5px;
`;
const FilterOption = styled.option``;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;

`;
const Amount = styled.span`
    width: 30px;
    height:30px;
    border-radius: 10px;
    border: 1px solid #F07E74;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: rgb(255, 207, 201)  ;
    }
`;


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src="images/shirts2.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>White shirt</Title>
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, asperiores deleniti molestias, 
                    est, atque labore modi excepturi minus eum sint voluptate iure ab? Sed, hic.
                </Desc>
                <Price>299rs</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>COLOR</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="beige"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>SIZE</FilterTitle>
                        <FilterSize>
                            <FilterOption>XS</FilterOption>
                            <FilterOption>S</FilterOption>
                            <FilterOption>M</FilterOption>
                            <FilterOption>L</FilterOption>
                            <FilterOption>XL</FilterOption>
                            <FilterOption>XXL</FilterOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
