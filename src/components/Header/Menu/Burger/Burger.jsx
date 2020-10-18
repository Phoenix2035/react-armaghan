import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import SideNav from '../SideNav/SideNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  z-index: 200;
  display: none;

  @media (max-width: 992px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 3.2rem;
    height: 0.4rem;
    background-color: ${({open}) => open ? '#ccc' : '#bbb'};
    border-radius: 1rem;
    transform-origin: .35rem;
    transition: all 0.3s linear;
    margin-right: ${({open}) => open ? '22rem' : '0 '};
   

    
    

    &:nth-child(1) {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({open}) => open ? 0 : 1};
      margin:.5rem 0;
    }

    &:nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;


const Burger = () => {
    const [open, setOpen] = useState(false)
    const burgerRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (burgerRef.current && !burgerRef.current.contains(event.target)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [burgerRef]);

    return (
        <>
            <StyledBurger ref={burgerRef} open={open} onClick={() => setOpen(!open)}>
                <div/>
                <div/>
                <div/>
            </StyledBurger>
            <SideNav open={open}/>
        </>
    )
}

export default Burger