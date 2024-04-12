import styled from 'styled-components';
import { TopPattern } from '../../pages/Dashboard.styled';

// Dialog container
export const DialogContainer = styled.div`
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
`;
// Dialog content
export const DialogContent = styled.div`
width: 70%;
height: 70%;
position: relative;
  background-color: ${(props) => props.theme.bg};
  border-radius: 2rem;
`;
// Dialog content child data
export const DialogContentChild = styled.div`
position: relative;
z-index: 1000;
`;

export const TopPatternDialog = styled(TopPattern)`
border-radius: 2rem 2rem 0 0;
`
