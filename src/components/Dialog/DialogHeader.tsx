import React, { useEffect, useState } from 'react';
import { SocialMediaProps } from '../../interfaces/SocialMediaCard.interface';
import { DataHeaderWrapper } from './Dialog.styled';
import TextElement from '../Text/TextElement';
import { FlexWrapper } from '../../shared/FlexWrapper.styled';
import { IconPrincipalCard } from '../icon/icon.styled';

type DialogHeaderProps = {
    data:SocialMediaProps
};


const DialogHeader: React.FC<DialogHeaderProps> = ({ data }) => {

  const [sumFollowers, setSumFollowers] = useState(0);

  useEffect(()=>{
    const allFollowers = data.chart.map( (chart) => chart.amountFollowers);
    const total = allFollowers.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      sumFollowers);
    setSumFollowers(total);
  },[])
  
  
  return (
    <DataHeaderWrapper>
  
      <TextElement variant="primary" weight="bold" element="h3" size='large' >
        {data?.socialMediaKey} {data?.description}
      </TextElement>
  
      <FlexWrapper direction='row' mt='large' mb='large' items='center'>
        <IconPrincipalCard src={data?.socialIcon}/>
        <TextElement variant="secondary" weight="bold" element="span" size='medium'>{data?.username}</TextElement>
      </FlexWrapper>
  
      <FlexWrapper direction='row' items='center'>
  
        <FlexWrapper direction='row' items='center' mr='large'>
          <TextElement variant="secondary" weight="bold" element="span" size='xxLarge' >{data?.counter}</TextElement>
          <FlexWrapper direction='column' >
            <TextElement variant="secondary" weight="regular" element="span" size='medium' >Total</TextElement>
            <TextElement variant="secondary" weight="regular" element="span" size='medium' >{data?.description}</TextElement>
          </FlexWrapper>
        </FlexWrapper>
  
        <FlexWrapper direction='row' items='center' mr='large'>
          <TextElement positive={data?.positive?.toString()} weight="bold" element="span" size='xxLarge' >{sumFollowers}</TextElement>
          <FlexWrapper direction='column' >
            <TextElement variant="secondary" weight="regular" element="span" size='medium'>New {data?.description}</TextElement>
            <TextElement variant="secondary" weight="regular" element="span" size='medium'>in the past 10 days</TextElement>
          </FlexWrapper>
        </FlexWrapper>
          
          
        <FlexWrapper direction='row' items='center' mr='large'>
          <TextElement positive={data?.positive?.toString()} weight="bold" element="span" size='xxLarge' >{data?.todayCounter}</TextElement>
          <FlexWrapper direction='column' >
            <TextElement variant="secondary" weight="regular" element="span" size='medium'>New {data?.description}</TextElement>
            <TextElement variant="secondary" weight="regular" element="span" size='medium'>TODAY</TextElement>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </DataHeaderWrapper>
  );
};

export default DialogHeader;
