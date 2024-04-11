import React, { useState } from 'react';
import { ToggleWrapper, Slider, HiddenCheckbox } from './Toggle.styled';
import TextElement from '../Text/TextElement';

interface ToggleProps {
  checkedValue?: boolean;
  onChange?: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ checkedValue = false, onChange }) => {
  const [checked, setChecked] = useState(checkedValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    if (onChange) {
      onChange(isChecked);
    }
  };

  return (

    <ToggleWrapper>
      <HiddenCheckbox checked={checked} onChange={handleChange} />
      <Slider checked={checked} />
    </ToggleWrapper>
  
  );
};

export default Toggle;
