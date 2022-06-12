import styled, { keyframes } from 'styled-components';



const fishAnimation1 = keyframes`
  0% {
    top: 30vh;
    left: 80vw;
    transform: rotateY(0deg)
  }
  49% {  
    top: 50vh;
    left: 40vw;
    transform: rotateY(0);
  }
  50% {  
    top: 50vh;
    left: 40vw;
    transform: rotateY(180deg);
  }
  100% {  
    top: 30vh;
    left: 80vw;
    transform: rotateY(180deg);
  }
`

export const StyledFish1 = styled.div`
  
  width: 50px;
  height: 50px;
  position: relative;
  z-index: 1;
  animation: ${fishAnimation1} 30s linear infinite backwards;
  top: 50vh;
  left: 40vw;
`

var fishAnimation2 = (xPosition) => keyframes`
  0% {
    top: 50vh;
    left: ${20-xPosition/100+'vw'};
    transform: rotateY(0deg)
  }
 
  100% {  
    top: 50vh;
    left: ${60-xPosition/100+'vw'};
    transform: rotateY(180deg);
  }
`

export const StyledFish2 = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  z-index: 1;
  transition-duration: 2s;
  animation: ${props => fishAnimation2(props.xPosition)} 40s linear infinite backwards;
  top: 50vh;
  left: ${props =>(60-props.xPosition/100+'vw')};
`

