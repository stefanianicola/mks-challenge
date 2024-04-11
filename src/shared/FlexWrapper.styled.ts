import styled from 'styled-components';
//Wrapper to elements with display flex
export interface FlexProps {
    direction: 'column' | 'row',
}


export const FlexWrapper = styled.div<FlexProps>`
display: flex;
flex-direction: ${(props) => props.direction}; 

`;