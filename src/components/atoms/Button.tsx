import React from 'react';

type ButtonProps = {
    className?: string;
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({children, ...props}: ButtonProps) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};