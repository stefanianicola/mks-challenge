import React, { useState } from 'react';
import { ResponsiveGrid } from '../../../shared/ResponsiveGrid.styled';
import TextElement from '../../Text/TextElement';
import { socialMediaData } from '../../../data/socialMediaData';
import { FlexWrapper } from '../../../shared/FlexWrapper.styled';
import { WidgetWrapper } from '../SocialMedia/SocialMediaCard.styled';
import { Icon } from '../../icon/icon.styled';
import { ListCardWrapper } from './OverviewCard.styled';


const OverviewCard: React.FC = () => {
    const [data, setData] = useState(socialMediaData);
    
    

  return (
   <ListCardWrapper>
     <TextElement variant="primary" weight="bold" element="h3" size='large'>Overview - Today</TextElement>
    <ResponsiveGrid>
    {data.map((item, index) => (
        <WidgetWrapper key={index} >
        <FlexWrapper direction='row' space='space-between' items='start'>
        <TextElement variant="secondary" weight="bold" element="p" size='small'>{item.description}</TextElement>
        <Icon src={item.socialIcon}/>
          </FlexWrapper>
          <FlexWrapper direction='row' space='space-between' items='start'>
        <TextElement variant="secondary" weight="bold" element="p" size='small'>{item.description}</TextElement>
        <Icon src={item.socialIcon}/>
          </FlexWrapper>
         
        </WidgetWrapper>
      ))}
    </ResponsiveGrid>
    </ListCardWrapper>
  );
};

export default OverviewCard;