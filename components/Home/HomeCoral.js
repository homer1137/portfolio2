import styled from 'styled-components';

export const HomeCoral1 = styled.div`
  width:450px;
  height: 450px;
  position: absolute;
  z-index: 5;
  
  left: ${props=>-props.value/10+15+'vw'};
  bottom: 0;
  @media (max-width: 768px) {
    width:350px;
  height: 350px;
  left: ${props=>-props.value/10+5+'vw'};
  }
`
