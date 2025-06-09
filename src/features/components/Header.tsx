import { Breadcrumb } from "../../components/atoms/Breadcrumb";

type HeaderProps = {
    group: string;
    department: string;
};

export const Header = ({ group, department }: HeaderProps) => {
    return (
        <header>
            <Breadcrumb group={group} department={department} />
        </header>
    );
};