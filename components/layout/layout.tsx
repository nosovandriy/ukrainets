import style from './layout.module.scss';

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={style.layoutSection}>{children}</div>;
};
