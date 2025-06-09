type LabelProps = {
    children: React.ReactNode;
    className?: string;
};

export const Label = ({ children, className }: LabelProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};
