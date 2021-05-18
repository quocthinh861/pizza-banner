import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const FooterContainer = styled.footer`
    background-color: #0d0909;
`

export const FooterWrap = styled.div`
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
`
export const SocialMediWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 16px auto 0 auto;
`

export const SocialLogo = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-bottom: 16px;
    cursor: pointer;
    justify-self: start;
`

export const SocialIconlink = styled.a`
    color: #fff;
    font-size: 24px;
    transition: 0.2s ease;
    &:hover {
        transform: scale(1.1);
    }
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialMedia = styled.section`
    max-width: 1300px;
    width: 100%;
`