import styled, { ThemeProvider } from "styled-components";
import { DashboardContainer } from "./Dashboard.styled";
import { useState } from "react";
import { darkTheme, lightTheme } from "../shared/Theme.styled";
import { primaryColor } from "../shared/Variables.styled";
import { ToggleButton } from "../components/Toggle/Toggle.styled";

const Title = styled.h1`
  font-size: 5rem;
 margin: 2rem;
  color: ${props => primaryColor.facebook};
  border: 2px solid ${props => props.theme.secondaryText};
`;

const Description = styled.p`
font-size: 3rem;
 
  color: ${props => props.theme.primaryText};
`


const Dashboard: React.FC = () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
       <DashboardContainer>
       <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
        <Title>MKS</Title>
        <Description>Test</Description>
      
        </DashboardContainer>
      </ThemeProvider>
    );
  };
  
  export default Dashboard;

