import styled from 'styled-components';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgb(137, 129, 129);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    right: 460px;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 390px) {
        flex-flow: column nowrap;
        background-color: rgb(137, 129, 129);
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        top: 0;
        right: 140px;
        height: 100vh;
        width: 65%;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

export default function LeftNav({open}) {

    let activeStyle = {

    }
  return (
    <div>
        <Ul className= 'nav-links' open = {open}>
             <li className='collections'><NavLink exact to = 'sneakers' style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }>Collections</NavLink></li>
            <li><NavLink to = 'men' style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }>Men</NavLink></li>
            <li><NavLink to = 'women' style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }>Women</NavLink> </li>
            <li><NavLink to = 'about' style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }>About</NavLink> </li>
            <li><NavLink to = 'contact' style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }>Contact</NavLink> </li>
        </Ul>
    </div>
  )
}
