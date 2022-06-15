import styled, { keyframes } from 'styled-components';


const movetext = keyframes`
from {
 opacity: 0;
 top: 40vh;
 
}

to {
 opacity: 1;
 top: 30vh;
}
`

export const BigText = styled.h1`
    position: relative;
    animation: ${movetext} 0.6s ease-out 0.4s backwards;
    top: 30vh;
    z-index: 2;
`

export const SmallText = styled.span`
    position: relative;
    animation: ${movetext} 0.6s ease-out 0.6s backwards;
    top: 30vh;
    z-index: 2;
`


  
 
  