import { Meta, StoryObj } from "@storybook/react";
import SocialMediaCard from "../../components/Card/SocialMediaCard";
import FacebookIcon from "../../assets/icon-facebook.svg";
import { primaryColor } from "../../shared/Variables.styled";

const meta: Meta = {
    title: "Components/SocialMediaCard",
    component: SocialMediaCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        socialIcon: { control: "text" },
        username: { control: "text" },
        counter: { control: "number" },
        description: { control: "text" },
        todayCounter: { control: "number" },
        onClick: { action: "clicked" },
        borderTopColor: { control: "color" },
    },
    args: {
        socialIcon: FacebookIcon,
        username: "@nathanf",
        counter: 1987,
        description: "followers",
        todayCounter: 12,
        onClick: () => alert("Button clicked"),
        borderTopColor: primaryColor.facebook,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {
        socialIcon: FacebookIcon,
        username: "@nathanf",
        counter: 1987,
        description: "followers",
        todayCounter: 12,
        onClick: () => alert("Button clicked"),
        borderTopColor: primaryColor.facebook,
    },
}