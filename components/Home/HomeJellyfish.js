import styled, { keyframes } from 'styled-components';



const fishAnimation1 = keyframes`
  0% {
    
    transform: translate(0);
  }

  50% {  
    transform:  translate(0, 200px);
    
  }

  100% {
    
    transform: translate(0);
  }
`

export const StyledJellyFish1  = styled.div`
  
  width: 150px;
  height: 150px;
  position: relative;
  z-index: 1;
  animation: ${fishAnimation1} 70s linear infinite backwards;
  top: 0vh;
  left: ${props=>-props.value/30+20+'vw'};
`

const fishAnimation2 = keyframes`
  0% {
    
    transform: translate(0);
  }

  50% {  
    transform:  translate(0, 200px);
    
  }
  100% {
    
    transform: translate(0);
  }
`

export const StyledJellyFish2 = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  z-index: 3;
  animation: ${fishAnimation2} 80s linear infinite backwards;
  top: 10vh;
  left: ${props=>-props.value/40+40+'vw'};
 
`
const fishAnimation3 = keyframes`
  0% {
    
    transform: translate(0, -10vh);
  }

  50% {  
    transform:  translate(0, -40vh);
    
  }
  100% {
    
    transform: translate(0, -10vh);
  }
`

export const StyledJellyFish3 = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  z-index: 3;
  animation: ${fishAnimation3} 60s linear infinite backwards;
  top: 10vh;
  left: ${props=>-props.value/20+50+'vw'};
 
`
