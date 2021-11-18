import { useEffect, useState } from 'react';
import styled from "styled-components";

export const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        // calls function once a scroll event is triggered
        window.addEventListener('scroll', toggleVisibility);
        // when component unmounts
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <ButtonDiv>
            <Button
                style={{opacity: isVisible ? '100' : '0'}}
                type='button'
                onClick={scrollToTop}
            >
                SCROLL TO TOP
            </Button>
        </ButtonDiv>
    );
}

const ButtonDiv = styled.div `
    position: fixed;
    right: 2rem;
    bottom: 2rem;
`;

const Button = styled.button ` 
    display: inline-flex;
    align-items: center;
    background-color: #0496ff;
    padding: 7px;
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    border-radius: 12px;
`;