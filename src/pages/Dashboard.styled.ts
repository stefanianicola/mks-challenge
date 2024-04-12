
import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 0 20rem;
  align-items: center;
  overflow-y: auto;
  background-color: ${(props) => props.theme.bg};
`;

export const TopPattern = styled.div`
position: absolute;
z-index: 1;
width: 100%;
height: 30vh;
background-color: ${(props) => props.theme.topBgPattern};
`
