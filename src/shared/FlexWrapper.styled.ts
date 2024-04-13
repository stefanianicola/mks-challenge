import styled from 'styled-components';
//Wrapper to elements with display flex
export interface FlexProps {
    direction: 'column' | 'row',
    items?: 'start' | 'center' | 'end' | 'baseline',
    space?: 'space-between',
    mt?: 'xSmall' | 'small' | 'medium' | 'large', // margin top
    mb?: 'xSmall' | 'small' | 'medium' | 'large', // margin bottom
    ml?: 'xSmall' | 'small' | 'medium' | 'large', // margin left
    mr?: 'xSmall' | 'small' | 'medium' | 'large', // margin right
}

const marginSizes = {
    xSmall: '.5rem',
    small: '1rem',
    medium: '1.5rem',
    large: '2rem'
};

export const FlexWrapper = styled.div<FlexProps>`
display: flex;
align-items: ${(props) => props.items || 'start'};
flex-direction: ${(props) => props.direction}; 
justify-content: ${(props) => props.space || 'initial'};
margin-top: ${(props) => {
        if (props.mt !== undefined) return marginSizes[props.mt]
    }} ;
    margin-bottom: ${(props) => {
        if (props.mb !== undefined) return marginSizes[props.mb]
    }} ;
    margin-left: ${(props) => {
        if (props.ml !== undefined) return marginSizes[props.ml]
    }} ;
    margin-right: ${(props) => {
        if (props.mr !== undefined) return marginSizes[props.mr]
    }} ;
`;