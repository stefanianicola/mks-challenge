import { primaryColor } from './../../shared/Variables.styled';
import styled from 'styled-components';


export const ToggleWrapper = styled.label`
  z-index: 10;
  display: inline-block;
  position: relative;
  width: 3.25rem;
  height: 1.75rem;

  @media screen and (min-width: 768px) {
    width: 4.8rem;
  height: 2.6rem;
  }

  @media screen and (min-width: 1440px) {
    width: 6.5rem;
  height: 3.5rem;
  }
`;

export const Slider = styled.div<{ checked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => (props.checked ? `linear-gradient(to right, ${primaryColor.toggleLinearStart}, ${primaryColor.toggleLinearEnd})` : primaryColor.toggleOff)};
  transition: 0.5s;
  border-radius: 3.5rem;

  &:hover {
    transition: 0.5s;
    background: ${() => (`linear-gradient(to right, ${primaryColor.toggleLinearStart}, ${primaryColor.toggleLinearEnd})`)};
  }

  &::before {
    position: absolute;
    content: '';
    height: 1.25rem;
    width: 1.25rem;
    left: ${props => (props.checked ? '0.15rem' : '-1.5rem')};;
    bottom: 0.25rem;
    background-color: ${(props) => props.theme.topBgPattern};
    border-radius: 50%;
    transition: 0.4s;
    transform: ${props => (props.checked ? 'translateX(0px)' : 'translateX(32px)')};

    @media screen and (min-width: 768px) {
      height: 1.8rem;
    width: 1.8rem;
    left: ${props => (props.checked ? '0.225rem' : '-0.775rem')};
    bottom: 0.375rem;
    }

    @media screen and (min-width: 1440px) {
      height: 2.5rem;
      width: 2.5rem;
      left: 0.3rem;
    bottom: 0.5rem;
    }
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
`;
