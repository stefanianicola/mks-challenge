import styled from 'styled-components';
import { primaryColor } from '../../shared/Variables.styled';

export const ToggleButton = styled.button`
  display: inline-block;
  position: relative;
  width: 20rem;
  height: 3rem;
  margin-top: 2rem;
  border-radius: 1rem;
  background:  ${(props) => primaryColor.limeGreen}
`;
