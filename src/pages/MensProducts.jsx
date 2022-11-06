import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Mens from "../components/Mens";
import { mobile } from "../responsive";

const Container = styled.div`
    
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Title = styled.h1`
    font-size:20px;
    margin-left:20px;
    margin-top:10px;
`;
const Filter = styled.div`
    margin:20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
    ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
    padding:5px;
    margin-right:20px;
    ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
const MensProducts = () => {
  return (
    <Container>
        <Navbar/>
        <Title>MENS PRODUCTS</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
            <Select>
                <option disabled selected>
                    COLOR
                </option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
            </Select>
            <Select>
                <option disabled selected>
                    SIZE
                </option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
            </Select>
            </Filter>
            <Filter><FilterText>Sort Products:</FilterText>
            <Select>
                <Option selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (dsc)</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Mens/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default MensProducts
