import styled, { keyframes } from 'styled-components';
import { TopPattern } from '../../pages/Dashboard.styled';

// Dialog container
export const DialogContainer = styled.div<{ open: boolean }>`
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
export const DialogContent = styled.div<{ open: boolean }>`
width: 90%;
height: 70%;
position: relative;
  background-color: ${(props) => props.theme.bg};
  border-radius: 2rem;
  animation: ${({ open }) => (open ? fadeIn : fadeOut)} 0.3s ease-in-out forwards;

  @media screen and (min-width: 768px) {
    width: 80%;
    height: 65%;
  }
  @media screen and (min-width: 992px) {
    height: 85%;
  }
 
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
right: 2rem;
top: 2rem;
font-size: 1.8rem;
cursor:pointer;
color: ${(props) => props.theme.primaryText};
@media screen and (min-width: 1440px) {
  right: 4rem;
  top: 4rem;
}
`

//Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-50px);
  }
`;

// data style in modal

export const DataWrapper = styled.div`
padding: 2rem;

@media screen and (min-width: 1440px) {
  padding: 5rem;
}
`

export const DataHeaderWrapper = styled.div`
margin-left: 1rem;
height: 20vh;

@media screen and (min-width: 1440px) {
  margin-left: 2.5rem;
}
`