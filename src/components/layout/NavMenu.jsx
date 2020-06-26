import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const navItems = [{
    path: '/',
    text: 'Home'
}, {
    path: '/create',
    text: 'Create'
}, {
    path: '/recipes',
    text: 'Recipes'
}]

const NavMenu = () => {

    let location = useLocation();

    return (
        <Nav>
            <NavBrand>
                BLAND COOKBOOK
            </NavBrand>
            <NavList>
                {
                    navItems.map((i) => {
                        return (
                            <NavItem key={i.path} className={location.pathname === i.path ? 'active' : ''}><Link to={i.path}>{i.text}</Link></NavItem>
                        )
                    })
                }
            </NavList>
        </Nav>
    )
}
const Nav = styled.nav`
    height: 48px;
    border-bottom: 1px solid #f0f0f0;
    margin: 0 16px 0 16px;
    display: flex;
    flex-direction: row;
    align-items: space-between;
`

const NavBrand = styled.div`
    flex-grow: 1;
    padding: 16px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Vollkorn';
`

const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    margin: 0;
`

const NavItem = styled.li`
    padding: 16px;
    font-size: 12px;
    text-transform: uppercase;

    & a {
        text-decoration: none;
        font-weight: bold;
        color: ${props => props.theme.headline};
    }

    & a:hover {
        color: ${props => props.theme.secondary};
    }

    &.active {
        background-color: ${props => props.theme.tertiary};
    }
`

export default NavMenu;