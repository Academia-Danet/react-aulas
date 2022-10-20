import styled from "styled-components"

export const NavBar = styled.header`
    background-color: var(--primary);
    height: 80px ;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center ;
`;

export const Logo = styled.h1`
    color: #fff;
`;

export const Menu = styled.ul`
    list-style: none;
    display: flex;
    padding: 5px;
    
    li > a {
        color: #fff;
        font-size: 18px;
        padding: 10px;
        text-decoration: none
    }

    li > a:hover{
        color: var(--text-secundaty);
    }
`;