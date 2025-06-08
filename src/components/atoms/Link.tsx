import { Link as RouterLink } from 'react-router-dom';

type LinkProps = React.ComponentProps<typeof RouterLink>;

export const Link = (props: LinkProps) => {
    return <RouterLink {...props} />;
};
