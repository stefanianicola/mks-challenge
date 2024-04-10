
import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  overflow-y: auto;
  background-color: ${(props) => props.theme.bg};
`;
