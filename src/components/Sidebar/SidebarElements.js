import React from 'react'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 380px;
    height: 100%;
    background: #ffc500;
    top: 0;
    display: grid;
    align-items: center;
    transition: all 0.3s ease-in-out;
    right: ${ props => props.isOpen ? '0' : '-1000px'};
`
export const CloseIcon = styled(FaTimes)`
    color: #000;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

    &:hover {
        transform: scale(1.1);
    }
`
export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;

`

export const SidebarLink = styled(Link)`

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    color: #fff;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #e31837;
        transition: all 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(Link)`
    background: #e31837;
    padding: 16px 64px;
    color: #fff;
    white-space:nowrap;
    text-decoration: none;
    list-style: none;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: #fff;
        color: #018686;
        transition: all 0.2s ease-in-out;
    }
`