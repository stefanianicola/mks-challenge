
import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 0 5rem;
  align-items: center;
  background-color: ${(props) => props.theme.bg};
  @media screen and (min-width: 768px) {
    padding: 0 10rem;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 20rem;
  }
`;

export const TopPattern = styled.div`
position: absolute;
z-index: 1;
width: 100%;
height: 30vh;
background-color: ${(props) => props.theme.topBgPattern};
`
