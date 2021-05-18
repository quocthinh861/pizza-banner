import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { HeroContainer, HeroContent, HeroItems, HeroP, HeroBtn, 
         HeroH1} from './HeroElements'



const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeroContainer>
            <Navbar toggle={toggle}></Navbar>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Cheese Pasta !</HeroH1>
                    <HeroP>Sẵn sàng trong 60s</HeroP>
                    <HeroBtn>Order ngay</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
