type ToggleProps = {
    isCollapse: boolean;
    onClick: () => void;
    className?: string;
};

export const SidebarToggle = ({ isCollapse, onClick, className }: ToggleProps) => {
    return (
        <div className={className} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button onClick={onClick} className={className}>
                {isCollapse ? '▶︎' : '◀︎'}
            </button>
            {!isCollapse && <span>折りたたむ</span>}
        </div>
    );
};
