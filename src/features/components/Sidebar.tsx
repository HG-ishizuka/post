import { SidebarHeader } from '../../components/molecules/SidebarHeader';


export const Sidebar = () => {
    const companyName = 'XXX株式会社'

    return (
        <SidebarHeader companyName={companyName} />
    );
};