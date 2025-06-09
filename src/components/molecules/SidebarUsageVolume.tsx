import { Label as UsageLabel } from '../atoms/Label';

type SidebarUsageVolumeProps = {
    usage: string;
};

export const SidebarUsageVolume = ({ usage }: SidebarUsageVolumeProps) => {
    return (
        <UsageLabel>{`使用量: ${usage}`}</UsageLabel>
    );
};