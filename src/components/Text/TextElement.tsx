import IconDown from '../../assets/icon-down.svg';
import IconUp from '../../assets/icon-up.svg';
import { TextElements, TextElementProps } from './TextElement.styled';




const TextElement = ({
  element = 'p',
  children,
  size,
  weight,
  variant,
  letterSpacing,
  positive,
  percentage
}: TextElementProps) => {
  const renderIcon = positive === true ? IconUp : IconDown;
  return (
    <TextElements
      element={element}
      size={size}
      weight={weight}
      variant={variant}
      letterSpacing={letterSpacing}
      positive={positive}
    >
      {positive !== undefined &&  (
        <img src={renderIcon}/>
      )}
      {children}
      {percentage === true && '%'}
    </TextElements>
  );
};

export default TextElement;

