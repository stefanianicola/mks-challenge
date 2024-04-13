import React from 'react';
import { ResponsiveGrid } from '../../shared/ResponsiveGrid.styled';
import TextElement from '../Text/TextElement';
import { FlexWrapper } from '../../shared/FlexWrapper.styled';
import { WidgetWrapper } from './Card.styled';
import { Icon } from '../icon/icon.styled';
import { ListCardWrapper } from './Card.styled';
import { useSocialMedia } from '../../context/SocialMediaContext';


const OverviewCard: React.FC = () => {
  const {overviewData} = useSocialMedia();
    
    
  return (
    <ListCardWrapper>
      <TextElement variant="primary" weight="bold" element="h3" size='large'>Overview - Today</TextElement>
      <ResponsiveGrid>
        {overviewData !== null && overviewData.map((item, index) => (
          <WidgetWrapper key={index} >
            <FlexWrapper direction='row' space='space-between' items='start'>
              <TextElement variant="secondary" weight="bold" element="p" size='small'>{item.statisticKey}</TextElement>
              <Icon src={item.icon}/>
            </FlexWrapper>
            <FlexWrapper direction='row' space='space-between' items='baseline'>
              <TextElement variant="primary" weight="bold" element="p" size='large'>{item.counter}</TextElement>
              <TextElement positive={item.positive}  percentage={true} weight="bold" element="p" size='small'>{item.percentage}</TextElement>
            </FlexWrapper>
         
          </WidgetWrapper>
        ))}
      </ResponsiveGrid>
    </ListCardWrapper>
  );
};

export default OverviewCard;