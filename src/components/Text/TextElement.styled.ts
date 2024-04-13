import React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { primaryColor } from '../../shared/Variables.styled';


//Create interface to texts
export interface TextElementProps {
    size?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge';
    weight: 'regular' | 'bold';
    variant?: 'primary' | 'secondary' | 'green' | 'red';
    children: ReactNode;
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'label' | 'p' | 'span';
    letterSpacing?: string;
    positive?: string;
    percentage?: string
}

const textSizes = {
  xSmall: '1.2rem',
  small: '1.4rem',
  medium: '1.8rem',
  large: '2.8rem',
  xLarge: '4rem',
  xxLarge: '5rem',
};

//Create dinamic text component, defining with the element the html tag that will be used and with the props the size, color, wight...
export const TextElements = styled(
  ({ element = 'p', children, ...props }: TextElementProps & { element?: string }) =>
    React.createElement(element, props, children)
) <TextElementProps>`
font-size: ${(props) => {
    switch (props.element) {
    case 'h3':
      return textSizes['small'];
      break;
    case 'p': return textSizes['xSmall'];
      break;
    default:
      return textSizes['xSmall'];
      break;
    }
  }};
font-weight: ${(props) => (props.weight === 'regular' ? 400 : 700)};
color: ${(props) => {
    if (props.positive !== undefined) {
      return props.positive === 'true' ? primaryColor.limeGreen : primaryColor.brightRed;
    }
    switch (props.variant) {
    case 'primary':
      return props.theme.primaryText;
      break;
    case 'secondary':
      return props.theme.secondaryText;
      break;
    case 'green':
      return primaryColor.limeGreen;
      break;
    case 'red':
      return primaryColor.brightRed;
      break;
    default:
      return 'inherit';
      break;
    }
  }};
letter-spacing: ${(props) => (props.letterSpacing === 'true' ? '.5rem' : '0')};
text-transform: ${(props) => (props.letterSpacing === 'true' ? 'uppercase' : 'inherit')};
display: flex;
align-items: center;
margin-top: ${(props) => (props.element === 'p' ? '2rem' : '0')};
margin-right: ${(props) => (props.element === 'span' ? '2rem' : '0')};

@media screen and (min-width: 768px) {
    font-size: ${(props) => {
    switch (props.element) {
    case 'h3':
      return textSizes['medium'];
      break;
    case 'p':
      return textSizes['small'];
      break;
    default:
      return textSizes['small'];
      break;
    }
  }};;
  }



  @media screen and (min-width: 992px) {
    font-size: ${(props) => {
    switch (props.element) {
    case 'h3':
      if (props.size !== undefined) return textSizes[props.size] || textSizes['large'];
      break;
    case 'p':
      if (props.size !== undefined) return textSizes[props.size] || textSizes['medium'];
      break;
    default:
      if (props.size !== undefined) return textSizes[props.size] || textSizes['medium'];
      break;
    }
  }};
    }

`;

