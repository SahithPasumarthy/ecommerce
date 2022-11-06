import styled from "styled-components"
import { WishlistProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap :wrap;
    justify-content:space-between;
`;

const Wishlistcomp = () => {
  return (
    <Container>
      {WishlistProducts.map((item)=>(
            <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Wishlistcomp
