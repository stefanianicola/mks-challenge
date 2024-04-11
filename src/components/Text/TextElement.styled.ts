import React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { primaryColor } from '../../shared/Variables.styled';


//Create interface to texts
export interface TextElementProps {
    size?: 'xSmall' | 'small' | 'medium' | 'large';
    weight: 'regular' | 'bold';
    variant?: 'primary' | 'secondary' | 'green' | 'red';
    children: ReactNode;
    element?: 'h1' | 'h2' | 'h3' | 'label' | 'p' | 'span';
    letterSpacing?: boolean;
    positive?: boolean;
    percentage?: boolean;
}

const textSizes = {
    xSmall: '1.2rem',
    small: '1.4rem',
    medium: '1.8rem',
    large: '2.8rem',
};

//Create dinamic text component, defining with the element the html tag that will be used and with the props the size, color, wight...
export const TextElements = styled(
    ({ element = 'p', children, ...props }: TextElementProps & { element?: string }) =>
        React.createElement(element, props, children)
) <TextElementProps>`
font-size:${(props) => (props.element === 'h3' ? textSizes['small'] : textSizes['xSmall'])};



font-weight: ${(props) => (props.weight === 'regular' ? 400 : 700)};
color: ${(props) => {
        if (props.positive !== undefined) {
            return props.positive ? props.theme.colors.primary.limeGreen : props.theme.colors.primary.brightRed;
        }
        switch (props.variant) {
            case 'primary':
                return props.theme.primaryText;
            case 'secondary':
                return props.theme.secondaryText;
            case 'green':
                return primaryColor.limeGreen;
            case 'red':
                return primaryColor.brightRed;
            default:
                return 'inherit';
        }
    }};
letter-spacing: ${(props) => (props.letterSpacing ? '.5rem' : '0')};
display: flex;
align-items: center;
margin-top: ${(props) => (props.element === 'p' ? '1rem' : '0')};
margin-right: ${(props) => (props.element === 'span' ? '2rem' : '0')};

@media screen and (min-width: 768px) {
    font-size:${(props) => (props.element === 'h3' ? textSizes['medium'] : textSizes['small'])};
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(props) => (props.element === 'h3' ? textSizes['large'] : textSizes['medium'])};
    }

`;

