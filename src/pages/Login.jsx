import styled from 'styled-components'
import {mobile} from "../responsive";
import Navbar from '../components/Navbar';

const Container =styled.div`
    width:100%;
    height: 100vh;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper =styled.div`
    width:25%;
    padding:20px;
    background-color:white;
    ${mobile({ width: "75%" })}
`;
const Form =styled.form`
    display:flex;
    flex-direction:column;
`;
const Title =styled.h1`
    font-size:24px;
    font-weight:300;
`;
const Input =styled.input`
    flex:1;
    font-size:20px;
    min-width:40%;
    margin:10px 0px;
    padding:10px;
`;
const Button  =styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color: #F07E74;
    font-color: white;
    cursor:pointer;
    margin-bottom:10px;
`;
const Link = styled.a`
    margin:5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;
const Login = () => {
  return (
    <>
    <Navbar/>
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password" type="password"/>
                <Button>LOGIN</Button>
                <Link>FORGOT PASSWORD</Link>
                <Link>CREATE NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
    </>
  ) 
}

export default Login
