import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, TooltipProps, ResponsiveContainer } from 'recharts';
import { FlexWrapper } from '../../shared/FlexWrapper.styled';
import TextElement from '../Text/TextElement';
import { ChartData } from '../../interfaces/ChartData.interface';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { CustomTooltipContainer, TextElementChart, fontStyles } from './Chart.styled';
import { useEffect, useRef, useState } from 'react';

type ChartProps = {
  data: ChartData[]
};

//Tooltip custom
const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active) {
    return (
      <CustomTooltipContainer>
        <TextElement element="span" weight="regular" size="small" >
          {`${payload?.[0].value} new followers`}
        </TextElement>
      </CustomTooltipContainer>
    );
  }

  return null;
};

const Chart: React.FC<ChartProps>= ({data}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [chartSize, setChartSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  const updateChartSize = () => {
    if (chartContainerRef.current) {
      const { width, height } = chartContainerRef.current.getBoundingClientRect();
      setChartSize({ width, height });
    }
  };

  useEffect(() => {
    updateChartSize();
    window.addEventListener('resize', updateChartSize);
    return () => {
      window.removeEventListener('resize', updateChartSize);
    };
  }, []);

  return (
    
    <FlexWrapper direction='column' mt='large' ref={chartContainerRef} style={{ width: '100%', height: '400px' }}>
      <TextElementChart variant="secondary" weight="regular" element="span" size='large'>May 4 - May 13</TextElementChart>
      <FlexWrapper direction='row' mt='large'>
        <ResponsiveContainer  width={chartSize.width} height={chartSize.height} >
          <LineChart width={chartSize.width} height={chartSize.height} data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <Line type="monotone" dataKey="amountFollowers" stroke="#8884d8" dot={{ r: 5 }} activeDot={{ r: 8 }}/>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" style={fontStyles} />
            <YAxis dataKey="amountFollowers" style={fontStyles}/>
            <Tooltip  content={<CustomTooltip/>} allowEscapeViewBox={{ y: true }} />
          </LineChart>
        </ResponsiveContainer>
      </FlexWrapper>
    </FlexWrapper>
   
  )
}


;

export default Chart;