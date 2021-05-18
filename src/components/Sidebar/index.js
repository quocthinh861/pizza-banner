import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SideBtnWrap } from './SidebarElements'



const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            
            <SidebarMenu>
                <SidebarLink to='/'>Pizza</SidebarLink>
                <SidebarLink to='/'>Deserts</SidebarLink>
                <SidebarLink to='/'>Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
