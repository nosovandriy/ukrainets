type Props = {
  className?: string;
  phoneNumber: string;
  children: React.ReactNode;
};

export const PhoneLink: React.FC<Props> = ({
  className,
  phoneNumber,
  children,
}) => {
  return (
    <a
      className={className}
      href={`tel:${phoneNumber}`}
    >
      {children}
    </a>
  );
};
