import React, { useState } from 'react';
import { ToggleWrapper, Slider, HiddenCheckbox } from './Toggle.styled';
import { ToggleProps } from '../../interfaces/Toggle.interface';



const Toggle: React.FC<ToggleProps> = ({ checkedValue , onChange }) => {
  const [checked, setChecked] = useState<boolean>(checkedValue || false);

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
