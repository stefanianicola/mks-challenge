import { FlexWrapper } from "../../shared/FlexWrapper.styled";
import TextElement from "../Text/TextElement";
import Toggle from "../Toggle/Toggle";
import { HeaderWrapper } from "./Header.styled";

interface HeaderProps {
    themeSt?: string;
    toggleTheme?: (value: boolean) => void;
  }


const Header: React.FC<HeaderProps> = ({themeSt, toggleTheme}) => {
  return (
    <HeaderWrapper>
      <FlexWrapper direction="column" >
        <TextElement variant="primary"  weight="bold" element="h3">Social Media Dashboard</TextElement>
        <TextElement variant='secondary'  weight="bold" element="p" size="medium">Total Followers: 23,004</TextElement>
      </FlexWrapper>
      <FlexWrapper direction="row" items="center">
        <TextElement variant={themeSt === 'darkTheme' ? 'primary' :'secondary'}  weight="bold" element="span">Dark Mode</TextElement>
        <Toggle onChange={toggleTheme} />
      </FlexWrapper>
    </HeaderWrapper>
  );
};
  
export default Header;

