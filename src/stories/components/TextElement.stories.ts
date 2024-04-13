import { Meta, StoryObj } from "@storybook/react";
import TextElement from "../../components/Text/TextElement";

const meta: Meta = {
    title: "Components/TextElement",
    component: TextElement,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ['xSmall', 'small', 'medium', 'large', 'xLarge', 'xxLarge'],
            },
        },
        weight: { control: { type: "select", options: ["regular", "bold"] } },
        variant: {
            control: {
                type: "select",
                options: ["primary", "secondary", "red", "green"],
            },
        },
        children: { control: "text" },
        letterSpacing: { control: "boolean" }, // true or false
        element: {
            control: {
                type: "select",
                options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
            },
        },
        positive: { control: "boolean" },//true or false
        percentage: { control: "boolean" }
    },
    args: {
        size: "Medium",
        weight: "regular",
        variant: "primary",
        children: "TextElement Component",
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: "small",
        weight: "regular",
        variant: "primary",
        children: "TextElement Component",
        letterSpacing: true,
    },
};
export const Secondary: Story = {
    args: {
        size: "medium",
        weight: "bold",
        variant: "secondary",
        children: "TextElement Secondary Component",
        percentage: true,
    },
};