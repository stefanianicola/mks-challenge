import styled from 'styled-components';
import { primaryColor } from '../../../shared/Variables.styled';

interface WidgetProps {
  colortop?: string | string[];
  items?: 'start' | 'center' | 'end',
}


// Grid item test
export const WidgetWrapper = styled.div<WidgetProps>`
max-width: 100%;
z-index: 20;
position: relative;
background-color: ${(props) => props.theme.cardBg};
display: flex;
flex-direction: column;
border-radius: 4px;
align-items: ${(props) => props.items || 'initial'};
cursor: pointer;
transition: background-color 0.3s ease-in-out;
align-self: start;
padding: 3rem;
&:hover {
    background-color: ${(props) => props.theme.hoverCardBg};
}
`;

export const GradientBorder = styled.div<WidgetProps>`
  position: absolute;
  z-index: 30;
  top: 0;
  left: 0;
  right: 0;
  height: .7rem; 
  border-radius: .4rem .4rem 0 0;
  background:  ${(props) => (props.colortop === 'instagram' ? `linear-gradient(to right, ${primaryColor.instagramStart}, ${primaryColor.instagramEnd})` : props.colortop)}; /* Gradient */
`;