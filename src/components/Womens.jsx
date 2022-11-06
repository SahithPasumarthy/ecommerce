import styled from "styled-components"
import { WomensProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap :wrap;
    justify-content:space-between;
`;

const Womens = () => {
  return (
    <Container>
      {WomensProducts.map((item)=>(
            <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Womens
