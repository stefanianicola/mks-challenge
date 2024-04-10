

export interface SocialMediaProps {
    onClick?: () => void;
    socialMediaKey: string;
    socialIcon: string;
    username: string;
    counter: number; //| string
    description: string;
    todayCounter: number;
    borderTopColor: string | string[];
    // borderGradient?: boolean;
    overview: OverviewProps[]

}

export interface OverviewProps {
    statisticKey: string;
    counter: number;
    percentage: number;
}