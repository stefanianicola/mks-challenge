import React, { useState } from 'react';
import { ResponsiveGrid } from '../../shared/ResponsiveGrid.styled';
import { GradientBorder, WidgetWrapper } from './Card.styled';
import TextElement from '../Text/TextElement';
import { IconPrincipalCard } from '../icon/icon.styled';
import { FlexWrapper } from '../../shared/FlexWrapper.styled';
import { ListCardWrapper } from './Card.styled';
import { useSocialMedia } from '../../context/SocialMediaContext';
import Dialog  from '../Dialog/Dialog';


const SocialMediaCard: React.FC = () => {
  const {socialMedia} = useSocialMedia();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ListCardWrapper>
    <ResponsiveGrid>
    {socialMedia.map((item, index) => (
        <WidgetWrapper key={index} items='center' onClick={handleOpenModal}>
        <GradientBorder colortop={item.borderTopColor}/>
        <FlexWrapper direction='row'>
        <IconPrincipalCard src={item.socialIcon}/>
          <TextElement variant="secondary" weight="bold" element="p" size='small'>{item.username}</TextElement>
          </FlexWrapper>
          <TextElement variant="primary" weight="bold" element="p" size='xLarge' >{item.counter}</TextElement>
          <TextElement variant="secondary" weight="regular" element="p" size='medium' letterSpacing='true' >{item.description}</TextElement>
          <TextElement positive={item.positive?.toString()} weight="bold" element="p" size='xSmall' >{item.todayCounter} Today</TextElement>
        </WidgetWrapper>
      ))}
    </ResponsiveGrid>
    <Dialog isOpen={isModalOpen} onClose={handleCloseModal}>
      <FlexWrapper direction='column' items='center'>
      <h2>This is a modal</h2>
        <p>Modal content goes here...</p>
      </FlexWrapper>
       
      </Dialog>
    </ListCardWrapper>
  
  );
};

export default SocialMediaCard;