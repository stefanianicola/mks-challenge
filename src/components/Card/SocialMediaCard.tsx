import React, { useEffect, useRef, useState } from 'react';
import { ResponsiveGrid } from '../../shared/ResponsiveGrid.styled';
import { GradientBorder, WidgetWrapper } from './Card.styled';
import TextElement from '../Text/TextElement';
import { IconPrincipalCard } from '../icon/icon.styled';
import { FlexWrapper } from '../../shared/FlexWrapper.styled';
import { ListCardWrapper } from './Card.styled';
import { useSocialMedia } from '../../context/SocialMediaContext';
import Dialog from '../Dialog/Dialog';
import { SocialMediaProps } from '../../interfaces/SocialMediaCard.interface';
import Chart from '../Chart/Chart';
import {  DataWrapper } from '../Dialog/Dialog.styled';
import DialogHeader from '../Dialog/DialogHeader';

const SocialMediaCard: React.FC = () => {
  const {socialMedia} = useSocialMedia();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState<SocialMediaProps>();

  const handleOpenModal = (item:SocialMediaProps) => {
    setItemSelected(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ListCardWrapper>
      <ResponsiveGrid>
        {socialMedia.map((item, index) => (
          <WidgetWrapper key={index} items='center' onClick={()=>handleOpenModal(item)}>
            <GradientBorder colortop={item.borderTopColor}/>
            <FlexWrapper direction='row' items='center'>
              <IconPrincipalCard src={item.socialIcon}/>
              <TextElement variant="secondary" weight="bold" element="span" size='small' >{item.username}</TextElement>
            </FlexWrapper>
            <TextElement variant="primary" weight="bold" element="p" size='xLarge' >{item.counter}</TextElement>
            <TextElement variant="secondary" weight="regular" element="p" size='medium' letterSpacing={true} >{item.description}</TextElement>
            <TextElement positive={item.positive} weight="bold" element="p" size='xSmall' >{item.todayCounter} Today</TextElement>
          </WidgetWrapper>
       
      
        ))} 

        <Dialog isOpen={isModalOpen} onClose={handleCloseModal}>
          <DataWrapper ref={modalRef}>  
            {
              //DIALOG HEADER INFORMATION
              itemSelected !== undefined && (
                <>
                  <DialogHeader data={itemSelected}/>
                  <Chart data={itemSelected.chart}/>
                </>
              )
            }    
          </DataWrapper>
        </Dialog>
      </ResponsiveGrid>
     
    </ListCardWrapper>
  
  );
};

export default SocialMediaCard;