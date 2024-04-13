import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import InstagramIcon from "../assets/icon-instagram.svg";
import YoutubeIcon from "../assets/icon-youtube.svg";
import { SocialMediaProps } from "../interfaces/SocialMediaCard.interface";
import { primaryColor } from "../shared/Variables.styled";

export const socialMediaData: SocialMediaProps[] = [
  {
    socialMediaKey: "Facebook",
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
    ],
    chart: [
      {
        date: '4',
        amountFollowers: 12
      },
      {
        date: '5',
        amountFollowers: 2
      },
      {
        date: '6',
        amountFollowers: 17
      },
      {
        date: '7',
        amountFollowers: 9
      },
      {
        date: '8',
        amountFollowers: 25
      },
      {
        date: '9',
        amountFollowers: 1
      },
      {
        date: '10',
        amountFollowers: 6
      },
      {
        date: '11',
        amountFollowers: 9
      },
      {
        date: '12',
        amountFollowers: 7
      },
      {
        date: '13',
        amountFollowers: 12
      }
    ]
  },
  {
    socialMediaKey: "Twitter",
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
    ],
    chart: [
      {
        date: '4',
        amountFollowers: 12
      },
      {
        date: '5',
        amountFollowers: 2
      },
      {
        date: '6',
        amountFollowers: 17
      },
      {
        date: '7',
        amountFollowers: 19
      },
      {
        date: '8',
        amountFollowers: 25
      },
      {
        date: '9',
        amountFollowers: 19
      },
      {
        date: '10',
        amountFollowers: 65
      },
      {
        date: '11',
        amountFollowers: 9
      },
      {
        date: '12',
        amountFollowers: 7
      },
      {
        date: '13',
        amountFollowers: 12
      }
    ]
  },
  {
    socialMediaKey: "Instagram",
    socialIcon: InstagramIcon,
    username: '@realnathanf',
    counter: '11k',
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
      counter: '52k',
      percentage: 1375,
    },
    ],
    chart: [
      {
        date: '4',
        amountFollowers: 12
      },
      {
        date: '5',
        amountFollowers: 2
      },
      {
        date: '6',
        amountFollowers: 17
      },
      {
        date: '7',
        amountFollowers: 19
      },
      {
        date: '8',
        amountFollowers: 25
      },
      {
        date: '9',
        amountFollowers: 11
      },
      {
        date: '10',
        amountFollowers: 6
      },
      {
        date: '11',
        amountFollowers: 94
      },
      {
        date: '12',
        amountFollowers: 7
      },
      {
        date: '13',
        amountFollowers: 12
      }
    ]
  },
  {
    socialMediaKey: "Youtube",
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
    ],
    chart: [
      {
        date: '4',
        amountFollowers: 11
      },
      {
        date: '5',
        amountFollowers: 2
      },
      {
        date: '6',
        amountFollowers: 7
      },
      {
        date: '7',
        amountFollowers: 9
      },
      {
        date: '8',
        amountFollowers: 25
      },
      {
        date: '9',
        amountFollowers: 1
      },
      {
        date: '10',
        amountFollowers: 6
      },
      {
        date: '11',
        amountFollowers: 9
      },
      {
        date: '12',
        amountFollowers: 7
      },
      {
        date: '13',
        amountFollowers: 1
      }
    ]
  },

]