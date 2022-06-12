import styled, { keyframes } from 'styled-components';


const movetext = keyframes`
from {
 opacity: 0;
 top: 60vh;
}

to {
 opacity: 1;
 top: 50vh;
}
`

export const BigText = styled.h1`
    position: relative;
    animation: ${movetext} 0.6s ease-out backwards;
    top: 50vh;
`

export const SmallText = styled.span`
    position: relative;
    animation: ${movetext} 0.6s ease-out 0.4s backwards;
    top: 50vh;
`


  
 
  