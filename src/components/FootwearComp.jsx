import styled from "styled-components"
import { Footwear } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap :wrap;
    justify-content:space-between;
`;

const FootwearComp = () => {
  return (
    <Container>
      {Footwear.map((item)=>(
            <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default FootwearComp
