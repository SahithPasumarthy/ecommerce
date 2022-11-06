import styled from "styled-components"
import { MensProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap :wrap;
    justify-content:space-between;
`;

const Mens = () => {
  return (
    <Container>
      {MensProducts.map((item)=>(
            <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Mens
