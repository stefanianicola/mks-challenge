import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, TooltipProps } from 'recharts';
import { FlexWrapper } from '../../shared/FlexWrapper.styled';
import TextElement from '../Text/TextElement';
import { ChartData } from '../../interfaces/ChartData.interface';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { CustomTooltipContainer, TextElementChart, fontStyles } from './Chart.styled';

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

  return (
    <FlexWrapper direction='column' mt='large'>
       <TextElementChart variant="secondary" weight="regular" element="span" size='large'>May 4 - May 13</TextElementChart>
       <FlexWrapper direction='row' mt='large'>
    <LineChart width={1000} height={350} data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
      <Line type="monotone" dataKey="amountFollowers" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" style={fontStyles} />
      <YAxis dataKey="amountFollowers" style={fontStyles}/>
      <Tooltip  content={<CustomTooltip/>} allowEscapeViewBox={{ y: true }} />
    </LineChart>
    </FlexWrapper>
    </FlexWrapper>
  )
}


;

export default Chart;