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
  transition: 0.5s;
`;
// Dialog content
export const DialogContent = styled.div`
width: 70%;
height: 75%;
position: relative;
  background-color: ${(props) => props.theme.bg};
  border-radius: 2rem;
`;

// Dialog content child data
export const DialogContentChild = styled.div`
position: relative;
z-index: 1000;
`;
//top color in modal
export const DialogTopPattern = styled(TopPattern)`
height: 25vh;
border-radius: 2rem 2rem 0 0;
`
//button
export const DialogClose = styled.button`
position: absolute;
border:none;
background: transparent;
right: 4rem;
top: 4rem;
font-size: 1.8rem;
cursor:pointer;
color: ${(props) => props.theme.primaryText};
`



// data style in modal

export const DataWrapper = styled.div`
padding: 5rem;
`

export const DataHeaderWrapper = styled.div`
margin-left: 2.5rem;
height: 20vh;
`