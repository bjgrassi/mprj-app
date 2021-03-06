import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Sprite = styled.img`
    width: 100px;
    height: 100px;
    display: none;
`;

export const CardStyle = styled.div`
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bexier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
    -o-user-select: none;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
        color: #ef5350;
        text-decoration: none;
    }
`