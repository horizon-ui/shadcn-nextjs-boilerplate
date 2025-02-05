import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Base/ButtonTest',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        size: { control: 'inline-radio', options: ['sm', 'md', 'lg', 'xl', '2xl'] },
        disabled: { control: 'boolean' },
        variant: { control: 'inline-radio', options: ['primary', 'gray', 'secondary', 'tertiary', 'tertiary-color', 'link-gray', 'link-color'] },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {

        variant: 'primary',
        label: 'Button',
        disabled: false
    },
};
export const Gray: Story = {
    args: {
        variant: 'gray',
        label: 'Button'
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        label: 'Button'
    },
};


export const Tertiary: Story = {
    args: {
        variant: "tertiary",
        label: "Button",
        disabled: false,
        size: "md"
    }
};

export const TertiaryColor: Story = {
    args: {
        variant: "tertiary-color",
        label: "Button",
        disabled: false,
        size: "md"
    }
};

export const PrimaryTH: Story = {
    args: {
        variant: "primary",
        label: "ลงทะเบียนเลย",
        disabled: false
    }
};

export const LinkGray: Story = {
    args: {
        variant: "link-gray",
        label: "ลงทะเบียนเลย",
        disabled: false
    }
};

export const LinkColor: Story = {
    args: {
        variant: "link-color",
        label: "ลงทะเบียนเลย",
        disabled: false
    }
};
export const LinkColorWithArrow: Story = {
    args: {
        variant: "link-color",
        label: "ลงทะเบียนเลย",
        disabled: false,
    }
};