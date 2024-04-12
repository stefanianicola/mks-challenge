import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import InstagramIcon from "../assets/icon-instagram.svg";
import YoutubeIcon from "../assets/icon-youtube.svg";
import { SocialMediaProps } from "../interfaces/SocialMediaCard.interface";
import { primaryColor } from "../shared/Variables.styled";

export const socialMediaData: SocialMediaProps[] = [
    {
        socialMediaKey: "facebook",
        socialIcon: FacebookIcon,
        username: '@nathanf',
        counter: 1987,
        description: 'Followers',
        todayCounter: 12,
        positive: true,
        borderTopColor: primaryColor.facebook,
        overview: [{
            statisticKey: 'Page Views',
            counter: 87,
            percentage: 3,
        },
        {
            statisticKey: 'Likes',
            counter: 52,
            percentage: 2,
        },
        ]
    },
    {
        socialMediaKey: "twitter",
        socialIcon: TwitterIcon,
        username: '@nathanf',
        counter: 1044,
        description: 'Followers',
        todayCounter: 99,
        positive: true,
        borderTopColor: primaryColor.twitter,
        overview: [{
            statisticKey: 'Retweets',
            counter: 117,
            percentage: 303,
        },
        {
            statisticKey: 'Likes',
            counter: 507,
            percentage: 553,
        },
        ]
    },
    {
        socialMediaKey: "instagram",
        socialIcon: InstagramIcon,
        username: '@realnathanf',
        counter: 11000,
        description: 'Followers',
        todayCounter: 1099,
        positive: true,
        borderTopColor: 'instagram',
        overview: [{
            statisticKey: 'Likes',
            counter: 5462,
            percentage: 2257,
        },
        {
            statisticKey: 'Profile Views',
            counter: 52000,
            percentage: 1375,
        },
        ]
    },
    {
        socialMediaKey: "youtube",
        socialIcon: YoutubeIcon,
        username: 'Nathan F.',
        counter: 8239,
        description: 'Subscribers',
        todayCounter: 144,
        positive: false,
        borderTopColor: primaryColor.youtube,
        overview: [{
            statisticKey: 'Likes',
            counter: 107,
            percentage: 19,
        },
        {
            statisticKey: 'Total Views',
            counter: 1407,
            percentage: 12,
        },
        ]
    },

]