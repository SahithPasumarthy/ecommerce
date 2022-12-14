import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import FootwearComp from "../components/FootwearComp";
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
const Footwear = () => {
  return (
    <Container>
        <Navbar/>
        <Title>FOOTWEAR</Title>
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
                    SIZE UK
                </option>
                <Option>6</Option>
                <Option>7</Option>
                <Option>8</Option>
                <Option>9</Option>
                <Option>10</Option>
                <Option>11</Option>
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
        <FootwearComp/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Footwear
