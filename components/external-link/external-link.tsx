type Props = {
  className: string,
  href: string,
  children: React.ReactNode,
};

export const ExternalLink: React.FC<Props> = ({
  className,
  href,
  children,
}) => {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
};
