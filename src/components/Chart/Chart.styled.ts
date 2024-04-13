import { LineChart } from 'recharts';
import styled from 'styled-components';
import { TextElements } from '../Text/TextElement.styled';

// Dialog container
export const ChartWrapper = styled(LineChart)`
  width: 100%;
  height: 35vh;
`;


export const fontStyles = {
  fontFamily: "Inter, sans-serif",
  fontSize: "1.4rem",
};

export const CustomTooltipContainer = styled.div`
  background-color: ${(props) => props.theme.cardBg};
  border: 1px solid ${(props) => props.theme.chart};
  color: #8884d8;
  width: 15rem;
  height: 4rem;
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transform: translate(-57%, 38%);  
  `;

export const TextElementChart = styled(TextElements)`
  margin-left: 3rem;
  ` 