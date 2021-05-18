import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialIconlink, SocialLogo, SocialMediWrap, SocialIcons, SocialMedia } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediWrap>
                        <SocialLogo to='/'>
                            Pizza
                        </SocialLogo>
                        <SocialIcons>
                            <SocialIconlink href='/'>
                                <FaFacebook/>
                            </SocialIconlink>
                            <SocialIconlink href='/'>
                                <FaInstagram />
                            </SocialIconlink>
                            <SocialIconlink href='/'>
                                <FaYoutube />
                            </SocialIconlink>
                            <SocialIconlink href='/'>
                                <FaTwitter />
                            </SocialIconlink>
                            <SocialIconlink href='/'>
                                <FaLinkedin />
                            </SocialIconlink>
                        </SocialIcons>
                    </SocialMediWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
