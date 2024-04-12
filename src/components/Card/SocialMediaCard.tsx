import React from 'react';
import { ResponsiveGrid } from '../../shared/ResponsiveGrid.styled';
import { GradientBorder, WidgetWrapper } from './Card.styled';
import TextElement from '../Text/TextElement';
import { Icon } from '../icon/icon.styled';
import { FlexWrapper } from '../../shared/FlexWrapper.styled';
import { ListCardWrapper } from './Card.styled';
import { useSocialMedia } from '../../context/SocialMediaContext';


const SocialMediaCard: React.FC = () => {

  const {socialMedia} = useSocialMedia();

  return (
    <ListCardWrapper>
    <ResponsiveGrid>
    {socialMedia.map((item, index) => (
      
        <WidgetWrapper key={index} items='center'>
        <GradientBorder colortop={item.borderTopColor}/>
        <FlexWrapper direction='row'>
        <Icon src={item.socialIcon}/>
          <TextElement variant="secondary" weight="bold" element="p" size='small'>{item.username}</TextElement>
          </FlexWrapper>
          <TextElement variant="primary" weight="bold" element="p" size='xLarge' >{item.counter}</TextElement>
          <TextElement variant="secondary" weight="regular" element="p" size='medium' letterSpacing={true} >{item.description}</TextElement>
          <TextElement positive={item.positive} weight="bold" element="p" size='xSmall' >{item.todayCounter} Today</TextElement>
        </WidgetWrapper>
      ))}
    </ResponsiveGrid>
    </ListCardWrapper>
  
  );
};

export default SocialMediaCard;