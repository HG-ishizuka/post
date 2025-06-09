type ToggleProps = {
    isCollapse: boolean;
    onClick: () => void;
    className?: string;
};

export const SidebarToggle = ({ isCollapse, onClick, className }: ToggleProps) => {
    return (
        <button onClick={onClick} className={className}>
            {isCollapse ? '▶︎' : '◀︎'}
        </button>
    );
};
