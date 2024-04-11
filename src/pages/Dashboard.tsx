import styled, { ThemeProvider } from "styled-components";
import { DashboardContainer, TopPattern } from "./Dashboard.styled";
import { useState } from "react";
import { darkTheme, lightTheme } from "../shared/Theme.styled";
import Header from "../components/Header/Header";
import { GridItem, ResponsiveGrid } from "../shared/ResponsiveGrid.styled";


const Dashboard: React.FC = () => {

    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
      setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    return (
      <ThemeProvider theme={theme}>
       <DashboardContainer>
       <TopPattern/>
       <Header  toggleTheme={toggleTheme}/>
       <ResponsiveGrid>
        <GridItem style={{ backgroundColor: 'red' }}>Elemento 1</GridItem>
        <GridItem style={{ backgroundColor: 'green' }}>Elemento 2</GridItem>
        <GridItem style={{ backgroundColor: 'blue' }}>Elemento 3</GridItem>
        <GridItem style={{ backgroundColor: 'yellow' }}>Elemento 4</GridItem>
        <GridItem style={{ backgroundColor: 'orange' }}>Elemento 5</GridItem>
        <GridItem style={{ backgroundColor: 'purple' }}>Elemento 6</GridItem>
        <GridItem style={{ backgroundColor: 'red' }}>Elemento 1</GridItem>
        <GridItem style={{ backgroundColor: 'green' }}>Elemento 2</GridItem>
        <GridItem style={{ backgroundColor: 'red' }}>Elemento 1</GridItem>
        <GridItem style={{ backgroundColor: 'green' }}>Elemento 2</GridItem>
        <GridItem style={{ backgroundColor: 'blue' }}>Elemento 3</GridItem>
        <GridItem style={{ backgroundColor: 'yellow' }}>Elemento 4</GridItem>
        <GridItem style={{ backgroundColor: 'orange' }}>Elemento 5</GridItem>
        <GridItem style={{ backgroundColor: 'purple' }}>Elemento 6</GridItem>
        <GridItem style={{ backgroundColor: 'red' }}>Elemento 1</GridItem>
        <GridItem style={{ backgroundColor: 'green' }}>Elemento 2</GridItem>
      </ResponsiveGrid>
        </DashboardContainer>
      </ThemeProvider>
    );
  };
  
  export default Dashboard;

