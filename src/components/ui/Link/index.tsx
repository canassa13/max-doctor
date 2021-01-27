import NextLink, { LinkProps } from 'next/link';

const Link: React.FC<LinkProps> = ({ href, children, ...rest }) => {
  return (
    <NextLink href={href}>
      <a style={{ textDecoration: 'none' }} {...rest}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
