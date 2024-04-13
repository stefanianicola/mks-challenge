import { ThemeProvider } from "styled-components";
import { DashboardContainer, TopPattern } from "./Dashboard.styled";
import { useState } from "react";
import { darkTheme, lightTheme } from "../shared/Theme.styled";
import Header from "../components/Header/Header";
import SocialMediaCard from "../components/Card/SocialMediaCard";
import OverviewCard from "../components/Card/OverviewCard";
import { FlexWrapper } from "../shared/FlexWrapper.styled";


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
      <SocialMediaCard/>
      <OverviewCard/>
        </DashboardContainer>
      </ThemeProvider>
    );
  };
  
  export default Dashboard;

