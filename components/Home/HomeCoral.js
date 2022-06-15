import styled from 'styled-components';

export const HomeCoral1 = styled.div`
  width:450px;
  height: 450px;
  position: absolute;
  z-index: 5;
  
  left: ${props=>-props.value/10+15+'vw'};
  bottom: -5vh;
`

export const HomeCoral2 = styled.div`
  width:450px;
  height: 350px;
  position: absolute;
  z-index: 1;
  bottom: -30vh;
  left: 50vw;
`
export const HomeCoral3 = styled.div`
  width:550px;
  height: 350px;
  position: absolute;
  z-index: 4;
  bottom: -10vh;
  left: ${props=>-props.value/20+20+'vw'};
`