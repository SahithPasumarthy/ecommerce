import { Search, ShoppingCartOutlined, FavoriteBorderOutlined, FavoriteBorder, Favorite } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import { tablet } from '../responsive';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Container = styled.div`
    display:"flex";
    height : ${(props)=>(props.extendNav ? "100vh":"60px")} ;
    background-color:olive;
    @media (max-width:615px) {
        height:"60px";
    }
`;
const Wrapper = styled.div`
    display: flex;
    padding: 10px 20px;
    align-items:center;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})}
`;

const Menu = styled.button`
    flex:1;
    border: none;
    background-color: olive;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    margin-right: 30px;
    &:hover{
        transform: scale(1.1);
        background-color:olive;
    }
    ${tablet({display:"none"})}
`;
const SearchContainer =styled.div`
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:3px;
`;

const Input = styled.input`
    border:none;
`;
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;
const Center = styled.div`
    display:"flex";
    flex-wrap:"column";
    ${mobile({display:"flex",flexWrap:"column",width:"100%"})}
`;
const MenuEX = styled.button`
    display: flex;
    border: none;
    background-color: olive;
    font-weight: 600;
    font-size: 30px;
    cursor: pointer;
`;
const Logo = styled.h1`
    color:beige;
    font-weight:bold;
    ${mobile({fontSize:"20px",marginLeft:"20px"})}
`;
const Right = styled.div`
    flex:2;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({justifyContent:"right"})}
`;
const RightEX = styled.div`
    display:"flex";
    flex-wrap:"column";
`;
const MenuItem = styled.a`
    font-weight:600;
    font-size:14px;
    cursor:pointer;
    margin-left:10px;
    
    &:hover{
        transform: scale(1.1);
    }
    ${tablet({display:"none"})}
`;
const Hamburger =styled.div`
    display: none;
    width: 70px;
    height: 30px;
    background: none;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
${tablet({display:"flex"})}
${mobile({display:"flex"})}
`;

const ExtendedNav =styled.div`
    display: none;
    flex-direction: column;
    align-items: center;  
    ${tablet({display:"flex",flexDirection: "column",alignItems: "center" })}
`;

const Navbar = () => {
    const [extendNav, setExtendNav] = useState(false)
  return (
    <Container extendNav={extendNav}>
        <Wrapper>
            <Left>
                <Logo>Merch.</Logo>
            </Left>
            <Center>
                    <Link to='/'><Menu>HOME</Menu></Link>   
                    <Link to='/men'><Menu>MENS</Menu></Link>
                    <Link to='/women'><Menu>WOMEN</Menu></Link>
                    <Link to='/footwear'><Menu>FOOTWEAR</Menu></Link>
            </Center>
            <Right>
                <Link to='/register'><Menu>REGISTER</Menu></Link>
                <Link to='/signin'><Menu>SIGN IN</Menu></Link>
                <SearchContainer>
                    <MenuItem><Input placeholder="search"/></MenuItem>
                    <MenuItem><Search style={{color:"white", fontsize:16}}></Search></MenuItem>
                </SearchContainer>
                <MenuItem>
                    <Badge badgeContent={3} color="primary">
                        <Link to='/wishlist'><Favorite
                            style={{color:"#e14b4b" }}
                        /></Link>
                    </Badge>
                </MenuItem>
                <MenuItem>
                        <Link to='/cart'><ShoppingCartOutlined
                            style={{color:"#000000"}}
                        /></Link>
                </MenuItem>
            <Hamburger onClick={()=>{setExtendNav((curr)=>!curr);}}>
                {extendNav ? <>&#10005;</> : <>&#8801;</>}
            </Hamburger>
            </Right>
        </Wrapper>
        {extendNav &&(<ExtendedNav>
            <RightEX>
                <Link to='/' style={{ textDecoration: 'none', }}><MenuEX>HOME</MenuEX></Link>   
                <Link to='/men' style={{ textDecoration: 'none' }}><MenuEX>MENS</MenuEX></Link>
                <Link to='/women' style={{ textDecoration: 'none' }}><MenuEX>WOMEN</MenuEX></Link>
                <Link to='/wishlist' style={{ textDecoration: 'none' }}><MenuEX>WISHLIST</MenuEX></Link>
                <Link to='/cart' style={{ textDecoration: 'none' }}><MenuEX>CART</MenuEX></Link>
                <br/>
                <br/>
                <Link to='/register' style={{ textDecoration: 'none',color:'white' }}><MenuEX>REGISTER</MenuEX></Link>
                <Link to='/signin' style={{ textDecoration: 'none', color:'white' }}><MenuEX>SIGN IN</MenuEX></Link>
            </RightEX>
        </ExtendedNav>)}
    </Container>
  )
}

export default Navbar