import { ChartData } from "./ChartData.interface";


export interface SocialMediaProps {
    onClick?: () => void;
    socialMediaKey: string;
    socialIcon: string;
    username: string;
    counter: number | string;
    description: string;
    todayCounter: number;
    borderTopColor: string | string[];
    positive?: boolean;
    overview: OverviewProps[]
    chart: ChartData[]
}

export interface OverviewProps {
    id?: string;
    icon?: string;
    positive?: boolean;
    statisticKey: string;
    counter: number | string;
    percentage: number;
}