import styled from 'styled-components';
//Wrapper to elements with display flex
export interface FlexProps {
    direction: 'column' | 'row',
    items?: 'start' | 'center' | 'end',
    space?: 'space-between'
}


export const FlexWrapper = styled.div<FlexProps>`
display: flex;
align-items: ${(props) => props.items || 'start'};
flex-direction: ${(props) => props.direction}; 
justify-content: ${(props) => props.space || 'initial'};
`;